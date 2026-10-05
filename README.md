# Discover Mulugu — Tourism & Cultural Portal

Official community tourism portal and digital guide for Mulugu District, Telangana — home to the UNESCO World Heritage Ramappa Temple, Laknavaram Lake, Bogatha Waterfalls, and the historic Medaram Jatara.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Server Components)
- **Language**: TypeScript
- **CMS**: Payload CMS 3.90 (Local API)
- **Database**: PostgreSQL (via `@payloadcms/db-postgres`)
- **Styling**: Tailwind CSS v4
- **UI Icons**: Lucide React
- **Rich Text**: Lexical Editor

---

## Architecture & Data Flow

Payload CMS and PostgreSQL serve as the single source of truth for all dynamic content:

```text
src/data/* (Source Data)
     ↓
npm run seed (Idempotent Database Initialization)
     ↓
PostgreSQL
     ↓
Payload CMS (Local API)
     ↓
src/lib/queries/* (Unified Data Layer)
     ↓
Next.js Server Components
     ↓
Public Website
```

---

## Getting Started

### 1. Prerequisites

- Node.js (v20+ recommended)
- PostgreSQL database instance

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the example environment file:

```bash
cp .env.example .env.local
```

Configure your local credentials in `.env.local`:

```env
DATABASE_URI=postgresql://user:password@localhost:5432/discover_mulugu
PAYLOAD_SECRET=your-secure-payload-secret-at-least-32-chars-long
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Seed Database

Initialize the database collections and globals idempotently:

```bash
npm run seed
```

Default administrator credentials created during initial seed:
- **Email**: `admin@discovermulugu.org`
- **Password**: `MuluguAdmin2026!` *(change in production)*

### 5. Run Development Server

```bash
npm run dev
```

- Public website: [http://localhost:3000](http://localhost:3000)
- Payload Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## Production Scripts

- `npm run build` — Build production bundles and statically validate routes
- `npm run lint` — Run ESLint checks
- `npm run seed` — Run idempotent database seeder
- `npm run start` — Run production server

---

## Deployment to Vercel

For complete step-by-step instructions on deploying this project with PostgreSQL (Neon, Supabase, Vercel Postgres) on Vercel, see [VERCEL_DEPLOYMENT.md](file:///c:/Users/ganes/Desktop/Ganesh/diiscover_mulugu/VERCEL_DEPLOYMENT.md).
