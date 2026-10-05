# Deploying Discover Mulugu to Vercel

This guide outlines the steps to deploy **Discover Mulugu** (Next.js 16 + Payload CMS 3 + PostgreSQL) to [Vercel](https://vercel.com).

---

## 1. Prerequisites

- A **GitHub / GitLab / Bitbucket** account with this repository pushed.
- A **Vercel** account.
- A **PostgreSQL database** (serverless recommended, e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)).

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
| `NEXT_PUBLIC_SITE_URL` | Production website URL | `https://your-project.vercel.app` or custom domain |

> **Note:** If `NEXT_PUBLIC_SITE_URL` is omitted, the app will automatically fall back to Vercel's generated domain (`VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL`).

---

## 4. Deploying via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new).
2. Import your **`mulugu-tourism`** (or `diiscover_mulugu`) repository.
3. Configure settings:
   - **Framework Preset**: `Next.js` (automatically detected)
   - **Root Directory**: `./`
   - **Build Command**: `next build` (default)
   - **Install Command**: `npm install` (default)
4. Add the Environment Variables from Step 3.
5. Click **Deploy**.

---

## 5. First-Time Database Seeding & Admin Setup

Once the deployment finishes:

### 1. Seeding Tourism Data
You can populate all Mulugu places, UNESCO heritage details, itineraries, local businesses, and articles by running the seed script pointing to your remote database:

```bash
# In your local terminal, replace with your production DATABASE_URI:
DATABASE_URI="postgresql://..." npx tsx src/lib/seed.ts
```
*(Or run `npm run seed` with `DATABASE_URI` in `.env.local`)*

### 2. Creating the Admin User
1. Navigate to `https://your-domain.vercel.app/admin`.
2. On your first visit, Payload CMS will prompt you to create your primary administrator account.
3. Once created, you can manage all destinations, articles, events, and site content live from the CMS!

---

## 6. What Was Made Vercel-Ready

1. **`sharp` Dependency**: Installed and bound to Payload CMS config for production image optimization and responsive thumbnails.
2. **Production SSL Database Adapter**: Automatic SSL enforcement for serverless PostgreSQL on Vercel.
3. **Resilient Data Fetching with Graceful Fallbacks**: Static page generation and sitemap creation never fail, even if the database is cold or unseeded during initial build.
4. **Dynamic Vercel URL Resolution**: Auto-detects `VERCEL_PROJECT_PRODUCTION_URL` and `VERCEL_URL`.
5. **Configured `vercel.json`**: Pre-configured framework definitions for Next.js.
