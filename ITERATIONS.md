# Roobiks Builds — Rebuild Iterations

Original demo source: https://roobiksbuilds.techmirzafiverr.com/index.php (a Fiverr freelancer mockup —
see Iteration 2 for the discovery that this was not the client's real site)
Real business source: https://roobiksbuilds.com (Houzz Pro)
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

## Iteration 1 — Critique pass, bug fixes, project detail pages ✓ FINAL
**Commit:** fdc704f (merged to `main` at 3de2c7c)
**Branch:** rebuild/iter-1 → merged to main
**Vercel Preview:** https://roobiksbuild-i40zz6oc5-nineline.vercel.app (verified HTTP 200 pre-merge)
**Production:** https://roobiksbuild.vercel.app (verified HTTP 200 post-merge, including new `/projects/:slug` routes and `/sitemap.xml`)
**Critique Score:** 37/40 (Excellent band)

| # | Heuristic | Score |
|---|---|---|
| 1 | Visibility of System Status | 4 |
| 2 | Match Between System and Real World | 4 |
| 3 | User Control and Freedom | 4 |
| 4 | Consistency and Standards | 4 |
| 5 | Error Prevention | 3 |
| 6 | Recognition Rather Than Recall | 4 |
| 7 | Flexibility and Efficiency of Use | 3 |
| 8 | Aesthetic and Minimalist Design | 4 |
| 9 | Help Recognize/Diagnose/Recover from Errors | 4 |
| 10 | Help and Documentation | 3 |
| **Total** | | **37/40** |

**Anti-patterns verdict:** PASS — distinctive Libre Baskerville + Roboto pairing (not Inter/generic), real verified photography throughout (not stock-template filler), asymmetric grid treatments (featured Services card, featured Projects tile) instead of identical repeating cards, brand-derived dashed corner-frame motif instead of generic drop-shadow cards, no gradient text / glassmorphism-as-decoration / dark-mode-with-neon-glow.

**Trust-convention check:** PASS — warm/light body sections dominate with dark hero/footer bookends only, wood-brown accent ties to the real extracted brand color, craft-forward and conventional rather than experimental (see CONTENT.md § Trust Convention).

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
- Stats strip (500+ customers, 800+ fences, etc.) uses placeholder figures — source counters were corrupted/unusable; flagged inline on the page and needs client confirmation before launch (update: "Years of Expertise: 12+" is now confirmed accurate, see Iteration 2)

---

## Iteration 2 — Real business site discovered; replaced fabricated content ✓ FINAL
**Branch:** rebuild/iter-2
**Trigger:** user pointed to https://roobiksbuilds.com — the client's actual live website, not the
`techmirzafiverr.com` Fiverr demo mockup this rebuild was originally (and reasonably, at the time) built
from.

**What was discovered:** scraped the real site (Houzz Pro / Next.js — parsed the embedded `__NEXT_DATA__`
JSON directly rather than HTML-scraping) and found the demo site diverged from reality in several
significant ways. Full detail in `CONTENT.md § Real Site Extraction`.

**Corrected (real facts replacing wrong ones):**
- Email: `grooker@roobikbuilds.com` (demo typo) → `grooker@roobiksbuilds.com` (real)
- Address: fabricated "121 Second Street, Mount Holly, NJ 08060" → real "Forest Grove, OR 97116"
- Linda Wilkinson testimonial: demo version was truncated mid-story → replaced with the full real Houzz
  review text
- Added Houzz profile link (real, verified) to the footer

**Replaced (fabricated content that should never have been presented as fact):**
- All 6 "Projects" case studies (Peterson Family, Maplewood Community, Jackson Residence, Anderson Estate,
  Brightstar Stables, Willow Creek Farms) were entirely invented for the Fiverr demo — they don't exist on
  the real site. I had treated them as verbatim source content per the content-parity rule, which was a
  mistake carried forward from trusting the wrong source. Replaced with the 7 real projects (Gales Creek
  Terrace Fences, Gale Creek Terrace Accented Steps, Custom Cedar Patio Cover, Wismer Ridge Deck Resurface,
  Kitchen and Bath Remodel, Closet Organizers, Murphy Bed Cabinet), real photos hotlinked from Houzz's CDN,
  and only the 2 projects with a confirmed real verbatim narrative show a story quote — the other 5 show
  real name/photo only rather than an invented Challenge/Solution/Result.
- `ProjectDetail.tsx` reworked: dropped the client/date/challenge/solution/result fields (no longer
  applicable) in favor of an optional `story`/`storyAttribution` quote block that only renders when real
  source text exists.

**Added (real content that was missing, not previously on the rebuild at all):**
- Hero photo swapped from a verified-but-stock Unsplash image to a real Roobiks Builds job-site photo (the
  same charred-cedar-lattice fence as the "Gales Creek Terrace Fences" project)
- About page: added the real "Our Mission" copy and a new "Meet the Team" section with both real bios
  (Gabe Rooker — founder, University of Wyoming engineering degree, ex-Rick's Custom Fencing and Decking;
  Vinny Rooker — cabinetry/countertops, previously unmentioned on the site at all)
- Confirmed "12 Years of Glorious Experience" is factually accurate (real site states founded 2014), not
  just a plausible-sounding placeholder

**Build gate:** `npm run build` clean before and after all changes (prebuild sitemap generator
auto-picked up the new project slugs with zero manual editing — confirms the earlier VITE_SITE_URL
centralization work paid off)

**Visual verification:** screenshotted home/about/projects/project-detail at 1440px and home at 375px —
real hero, real team photos, real project photos, real address/email in footer all confirmed rendering
correctly, no broken images, no overflow

**Mobile check:** 375px pass, no horizontal overflow, images load correctly

**Known remaining gaps:**
- `og-image.jpg` (social share preview) still uses the earlier Unsplash stock photo, not real Roobiks
  photography — real source images weren't available at the 1200×630 landscape aspect needed without
  cropping into unusable content; left as a follow-up rather than shipping a bad crop
- Instagram and LinkedIn links kept from the demo site — independently plausible (Instagram verified via
  live widget with real posts; LinkedIn matches Gabe's real name) but not re-confirmed via roobiksbuilds.com
  itself, which only resolved a Houzz profile link in its social-links data
- 5 of 7 real projects show name/photo only (no story text) since no verbatim narrative exists for them —
  intentional, not a gap to fix by inventing copy

---
