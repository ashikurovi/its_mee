# Ashikur Rahman Ovi — Portfolio

A responsive, dark editorial portfolio built with Next.js, TypeScript, custom CSS, Framer Motion, and Lucide icons. Configured for static export (`output: 'export'`).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

The static site is exported to `out/`. Deploy that folder to any static host, or deploy the repository to Vercel/Netlify with the Next.js build settings.

## Add your portrait

The supplied attachment contained the portfolio brief but no portrait image. Add your real portrait at `public/ovi-portrait.jpg`. The hero automatically shows a designed initials fallback until that file is present. Use a high-quality vertical image (roughly 4:5) for best results.

## Before publishing

- Confirm company role wording and any dates you want displayed.
- Add verified public project URLs and confirmed technology stacks if available.
- Add real company/venture links if you want them linked.
- The contact CTA uses `mailto:` and WhatsApp links, so it works without a backend. No pretend contact form is shown.
- Update the canonical domain in `app/layout.tsx` from `https://ashikurovi.com` if your production domain differs.

## Notes

- Achievement figures are described as reported career/community impact, not as software-only outcomes.
- Specific languages/frameworks and arbitrary proficiency scores are intentionally omitted until confirmed.
- Animations respect `prefers-reduced-motion` and the navigation is keyboard accessible.
