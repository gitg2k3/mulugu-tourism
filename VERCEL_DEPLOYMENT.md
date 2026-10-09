# Deploying Discover Mulugu to Vercel

This guide outlines the steps to deploy **Discover Mulugu** (Next.js 16 + Payload CMS 3 + PostgreSQL) to [Vercel](https://vercel.com).

---

## 1. Prerequisites

- A **GitHub / GitLab / Bitbucket** account with this repository pushed.
- A **Vercel** account.
- A **PostgreSQL database** (serverless recommended, e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)).
- A **Vercel Blob store** connected to the Vercel project for persistent CMS uploads.

---

## 2. Setting Up PostgreSQL (Free Tier Options)

Payload CMS requires a PostgreSQL database with SSL enabled in production.

### Option A: Neon (Recommended)
1. Go to [neon.tech](https://neon.tech) and create a free project.
2. Copy the pooled or direct connection string:
   ```text
   postgresql://[user]:[password]@[endpoint].us-east-2.aws.neon.tech/[dbname]?sslmode=require
   ```

### Option B: Supabase
1. Go to [supabase.com](https://supabase.com) and create a project.
2. Go to **Project Settings > Database > Connection String** (use URI mode, connection pooling on port 6543 or direct port 5432 with `?sslmode=require`).

---

## 3. Environment Variables

In your Vercel Project dashboard under **Settings > Environment Variables**, add the following:

| Variable | Description | Example / Note |
|---|---|---|
| `DATABASE_URI` | PostgreSQL connection string | `postgresql://user:pass@ep-xyz.neon.tech/neondb?sslmode=require` |
| `PAYLOAD_SECRET` | 32+ character random secret | Generate using: `openssl rand -base64 32` |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob token | Added when you connect a Blob store to the project |
| `NEXT_PUBLIC_SITE_URL` | Production website URL | `https://your-project.vercel.app` or custom domain |

> **Note:** If `NEXT_PUBLIC_SITE_URL` is omitted, the app will automatically fall back to Vercel's generated domain (`VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL`).

Set these variables for each Vercel environment you deploy. Use separate databases and Blob stores for Preview and Production. Do not copy the local `NEXT_PUBLIC_SITE_URL=http://localhost:3000` value into Vercel.

In **Storage** in the Vercel project, create a Blob store and connect it to the project. Payload uses client uploads so images larger than Vercel's server request limit can be uploaded, and the files remain available after a function restarts.

---

## 4. Deploying via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new).
2. Import your **`mulugu-tourism`** (or `diiscover_mulugu`) repository.
3. Configure settings:
   - **Framework Preset**: `Next.js` (automatically detected)
   - **Root Directory**: `./`
   - **Build Command**: use the repository's `vercel.json` setting (`npm run build:vercel`)
   - **Install Command**: `npm install` (default)
4. Add the Environment Variables from Step 3.
5. Click **Deploy**.

The Vercel build runs `payload migrate` before `next build`. The committed migration creates the Payload tables on a **new, empty database**. If you reuse a database previously opened by `next dev`, Payload records a `dev` migration. Run the checked baseline once from your local machine with that database's URI in `.env.local`:

```bash
npm run db:baseline
npm run db:baseline -- --apply
```

The first command compares the existing tables, columns, indexes, and enums to the committed schema without writing. The second adds the Blob media column if needed and replaces the development marker with the initial migration record. It stops if the schema differs unexpectedly. Do not accept Payload's data-loss migration prompt against a populated database.

Automatic development schema sync is disabled for this project. For later Payload schema changes, generate and run a new migration before starting the app against the shared Neon database.

---

## 5. First-Time Database Seeding & Admin Setup

Once the deployment finishes:

### 1. Seeding Tourism Data
You can populate all Mulugu places, UNESCO heritage details, itineraries, local businesses, and articles by running the seed script pointing to your remote database:

```bash
# In your local terminal, replace with your production DATABASE_URI:
DATABASE_URI="postgresql://..." npx tsx src/lib/seed.ts
```
*(Or run `npm run seed` with `DATABASE_URI` in `.env.local`; the script reads that file.)*

The seed script adds content only. It does not create an admin with a shared password. If you previously ran an older seed script, run `npm run admin:rotate-legacy` locally before exposing the CMS. The command generates a new password, verifies login, and writes the credential to the ignored `.admin-credentials.local` file. Move it to your password manager and remove the local file afterward.

### 2. Creating the Admin User
1. Navigate to `https://your-domain.vercel.app/admin`.
2. On an empty database, Payload CMS will prompt you to create your primary administrator account. On the reused Neon database, log in with the rotated credential saved locally.
3. Once created, you can manage all destinations, articles, events, and site content live from the CMS!

Password reset email delivery is not configured yet; Payload currently writes email messages to server logs. Add an email adapter before relying on password reset links.

---

## 6. What Was Made Vercel-Ready

1. **Payload migrations** run before the Vercel build against a fresh database.
2. **Vercel Blob storage** keeps uploaded images outside the ephemeral function filesystem.
3. **Site content refreshes** at most 60 seconds after editors publish changes.
4. **Required variables are checked** during a Vercel build so missing database, secret, or Blob settings fail clearly.
5. **`sharp`, PostgreSQL SSL, and Vercel URL resolution** are configured for the deployment.
