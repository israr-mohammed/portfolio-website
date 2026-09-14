# Blueprint: Israr Mohammed portfolio

Version 1.0, created 10 Sep 2026. Status: plan approved for build, nothing implemented yet.
Companion file: `CLAUDE.md` (working rules). This file is the single source of truth for what we build.

Sections:
1. Goal
2. Positioning
3. Content inventory
4. Design system
5. Pages
6. Technical config
7. SEO
8. Specs
9. QA checklist
10. Risks
11. Decisions log
12. Open questions

---

## 0. How to use this document

- The build happens spec by spec (§8). Each spec has a goal, scope, files and acceptance criteria.
- Before a spec starts, the owner resolves any §12 open questions that the spec depends on.
- After a spec is done, tick its box and add any decision made during it to §11.
- Content changes happen in §3 first, then in the HTML. Never the other way round.

---

## 1. Goal and success criteria

The goal is a fast, professional personal site that works as Israr's primary online identity.
It is linked from LinkedIn, Naukri, GitHub and the resume header.

Success means:
- A recruiter understands role, experience, stack, location and how to get in touch within 30 seconds, on a phone.
- A hiring manager can read at least one project in depth and see how Israr approaches a data problem.
- Searching "Israr Mohammed data analyst" finds the site after indexing.
- Link previews look right on LinkedIn and WhatsApp.
- The site costs ₹0/month to run, with a custom domain as the only optional cost.
- Lighthouse mobile scores 95+ in every category, and the site meets WCAG 2.2 AA.

---

## 2. Positioning

| Item | Value | Status |
|---|---|---|
| Name | Israr Mohammed | Verified (resume) |
| Headline | Data Analyst \| Business Intelligence Analyst | Verified (resume) |
| Site headline | Data Analyst, Business Analyst and BI Analyst | Approved (owner, S1) |
| Location | Gurugram, Haryana | Verified (resume) |
| Experience | 4 years (as stated in the resume summary) | Verified (resume) |
| Current role | Business Analyst, EXL (Apr 2025 to present) | Verified (resume) |
| Target roles | Data Analyst, BI Analyst, Business Analyst (no Analytics Engineer or Data Engineer) | Confirmed (owner, S1) |

**Positioning sentence (approved by owner, S1):**
"I turn operational data into validated datasets and Power BI dashboards that help teams find process gaps and close them."

**About paragraph (approved by owner, S1; for homepage §5.2 item 3):**
"I'm a data analyst, business analyst and BI analyst with 4 years of experience turning operational data into validated datasets and Power BI dashboards. At EXL, I support a UK utility client, working across SQL, Python, Databricks and Power BI to close process gaps and deliver ad hoc analysis within SLA. My background is in mechanical and production engineering, which shapes how I approach data: as a process to measure, model and improve. I'm based in Gurugram and looking for data analyst, business analyst and BI analyst roles."

**Core strengths, all evidenced in the resume:**

- **Measurable process impact.** At EXL, final-bill generation went from 80% to 95%, 10-day completion from 90% to 93%, and request-closing efficiency improved by 26%.
- **Platform migration.** He migrated 35+ SQL/HQL scripts from Redshift and Hadoop to Databricks, reducing the runtime of major scripts by 20%.
- **Stakeholder delivery.** He handled 80+ ad hoc requests for UK stakeholders, with 90% delivered within SLA.
- **End-to-end BI.** His work covers requirements, data modelling, DAX, dashboards and presenting insights.

**Differentiators to use:**

- **Engineering background (confirmed, S1: use this angle).** A B.Tech in Mechanical and an M.Tech in Production Engineering fit naturally with process-improvement analytics.
- **Sukoon.** A full-stack app with PostgreSQL and raw SQL shows database depth and the ability to build and ship, which is rare for an analyst.

**How Sukoon is framed:** a "beyond analytics" project, not the lead story (confirmed, S1: target roles are Data/BI/Business Analyst only, so Sukoon stays secondary).

---

## 3. Content inventory (source: resume, Sep 2026)

Everything here is verified from the resume unless it is marked TODO or DRAFT.
The phone number is intentionally excluded from the site and from this repository.

### 3.1 Identity and links

- **Email:** israr4075@gmail.com. Confirmed (owner, S1) as the address to publish.
- **LinkedIn:** https://www.linkedin.com/in/israrmohammed
- **GitHub:** https://github.com/israr-mohammed/. Confirmed (owner, S1).
- **Naukri profile URL:** not linked. The URL the owner supplied (`.../mnjuser/profile?id=&altresid`) is a
  private, logged-in dashboard link with an empty id, not a public profile URL, so it is not published (S1).
- **Portfolio URL:** https://portfolio-website-bo0.pages.dev/ (S0). Custom domain decision deferred to S13 (§12).
- **Photo:** yes, a small photo in the typographic hero (owner, S1). TODO(owner): supply the headshot file.

### 3.2 Professional summary (resume wording, to be condensed for the site)

Data Analyst and Business Analyst with 4 years of experience delivering data-driven solutions using SQL, Python, Power BI,
Databricks and Advanced Excel.

