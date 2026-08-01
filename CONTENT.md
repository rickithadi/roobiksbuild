# Roobiksbuild — Content Extraction
Source: https://roobiksbuilds.techmirzafiverr.com/index.php
Extracted: 2026-08-01
Extraction method: WebFetch/curl direct (CRW not configured in this environment — no CRW_API_KEY set), Firecrawl markdown scrape for sub-pages, direct curl for rawHtml/CSS asset extraction, Playwright not needed (server-rendered PHP, no JS gating).

## Site Type
Service Business — Home Services / Trades (fencing contractor), with adjacent design-build/renovation credibility (see Trust Convention below).

## IMPORTANT — Source Site Notes (read before building)
The source is a **live CodeIgniter development build** (debug toolbar exposed, admin routes visible, `development` environment). It is visibly unfinished:
- "Why Choose Us" intro paragraph is literally placeholder `Lorem ipsum dolor sit amet...` — never finished.
- The stat counters (Satisfied Customers / Fences Installed / Years of Expertise / Skilled Fence Builders) are a broken JS odometer — captured values are inconsistent nonsense (`8180+`, `8180+`, `8182+`, `85+`) because the scrape caught the animation mid-count. These are NOT usable as real figures — see § Social Proof.
- The "Our Projects" gallery has fencing-themed **captions** (e.g. "Bi-Folding Driveway Gate with Keypad Entry") bound to **uploaded photos that are not fencing photos** — the admin uploaded generic desk/interior stock photos (`uploads/projects/...jpg`) as placeholders and never replaced them. Confirmed visually in the reference screenshot (desk with laptop, clock, decor — no fences visible in that grid). This is a real defect on the live site, and a strong "before" pitch point.
- The two testimonials on the page are about a **bathroom/kitchen renovation**, not fencing — because "Roobiks Builds" is actually a broader design-build company (see logo: "ROOBIKS BUILDS — ARCHITECTURAL DESIGN") whose site was reskinned onto a fencing-only template. Testimonials are kept 100% verbatim per the content rules; the rebuild should not fabricate that they are fencing-specific.

## Business Identity
Legal/brand name (from logo): **Roobiks Builds** — tagline under wordmark: "Architectural Design"
Site branding on page: "Roobiksbuild" / Instagram handle: `@roobiksbuilds`
Owner/estimator: **Gabe Rooker** (confirmed via footer LinkedIn link `linkedin.com/in/gaberooker/` and testimonial mentions of "Gabe" as "the estimator... the owner")
Founded: claims "12 Years Of Glorious Experience" (source badge text reads "12 Years Of Glorius Experience" — typo, correct to "Glorious" in rebuild)

## Multi-page Scope
In scope: Home, About, Services, Projects, Blog (index + articles), Contact, 404
Out of scope (not rebuilt — thin/unscraped on source): FAQ, Gallery, Quote form (folded into Contact/quote CTA), Privacy Policy, Terms & Conditions — note as out-of-scope pages in handoff.

## Navigation
Home → /
Services → /services
Projects → /projects
Blogs → /blog
About Us → /about
Contact Us → /contact
Primary header CTA: "Request A Quote" → /quote

## Brand Voice
Taglines: "Enhance Your Space with Quality Fencing" / "We Build & Install Quality Fences Across the USA" / "We Built and Installed Fences Across the USA"
Tone: Direct, craftsmanship-forward, trustworthy trade-contractor voice. Short benefit-led sentences ("Protect, beautify, and add value to your property"). Evidence: hero copy, service card labels ("Home & Property Security", "Business & Industrial Security").

## Hero
Headline (verbatim): "Enhance Your Space with Quality Fencing"
Subheadline (verbatim): "Protect, beautify, and add value to your property with our expert fencing solutions. Whether for security, privacy, or aesthetics, we provide durable and stylish fences tailored to your needs. Let us build the perfect fence for your home, business, or farm!"
Primary CTA: "Request a Quote" → /quote
Secondary CTA: "Contact Us" → /contact
Note: source hero has an embedded live Instagram widget card (real account @roobiksbuilds) instead of a hero photo — rebuild should replace with a real full-bleed fencing photo (source has none suitable) and can keep an Instagram follow link in the footer/social row instead.

## About
Headline (verbatim): "We Build & Install Quality Fences Across the USA" (home) / "We Built and Installed Fences Across the USA" (about page)
Body (verbatim, home): "We specialize in designing, building, and installing durable and stylish fences for homes and businesses nationwide. Our expert team ensures top-quality craftsmanship, enhancing security, privacy, and aesthetics for every property. Trust us to deliver fencing solutions tailored to your needs!"
Body (verbatim, about page): "We specialize in high-quality fencing solutions, offering durable and stylish fences for homes and businesses. Our expert team ensures precise installation with a focus on security, privacy, and aesthetics."

