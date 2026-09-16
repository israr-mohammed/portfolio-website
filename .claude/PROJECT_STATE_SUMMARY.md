# Project state summary

Working-context document for Claude Code. Read this first. For routine changes,
inspect only the files directly relevant to the request — do not reread the
entire project, every HTML page, or the full blueprint unless the change
depends on them, and do not perform a broad project audit for a small focused
edit. CLAUDE.md holds permanent project rules; blueprint.md holds
historical/design decisions; this file holds current implementation state.
This file is a snapshot as of 2026-09-16 (post-polish pass) — verify against
the live files if something looks stale.

## Current architecture

- Static HTML + one CSS file + one JS file, no build step, no npm/bundler, no
  backend, no `functions/` folder. Fully usable with JS disabled.
- Shared header (skip link, brand, nav, theme toggle) and shared footer
  (about/socials, quick links, copyright, assistant launcher + panel) are
  duplicated by hand on every page — when either changes, update all 10 pages.
- Routes: `/`, `/about/`, `/experience/`, `/skills/`, `/projects/`,
  `/projects/business-360/`, `/projects/sukoon/`, `/resume/`, `/contact/`,
  `/404.html`.
- Key files: `site/assets/css/main.css` (one file, cascade layers: reset,
  tokens, base, layout, components, utilities), `site/assets/js/main.js`
  (deferred, no deps), `site/assets/data/assistant.json` (facts for the
  deterministic assistant, fetched once on first open), `site/resume.pdf`
  (public PDF, owner-supplied, copied byte-for-byte, no phone number).

## Current design

- Dark mode is the **default** whenever no theme preference is saved
  (`localStorage.theme` unset). If `theme === "light"` it's light; any other
  saved value (or "dark") renders dark. `main.js` sets `data-theme` on
  `<html>` before first paint unconditionally now (no longer leaves it unset),
  so `prefers-color-scheme` only matters as the no-JS fallback
  (`:root:not([data-theme])` in `main.css`).
- Manual light/dark toggle (`.theme-toggle`) persists the choice to
  `localStorage` and works cross-page.
- Visual language: atmospheric multi-radial-gradient hero (violet/blue/mint),
  matching atmospheric dark variant, gradient-clipped "ISRAR MOHAMMED"
  wordmark/brand, monospace typography throughout (`--font-mono`, not IBM
  Plex Sans — this superseded the blueprint's original typeface choice in an
  earlier redesign session), black/near-black footer, `@view-transition`
  page-transition fade/rise, smooth scroll.
- Homepage hero: headline "Turning raw data into / decisions"; pill reads
  "Business Analyst • Data Analyst • BI Consultant".
- Resume page (`/resume/`) contact block: the `dl.hero-facts--contact` (5
  facts: Location, Email, LinkedIn, GitHub, Portfolio) renders as a 2-column
  grid instead of a single stacked column, and the URL/email `dd` text uses
  `overflow-wrap: break-word` (not `anywhere`) so long values wrap at natural
  points (`/`, `-`) instead of mid-word. Below the `64em` breakpoint, the
  block also reserves `padding-inline-end: 4.5rem`, and the assistant launcher
  is shrunk to an icon-only ~44px circle scoped via
  `body:has(.hero-facts--contact) .assistant-launch` — both exist solely to
  stop the fixed bottom-right assistant launcher from covering the GitHub/
  Portfolio links on phone-sized viewports; verified with zero collisions at
  320/375/390/768px widths across a range of viewport heights. Neither change
  affects any other page (the `:has()` selector only matches when the resume's
  contact grid is present in the DOM).
- Resume Experience section hierarchy (dark and light, same tokens): section
  heading (`.experience h2`) colored `--c-signal`; job title (`h3`) bold
  700 at `--c-ink` (brightest); company name (`.timeline-org`) and date/tools
  (`.timeline-meta`/`.timeline-tools`) stay muted `--c-graphite`; bullet body
  text (`.timeline-bullets`) uses `color-mix(in srgb, var(--c-ink) 85%,
  var(--c-graphite))` — one step down from the job title so the block isn't
  visually monotone. Only one accent color (`--c-signal`) is used.

## Current features

- Theme toggle + localStorage persistence (dark-default, see above).
- Deterministic portfolio assistant: fixed launcher + panel, facts fetched
  once from `/assets/data/assistant.json`, chip-driven Q&A, no free-text input.
- CSS-only page transitions (`@view-transition`), reduced-motion respected.
- Shared nav/footer, project case-study pages, HTML resume with print styles.
- Homepage hero photo slot still awaiting the owner's real headshot.

## Current content rules

- Never invent facts/numbers/employers/tools/links. Use only blueprint §3 or
  the content already live on the site; flag gaps with `TODO(owner)`.
- Historical job titles stay factual as given (Business Analyst, Assistant
  Manager, Senior Associate/Associate); the site's own positioning/pill uses
  "Business Analyst • Data Analyst • BI Consultant".
- Public phone (+91-7737136423) and email are both owner-approved for display
  (blueprint D40) — except the HTML resume, which intentionally shows only
  email/LinkedIn/GitHub/portfolio, no phone (owner instruction, unchanged).
- Never name EXL's client — always "a UK utility client". Sukoon: no personal/
  family info, no real screenshots, no live app/dashboard link.
- Assistant answers only from `assistant.json`'s approved facts.

## Current budgets (measured after this pass)

- `main.css`: 26,918 bytes (~26.3 KB) — under the 30 KB budget.
- `main.js`: 4,932 bytes (~4.8 KB) — under the 5 KB budget. Brought back under
  budget by deleting the dead `IntersectionObserver`/`.chart-line`/`.chart-bar`
  draw-on-scroll block (previously ~700 bytes) — the "Selected impact" charts
  it targeted were removed from the site in S10.2, so the block matched zero
  elements on every page and never ran. No other code was touched: theme
  init/toggle, mobile nav (hamburger open/close, aria-expanded, close on nav
  link/outside click/Escape, focus return), the assistant, and copy-email all
  verified working after the cleanup (local server, JS-level interaction
  tests, and a clean console on load).
- `index.html`: 11,683 bytes — under the 40 KB budget.

## Current known limitations

- The mid-word URL wrap fix and 2-column contact grid substantially reduce
  the assistant-launcher/contact-link collision risk on the resume page, but
  the underlying cause (a `position: fixed` launcher present on every page)
  is structural. It was only specifically mitigated on the resume page: no
  other page was tested for the same transient collision, since none of them
  places link-heavy content in that bottom-right corner today.
- The dead `IntersectionObserver`/chart block in `main.js` (see budgets above)
  was removed in a dedicated JS-cleanup pass once the file exceeded the 5 KB
  budget. No other dead code was found in the file at that time.
- Certification verification links/dates (IBM, Codebasics) are still an open
  `TODO(owner)` on `index.html` and `resume/index.html`.
- `og:image`/`twitter:image` are still deferred (no real share-image asset).

## Current pending items

- **Real profile photo**: the hero photo slot (`.hero-photo`) is still
  awaiting an owner-supplied headshot — genuinely unfinished.
- `site/resume.pdf` swap status should be re-verified against `git status`/
  the owner directly if a resume-PDF task comes up; this file no longer
  tracks that in detail since it wasn't touched in this pass.
- Two local commits were ahead of `origin/main` as of the last known push
  check; re-verify with `git log`/`git status` rather than trusting a stale
  count here, since this file does not track commit/push state going forward.
