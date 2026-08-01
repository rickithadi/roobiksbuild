# Roobiks Builds — Rebuild Iterations

Source: https://roobiksbuilds.techmirzafiverr.com/index.php
Repo: (pending — created in Phase 4)

---

## Iteration 0 — Initial Build
**Commit:** (pending)
**Branch:** main
**Vercel Preview:** pending — check Vercel dashboard
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
- Git repo, GitHub, and Vercel not yet created

---