Three pillars (about page, verbatim):
### Custom Fencing Solutions
"We provide tailored fencing options, including wood, vinyl, metal, and composite fences, designed to match your style and needs."
### Experienced Fencing Professionals
"Our skilled team delivers top-notch craftsmanship, ensuring long-lasting, weather-resistant fences that enhance property value."
### Design and 3D Visualization
"We offer 3D fence design previews, allowing you to see and customize your fence before installation for a perfect fit."

Founder: Gabe Rooker, owner/estimator (from testimonials + LinkedIn footer link). No further bio text found on source — do not fabricate additional credentials.
Credential badge (verbatim, corrected typo): "12 Years Of Glorious Experience"

## Services
### Residential Fencing
Category label: "Home & Property Security"
Description: "Secure and stylish fencing solutions to enhance home privacy, safety, and curb appeal."
CTA: → /services
### Commercial Fencing
Category label: "Business & Industrial Security"
Description: "Strong, durable fences to protect businesses, warehouses, and commercial spaces."
CTA: → /services
### Custom Wood Fencing
Category label: "Decorative & Functional Fencing"
Description: "Elegant handcrafted wooden fences for aesthetics, security, and property enhancement."
CTA: → /services
### Security & Privacy Fencing
(name only — listed in footer, no description on source; write a short, editorially-consistent description in rebuild)
### Pool Fencing
(name only — listed in footer, no description on source; write a short, editorially-consistent description in rebuild)

"Why Choose Us" pillars (home page, verbatim headings):
- Expert Craftsmanship — "We use top-quality materials and skilled workmanship to build durable, stylish, and long-lasting fences."
- Customized Solutions — "Every property is unique, so we offer tailored fencing solutions to match your specific needs and style."
- Reliable & Affordable — "We provide high-quality fencing at competitive prices, ensuring security and beauty without exceeding your budget."
(Section intro on source is literal Lorem ipsum placeholder — replace with original copy in rebuild.)

## Testimonials
### Linda Wilkinson
"I bought a "forever" condo with a fabulous view and great bones about a year and a half ago. I've been working on reno since then. The last things on my list were the kitchen and master bath - 2 big ticket, time-consuming projects. I had a number of bids - Roobiks was neither the cheapest or most expensive. I chose them because the estimator (Gabe) was the owner, he understood and respected my budget, made intelligent suggestions, and did not waste my time."
Bound image: /frontend/assets/images/17.jpg (client-img, explicit from source DOM order)

### Rosy Arenas
"We live in Texas but own a condo in Oregon that needed a half bath fixed after a leak was detected. The tile had to be removed, the subfloor had to leveled, and the new tile and toilet installed. Gabe came by and was very knowledgeable of the work that was needed. We had received three different quotes and Roobiks Build was the best. Gabe stayed in communication with us throughout the process. Highly recommend Roobiks Build and will definitely reach out to them should we need additional work in the future."
Bound image: /frontend/assets/images/18.jpg (client-img, explicit from source DOM order)

Note: both quotes are about renovation work, not fencing specifically — kept verbatim per content rules; present as general customer testimonials about working with Roobiks Builds, not relabeled as fencing projects.

## Social Proof
Stat block labels (verbatim labels, source counter VALUES are broken/unusable — see notes above):
- Satisfied Customers
- Fences Installed
- Years of Expertise
- Skilled Fence Builders
Decision: rebuild will present these as a lightweight, honestly-labeled stats strip using round, defensible placeholder figures (flagged for client to confirm real numbers before launch) rather than repeating the garbled source values as fact.
Credential: "12 Years Of Glorious Experience" (kept, typo-corrected)

## Projects (source captions, verbatim — photos need replacement, see Image Placeholders)
1. Bi-Folding Driveway Gate with Keypad Entry
2. Smart Sliding Gate for a Private Community Entrance
3. Modern Horizontal Slat Fence for a Contemporary Home
4. Ornamental Wrought Iron Fence for a Luxury Estate
5. Electric Horse Fence for an Equestrian Facility
6. Cattle Fencing for a Large Ranch

## Blog Topics (verbatim titles/dates/excerpts)
### Best Fencing Options for Farms and Ranches — 22 Feb 2025
Excerpt: "Farmers and ranchers require fencing solutions that offer durability, affordability, and efficiency..."
### Why Security Fencing is Essential for Your Property — 22 Feb 2025
Excerpt: "Security fencing is an effective way to protect your home or business from intruders while maintaining..."
### 2025's Top Fence Designs for Modern Homes — 22 Feb 2025
Excerpt: "The world of fencing is evolving, with homeowners seeking designs that are both aesthetic and functional..."
(Rebuild will write 4 full original articles: the 3 above matched to source topics/titles, plus one new topic in the same voice, per skill rule to write 4.)

