# NORYX Devices

Institutional landing page for **NORYX Devices** (`noryxdevices.com.br`).

Premium, bilingual (EN / PT) presence for an international mobile device ecosystem covering sourcing, technical processing, quality control, digital traceability and B2B distribution.

> Facilities, platforms and certification systems described as planned or in design are **not yet operational**. Copy and UI tags reflect that deliberately.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (discrete reveals)
- Zod (contact form validation)

## Local development

```bash
cd noryx-devices
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `/` redirects to `/pt`.

```bash
npm run lint
npm run build
npm start
```

## Project structure

```
src/app/[locale]/          # EN/PT pages + privacy
src/app/api/contact/       # Contact form API route
src/components/layout/     # Header, Footer, LocaleSwitch
src/components/sections/   # Landing sections
src/components/ui/         # Design system primitives
src/components/visuals/    # Map, flow rail, OS board, etc.
src/i18n/                  # Locales + dictionaries
src/lib/                   # env, SEO, leads, rate limit
public/brand/              # Logo + symbol (placeholders ready to replace)
public/images/noryx/       # Section imagery
```

## Brand assets

Replace these files when final artwork is ready (same filenames):

- `public/brand/noryx-symbol.svg`
- `public/brand/noryx-logo.svg`
- `public/brand/noryx-logo-light.svg`

Section images live under `public/images/noryx/<section>/`. Keep filenames or update the corresponding `next/image` `src` paths.

## Internationalization

- Primary locale: Portuguese (`/pt`)
- Secondary: English (`/en`)
- Dictionaries: `src/i18n/dictionaries/{en,pt}.ts`
- Future locales (`es`, `ar`) are prepared in `src/i18n/locales.ts` (including RTL direction for Arabic)

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL (default `https://noryxdevices.com.br`) |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics. Empty = no tracking |
| `LEAD_WEBHOOK_URL` | Optional | Azure (or any) webhook for contact leads |
| `LEAD_WEBHOOK_TOKEN` | Optional | Bearer token for the webhook |
| `RESEND_API_KEY` | Optional | Fallback email transport |
| `LEAD_TO_EMAIL` | Optional | Inbox for Resend fallback |
| `LEAD_FROM_EMAIL` | Optional | From address (default `noreply@noryxdevices.com.br`) |

Never put secrets in client code. Only `NEXT_PUBLIC_*` values are exposed to the browser.

## Contact form → Azure

Flow today:

1. Browser posts to `POST /api/contact`
2. Zod validation + honeypot + IP rate limit
3. `dispatchLead()` in `src/lib/leads.ts` chooses a transport:
   - **Webhook first** if `LEAD_WEBHOOK_URL` is set (this is the Azure path)
   - **Resend email** if `RESEND_API_KEY` + `LEAD_TO_EMAIL` are set
   - **Dev log** in non-production when nothing is configured
   - **503** in production when nothing is configured

To connect Azure later:

1. Deploy an API endpoint that accepts JSON
2. Set on Vercel:

```bash
LEAD_WEBHOOK_URL=https://your-azure-api.example/api/leads
LEAD_WEBHOOK_TOKEN=your-secret
```

Expected payload shape:

```json
{
  "source": "noryx-devices-web",
  "receivedAt": "2026-09-14T00:00:00.000Z",
  "name": "...",
  "company": "...",
  "country": "...",
  "email": "...",
  "phone": "...",
  "type": "supplier|distributor|retailer|partner|investor|other",
  "message": "...",
  "locale": "en|pt"
}
```

No frontend change is required when you flip the webhook on.

## Deploy on Vercel

1. Push this repository to GitHub (standalone repo, not the MobSystem workspace).
2. Import the project in Vercel.
3. Framework preset: **Next.js**.
4. Add environment variables from the table above.
5. Deploy.
6. Attach the domain `noryxdevices.com.br` (and optionally `www`) in Vercel → Domains.
7. Point DNS (A/CNAME) as Vercel instructs.

Suggested production checklist:

- [ ] `NEXT_PUBLIC_SITE_URL=https://noryxdevices.com.br`
- [ ] Lead webhook or Resend configured
- [ ] Final logo SVGs replaced
- [ ] GA ID only after privacy/consent decision
- [ ] Smoke test `/en`, `/pt`, contact form, `/robots.txt`, `/sitemap.xml`

## SEO

- Metadata per locale with `hreflang` + canonical
- Open Graph image via `opengraph-image.tsx`
- `robots.ts` + `sitemap.ts`
- Organization JSON-LD (no invented metrics)

## Design notes

Tokens live in `src/app/globals.css` (`@theme`): deep black, titanium, sand gold, deep emerald.

Honesty guardrails:

- `<StatusTag>` on planned / in-design / concept blocks
- Footer note that planned systems are not operational
- No fabricated revenue, headcount, capacity or investment figures

## License

Proprietary. © 2026 NORYX Devices. All rights reserved.