- Experience covers data analysis, dashboard development, data modelling, DAX, Spark SQL and data validation.
- It also includes migrating legacy SQL/HQL workloads to Databricks.
- Skilled in translating business requirements into actionable insights and in building reporting solutions.
- Collaborates with cross-functional and UK-based stakeholders.

### 3.3 Skills (grouped as on the resume)

- **Programming and data analysis:** Python, Pandas, NumPy, SQL, MySQL
- **BI and visualization:** Power BI, Tableau, DAX, Power Query, Data Modelling, Dashboard Development
- **Data platforms:** Databricks, Spark SQL, Hadoop, Hive/HQL, Amazon Redshift
- **Analytics and business:** Data Analysis, Data Validation, KPI Reporting, Advanced Excel, Alteryx, Requirement Gathering, Stakeholder Management
- **From Sukoon (confirmed, S1):** Flask, PostgreSQL, HTML/CSS/JS, pytest, Git/GitHub

### 3.4 Experience

**EXL, Business Analyst (Apr 2025 to present)**

- Supported 5 major business processes for a UK utility client. Translated business requirements and ad hoc requests into validated datasets and reporting solutions using Databricks and Spark SQL.
- Migrated 35+ SQL/HQL scripts from Amazon Redshift and Hadoop to Databricks using Spark SQL.
  - Standardized script formatting and optimized queries.
  - Reduced the runtime of major scripts by 20% while maintaining reporting continuity.
- Investigated billing data using Python, Pandas, Tableau and Alteryx.
  - Found unbilled leaving accounts that needed final bills despite reads being available.
  - Enabled targeted reporting and process improvements that raised final-bill generation from 80% to 95%.
- Analyzed customer leaving and dispute processes using Power BI, DAX and data modelling.
  - Monitored KPIs for leave-journey completion, final-bill generation, read receipt, communication status and dispute resolution.
  - Identified process gaps through flow checks, increasing 10-day completion from 90% to 93%.
- Owned an end-to-end Power BI dashboard covering product end-date extensions, product-switch reasons and open-request ageing.
  - Identified idle, overdue and errored requests through KPI analysis, improving request-closing efficiency by 26%.
- Handled 80+ ad hoc data requests for UK stakeholders, delivering 90% within SLA.
  - Independently managed complex requests through to resolution.
  - 5% of requests evolved into major projects that needed cross-functional coordination and end-to-end ownership.

**TVS Credit, Assistant Manager (Jan 2025 to Mar 2025)**

- Developed Excel dashboards and MIS reports for daily delinquency monitoring, tracking non-payment ageing buckets up to 5 days.
- Automated recurring reporting using Excel Macros, Pivot Tables, INDEX-MATCH and VLOOKUP.

**Professional development and career break (Feb 2023 to Dec 2024)**

- The resume describes a planned career break for competitive government examination preparation.
- During it he continued building analytics skills and completed the IBM Data Analyst Professional Certificate and the Codebasics Data Analytics Bootcamp.
- Site wording (approved, S1): lead with "Career break and upskilling" (the IBM certificate and the Codebasics
  bootcamp), with a brief, low-emphasis mention that the break was for competitive government exam preparation —
  not the focus of the entry. Showing the gap honestly, because recruiters see it on the resume anyway.
- Notice period / availability: not shown publicly (owner, S1).

