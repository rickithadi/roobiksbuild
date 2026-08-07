# Roobiksbuild — Content Extraction
Source: https://roobiksbuilds.techmirzafiverr.com/index.php
Extracted: 2026-08-01
Extraction method: WebFetch/curl direct (CRW not configured in this environment — no CRW_API_KEY set), Firecrawl markdown scrape for sub-pages, direct curl for rawHtml/CSS asset extraction, Playwright not needed (server-rendered PHP, no JS gating).

## ⚠️ CRITICAL — Real business site discovered post-launch (2026-08-07)
Everything above and below this notice was extracted from **`roobiksbuilds.techmirzafiverr.com`**, which
turned out to be a **Fiverr freelancer demo/mockup**, not the client's real, live website. The user later
pointed to the actual site: **`https://roobiksbuilds.com`** (a Houzz Pro-hosted site, Next.js, real sitemap
at `/sitemap.xml`). Scraped directly (Firecrawl was out of credits) via curl + parsing the page's embedded
`__NEXT_DATA__` JSON, which contains the full page-builder content tree (headings, paragraphs, real Houzz
review data, real project photo galleries) — far cleaner and more reliable than HTML scraping.

**What turned out to be real** (confirmed present verbatim on roobiksbuilds.com):
- Business name, logo, "Architectural Design" tagline, phone number, both testimonials (Linda Wilkinson,
  Rosy Arenas — real 5-star Houzz reviews, IDs 2044559 and 2002474), founder Gabe Rooker

**What turned out to be FABRICATED on the demo site** (do not treat as fact going forward):
- **Email domain**: demo used `grooker@roobikbuilds.com` (typo) — real is `grooker@roobiksbuilds.com`
- **Address**: demo used a fabricated "121 Second Street, Mount Holly, NJ 08060" — the real address is
  **Forest Grove, OR 97116** (no street address published). This is a Pacific Northwest business — "PNW
  inspired design," founder bio confirms Oregon/PDX-area residence. The NJ address was invented by whoever
  built the Fiverr demo and has no basis in reality.
- **All 6 "Projects" case studies** (Peterson Family / Bi-Folding Gate, Maplewood Community / Sliding Gate,
  Jackson Residence / Slat Fence, Anderson Estate / Wrought Iron, Brightstar Stables / Horse Fence, Willow
  Creek Farms / Cattle Fence) — **these do not exist anywhere on the real site.** Client names, locations,
  dates, and Challenge/Solution/Result narratives were entirely invented for the demo. I originally treated
  this as "verbatim source content" per the content-parity rule and built a whole `/projects/:slug` section
  around it — that was a mistake carried forward from trusting the wrong source, corrected in this pass.
  **Replaced with the 7 real projects** — see § Real Projects below.
- **Testimonial text was truncated**: the demo's Linda Wilkinson review cut off mid-story. The real Houzz
  review is substantially longer — full text now used, see § Testimonials (Real, Full Text).

**What the real site reveals about the business** that the fencing-only demo obscured: Roobiks Builds is a
**custom builder and renovation company** (decks, patios, fences, cabinetry, kitchen/bath remodels) founded
**2014** in the "Silicon Forest" of Oregon — fencing is one real, legitimate service among several, not the
whole business. The rebuild's fencing-forward framing is kept (matches the original brief and the demo
site's own emphasis), but all specific facts, photos, and project claims are now sourced from the real site.

---

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
In scope: Home, About, Services, Projects (index + individual detail pages), Blog (index + articles), Contact, 404
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

## Project Case Studies (verbatim — found during critique pass, added late)
The homepage/`/projects` grid captions above are only titles. The source site also has individual
`/project/:slug` detail pages for each item with substantial real content (client/property name,
location, completion date, and a 3-paragraph Challenge → Solution → Result narrative) that was
missed in the original Phase 1 crawl (only the grid was scraped, not the per-project sub-pages).
Fetched directly via curl during the critique pass and added verbatim to `src/lib/site.ts` +
new `/projects/:slug` detail pages (`src/pages/ProjectDetail.tsx`).

