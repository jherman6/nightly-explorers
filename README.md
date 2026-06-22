# The Nightly Explorers

Production-ready marketing site for The Nightly Explorers, built with
Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started locally

```bash
npm install
cp .env.example .env.local   # then fill in values as needed (see below)
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
src/
  app/                  Routes (App Router)
    page.tsx            Home — composes all homepage sections
    about/               /about
    contact/             /contact
    privacy/             /privacy
    terms/               /terms
    ai-policy/           /ai-policy
    cookies/             /cookies
    welcome/             /welcome (waitlist success)
    blog/
      page.tsx            /blog — featured post, search, category filter, grid
      [slug]/page.tsx      /blog/[slug] — article template (schema, FAQ, related posts)
      [slug]/opengraph-image.tsx   per-article OG share image
      category/[category]/page.tsx  /blog/category/[category] — filtered listing
    api/
      waitlist/route.ts  POST — waitlist signup (+ optional Stripe Checkout)
      contact/route.ts   POST — contact form
    sitemap.ts           Auto-generated sitemap.xml
    robots.ts            Auto-generated robots.txt
    opengraph-image.tsx  Dynamic OG share image
  components/
    layout/              Header, Footer, TrailProgress (scroll progress)
    sections/            Hero, Problem, Solution, Quests, SampleAdventure,
                         Benefits, Mission, FinalCTA — homepage sections
    illustration/        HeroScene, FinalScene (SVG forest/castle art), Fireflies
    waitlist/            WaitlistForm, ContactForm
    ui/                  Button, Container, SectionHeading, Treeline,
                         Reveal (scroll animation), StoryReveal (expand/collapse)
    legal/                Shared layout for policy pages
  lib/                   constants, seo helpers, stripe client, lead webhook, zod schemas
  types/                 Shared TypeScript types
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you need:

| Variable | Required? | What it does |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Used for SEO canonical URLs, sitemap, Stripe redirect URLs. Set to `https://nightlyexplorers.com` in production. |
| `LEADS_WEBHOOK_URL` | Recommended | Where waitlist + contact submissions are sent. See below. |
| `STRIPE_SECRET_KEY` | Optional | Enables real Stripe Checkout on the waitlist form. |
| `STRIPE_PRICE_ID` | Optional | The Price ID of your subscription product. |
| `STRIPE_TRIAL_DAYS` | Optional | Defaults to `7`. |

**Without `LEADS_WEBHOOK_URL` or Stripe configured, the site still works** —
submissions are simply logged in the Vercel function logs, and the waitlist
form just collects name + email without charging anyone. This means you can
deploy today and wire up the rest later.

### Wiring up real lead capture

`LEADS_WEBHOOK_URL` can point at:
- A **Zapier** "Catch Hook" trigger → fan out to Google Sheets, Mailchimp, Slack, etc.
- A **Make.com** webhook
- A **Supabase** Edge Function that inserts into a database table
- Any custom endpoint of your own

The payload sent is a JSON object like:
```json
{ "type": "waitlist", "firstName": "Jamie", "email": "jamie@example.com", "source": "final-cta", "submittedAt": "2026-06-18T00:00:00.000Z" }
```

If you'd rather use a dedicated email tool's native embed (ConvertKit,
Mailchimp, Klaviyo, etc.) instead of this custom form, that's a reasonable
alternative — just replace the `<WaitlistForm />` usage in
`src/components/sections/FinalCTA.tsx` with their embed snippet.

### Using Supabase to store leads

1. In Supabase, create a project, then run this in the SQL Editor:
   ```sql
   create table leads (
     id uuid primary key default gen_random_uuid(),
     type text not null check (type in ('waitlist','contact')),
     first_name text,
     name text,
     email text not null,
     message text,
     source text,
     created_at timestamptz not null default now()
   );
   ```
2. Copy your Project URL and **secret** key from Settings → API Keys.
3. Set `SUPABASE_URL` and `SUPABASE_SECRET_KEY` in `.env.local` (and in
   Vercel's Environment Variables once you deploy).
4. Leads will now be inserted into the `leads` table automatically. You can
   still also set `LEADS_WEBHOOK_URL` alongside it if you want a
   notification (e.g. Slack) on top of the database write.

### Turning on Stripe Checkout

1. In the Stripe Dashboard, create a **Product** with a recurring **Price**
   (this is what your subscription will charge).
2. Copy that Price ID (looks like `price_1Q...`) into `STRIPE_PRICE_ID`.
3. Copy your **Secret key** (Developers → API keys) into `STRIPE_SECRET_KEY`.
4. Redeploy. The waitlist form will now create a Stripe Checkout session
   (subscription mode, with a free trial) instead of just collecting a lead.
5. Set up a webhook in Stripe pointed at your own endpoint if you want to
   react to subscription events (this starter doesn't include a Stripe
   webhook handler — add one at `src/app/api/stripe-webhook/route.ts` if/when
   you need to sync subscription status into your own database).

## Adding a new blog post

1. Write the article body as a `ContentBlock[]` array in a new file under
   `src/lib/blog/content/your-slug.ts` (see the two existing files for the
   pattern — headings, paragraphs, lists, quotes, and callouts are all
   supported, plus `**bold**`, `*italic*`, and `[link text](/path)` inline).
2. Add a new entry to `BLOG_POSTS` in `src/lib/blog/posts.ts` with the
   metadata (title, meta description, slug, categories, FAQs, etc.).
3. That's it — the post automatically appears on `/blog`, its category
   page, the sitemap, and gets its own OG image and JSON-LD schema.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, **Add New Project** → import the repo.
3. Add the environment variables from `.env.example` under
   **Settings → Environment Variables**.
4. Deploy.
5. Under **Settings → Domains**, add `nightlyexplorers.com` and follow
   Vercel's DNS instructions (usually an `A` record to `76.76.21.21` or a
   `CNAME` to `cname.vercel-dns.com`, depending on whether you're using the
   root domain or a subdomain).

## Before you launch, also do this

- [ ] Have a lawyer review `/privacy`, `/terms`, `/ai-policy`, and `/cookies`
      — they're solid starting templates, not a substitute for legal review.
- [ ] Add real social links in `src/lib/constants.ts` (`SITE.twitter`, etc.)
- [ ] Add a real analytics tool (Vercel Analytics, Plausible, or GA4)
- [ ] Replace the placeholder OG image copy in `opengraph-image.tsx` if your
      messaging changes
- [ ] Run `npm run build` locally once before your first deploy to catch any
      environment-specific issues early
