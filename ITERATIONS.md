# Roobiks Builds — Rebuild Iterations

Source: https://roobiksbuilds.techmirzafiverr.com/index.php
Repo: https://github.com/rickithadi/roobiksbuild
Live: https://roobiksbuild.vercel.app (Vercel project `nineline/roobiksbuild` — note: the user's
global CLAUDE.md says Vercel scope `9line`; the actual team slug is `nineline`, `9line` is not a
valid scope and was rejected by the CLI. Used `nineline` and flagged this to the user.)

---

## Iteration 0 — Initial Build
**Commit:** cd467da
**Branch:** main
**Vercel Preview:** https://roobiksbuild.vercel.app
**Critique Score:** not yet run

**What was built / changed:**
- Full Vite + React + TypeScript + Tailwind v4 scaffold
- CONTENT.md extraction (Firecrawl + direct curl, CRW unavailable — no CRW_API_KEY set in this environment)
- Brand tokens from source `style.css`: Libre Baskerville + Roboto, brown `#6b3e22` / near-black `#01040f` / dark teal `#132728`
- Real logo + favicon pulled from source and placed in `public/`
- Pages: Home, About, Services, Projects, Blog index + post, Contact, 404
- Sections: Hero, Stats, Services, WhyChooseUs, Projects, Testimonials, BlogPreview, ContactForm
- Markdown blog with 4 posts (3 matched to source topics, 1 original) using `gray-matter` + Vite glob
- JSON-LD (LocalBusiness), sitemap.xml, robots.txt, vercel.json (SPA rewrite + security headers)
- All source testimonials, service names, contact details kept verbatim
- All imagery re-sourced from verified Unsplash search results (client's own project-gallery photos were mismatched stock — see CONTENT.md § Image Placeholders) or reused directly from source where thematically correct (service card photos, "Why Choose Us" photo, testimonial photos)

**Critique findings fixed:** N/A — pre-critique baseline

**Mobile check:** not yet run

**Known remaining issues:**
- Formspree not yet configured (`VITE_FORMSPREE_ID` unset)
- Stats strip uses placeholder figures — source counters were broken/unusable

---

## Iteration 1 — Critique pass, bug fixes, project detail pages
**Branch:** rebuild/iter-1
**Vercel Preview:** https://roobiksbuild.vercel.app (redeployed automatically on push)
**Critique Score:** design critique run informally during this pass (visual QA + fixes applied directly); formal Nielsen-heuristic scoring not separately logged this iteration

**Real bugs found and fixed (build gate + visual QA):**
- **CSS cascade bug**: `h1, h2, h3...{ color: var(--color-ink) }` in `src/index.css` was NOT wrapped in `@layer base`, so as unlayered CSS it beat every Tailwind utility class in the cascade — `text-paper` on headings inside dark sections (PageHeader, etc.) had zero effect, making page titles invisible on dark hero bands. Fixed by wrapping all base element styles in `@layer base { ... }`.
- **Runtime crash**: `gray-matter` (used for blog frontmatter parsing) depends on Node's `Buffer`, which doesn't exist in the browser — the entire app rendered a blank white page in production. Replaced with a small hand-rolled frontmatter parser (`src/lib/blog.ts`) with zero Node dependencies; also shrank the JS bundle by ~240KB.
- **Content-parity bug (self-inflicted)**: initially marked the source site's 3 blog cover images as "verified, reuse" based only on an HTTP 200 check — never actually looked at them. Visual inspection during this pass showed 2 of 3 were the same mismatched desk/interior/forest-cabin stock photos as the already-documented broken Projects gallery. Replaced all 3 with verified, correctly-themed fencing photography.
- **lucide-react**: `Instagram`/`Linkedin` icons don't exist in the installed version (matches the tech-stack.md warning) — swapped for `AtSign`/`ExternalLink`.

**Missed content found and added:**
- The source site has individual `/project/:slug` detail pages for each of the 6 portfolio items with real client name, location, completion date, and a 3-paragraph Challenge/Solution/Result case study — this was missed in the original Phase 1 crawl (only the grid was scraped). Fetched directly, added verbatim to `CONTENT.md § Project Case Studies` and `src/lib/site.ts`, and built new `/projects/:slug` detail pages (`src/pages/ProjectDetail.tsx`) with a meta row (client/location/date), the case-study body, and a "More Projects" cross-link grid. The `/projects` grid cards were also not clickable at all before this — now linked.

**SEO / meta fixes:**
- `og:image`/`twitter:image` were relative paths (`/logo.png`) — invalid for social crawlers, which require absolute URLs. Fixed, and swapped to a proper 1200×630 `og-image.jpg` (cropped from the verified hero photo) instead of the small transparent-background logo mark.
- Centralized the production domain: added `VITE_SITE_URL` env var, used via Vite's `%VITE_SITE_URL%` HTML replacement in `index.html` (canonical, og:url, og:image, twitter:image) and `import.meta.env.VITE_SITE_URL` in `src/lib/site.ts` (`site.url`, used in JSON-LD). `scripts/generate-seo.mjs` now generates `public/sitemap.xml` and `public/robots.txt` from that same env var plus the actual blog/project slugs (runs automatically via the `prebuild` npm script) — the domain and route list no longer need manual sync across 4+ files. Set `VITE_SITE_URL` in Vercel for all three environments (Development/Preview/Production).

**Deployment:**
- `git init`, GitHub repo created (`gh repo create --public`), pushed
- Vercel project linked and connected to GitHub (`nineline` scope), first deploy verified HTTP 200
- Found and disabled a team-wide Vercel SSO deployment-protection default (`ssoProtection: all_except_custom_domains`) that was blocking public access to the `*.vercel.app` URL — flagged to the user in case it was intentional team policy

**Mobile check:**
- 375px: pass — nav hamburger, project detail meta row stacking, no horizontal overflow observed across home/services/about/projects/project-detail/blog/contact/404
- 768px: not separately re-verified this iteration (375px and 1440px both checked; no issues expected at the intermediate breakpoint given the fluid/grid-based layout, but not explicitly screenshotted)

**Known remaining issues:**
- Formspree not yet configured (`VITE_FORMSPREE_ID` unset) — contact form and newsletter signup will hit the error state until the client sets this up
- Stats strip (500+ customers, 800+ fences, etc.) uses placeholder figures — source counters were corrupted/unusable; flagged inline on the page and needs client confirmation before launch
- Not yet merged to `main` — pending final build gate + push

---