### Bi-Folding Driveway Gate with Keypad Entry
Client: Peterson Family — Location: Miami, FL — Completed: 01 Oct, 2024
Challenge: "The Petersons wanted an automated driveway gate that would provide security while maximizing space. Since their driveway had limited clearance for a traditional sliding gate, they opted for a bi-folding gate system that opens quickly and efficiently."
Solution: "We installed a custom aluminum bi-folding gate, designed to fold inward, minimizing the space required for operation. The gate was powered by a high-performance motor, enabling smooth and quiet opening/closing. For security, we added a keypad entry system and remote-controlled access, allowing the family to control entry with ease."
Result: "The result was a sleek, space-efficient, and secure entrance for their home. The Petersons were delighted with how the gate blended modern functionality with aesthetic appeal, giving them both convenience and security in one elegant solution."

### Smart Sliding Gate for a Private Community Entrance
Client: Maplewood Gated Community — Location: Denver, CO — Completed: 01 Sep, 2024
Challenge: "The Maplewood community needed a secure, automated entry gate that would provide controlled access for residents and guests. They required a modern sliding gate system with smart features for remote access and security monitoring."
Solution: "We installed a reinforced steel sliding gate powered by a high-speed automation system, allowing seamless operation with minimal noise. The gate was equipped with RFID and keypad access for residents, as well as an intercom and remote control system for visitors. Additionally, we integrated CCTV cameras and motion sensors for real-time security monitoring."
Result: "This upgrade significantly improved security while offering residents convenience and peace of mind. The automated system reduced traffic congestion at the entrance and allowed for efficient access control, making Maplewood a safer and more efficient gated community."

### Modern Horizontal Slat Fence for a Contemporary Home
Client: Jackson Residence — Location: Austin, TX — Completed: 01 Aug, 2024
Challenge: "The Jackson family wanted a modern fencing solution that would provide privacy while maintaining a minimalist, contemporary design. They were particularly drawn to horizontal wood slats, which offer both privacy and a sleek architectural look."
Solution: "We installed a 6.5-foot horizontal slat fence using stained cedar planks with a steel frame for reinforcement. The natural wood grain was enhanced with a semi-transparent stain, preserving the wood's beauty while protecting it from moisture and sun exposure. For added functionality, we integrated built-in LED lighting along the posts, creating an ambient glow at night."
Result: "The completed fence gave the Jackson residence a modern and luxurious feel, seamlessly complementing their home's exterior. The family was thrilled with the combination of privacy, elegance, and durability, making their outdoor space feel more exclusive and stylish."

### Ornamental Wrought Iron Fence for a Luxury Estate
Client: Anderson Family Estate — Location: Beverly Hills, CA — Completed: 01 Jul, 2024
Challenge: "The Anderson family wanted a high-end decorative fence that would provide security without compromising the aesthetic appeal of their luxury estate. They were looking for an ornate wrought iron fence with custom design elements to match the grandeur of their property."
Solution: "We designed and installed a 6-foot wrought iron fence featuring intricate scrollwork and gold-accented spear tops for an elegant yet secure perimeter. To enhance durability, we used powder-coated iron that is resistant to rust and weather damage. A matching automatic gate was also installed to complement the fence and provide easy access to the driveway."
Result: "The finished project exceeded expectations, giving the estate a regal and timeless appearance. The Anderson family appreciated how the fence blended security, functionality, and artistic craftsmanship while adding significant value to their property."

### Electric Horse Fence for an Equestrian Facility
Client: Brightstar Stables — Location: Lexington, KY — Completed: 01 Jun, 2024
Challenge: "Brightstar Stables needed a safe yet effective fencing solution for their horse training facility. They required a flexible and highly visible fence to prevent injuries while keeping their horses securely enclosed."
Solution: "We installed an electric rope fence with insulated fiberglass posts, which provided a gentle deterrent without causing harm to the horses. The fencing system included solar-powered electric chargers, making it an energy-efficient choice. The bright white rope ensured visibility, preventing horses from accidentally running into the fence."
Result: "The stables now have a well-secured training area that is both functional and safe. The owners were pleased with the low-maintenance nature of the fence and its effectiveness in managing horse movement without the risk of injury."

### Cattle Fencing for a Large Ranch
Client: Willow Creek Farms — Location: Kansas City, MO — Completed: 01 May, 2024
Challenge: "Willow Creek Farms needed a strong and reliable fencing system to secure their cattle grazing fields. Their previous fencing had deteriorated over time, leading to livestock wandering off and safety concerns. They required a sturdy, long-lasting solution that would keep their animals safe while withstanding harsh weather conditions."
Solution: "We installed a 5-strand barbed wire fence with treated wooden posts, spaced strategically to ensure stability and prevent livestock from breaking through. The barbed wire was galvanized for rust resistance, and we reinforced corners with concrete footings to prevent sagging over time."
Result: "The result was a secure and well-defined grazing area that provided maximum protection for the farm's cattle. The new fence significantly reduced the risk of livestock straying while minimizing maintenance efforts. The farm owners were thrilled with the durability and cost-effectiveness of the solution."

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

