# CLAUDE.md: Israr Mohammed portfolio

Static portfolio and online resume for Israr Mohammed, Data Analyst / BI Analyst based in Gurugram.
Audience: recruiters and hiring managers arriving from LinkedIn and Naukri.
The full specification lives in `blueprint.md`. Read the relevant sections before starting any spec.

## How we work: one spec at a time
- Work only on the spec the owner names (e.g. "Do S4"). Specs are listed in blueprint §8.
- Start in plan mode: restate the goal, list the files you will touch, raise open questions. Wait for approval.
- Stay inside the spec's scope. Put ideas for other areas under blueprint §12 "Open questions" instead of doing them.
- When done: run the spec's acceptance checks, summarize what changed, tick the spec's status box in blueprint §8.
- Commit once per spec, e.g. `S4: hero, about and contact sections`. The owner reviews before pushing.
- If a spec conflicts with this file, stop and ask. If a fact is missing, ask. Never guess.

## Hard constraints (never break without explicit owner approval)
- Static site only: HTML, CSS, vanilla JavaScript. No React, Vue, Next, Astro, Tailwind, jQuery or UI kits.
- No build step, no npm packages, no bundler. No backend, database, Docker or server of any kind.
- Never create a `functions/` folder. Pages Functions are metered, and the target cost is ₹0/month.
- No third-party runtime requests: no CDNs, Google Fonts links, analytics, embeds, iframes or trackers.
- Only the `site/` folder is published. Nothing outside it goes live.
- The site must be fully usable with JavaScript disabled.

## Content rules (most important)
- Never invent facts, numbers, dates, employers, tools, skills, links, quotes or testimonials.
- Use content only from blueprint §3 (Content inventory). If something is missing, insert
  `<!-- TODO(owner): what is needed -->` and list every TODO in your summary.
- Copy metrics exactly as written (e.g. "from 80% to 95%"). Don't round, inflate or combine them into new claims.
- Never publish the phone number, date of birth or home address. City-level location only.
- Never name EXL's client or show any employer or client data or screenshots. Say "a UK utility client".
- Sukoon technical details must be verified by the owner before they are written. Screenshots use demo data only.
- Text marked DRAFT in the blueprint must be flagged for owner approval in your summary.
- Voice: plain first person, sentence case, specific. No hype words (passionate, ninja, guru, rockstar).

## Structure
```
site/                         published output directory
  index.html                  home
  404.html                    required: prevents SPA fallback and soft 404s on Pages
  resume/index.html           HTML resume with print styles
  resume.pdf                  public resume (no phone number)
  projects/<slug>/index.html  case studies
  assets/css/main.css         the only stylesheet
  assets/js/main.js           the only script: deferred, under 5 KB
  assets/fonts/               self-hosted subset .woff2 (max 2 files)
  assets/img/                 AVIF/WebP images; og/ holds 1200x630 share images
  robots.txt  sitemap.xml  _headers  _redirects  favicon.svg  favicon.ico  apple-touch-icon.png
Repo root (not published): CLAUDE.md  blueprint.md  README.md  .gitignore  design/ (local-only drafts)
```

## HTML conventions
- Landmarks: header, nav, main, footer. Exactly one `<h1>` per page. No skipped heading levels.
- A skip link is the first focusable element. `<html lang="en">`.
- Root-relative paths (`/assets/...`). Clean URLs with trailing slash (`/resume/`, `/projects/sukoon/`).
- Header and footer are duplicated on every page (no build step). When you change one, update all pages and list them.
- Every `<img>` has width, height and meaningful alt (`alt=""` only if decorative).
  Images below the fold get `loading="lazy" decoding="async"`.
- External links get `rel="noopener"`. Where it isn't obvious, the link text says it leaves the site.
- No inline `<script>` code, no `style=""` attributes, no `onclick=` attributes (strict CSP).
  JSON-LD `<script type="application/ld+json">` blocks are allowed.

## CSS conventions
- One file with cascade layers: `@layer reset, tokens, base, layout, components, utilities;`
- Every color, font size and spacing value is a custom property in `tokens` (values in blueprint §4).
  No hex values outside `tokens`.
- Mobile-first. Breakpoints: 40em, 64em, 90em. Fluid type with clamp(). Container max-width about 80rem.
- Use logical properties. Keep specificity low: single-class selectors, no IDs for styling, no `!important`.
- Required: a `:focus-visible` ring, `prefers-reduced-motion`, `prefers-color-scheme` (from S11), `@media print` (S9).
- Caching: fonts and images are cached for a year, so give a changed image or font a new filename.
  CSS and JS revalidate on every load, so they need no versioning.

## JavaScript conventions
- Progressive enhancement only. No content is ever rendered by JS.
- Load with `defer`. No dependencies. Feature-detect IntersectionObserver and the Clipboard API.
- Allowed jobs: the copy-email button (with an aria-live confirmation), the one-time chart-draw trigger,
  and an optional current-section highlight in the nav. Anything else needs owner approval.

## Design guardrails (full system in blueprint §4)
- Direction: "technical drawing". Precise, calm, cool palette, chart-literate, left-aligned.
- One bold element: the small, honest SVG impact charts. Everything else stays quiet.
- Avoid:
  - Typography tells: all-caps eyebrow labels, middle-dot meta strings, arrows on every link,
    01/02 section numbers, a single colored word in a headline.
  - Layout tells: big-number stat blocks, identical rounded shadow cards, gradients, glassmorphism.
  - Gimmicks: typing effects, custom cursors, skill % bars, logo walls.
  - Scattered motion: fade-up on every section, hover lifts.
- Charts: honest scales (no truncated axes), direct labels, colorblind-safe colors,
  and a visible text equivalent for every chart.

## Accessibility (WCAG 2.2 AA)
- Text contrast at least 4.5:1 (3:1 for large text and UI parts). Never rely on color alone.
- Touch targets at least 24px, about 44px for primary actions. Everything keyboard-operable.
- Reflow at 320px with no horizontal scroll. Test at 200% text zoom.
- SVG charts use `role="img"` with `<title>`/`<desc>`, and the same numbers appear as visible text.

## Performance budgets (home page)
- HTML under 40 KB, CSS under 30 KB, JS under 5 KB.
- Fonts: at most 2 files, about 90 KB. Total under 200 KB before lazy images.
- Lighthouse mobile 95+ in every category. LCP under 2 s on Slow 4G. CLS under 0.05.
- No iframes. Power BI dashboards appear as optimized screenshots plus an outbound "Open live dashboard" link.

## Security and privacy
- Never commit secrets, .env files or personal documents (the private resume, IDs, certificates with personal data).
- `_headers` holds the CSP and security headers (blueprint §6). Update the CSP whenever a new resource type is added.
- Strip metadata from the public PDF and all images before committing.

## Local development and checks
- Serve with `python -m http.server 8000 --directory site` and open http://localhost:8000.
  Never open files via file://.
- `_headers` and `_redirects` only take effect on Cloudflare, so verify them on a preview deployment.
- Per-spec checks:
  - DevTools at 320px and 1280px, with a clean console.
  - A keyboard-only pass, then axe with no serious issues.
  - Lighthouse (mobile) when the spec changes a page.
- The full QA checklist is blueprint §9. No automated test suites or tool installs unless the owner approves.

## Deployment
- Cloudflare Pages via Git integration. Preset: None. Build command: none. Output directory: `site`. Branch: `main`.
- Keep off the Cloudflare features that inject scripts: Rocket Loader, Email Address Obfuscation,
  Web Analytics auto-injection and Zaraz.