## Contact
Phone (verbatim): +1 503-858-4137
Email (verbatim, note domain typo on source itself): grooker@roobikbuilds.com
Address (verbatim): 121 Second Street, Mount Holly, NJ 08060
Social:
- Instagram (real, active): https://www.instagram.com/roobiksbuilds/
- LinkedIn (real, founder): https://www.linkedin.com/in/gaberooker/
- Facebook: bare `facebook.com` link on source — not a real configured profile, omit or link to a placeholder/omit icon
- Twitter/X: bare `twitter.com` link on source — not configured, omit

## Email Capture
List: Newsletter (unnamed)
Offer (verbatim): "Stay updated with the latest fencing trends, expert tips, and special offers. Sign up today and get exclusive insights straight to your inbox!"
CTA: "Get Subscribe Now" → rebuild as "Subscribe"

## Fonts
Google Fonts URL (verbatim from source style.css @import):
`https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap`
Display: Libre Baskerville (serif, 700 for headings)
Body: Roboto (sans, 300/400/500)

## Colors
Extracted from source style.css (hex frequency across stylesheet):
- Primary / brand brown: `#6b3e22` (147 occurrences — dominant accent, wood tone, matches logo)
- Near-black (dark sections, nav/footer, headings): `#01040f`
- Secondary dark teal/green: `#132728`
- White/cream backgrounds: `#ffffff`, `#eeeff2`
- Pale mint tints (subtle section bg accents): `#def3ea`, `#f4fbf7`
- Neutral borders/text: `#ddd`, `#999`, `#3b3b3b`
theme-color meta: not set on source

## Logo
URL: https://roobiksbuilds.techmirzafiverr.com/frontend/assets/images/logo.png
Format: PNG, 599×416, transparent background
Notes: Wood-grain textured "RB" monogram inside a dashed corner frame, wordmark "ROOBIKS BUILDS" + tagline "ARCHITECTURAL DESIGN" below. Strong, distinctive, on-brand mark — reuse as-is in navbar/footer.

## Favicon
Primary: https://roobiksbuilds.techmirzafiverr.com/frontend/assets/images/favicon.png (PNG, HTTP 200)
Apple touch icon: none found
Notes: only PNG favicon found — use as `/favicon.png`, no SVG available.