### Project detail pages — binding confidence: EXPLICIT FROM SOURCE, added in critique pass
Each of the 6 projects also has a real `/project/:slug` detail sub-page on the source with a client/property name, city/state, completion date, and a Challenge/Solution/Result narrative — this was missed in the original Phase 1 crawl (which only covered the homepage grid) and was fetched directly during the critique pass. See § Project Case Studies for the full verbatim content, now live at `/projects/:slug` in the rebuild (`src/pages/ProjectDetail.tsx`). The detail pages reuse the same verified Unsplash photography as the grid (not the source's mismatched gallery images, which repeat the same broken `uploads/projects/gallery/...` files).

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
1. ~~Hero — no suitable source photo exists~~ RESOLVED 2026-08-07: real photo now used, see § Real Assets.
2. ~~Projects gallery — source photos mismatched~~ RESOLVED 2026-08-07: replaced with the 7 real projects and real Houzz photography, see § Real Projects.
3. Stats strip — source counter values are corrupted/unusable; rebuild ships with clearly-round placeholder figures. TODO: client to confirm real customer count, fences installed, years in business, and team size before launch. (Note: "12 Years" framing is now confirmed accurate — real site states founded 2014.)

---

# Real Site Extraction — roobiksbuilds.com
Source: https://roobiksbuilds.com (Houzz Pro / Next.js)
Extracted: 2026-08-07
Extraction method: curl (server-rendered) + parsed the embedded `<script id="__NEXT_DATA__">` JSON payload directly — the page-builder's full content tree (headings, paragraphs, images, project data, Houzz review data) lives there as structured JSON, far more reliable than scraping rendered HTML. Firecrawl was attempted first but the account was out of credits.

## Real sitemap
```
https://roobiksbuilds.com/
https://roobiksbuilds.com/connect
https://roobiksbuilds.com/featured-project-page
https://roobiksbuilds.com/gallery
https://roobiksbuilds.com/our-story
https://roobiksbuilds.com/testimonials
https://roobiksbuilds.com/projects/7537870-kitchen-and-bath-remodel
https://roobiksbuilds.com/projects/7089592-gales-creek-terrace-fences
https://roobiksbuilds.com/projects/7116841-closet-organizers
https://roobiksbuilds.com/projects/7107428-gale-creek-terrace-accented-steps
https://roobiksbuilds.com/projects/7107435-custom-cedar-patio-cover
https://roobiksbuilds.com/projects/7110896-wismer-ridge-deck-resurface
https://roobiksbuilds.com/projects/7112393-murphy-bed-cabinet
```
Out of scope for this rebuild pass: `/connect` (contact form only, no unique copy beyond "Dream|Design|Build" and "Let's connect"/"Reach out"), `/featured-project-page` (used as a copy source below, not rebuilt as its own page), `/gallery` (photo grid only).

## Real Contact Info (corrects the demo site)
Email: **grooker@roobiksbuilds.com** (demo had a typo: `roobikbuilds.com`)
Phone: (503) 858-4137 — matches demo, unchanged
Address: **Forest Grove, OR 97116** (demo fabricated "121 Second Street, Mount Holly, NJ 08060" — discard entirely)
Houzz profile (real, verified): https://www.houzz.com/pro/roobiksbuilds_233745
Instagram: @roobiksbuilds — not confirmed via roobiksbuilds.com's social-links binding (which only resolved a Houzz URL), but independently verified real via the live Instagram widget embedded on the demo site showing actual posts. Keep.
LinkedIn: linkedin.com/in/gaberooker/ — found on the demo site footer, matches Gabe's real name; not independently re-confirmed on roobiksbuilds.com but plausible and low-risk to keep.

## Real Business Identity & Founding
"Roobiks Builds is a custom commodity builder and renovation company in the 'Silicon Forest' of Oregon.
Since 2014, Roobiks Builds Design and Construction has teamed up with local contractors to create homes
and backyards that reflect our passion, commitment, and excellence for both design and service." (verbatim,
homepage)

