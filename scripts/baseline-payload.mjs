import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const migrationName = '20261009_112934_initial_schema'
const snapshotPath = new URL(`../src/migrations/${migrationName}.json`, import.meta.url)
const snapshot = JSON.parse(readFileSync(fileURLToPath(snapshotPath), 'utf8'))
const apply = process.argv.includes('--apply')

if (!process.env.DATABASE_URI) {
  throw new Error('DATABASE_URI is required')
}

const client = new pg.Client({
  connectionString: process.env.DATABASE_URI,
  connectionTimeoutMillis: 10000,
  ssl: process.env.DATABASE_URI.includes('sslmode=') || process.env.DATABASE_URI.includes('neon.tech')
    ? { rejectUnauthorized: false }
    : undefined,
})

try {
  await client.connect()

  const tables = await client.query(`
    SELECT table_name FROM information_schema.tables
    WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
  `)
  const expectedTables = Object.values(snapshot.tables).map((table) => table.name)
  const actualTables = tables.rows.map((row) => row.table_name)
  const differences = []

  for (const name of expectedTables) {
    if (!actualTables.includes(name)) differences.push(`Missing table: ${name}`)
  }
  for (const name of actualTables) {
    if (!expectedTables.includes(name)) differences.push(`Unexpected table: ${name}`)
  }

  const columns = await client.query(`
    SELECT table_name, column_name, data_type, udt_name, is_nullable,
      column_default, datetime_precision
    FROM information_schema.columns WHERE table_schema = 'public'
  `)
  const actualColumns = new Map(columns.rows.map((column) => [
    `${column.table_name}.${column.column_name}`, column,
  ]))
  const expectedColumnKeys = new Set()
  let needsObjectKey = false

  for (const table of Object.values(snapshot.tables)) {
    for (const column of Object.values(table.columns)) {
      const key = `${table.name}.${column.name}`
      expectedColumnKeys.add(key)
      const actual = actualColumns.get(key)
      if (!actual) {
        if (key === 'media._objectkey' && column.type === 'varchar' && !column.notNull) {
          needsObjectKey = true
        } else {
          differences.push(`Missing column: ${key}`)
        }
        continue
      }
      const expectedType = column.type.startsWith('enum_')
        ? column.type
        : ({ serial: 'integer', varchar: 'character varying',
          'timestamp(3) with time zone': 'timestamp with time zone' }[column.type] ?? column.type)
      const actualType = actual.data_type === 'USER-DEFINED' ? actual.udt_name : actual.data_type
      if (actualType !== expectedType) differences.push(`Type differs: ${key}`)
      if ((actual.is_nullable === 'NO') !== Boolean(column.notNull)) {
        differences.push(`Nullability differs: ${key}`)
      }
      if (Boolean(actual.column_default) !== (column.default !== undefined || column.type === 'serial')) {
        differences.push(`Default differs: ${key}`)
      }
      if (column.type === 'timestamp(3) with time zone' && actual.datetime_precision !== 3) {
        differences.push(`Timestamp precision differs: ${key}`)
      }
    }
  }
  for (const key of actualColumns.keys()) {
    if (!expectedColumnKeys.has(key)) differences.push(`Unexpected column: ${key}`)
  }

  const indexes = await client.query(`
    SELECT tablename, indexname FROM pg_indexes WHERE schemaname = 'public'
  `)
  const actualIndexes = new Set(indexes.rows.map((row) => `${row.tablename}.${row.indexname}`))
  for (const table of Object.values(snapshot.tables)) {
    for (const name of Object.keys(table.indexes)) {
      if (!actualIndexes.has(`${table.name}.${name}`)) differences.push(`Missing index: ${table.name}.${name}`)
    }
  }

  const enumRows = await client.query(`
    SELECT t.typname, e.enumlabel FROM pg_type t
    JOIN pg_enum e ON e.enumtypid = t.oid
    JOIN pg_namespace n ON n.oid = t.typnamespace
    WHERE n.nspname = 'public' ORDER BY t.typname, e.enumsortorder
  `)
  const actualEnums = new Map()
  for (const row of enumRows.rows) {
    actualEnums.set(row.typname, [...(actualEnums.get(row.typname) ?? []), row.enumlabel])
  }
  for (const enumDef of Object.values(snapshot.enums)) {
    if (JSON.stringify(actualEnums.get(enumDef.name)) !== JSON.stringify(enumDef.values)) {
      differences.push(`Enum differs: ${enumDef.name}`)
    }
  }

  const migrationRows = await client.query('SELECT name, batch FROM payload_migrations ORDER BY id')
  const rows = migrationRows.rows
  const alreadyBaselined = rows.some((row) => row.name === migrationName)
  const hasDevMarker = rows.some((row) => row.name === 'dev' && Number(row.batch) === -1)
  if (alreadyBaselined) {
    console.log('Initial Payload migration is already baselined.')
    if (rows.length !== (hasDevMarker ? 2 : 1)) {
      differences.push('Unexpected additional Payload migration records')
    }
  } else if (rows.length !== 1 || rows[0].name !== 'dev' || Number(rows[0].batch) !== -1) {
    differences.push('Expected exactly one Payload development migration marker')
  }

  if (differences.length) {
    throw new Error(`Database does not match the committed initial schema:\n${differences.join('\n')}`)
  }

  if (!apply) {
    if (alreadyBaselined && (needsObjectKey || hasDevMarker)) {
      console.log('Blob column or development marker needs repair. Run with --apply.')
    } else if (!alreadyBaselined) {
      console.log(needsObjectKey
        ? 'Existing schema matches apart from the new Blob column. Run with --apply to add it and baseline the migration.'
        : 'Schema matches the initial migration. Run with --apply to baseline it.')
    }
  } else if (needsObjectKey || hasDevMarker || !alreadyBaselined) {
    await client.query('BEGIN')
    try {
      if (needsObjectKey) {
        await client.query('ALTER TABLE "media" ADD COLUMN "_objectkey" varchar')
      }
      if (!alreadyBaselined) {
        await client.query('DELETE FROM payload_migrations WHERE name = $1 AND batch = $2', ['dev', -1])
        await client.query(
          'INSERT INTO payload_migrations (name, batch) VALUES ($1, $2)',
          [migrationName, 1],
        )
      } else if (hasDevMarker) {
        await client.query('DELETE FROM payload_migrations WHERE name = $1 AND batch = $2', ['dev', -1])
      }
      await client.query('COMMIT')
      console.log(alreadyBaselined
        ? 'Payload baseline repaired.'
        : 'Existing schema baselined. Future Payload migrations can run normally.')
    } catch (error) {
      await client.query('ROLLBACK')
      throw error
    }
  }
} finally {
  await client.end()
}
