# Roobiks Builds — How to Update Your Website

This guide covers everything you can update yourself, without needing a developer.

---

## Adding a Blog Post

Your blog is powered by simple text files that live in your GitHub repository. You don't need to know how to code.

1. Go to your GitHub repo: https://github.com/rickithadi/roobiksbuild
2. Navigate to `src/content/blog/`
3. Click **Add file → Create new file**
4. Name it: `your-post-title.md` (use hyphens, no spaces)
5. Paste this template at the top, fill it in:

```
---
title: "Your Post Title"
date: "2026-06-15"
category: "Farm & Ranch"
excerpt: "A one-sentence summary that appears on the blog index."
slug: "your-post-title"
cover: "https://images.unsplash.com/photo-XXXXXXX?w=1200&q=80&fm=webp&auto=format"
---

Your post content starts here. Write in plain paragraphs.

## Section Headings Use Two Hashes

**A bold label at the start of a paragraph** works like this too.
```

6. Click **Commit new file** at the bottom
7. Your post will appear on the site within 2–3 minutes automatically (Vercel redeploys on every push)

---

## Updating Your Contact Details

1. Go to: `src/lib/site.ts`
2. At the top, find the `site` object — it has `phone`, `email`, `address`, `instagram`, `linkedin`
3. Update the value you need and click **Commit changes**

Or, more simply — just email us and we'll update it in under 10 minutes.

---

## Updating Your Services

Your services are in `src/lib/site.ts`, in the `services` array. Each one has:
- `name` — the service title
- `category` — the small label above the title
- `description` — the paragraph shown on the card
- `image` — the photo URL

Find the service you want to change, update the text, commit.

---

## Updating a Project or Adding a New One

Projects live in `src/lib/site.ts`, in the `projects` array. Each one has a `title`, `category`, `image`, and optionally `location` and a `story`/`storyAttribution` quote — the quote only shows on the page if you fill it in. Two projects (Gales Creek Terrace Fences, Gale Creek Terrace Accented Steps) have a real quote already; the rest intentionally don't, since we didn't want to invent a story that wasn't yours.

To add your own write-up to any project, add a `story` (the write-up) and `storyAttribution` (how you want it credited, e.g. a project name or your own name) to that project's entry.

To add a brand-new project, copy an existing entry, give it a unique `slug`, and fill in the fields. It will automatically appear on the `/projects` page and get its own page at `/projects/your-slug`.

---

## Replacing or Adding Photos

Project and service photos are hotlinked from real sources — your Houzz photo library (for projects) and licensed stock (for the two fencing sub-services that don't have a matching Houzz project yet: Security & Privacy Fencing, Pool Fencing). Nothing needs to change before launch.

**The easiest way**: email us your photos (high-resolution JPGs) with a note about which section each one is for (hero, a specific project, a specific service). We'll update them.

**If you want to do it yourself**: photos are set as `image` values in `src/lib/site.ts` (services and projects) and `heroImage` near the top of the same file. Replace the URL with a link to your own hosted image, or a new photo from your Houzz library.

Remaining photo gap:
1. **Social share preview image** (`public/og-image.jpg`, shown when the site link is shared on social media/iMessage) still uses a stock photo rather than your own work — send us a wide (landscape) high-res photo of your best installation and we'll swap it in.
2. **Stats strip numbers** — "500+ Satisfied Customers," "800+ Fences Installed," "15+ Skilled Builders" on the homepage are still placeholders (your "12 Years of Expertise" figure is confirmed accurate, since your company was founded in 2014) — send us the real figures and we'll update `src/lib/site.ts`'s `stats` array.

---

## Setting Up Your Contact Form

Your inquiry form and newsletter signup are currently in demo mode. To activate them:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Click **New Form**
3. Set the email to: grooker@roobiksbuilds.com
4. Copy the **Form ID** — it looks like `xrgvpkjq`
5. In your Vercel dashboard: `roobiksbuild` project → Settings → Environment Variables
6. Add a variable: `VITE_FORMSPREE_ID` = (paste your Form ID)
7. Click **Redeploy** — forms will now arrive in your inbox

Free plan: 50 submissions/month. More than enough for most inquiry sites.

---

## Pointing Your Domain

If you have an existing domain and want to use it:

1. Go to your Vercel project dashboard (`nineline` team → `roobiksbuild`)
2. Click **Settings → Domains**
3. Click **Add Domain** and enter your domain
4. Vercel will show you DNS records to add — copy them
5. Go to your domain registrar and add those DNS records
6. Wait up to 24 hours — usually much faster
7. Once the domain is live, update `VITE_SITE_URL` in Vercel's Environment Variables to your new domain and redeploy — this updates all the SEO tags, sitemap, and social preview links automatically

---

## What Needs a Developer

These things are possible but require someone comfortable with React and Vite:
- Adding a completely new page or section type
- Changing the site's color scheme or fonts
- Integrating a new third-party service
- Anything not covered above

Estimated time for most of these: 1–2 hours.

---

## Getting Help

For urgent issues or changes beyond this guide, reach out to whoever set this project up for you.
