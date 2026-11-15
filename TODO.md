# TODO

## Milepæl-streker i vektdiagrammet

Status: milepæl 1 er lagt inn (`public/data/milestones.json`, tegnet av plugin i `src/components/WeightChart.astro`). Hover over streken viser en popup med punkter (`notes`).

- [x] **Milepæl 1: «Ferdig utdannet – flyttet hjem»** (08.06.2026)
- [ ] **Milepæl 2: slutten på perioden hjemme** (ny jobb / egen bolig). Legg til ett nytt objekt i `milestones.json` (`date`, `label`, `notes`) når det skjer.

## Senere: utvidelser av vektgrafen

- Klikk på grafen for fullskjerm.
- Zoom og panorering (`chartjs-plugin-zoom`).
- Datofilter fra–til.
- Forutsetter at x-aksen byttes til Chart.js `time`-skala (`chartjs-adapter-date-fns`). Milepæl-pluginen bruker `xForDate()`; bare den funksjonen må endres da.
