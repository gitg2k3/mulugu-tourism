import { randomBytes } from 'node:crypto'
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const email = 'admin@discovermulugu.org'
const credentialPath = fileURLToPath(new URL('../.admin-credentials.local', import.meta.url))
const { getPayloadClient } = await import('../src/lib/payload.ts')
const payload = await getPayloadClient()
const users = await payload.find({
  collection: 'users',
  where: { email: { equals: email } },
  limit: 1,
})

if (users.totalDocs !== 1) {
  throw new Error('Expected exactly one legacy seeded admin account')
}

const password = randomBytes(36).toString('base64url')
await writeFile(
  credentialPath,
  `Email: ${email}\nPassword: ${password}\n\nMove this password to your password manager and delete this file.\n`,
  { flag: 'wx', mode: 0o600 },
)

await payload.update({
  collection: 'users',
  id: users.docs[0].id,
  data: { password },
})

await payload.login({ collection: 'users', data: { email, password } })
console.log(`Admin password rotated and login verified. Credential saved to ${credentialPath}`)
process.exit(0)