**Think & Learn Private Limited (BYJU'S), Senior Associate and Associate (Jul 2020 to Jan 2023)**

- Used MySQL, Power BI and Power Query to assess scholarship test and student assessment data.
  - Performed data cleaning, transformation and exploratory analysis on large tagged question datasets.
  - Evaluated topic difficulty and accuracy and identified student strengths and weaknesses.
  - Supported personalized test recommendations.
- Contributed to the BYJU'S Neo Classes project from ideation and sample collection through content preparation.
  - Coordinated with 4 subject teams (Science, SST, Mathematics, Biology) to segregate questions and support structured question supply.
- Built and maintained Power BI dashboards and KPI reports on student engagement, learning progress, dropout trends and assessment performance.
  - Used Power Query, data modelling and Excel.
  - Presented insights to cross-functional stakeholders.

### 3.5 Education

- M.Tech, Production Engineering: Malaviya National Institute of Technology (MNIT), Jaipur, 2018 to 2020
- B.Tech, Mechanical Engineering: Rajasthan Technical University (RTU), Kota, 2013 to 2017

### 3.6 Certifications

- IBM Data Analyst Professional Certificate (IBM / Coursera). TODO(owner): verification link and date.
- Data Analytics Bootcamp (Codebasics). TODO(owner): verification link and date.

### 3.7 Projects

| Project | Stack (from resume) | Links | Site treatment |
|---|---|---|---|
| Business 360 Dashboard | Power BI, MySQL, Power Query, DAX, Excel | TODO(owner): live dashboard URL | Full case study page (V1) |
| IPL 2024 Analytics (Sports Magazine Project) | Power BI, Power Query, DAX | TODO(owner): live dashboard URL | Summary block + screenshot |
| Beverage Market Analysis | SQL, Power BI, Power Query, DAX | TODO(owner): live dashboard URL | Summary block + screenshot |
| Sukoon | Flask, Jinja2, PostgreSQL (psycopg2, raw SQL), HTML/CSS/JS, pytest, Supabase, Render, PWA | TODO(owner): repository public or private | Full case study page (V1) |

**TODO(owner) for each dashboard project:**
- The business question and who it was for.
- The dataset: source, tables, rough size.
- Data model: tables and relationships.
- 3 to 5 key DAX measures or transformations.
- 3 to 5 findings.
- Screenshots of each main view at full resolution.
- Where the live version is hosted.

**TODO(owner) for Sukoon, every item verified from the code:**
- Purpose and users.
- Architecture: where each part runs.
- Database design.
- How authentication, hashing, CSRF, sessions and private media are handled.
- What pytest covers.
- Deployment flow and PWA features.
- Status and usage (only if true).
- Lessons learned.
- Screenshots with demo data only.
- Honest disclosure that Claude (AI) was used to help build Sukoon (owner confirmed this in S1) — state it
  plainly in "how it's built" and/or "lessons learned", rather than implying the code is unassisted work.

Note: the three dashboard projects come from well-known bootcamp challenges, so many candidates show the same ones.
What differentiates Israr's versions is the write-up: the questions asked, the modelling choices, and the insights.
Consider one original-dataset project after V1.

### 3.8 Resume alignment notes (for the owner)

- Use two PDF versions. The private one keeps the phone number and is for direct applications.
  The public `site/resume.pdf` removes the phone number.
- The "Portfolio" and "github" link texts in the PDF must point to the final URLs
  (GitHub: https://github.com/israr-mohammed/; portfolio: the pages.dev URL until a custom domain exists).
- Text extracted from the PDF showed joined words ("finalbill", "leavejourney").
  Copy-paste the PDF text to check it reads cleanly for ATS parsing.
- Keep the headline identical on the resume, LinkedIn, Naukri and the site.
  TODO(owner): the resume PDF and LinkedIn/Naukri currently show "Data Analyst | Business Intelligence Analyst".
  The site now uses "Data Analyst, Business Analyst and BI Analyst" (S1 decision). Update the resume PDF,
  LinkedIn headline and Naukri headline to match before launch (S9/S13), so all four stay identical.

---

## 4. Design system

### 4.1 Concept

The concept is **"the working sheet"**: a technical-drawing feel that is precise, calm, cool and chart-literate.
The site should look like it was made by someone who respects data. It shows impact the way an analyst would: small, honest charts with direct labels.

- **Signature element:** small, honest SVG impact charts (§4.6). This is the one bold thing; everything around it stays quiet.
- **Left-aligned reading column.** Charts, screenshots and diagrams can break out wider.
- **Structure through scale and whitespace,** not boxes. Borders appear only where they carry meaning, such as spec tables.
- **Rejected defaults and why:**
  - A cream-paper background with serif and monospace labels, a neon-on-black look, and identical SaaS cards all read as templated.
  - A big-number stat hero was also rejected, because charts make the same point more honestly.

### 4.2 Color tokens (contrast verified in S2)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--c-sheet` | `#F4F6F5` | `#121A26` | Page background |
| `--c-ink` | `#1D2B45` | `#E6EBF2` | Body text and headings |
| `--c-graphite` | `#4E5A6B` | `#A7B1C0` | Secondary text, "before" values in charts |
| `--c-line` | `#C9D1D9` | `#2C3A4F` | Rules, axes, diagram strokes (never used for text) |
| `--c-signal` | `#2450C8` | `#8FB0FF` | Links, focus ring, "after" values in charts |
| `--c-marker` | `#B7791F` | `#E3A94A` | Rare highlight, non-text only |

- Blue and ochre stay distinguishable for common color-vision deficiencies. Charts also use direct labels, so meaning never depends on color.
- Dark mode follows the operating-system setting (`prefers-color-scheme`) and ships in S11. There is no manual toggle in V1.
- **Verified in S2:** every text-bearing pair clears WCAG 2.2 AA in both themes, most clear AAA —
  `--c-ink` 13.04:1 light / 14.59:1 dark, `--c-graphite` 6.45:1 / 8.07:1, `--c-signal` 6.33:1 / 8.18:1,
  `--c-marker` 3.35:1 / 8.36:1 (needs 3:1, non-text use only). `--c-line` (1.42:1 / 1.52:1) is exempt from
  a contrast requirement: it is restricted to rules/axes/diagram strokes only, never text and never the
  sole indicator of a required UI boundary. No token values changed from the draft above.

### 4.3 Typography

- **Typeface: IBM Plex Sans** (SIL OFL). Chosen by the owner in S2 after comparing it against Archivo
  side by side in the specimen. Self-hosted as two static weights: Regular (400, body) and SemiBold
  (600, headings).
- **Subsetting:** a Latin subset scoped to the exact characters found in this document's approved copy —
  base printable ASCII plus `©` (used in the footer, §5.2) and the em dash (used in the career-break and
  Sukoon AI-disclosure wording, §3.4). No curly quotes/apostrophes exist anywhere in the approved copy, so
  none were added. Produced with `fonttools`/`pyftsubset`. Final payload:
  `IBMPlexSans-Regular-subset.woff2` (9.34 KB) + `IBMPlexSans-SemiBold-subset.woff2` (9.61 KB) =
  **18.96 KB total across 2 files**, well under the ~90 KB budget.
- **Code:** the system monospace stack (`ui-monospace, SFMono-Regular, Consolas, monospace`), so there is no download.
- **Fallback font:** a metric-matched fallback prevents layout shift when the web font loads. Computed
  from IBM Plex Sans Regular's `hhea`/`OS/2` tables in S2: `ascent-override: 102.5%`,
  `descent-override: 27.5%`, `line-gap-override: 0%`. `size-adjust` is tuned in S3 against whichever
  system fallback stack is used, since it needs an empirical no-CLS check rather than a computed constant.
- **Numbers:** IBM Plex Sans exposes no `tnum` (tabular figures) OpenType feature — confirmed in S2 via
  `fontTools` feature inspection, not assumed. `font-variant-numeric: tabular-nums` is therefore not used
  in chart or table styles; declaring it would silently no-op.
- **Type scale:** fluid, about 1.25 on mobile rising to about 1.333 on desktop. Final values, unchanged
  from the S2 draft: `--step--1: clamp(.83rem,.8rem + .15vw,.9rem)`, `--step-0: clamp(1.06rem,1rem + .25vw,1.13rem)`,
  `--step-1: clamp(1.27rem,1.18rem + .4vw,1.5rem)`, `--step-2: clamp(1.53rem,1.38rem + .7vw,2rem)`,
  `--step-3: clamp(1.83rem,1.6rem + 1.1vw,2.66rem)`, `--step-4: clamp(2.2rem,1.85rem + 1.8vw,3.55rem)`.
- **Line height:** 1.55 for body text, 1.1 to 1.2 for headings.
- **Line length:** at most about 68ch. Text is left-aligned with a ragged right edge and never justified.

### 4.4 Spacing and layout

- **Spacing scale:** `--space-3xs` to `--space-3xl` (4, 8, 12, 16, 24, 32, 48, 64, 96 px), with the larger steps fluid.
- **Container:** max-width about 80rem. Page gutters are `clamp(1rem, 4vw, 3rem)`.
- **Grid:** one column on mobile. From 64em, a 12-column grid: text spans about 6 to 7 columns, and media can span the full width.
- **Breakpoints:**
  - Base, 320px and up: one column. Navigation wraps to a second row, with no hamburger if it fits.
  - 40em: hero actions sit side by side.
  - 64em: project blocks become two columns, and the case-study spec sheet moves to a sidebar.
  - 90em: the container stops growing, and margins absorb the rest.

### 4.5 Components (built in S3 and later)

Site header and nav, hero, impact item (chart + text), timeline entry, project block, spec sheet (`<dl>`),
skill group, button (primary and secondary), text link, copy-email button, figure with caption, SVG chart,
data-model diagram, footer.

### 4.6 Impact charts: rules

Chart only what the data supports.

| Metric | Chart |
|---|---|
| Final-bill generation 80% to 95% | Slope chart on a 0 to 100% axis |
| 10-day completion 90% to 93% | Slope chart on a 0 to 100% axis. The small change stays visibly small; that is honest. |
| Script runtime reduced by 20% (35+ scripts) | Indexed bar, 100 to 80, labelled "runtime of major scripts, indexed" |
| Request-closing efficiency +26% | Text only, because there is no baseline to plot |
| 80+ requests, 90% within SLA | Text only, or a simple part-of-whole bar if it adds clarity |

- Every chart has direct value labels, no legend, no gridline clutter, and no truncated axes.
- Every chart has `role="img"`, `<title>` and `<desc>`, and the same numbers appear in visible text next to it.

### 4.7 Motion

- **One orchestrated moment:** the impact chart lines draw once when they first come into view (CSS stroke animation, under about 900ms).
- **Without motion:** with reduced motion enabled or JavaScript off, the charts appear fully drawn.
- **Everything else is response-only:** focus and hover color changes, the copy-email confirmation, expanding `<details>`.
- **No section entrance animations, parallax or hover lifts.**

### 4.8 Voice and copy

- Plain first person, specific, sentence case. Buttons say exactly what happens, e.g. "View resume (PDF)", "Copy email", "Open live dashboard".
- No hype words. No emoji in headings.

---

## 5. Information architecture and page specs

### 5.1 Sitemap (V1)

| URL | Page |
|---|---|
| `/` | Home |
| `/projects/business-360/` | Case study |
| `/projects/sukoon/` | Case study |
| `/resume/` | HTML resume and PDF download |
| `/resume.pdf` | Stable PDF URL (download name set in `_headers`) |
| `/404.html` | Not-found page |

**Not in V1:** a blog, a separate about page, testimonials, a projects index, a contact form, analytics.

### 5.2 Home, in section order

1. **Header.** Name (links home) plus Work, Experience, Resume, Contact.
2. **Hero.**
   - Name as the `<h1>`, then the site headline and the positioning sentence (DRAFT).
   - A plain facts list: location (Gurugram), "Looking for: [roles]", and core stack (SQL, Python, Power BI, Databricks).
   - Actions: View resume, Copy email or send email, LinkedIn, GitHub.
   - The hero is typographic, with no large image. The optional photo stays small.
3. **About.** Three to five sentences (DRAFT from §3.2 and §2), covering what he works on and what he is looking for.
4. **Selected impact (the signature section).**
   - Three or four EXL outcomes, each with its chart, a one-sentence context and the tools used.
   - Context is described generically: "a UK utility client".
5. **Experience.**
   - Reverse-chronological timeline: EXL, TVS Credit, career break, BYJU'S.
   - Each entry shows role, company, dates, two or three concise bullets and tools.
   - Details beyond that can sit in a `<details>` element.
6. **Projects.**
   - Business 360 (featured, links to its case study), IPL 2024, Beverage Market.
   - Sukoon appears in a "Beyond analytics" block.
   - Each block shows name, one-line summary, stack, a screenshot, and links (case study, live dashboard).
7. **Skills.** The four groups from §3.3, each with "where used" links back to experience or projects.
8. **Education and certifications.** Compact list.
9. **Contact.** One sentence inviting contact, then email (with copy button), LinkedIn, GitHub and the resume.
10. **Footer.** Name, © year, "Built with plain HTML and CSS, no trackers."

**Wireframe, mobile (360px):**
```
[Israr Mohammed]            Resume
Work  Experience  Contact
------------------------------------
Israr Mohammed                 <h1>
Data analyst and BI analyst
positioning sentence
Gurugram | Looking for: ...
[View resume] [Copy email]
LinkedIn  GitHub
------------------------------------
Selected impact
Final-bill generation    80% -> 95%
[slope chart, full width]
one-line context, tools
...
```

**Wireframe, desktop (1280px):**
```
Israr Mohammed                     Work  Experience  Resume  Contact
------------------------------------------------------------------
Israr Mohammed                        Location: Gurugram
Data analyst and BI analyst           Looking for: ...
positioning sentence (<=68ch)         Stack: SQL, Python, Power BI
[View resume] [Copy email] LinkedIn GitHub
------------------------------------------------------------------
Selected impact
[chart] text     [chart] text     [chart] text
------------------------------------------------------------------
Experience (timeline, text column) | Projects (summary left, screenshot right)
```

### 5.3 Case study template: dashboard project

1. Title and a one-paragraph summary.
2. Spec sheet: role, type (for example "bootcamp challenge" or "personal project"), tools, links.
3. **The question:** the business problem and who it is for.
4. **The data:** sources, tables, size, and cleaning steps in Power Query or SQL.
5. **The model:** a star-schema SVG diagram and the key relationships.
6. **Key measures:** 3 to 5 DAX measures, each with a one-line purpose. Short code blocks are allowed.
7. **Dashboard walkthrough:** 3 to 5 screenshots, each with a caption explaining what the view answers.
8. **Findings:** 3 to 5 insights, each stated as a finding with the number that supports it.
9. **What I'd do next.**
10. Links.

### 5.4 Case study template: Sukoon

1. Summary and spec sheet: role, timeline, status, stack, links.
2. The problem.
3. What it does: 3 to 5 features with mobile-first screenshots.
4. How it's built: an architecture SVG (vertical on mobile, horizontal on desktop) and a walkthrough.
5. Engineering decisions: 3 to 5 records, each with context, choice and trade-off.
   Candidates: raw SQL vs an ORM, server-rendered Jinja vs a single-page app, private media, sessions and CSRF, testing.
   All must be verified by the owner.
6. Security and privacy.
7. Testing and deployment.
8. Lessons and what's next.

**Cautions:**
- Screenshots use demo data only.
- No demo account on production.
- If the Render instance sleeps, don't give a bare live link. Use screenshots, or add a note about the cold start.
- Audit the repository history for secrets before linking it.

### 5.5 Resume page

- Semantic HTML version of the public resume: summary, skills, experience, education, certifications, projects.
- Print styles produce a clean A4 page: navigation hidden, links printed as text.
- A "Download PDF" link to `/resume.pdf`, plus a "Last updated [month year]" note.

### 5.6 404 page

A short message saying the page wasn't found, with links to Home, Resume and Contact. Same header and footer as the rest of the site.

---

## 6. Technical configuration

### 6.1 `_headers` (starting point)

```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
  X-Frame-Options: DENY
  Cross-Origin-Opener-Policy: same-origin

/assets/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/assets/img/*
  Cache-Control: public, max-age=31536000, immutable

/resume.pdf
  Content-Disposition: inline; filename="Israr-Mohammed-Resume.pdf"
  Cache-Control: public, max-age=3600
```

- Rule: a changed image or font gets a new filename. CSS and JS keep the default revalidation, so they need no versioning.
- Pages allows at most 100 header rules. We will use fewer than 10.

### 6.2 `_redirects`

```
/cv       /resume/     301
/cv.pdf   /resume.pdf  301
```

### 6.3 `robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://<final-domain>/sitemap.xml
```

### 6.4 `<head>` template (every page)

- The charset and viewport meta tags come first.
- Unique `<title>` and a meta description of up to about 155 characters.
- Canonical link (absolute URL) and `theme-color` for both light and dark.
- Preload of the primary font file, then the stylesheet link and the deferred script.
- Open Graph tags: `og:title`, `og:description`, `og:url`, `og:image` (1200x630), `og:type`, `og:site_name`.
- A `twitter:card` tag set to `summary_large_image`.
- Favicons: SVG, ICO and apple-touch-icon.

**Title patterns:**
- Home: `Israr Mohammed | Data Analyst & BI Analyst, Gurugram`
- Case study: `Business 360 Dashboard: Power BI case study | Israr Mohammed`
- Resume: `Resume | Israr Mohammed, Data Analyst`

### 6.5 Structured data (JSON-LD)

- **Home:** a `Person` entry (name, jobTitle, url, `sameAs` [LinkedIn, GitHub], address locality Gurugram,
  alumniOf MNIT Jaipur and RTU Kota, worksFor EXL) plus a `WebSite` entry.
- **Case studies:** an `Article` entry with author = Person, plus `BreadcrumbList`.
- **Only true facts. No ratings or reviews.** Validate with Google's Rich Results Test.

### 6.6 Cloudflare Pages settings

- **Git integration:** GitHub repo, framework preset None, build command empty (`exit 0` if the form requires one), output directory `site`, production branch `main`.
- **Free-plan limits (far above our needs):** 500 builds per month, 20,000 files, 25 MiB per file.
  Static requests are free. Never add Functions.
- **Previews:** preview deployments exist for other branches. Confirm they send `X-Robots-Tag: noindex`.
- **Zone features that must stay off:** Rocket Loader, Email Address Obfuscation, Web Analytics auto-injection and Zaraz.
- **Later option:** Cloudflare now recommends Workers static assets for new projects. Pages is still fully supported,
  and `_headers` and `_redirects` work on both, so moving later is a config change.

### 6.7 Custom domain (optional; the only cost)

- Budget roughly ₹500 to ₹1,500 a year depending on the extension. Check the renewal price. Candidates are TODO(owner).
- Launch steps:
  1. Add the domain in Pages.
  2. Update canonical URLs, `og:url`, the sitemap and robots.
  3. Redirect the pages.dev address to the domain.
  4. Update LinkedIn, Naukri, GitHub and both resume PDFs.
  5. Verify in Search Console.

---

## 7. SEO and sharing

- **Goal:** own searches for "Israr Mohammed" and "Israr Mohammed data analyst", and get clean link previews. Generic keyword ranking is not a goal.
- **Consistent identity:** the same name, headline and photo (if any) on the site, LinkedIn, Naukri, GitHub and the resume.
- **Link the site from:** LinkedIn (contact info and the Featured section), the Naukri online profile, the GitHub profile README, the resume header and the email signature.
- **After launch:** register in Google Search Console and Bing Webmaster Tools, submit the sitemap, and refresh previews with LinkedIn Post Inspector.
- **Share images:** one 1200x630 image per page, using the site's typography and each page's title. No stock art.

---

## 8. Specs (build in order; tick when done)

Each spec follows the same pattern: plan, owner approval, build, acceptance checks, commit, tick.

- [x] **S0: Repository and hosting setup**
  - Scope: inspect the folder; `git init`; `.gitignore`; README stub; `site/index.html` placeholder; GitHub repo; connect Cloudflare Pages.
  - Done when: the placeholder is live on the pages.dev URL over HTTPS, and pushing to `main` redeploys it.

- [x] **S1: Content finalization (no code)**
  - Scope: resolve the §12 questions needed for V1. Owner approves the DRAFT copy and fills the §3 TODOs.
  - Done when: §2 and §3 have no blocking TODOs for S3 to S6. Business 360 and Sukoon case-study content, live
    dashboard URLs, certification links and the custom-domain decision remain as explicit §12 TODOs, scoped to
    their own specs (S7, S8, S6, S13) rather than blocking S1 (owner decision, S1 checkpoint).

- [x] **S2: Design system and specimen**
  - Scope: font choice and subset; final tokens; contrast checks for both themes; the specimen page in `design/` (local only).
  - Done when: the owner approves the type, colors and one sample impact chart. Tokens are copied into §4.

- [ ] **S3: Foundation**
  - Scope: page skeletons for all V1 URLs; `main.css` layers (reset, tokens, base, layout); header, nav and footer; skip link; `404.html`; `_headers`; `_redirects`.
  - Done when: every page has valid structure at 320 to 1920px with placeholder text, the headers are present on a preview deploy, and unknown URLs return 404.

- [ ] **S4: Home, part 1 (hero, about, contact)**
  - Scope: hero content and facts list, action buttons, about paragraph, contact section, copy-email JS with fallback.
  - Done when: the recruiter-essentials test passes on a 360px phone, with no JS errors, keyboard access and axe clean.

- [ ] **S5: Home, part 2 (selected impact and charts)**
  - Scope: 3 or 4 impact items; SVG charts following the §4.6 rules; accessible text equivalents; the one-time draw animation.
  - Done when: charts are correct against §3.4, have honest axes, pass with reduced motion and without JS, and scale correctly at 320px.

- [ ] **S6: Home, part 3 (experience, skills, education)**
  - Scope: timeline, skill groups with "where used" links, education and certifications.
  - Done when: every line matches §3 exactly, and the timeline reads well on mobile.

- [ ] **S7: Projects section and Business 360 case study**
  - Scope: project blocks on home (including the Sukoon teaser); `/projects/business-360/` using the §5.3 template; optimized screenshots; star-schema SVG.
  - Done when: images are AVIF/WebP with dimensions, the live link opens externally, and the content is owner-verified.

- [ ] **S8: Sukoon case study**
  - Scope: `/projects/sukoon/` using the §5.4 template; architecture SVG in vertical and horizontal forms; demo-data screenshots.
  - Done when: every technical claim is owner-verified and the repository audit is done (if linked).

- [ ] **S9: Resume page and public PDF**
  - Scope: `/resume/` HTML; print stylesheet; public PDF without the phone number and with metadata stripped; `/resume.pdf` header.
  - Done when: it prints to one or two clean A4 pages, the PDF downloads as `Israr-Mohammed-Resume.pdf`, and the text copy-pastes cleanly.

- [ ] **S10: SEO and sharing**
  - Scope: titles, descriptions, canonicals, OG tags and images, JSON-LD, `robots.txt`, `sitemap.xml`, favicons.
  - Done when: the Rich Results Test passes, LinkedIn Post Inspector shows correct previews, and the W3C validator passes.

- [ ] **S11: Polish**
  - Scope: dark theme through `prefers-color-scheme`; the current-section nav highlight (optional); final micro-interactions; reduced-motion review.
  - Done when: both themes pass contrast checks, and there are no layout shifts or motion issues.

- [ ] **S12: Full QA pass**
  - Scope: the complete §9 checklist on every page and real devices.
  - Done when: every item passes, or remaining issues are logged in §12 with a decision.

- [ ] **S13: Launch and post-launch**
  - Scope: final deploy; optional custom domain (§6.7); Search Console and Bing; update LinkedIn, Naukri, GitHub and the resumes.
  - Done when: the live URL is verified end to end and the sitemap is submitted.

---

## 9. QA checklist (focused; no automated suite in V1)

**Responsive**
- [ ] Check 320, 360, 375, 390, 414, 768, 1024, 1280, 1440 and 1920px, plus landscape phones.
- [ ] No horizontal scroll anywhere.

**Browsers**
- [ ] Chrome, Edge, Android Chrome.
- [ ] Safari on iOS and macOS (needs an Apple device).

**Accessibility**
- [ ] axe reports no serious issues.
- [ ] Full keyboard-only pass, with visible focus throughout.
- [ ] Screen reader pass with NVDA or TalkBack.
- [ ] 200% text zoom and 400% zoom.
- [ ] Reduced motion enabled.
- [ ] JavaScript disabled.

**Performance**
- [ ] Lighthouse mobile 95+ on every page.
- [ ] Slow 4G throttle test.
- [ ] Budgets from `CLAUDE.md` met.
- [ ] PageSpeed Insights after deploy.

**SEO and sharing**
- [ ] W3C validator passes.
- [ ] Rich Results Test passes.
- [ ] LinkedIn and WhatsApp previews look right.
- [ ] robots and sitemap URLs resolve.
- [ ] Unknown URLs return 404.

**Security**
- [ ] Security headers present, no CSP violations in the console.
- [ ] No injected Cloudflare scripts.
- [ ] No secrets or personal data in the repo.

**Content**
- [ ] Every fact matches §3.
- [ ] No TODOs or placeholders remain.
- [ ] Dates are current and links work.
- [ ] Phone number appears nowhere.

---

## 10. Risks and things to avoid

**Content**
- Fabricated or rounded metrics.
- Naming EXL's client or showing employer data.
- Stale "currently" statements.
- The HTML resume and the PDF drifting apart. Update both in one commit.

**Performance**
- Power BI iframes (several MB each, third-party). Use screenshots and links instead.
- Heavy fonts, animation libraries, autoplay video.

**Cost**
- Adding Functions or server code.
- Paid add-ons.
- A domain's renewal price being higher than the first year.

**Professionalism**
- A template look, logo walls, skill bars.
- Placeholder text at launch.
- A demo link that takes 30 seconds or more to wake up.

**Privacy**
- The phone number, date of birth or address in public files.
- PDF or image metadata.
- Secrets in the Sukoon repository history.

**SEO**
- A missing `404.html`.
- Both the pages.dev address and the custom domain being indexed.
- Duplicate titles.
- Content that depends on JavaScript.

---

## 11. Decisions log

| # | Decision | Reason |
|---|---|---|
| D1 | Static HTML/CSS/vanilla JS with no build step | Four page types; simplest to maintain; fastest |
| D2 | Cloudflare Pages via Git (not Workers, for now) | Simplest Git-push flow; supports domains not on Cloudflare DNS; config is portable to Workers |
| D3 | No contact form; email and LinkedIn instead | No backend, no spam handling, no third-party service |
| D4 | No analytics in V1 | Privacy and performance; Cloudflare Web Analytics can be opted into later (needs a CSP change) |
| D5 | No iframes; dashboards as screenshots with outbound links | Performance, CSP, reliability |
| D6 | Light theme by default, dark theme from the OS setting, no toggle | Less JS and less QA; tokens support both |
| D7 | Impact charts are the one bold design element | Grounded in the analyst's craft, and not a template default |
| D8 | V1 case studies: Business 360 and Sukoon | One analytics depth piece plus one build piece; the others as summaries |
| D9 | Experience comes before projects on home | 4 years of professional experience is the strongest credential |
| D10 | GitHub repo: https://github.com/israr-mohammed/portfolio-website (public). Stable production URL: https://portfolio-website-bo0.pages.dev/ | S0 completed: repo created, connected to Cloudflare Pages, placeholder verified live over HTTPS. Answers §12 Q3 (GitHub username/URL). |
| D11 | Site headline: "Data Analyst, Business Analyst and BI Analyst" (all three roles) | The resume headline, the resume summary wording and the actual EXL job title each name a different subset of the three; the owner chose to include all three consistently rather than pick one, since the target roles are the same three. Resume PDF, LinkedIn and Naukri headlines need updating to match (see §3.8). |
| D12 | Target roles: Data Analyst, BI Analyst, Business Analyst only; no Analytics Engineer or Data Engineer | Keeps Sukoon framed as secondary ("beyond analytics"), not the lead story. Answers §12 Q1. |
| D13 | Positioning sentence and about paragraph approved as drafted (§2) | Owner approved the DRAFT positioning sentence unchanged; the about paragraph was drafted from the approved headline, positioning sentence and engineering angle, and approved as written. Answers part of §12 Q12. |
| D14 | Use the engineering-background differentiator angle | Owner confirmed connecting the B.Tech Mechanical / M.Tech Production Engineering background to process-improvement analytics. |
| D15 | Public email israr4075@gmail.com; GitHub https://github.com/israr-mohammed/; Naukri not linked | Naukri URL supplied was a private, logged-in dashboard link (empty `id` parameter), not a publishable public profile URL. Answers §12 Q2 and Q3. |
| D16 | Photo: yes, a small photo in the hero | Headshot file still to be supplied by the owner. Answers §12 Q7. |
| D17 | Custom domain decision deferred to S13; ship on the pages.dev URL in the meantime | Avoids blocking S1 through S9 on a domain-purchase decision. Answers §12 Q10 (deferred, not declined). |
| D18 | Career-break wording: lead with "career break and upskilling"; brief, low-emphasis mention of government exam preparation | Matches the resume's own disclosure while keeping the site entry focused on upskilling. Answers §12 Q8. |
| D19 | Notice period / availability not shown publicly | Owner preference. Answers §12 Q9. |
| D20 | Sukoon's stack (Flask, PostgreSQL, HTML/CSS/JS, pytest, Git/GitHub) added to the §3.3 skills list; Sukoon's AI (Claude) assistance must be disclosed in its case study | Owner confirmed Sukoon appears on the site and that Claude was used to help build it; per CLAUDE.md's content-honesty rules, this must be stated plainly, not implied as unassisted work. |
| D21 | Test devices confirmed: Windows, iPhone and Android all available | Enables a full cross-browser and Safari/iOS QA pass at S12. Answers §12 Q11. |
| D22 | Final typeface: IBM Plex Sans, self-hosted as two subsetted static weights (Regular 400, SemiBold 600), 18.96 KB total | Owner compared Archivo and IBM Plex Sans side by side in the S2 specimen and chose IBM Plex Sans. Subset scoped to the exact characters found in this document's approved copy (base ASCII plus © and the em dash), produced with `fonttools`/`pyftsubset`; well under the ~90 KB / 2-file budget in §4.3. |
| D23 | `font-variant-numeric: tabular-nums` is not used anywhere in chart or table styles | IBM Plex Sans exposes no `tnum` (tabular figures) OpenType feature — confirmed in S2 via `fontTools` feature inspection rather than assumed. Declaring the property would silently no-op; §4.3 flagged this as a check-in-S2 item. |
| D24 | §4.2 color tokens verified against WCAG 2.2 AA in both themes with no value changes needed | Computed with a rerunnable contrast script in S2 (see §4.2 for the ratios). `--c-line` stays exempt: restricted to rules/axes/strokes, never text or a required UI boundary. |

---

## 12. Open questions (owner)

Resolved in S1: target roles, headline, positioning sentence, about text, engineering-background angle, public
email, GitHub URL, Naukri (not linked), photo, career-break wording, notice period, Sukoon skills, test devices.
See §11 (D11–D21) for each decision and its reasoning. Remaining, still blocking specs as noted:

1. Live dashboard URLs for all three projects, and where each is hosted. Blocks S7 (project summary links).
2. Business 360 details for the case study (§3.7 list): business question, dataset, data model, DAX measures,
   findings, screenshots. Blocks S7.
3. Sukoon verified facts, repository visibility and demo-data screenshots (§3.7 list), including how the
   AI-assistance disclosure (D20) is worded. Blocks S8.
4. Certification verification links and dates, IBM and Codebasics (§3.6). Blocks S6.
5. Custom domain: yes or no, and preferred name (deferred per D17; revisit at S13, not blocking).