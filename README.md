# Roobiks Builds — Website Rebuild

A rebuilt, production-grade marketing site for Roobiks Builds (fencing &amp; architectural design), built with React, TypeScript, Vite, and Tailwind CSS v4.

Original source: https://roobiksbuilds.techmirzafiverr.com/index.php

See `CONTENT.md` for the full content extraction and design-decision log, `PITCH.md` for the client-facing summary, and `MAINTENANCE.md` for how to update the live site.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router v7
- Framer Motion
- Markdown blog (`src/content/blog/*.md`), no CMS required

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Environment variables

Copy `.env.sample` to `.env` and set `VITE_FORMSPREE_ID` to enable the contact form and newsletter signup (see MAINTENANCE.md for setup steps).

## Deployment

Deployed on Vercel, connected to this GitHub repo — every push to `main` deploys automatically. See `vercel.json` for SPA rewrites and security headers.
