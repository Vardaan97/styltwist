# Styltwist - Luxury Wardrobe Consulting Website

Live: [styltwist.vercel.app](https://styltwist.vercel.app)

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS 3.4
- **Animations:** GSAP 3.12 + ScrollTrigger
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React
- **Form Validation:** Zod
- **Email:** Resend API
- **Deployment:** Vercel

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY and NOTIFICATION_EMAIL
npm run dev                   # http://localhost:3000
```

## Project Structure

```
src/
├── app/                          # Pages (App Router)
│   ├── page.tsx                  # Home (assembles scroll sections)
│   ├── layout.tsx                # Root layout (fonts, metadata, JSON-LD)
│   ├── about/                    # /about
│   ├── contact/                  # /contact (lead form)
│   ├── blog/                     # /blog + /blog/[slug]
│   ├── services/                 # /services + 4 individual service pages
│   └── api/contact/route.ts      # POST endpoint (Resend email)
├── components/                   # UI components
│   ├── Navbar.tsx                # Nav with desktop links + mobile menu
│   ├── Footer.tsx                # Footer with links + contact info
│   ├── OpeningSequence.tsx       # Hero scroll-driven text reveal
│   ├── StylingBox.tsx            # Trunk Club-style curated box
│   └── logos/StyltwistLogos.tsx  # 6 SVG logo variations
├── lib/                          # Data + utilities
│   ├── blog-data.ts              # Blog index (imports all batches)
│   ├── blog-posts-batch[1-4].ts  # 16 blog posts
│   └── validations/contact.ts    # Zod form schema
```

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Navy | `#1B2A4A` | Text, CTA buttons |
| Champagne | `#C9A84C` | Accent (sparingly) |
| Light BG | `#F0F3F9` | Alternating sections |
| Border | `#E2E6EF` | Cards/dividers |

**Fonts:** Playfair Display (headings), JetBrains Mono (labels), Inter (body)

## Adding a Blog Post

Add to `src/lib/blog-posts-batch4.ts` (or create batch5). Block types: `paragraph`, `heading`, `stat`, `stats-row`, `list`, `quote`, `callout`, `tip`. Import new batch in `blog-data.ts`, add slug to `sitemap.ts`.

## Adding a Page

Create `src/app/your-page/page.tsx` + `layout.tsx`. Wrap with `<LenisProvider>`, `<Navbar/>`, `<Footer/>`. Add to `sitemap.ts`.

## Contacts

- **Email:** soumyastyltwist@gmail.com | **Phone:** +91 704-8959-604
- **Instagram:** [@styltwist](https://www.instagram.com/styltwist/)
- **Location:** Gurgaon, Haryana, India

## Deployment

Auto-deploys on push to `main`. Manual: `vercel --prod`
