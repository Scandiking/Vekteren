# Vekteren

A personal weight-loss education site written in Norwegian. No miracle cures, no subscriptions, no supplement ads — just evidence-based information about calories, food, and sustainable fat loss, combined with the author's own documented journey.

## What it covers

- **Kalorier** — how energy balance works, TDEE, calorie counting, protein targets, and why aggressive deficits backfire
- **Mat** — macronutrients, why fat isn't the enemy, ultra-processed food, the migrating motor complex (MMC), and the effect of emulsifiers on the small intestine and low-grade inflammation
- **Fremgang** — a live weight chart fed from a personal CSV, showing the actual journey over time
- **Kalkulatorer** — TDEE and BMI calculators

## Who it's for

Anyone who has been through the cycle of diets, quick fixes, and yo-yo weight loss and wants a plain-language explanation of what actually works — and why. The site is written from personal experience, backed by the science behind it.

## Built with

- [Astro 5](https://astro.build) — static site framework
- [Tailwind CSS 3](https://tailwindcss.com) — utility-first styling
- [Chart.js 4](https://www.chartjs.org) — weight and obesity charts
- TypeScript

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + build
npm run preview  # preview production build
```

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `master` trigger automatic redeployment via the Vercel GitHub integration.