## Images
Extraction method used: curl (direct, server-rendered PHP — no JS rendering needed) + regex on rawHtml + style.css; screenshot reviewed (user-supplied reference screenshot) for role/binding.
Screenshot reviewed for role/binding: yes — user-supplied full-page screenshot of the live site.
og:image: not set
Hero: no dedicated hero photo on source — hero section uses a solid dark background class (`bg-racing-green`, resolves to near-black/dark-teal) with an Instagram widget on the right, not a full-bleed image. Rebuild will source an appropriate full-bleed fencing photograph (client has none suitable) — flagged in Image Placeholders.
Service cards (all verified HTTP 200, thematically correct — reuse as-is):
- Residential Fencing: /frontend/assets/images/10.jpg (green lawn, light-toned fence)
- Commercial Fencing: /frontend/assets/images/11.jpg (dark metal fence along a path)
- Custom Wood Fencing: /frontend/assets/images/12.jpg (wood deck/patio)
"Why Choose Us" handshake/craftsmanship photo: /frontend/assets/images/16.jpg (two workers shaking hands — on-theme, reuse)
Testimonial client photos: /frontend/assets/images/17.jpg (Linda Wilkinson), /frontend/assets/images/18.jpg (Rosy Arenas)
Blog thumbnails — CORRECTION (see § Image Placeholders): initial HTTP-200 check was mistaken for content verification. Visual inspection during the critique pass showed 2 of 3 are the same mismatched desk/interior and forest-cabin stock photos as the broken Projects gallery (the source site's blog and project uploads share the same admin bug). All 3 were replaced with verified fencing photography:
- Best Fencing Options for Farms and Ranches → Unsplash photo-1680176325192 (horse behind pasture fence, verified)
- Why Security Fencing is Essential → Unsplash photo-1606075920539 (chain link security fence, verified)
- 2025's Top Fence Designs for Modern Homes → Unsplash photo-1722881445875 (backyard deck fence, verified)
Custom photography: appears to be stock/template photography throughout (not verified as the client's own job-site photos) — treat as representative stock, not claim as "our work" in captions.

## Portfolio / Client Work
### Projects gallery — binding confidence: MISMATCHED ON SOURCE, do not carry over photos
Source structure: 6 project cards, each with a fencing-themed heading (see § Projects) but bound to `uploads/projects/...jpg` photos that depict generic desk/interior/office stock scenes — confirmed visually in the reference screenshot (desk, laptop, clock, decorative objects; no fences visible). This is a genuine content bug on the live site.
Decision: do NOT reuse the source's project photos (would perpetuate the bug and mislabel stock photos as project work). Rebuild uses appropriately-themed fencing/gate/property stock photography per project caption instead, clearly as illustrative imagery, flagged in Image Placeholders.

## Embedded Videos
None found.

## Conversion Goal
Primary: Submit a quote request ("Request a Quote" → /quote form)
Secondary: Call or email directly; follow on Instagram
Current path to conversion: 1 click from homepage (header CTA present in both the announcement bar and hero)

## Competitor Analysis
### Superior Fence & Rail — superiorfenceandrail.com
Value prop: National franchise network with dozens of state/metro-specific location pages, positioned on scale and coverage ("we're everywhere").
Layout: Massive mega-menu of service locations dominates the homepage; corporate, standardized franchise design.
Differentiation opportunity: Roobiksbuild can win on the owner-led, personal-estimate story that's already in its own testimonials (Gabe personally estimating and staying in communication) — something a franchise page structurally can't put front and center. Lead with the person, not a location directory.

### Ameristar Fence Products (general market knowledge — ornamental/security fence manufacturer-installer)
Value prop: Premium ornamental and high-security fencing (steel, aluminum), industrial/institutional credibility, manufacturer-grade quality positioning.
Layout: Product-spec-heavy, catalog-style, aimed at architects/specifiers as much as homeowners.
Differentiation opportunity: Roobiksbuild's residential/farm/ranch range (horse fencing, cattle fencing, custom wood) is warmer and more approachable than a manufacturer catalog — lean into craftsmanship and the "for your home, business, or farm" range rather than spec-sheet tone.

## Trust Convention
Primary customer: A homeowner, small business owner, or farm/ranch owner who needs a fence installed or repaired — comparing 2-3 contractor quotes, often after storm damage, a new property purchase, or a security/privacy need.
Buying context: Practical and cost-conscious; wants to see real workmanship, a real person to call, and a straightforward quote path. Not an impulse or novelty purchase — a multi-thousand-dollar home improvement decision.
Trust is: The primary conversion driver. Craftsmanship photography, a named owner (Gabe Rooker), verbatim testimonials, and a fast quote path matter more than visual novelty.
Category trust conventions: Warm, natural materials (wood tones, greenery), clear service categories, visible team/work photos, straightforward CTAs. Competitors reviewed (Superior Fence & Rail, Ameristar) both lean conventional — clean light backgrounds, wood/metal material photography, no dark-mode or experimental styling.
Aesthetic risk: A dark, moody, or experimental palette risks reading as "luxury architecture studio" (matching the "Architectural Design" logo tagline) rather than "call this person to fix my fence." The extracted brand brown (#6b3e22) and near-black (#01040f) are strong and usable, but must be applied as accents/dark sections against warm, light, high-trust backgrounds — not as a dominant dark-mode UI.
Verdict: Safe, with a craft-forward direction. Use the extracted wood-brown as the hero/CTA accent and material-photography anchor; use near-black/dark-teal for a grounded footer and section contrast; keep primary backgrounds warm and light (cream/off-white) so the site reads as an established local trade business, elevated by the genuinely nice "RB" wordmark and serif/sans type pairing — not as a dark experimental studio site.

## Before Screenshot
User-supplied full-page screenshot of https://roobiksbuilds.techmirzafiverr.com/index.php (provided directly in the task, not re-captured — will reference in PITCH.md).

## Image Placeholders
1. Hero — no suitable source photo exists (solid-color hero on source); rebuild uses a licensed/stock full-bleed fencing/craftsmanship photo. TODO: swap for real job-site photography when client supplies it.
2. Projects gallery (all 6 items) — source photos are mismatched stock (desks/interiors), not fences. Rebuild uses stock photography appropriately matched to each caption (gate, wrought iron, horse fencing, cattle fencing, etc.) as an interim measure. TODO: replace with real completed-project photos — this is the single highest-value asset gap for the client to close.
3. Stats strip — source counter values are corrupted/unusable; rebuild ships with clearly-round placeholder figures. TODO: client to confirm real customer count, fences installed, years in business, and team size before launch.