Real taglines (verbatim, not currently used in the rebuild — candidates for future copy work):
- "PNW inspired design. Tailored client experiences." (H1, homepage)
- "Dream|Design|Build" (H1, /connect)
- "Your home is a reflection of you." (H2, homepage)
- "We make your design aspirations come true." (H2, /gallery)

Real "Our Mission" copy (verbatim, /our-story — not yet integrated into the rebuild's About page):
"Roobiks Builds has been building outdoor structures for the better part of the last decade. From humble
beginnings, our company growth has accelerated into the early 2020's, ushering in custom fences and decks
for everyone. As a constantly evolving practice, we believe quality carpentry is a rapidly dissipating
craft. As a direct result, customer experiences have been flooded with negativity and distrust. Our mission
is to change the outlook of carpenters by utilizing an improved recipe of quality, communication, and
professional construction. Our experience and mastery of design will ensure a quality building experience.
We look forward to working with you on your next home or renovation project."

## Real Team Bios (verbatim, /our-story — About the Team)
### Gabriel "Gabe" Rooker — Founder
"Originator of 'Roobiks Builds', he spends most of his time advertising for new fences, decks, and design
renders created on SketchUp. Before opening his own carpentry practice, Gabe was apart of the FGHS Viking
house and full-time builder for Rick's Custom Fencing and Decking. Alongside being an accomplished swimmer
in the Olympic trials and NCAA, he also received his BS in Engineering, Applied Mathematics, and Physics
from the University of Wyoming (Go Pokes!). As a PNW native, Gabe enjoys the outdoors with family and
friends in the extended PDX area. On the off chance he is not around, his home away from home is in the
deserts of Arizona with his long time partner Astrid. While there, he often enjoys an occasional hike in
paradise valley and building custom home furniture inside his 'Trailer shop'."

### Vincenzo "Vinny" Rooker — Cabinetry & Countertops
"California born but raised in Peru, Indiana, Vinny is the youngest of the Rooker generation and cousin to
Gabe Rooker. As the youngest Rooker to join the Self-Employed movement, he personifies the energy, youth,
and optimism Roobiks Builds delivers to its customers. Vinny graduated from Maconaquah High School,
receiving his Diploma with honorable mentions. Shortly after, he continued his education by joining the
trades working under his father's construction company. Vinny is an accomplished diver on 1m and 3m
springboards during high school. He was ranked in the top Ten in Indiana, even being extended options to
dive for Alabama in the NCAA. Establishing his stake in the construction trade with Rooker Enterprises
underneath the company Cabinet Guy, Vinny specializes in cabinet/countertops sales, installation,
manufacturing. Being reared around power tools at an early age, his contributions to Roobiks Builds have
proven themselves over. When Vinny is not in the office, he enjoys spending time with his Belgian
Malinoiois 'Zeus' and exploring the PNW."

## Testimonials (Real, Full Text — supersedes the truncated demo version)
### Linda Wilkinson — Houzz review #2044559, 5 stars, project date 2024-05-01
"I bought a "forever" condo with a fabulous view and great bones about a year and a half ago. I've been
working on reno since then. The last things on my list were the kitchen and master bath - 2 big ticket,
time-consuming projects. I had a number of bids - Roobiks was neither the cheapest or most expensive. I
chose them because the estimator (Gabe) was the owner, he understood and respected my budget, made
intelligent suggestions, and did not waste my time. I got to choose my tile, granite, faucets, etc. and
there was no bait and switch. His people showed up on time, were competent, friendly, and the project was
done on time and on budget and with no drama. It took under 4 weeks. He pitches in personally to make sure
things stay on track. Excellent communication. But above that - beyond that - the results are unbelievable!
My place was stuck in the 70s - baby blue formica, cracked yellow tiles - heinous. And now, well, it's
fabulous. I'm attaching some pics, but it doesn't do it justice. The granite fluoresces and is pretty glam!
I highly recommend Roobiks - if you can get on their schedule it will likely be the best contractor
experience you've ever had."

### Rosy Arenas — Houzz review #2002474, 5 stars, project date 2024-01-02
(Unchanged from demo — matches real source exactly.) "We live in Texas but own a condo in Oregon that
needed a half bath fixed after a leak was detected. The tile had to be removed, the subfloor had to
leveled, and the new tile and toilet installed. Gabe came by and was very knowledgeable of the work that
was needed. We had received three different quotes and Roobiks Build was the best. Gabe stayed in
communication with us throughout the process. Highly recommend Roobiks Build and will definitely reach out
to them should we need additional work in the future."

## Real Projects (replaces the 6 fabricated demo case studies)
7 real projects exist on roobiksbuilds.com, each with a real photo gallery (photo counts below). Only some
have accompanying narrative copy — found on `/featured-project-page`, which shows 5 caption paragraphs for
what appear to be 2 of the 7 formal projects (multiple photos/captions per project). Where a project has no
confirmed verbatim narrative, the rebuild does NOT invent a Challenge/Solution/Result story (learned from
the demo-project mistake) — it shows the real name and real photo(s) only.

### Gales Creek Terrace Fences (id 7089592, 3 photos) — narrative CONFIRMED
Real photo shows a striking cedar-lattice-and-black-steel-frame fence atop a concrete block retaining wall,
PNW residential neighborhood. Matches this verbatim copy from `/featured-project-page`:
"Project Feature: PNW Retaining Crown Fence — This PNW project kicked off the multi colored fence, doubled
with dark outlines and clean cedar interiors. With a bold color scheme and original woodwork, we were able
to achieve true depth of field with inset square lattice panel accented by dark rails and posts. RB
quality: the Deep black was achieved by charring the exterior with a torch flame!"
Also includes a photo of the SketchUp 3D design render used to plan this build.

### Gale Creek Terrace Accented Steps (id 7107428, 4 photos) — narrative CONFIRMED
Composite-decking exterior stairs with black balusters. Matches:
""Cascadian Steps" were framed in and decked by none other than our owner, Gabe Rooker. Known as the "Stair
guy", he carefully created this beautiful piece. PVC decking (shown in the picture) is manufactured by Wolf
Decking, which boasts up to 50 year stain and fade resistance. RB Quality: This stairway was an odd angle,
which required over 114 angled cuts. Gabe completed this over lunch break." — and a second caption for the
same project: "Above is the Gales Creek Accented Stairs original inspiration from a two story deck
constructed in Chicago during the pandemic of 22'. These stairs utilize the most of composite decking has
to offer with saddle colored Trex and High end White Behr stain. RB Quality: The saddle colored deck was
the only HOA color compliant material. The white stain was an after thought to perfectly compliment the
brown and black ornate balusters."

### Custom Cedar Patio Cover (id 7107435, 4 photos) — no confirmed narrative
Real photo shows a cedar pergola/patio cover under construction against a modern PNW home, black chain-link
fence visible in foreground. Possibly related to this unattributed `/featured-project-page` caption (not
confirmed to be this specific project, so not used as a direct quote): a deck built to hold vehicle weight
with poured Sonotubes and custom Tigerwood decking.

### Wismer Ridge Deck Resurface (id 7110896, 7 photos) — no confirmed narrative
Real photo: gray composite deck resurface with stairs, PNW backyard.

### Kitchen and Bath Remodel (id 7537870, 10 photos) — no formal narrative, but this is what the two real
testimonials (Linda Wilkinson, Rosy Arenas) are describing. Real photos include a dated "before" kitchen
(matches Linda's "stuck in the 70s" description) and a material/tile selection session.

### Closet Organizers (id 7116841, 6 photos) — no confirmed narrative. Real photo: finished white wire-shelf walk-in closet system.

### Murphy Bed Cabinet (id 7112393, 13 photos) — no confirmed narrative. Real photo: mid-install murphy bed cabinet, sage green finish.

## Real Assets — Houzz CDN
Logo (real, matches the demo site's mark exactly — same "RB" wood-engraved monogram): confirms the demo
site's logo.png is authentic and correctly reused.
Photo URL pattern: `https://st.hzcdn.com/simgs/{externalId}_{size}-{contentModified}/{url-slug}.jpg` — size
`9` ≈ 742–990px (card use), size `14` = full resolution (hero use). Verified working, hotlinked directly
(same pattern as Unsplash usage elsewhere in this project) rather than downloaded into `public/`.
Note: the homepage's large background "Almador/Eastmont/Ash Tree/Tasman Street Residence" photos are
**generic Houzz stock/ideabook images** used as low-opacity (0.1) decorative section backgrounds — not
Roobiks' own work. Not used in the rebuild.
