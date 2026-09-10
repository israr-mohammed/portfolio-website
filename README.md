# Israr Mohammed — portfolio

Static portfolio and online resume for Israr Mohammed, Data Analyst / BI Analyst.

The full specification and working rules live in [`blueprint.md`](./blueprint.md) and
[`CLAUDE.md`](./CLAUDE.md) — read those before making changes. Only the `site/` folder is
published; everything else in this repo is source/planning material.

## Local development

```
python -m http.server 8000 --directory site
```

Then open http://localhost:8000. Do not open files directly via `file://`.

## Deployment

Cloudflare Pages, connected via Git integration to the `main` branch. Build output directory: `site`.
No build step.
