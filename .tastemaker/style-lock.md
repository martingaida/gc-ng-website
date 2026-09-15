# Style lock — Natalie Gaida / Couples Therapy MA

Established: 2026-09-14. Source: own brand study of `https://www.couplestherapyma.com/` plus measured tokens in `specs/BrandDesignGuide.html` and photography/icons under `assets/`. Human-readable locked guide: `specs/BrandDesignDNA.html`. Palette extraction script unavailable this session (Pillow missing); hex roles come from the guide’s live-site measurements, verified with `scripts/check_contrast.py`.

## Palette
- Background (Blush): `#EDD9CF` — primary soft page field
- Surface (White): `#FFFFFF` — relief, cards, high-contrast content
- Surface pale: `#F8F3F0` — nested panels / alternating tint
- Secondary field (Sand): `#C8A47E` — warm section transitions only; not a body-text field
- Primary / Action (Dark Terracotta): `#A16657` — CTA fills with white labels
- Accent (Terracotta): `#C1806C` — underlines, warm accents, large-text emphasis; not normal-size white-on-fill
- Text primary (Cocoa): `#514139` — body and headings
- Text muted: `#74645C` — captions, footers, secondary meta (passes AA on white at 5.65:1; do not use `#88766D`)
- Border / line: `#DDD3CE` — decorative hairlines
- Button label color: white (`#FFFFFF`) on Action `#A16657` — contrast 4.61:1 (AA)
- Guide canvas (docs only): `#EEE8E4` — page-behind-page for print-style guides; not a marketing page bg
- Dark mode: not needed for this project — single warm light mode only

## Color contract

Required ratios by pairing:

| Foreground on background | Floor | Why |
|---|---|---|
| Cocoa on white / blush / pale | 4.5:1 | WCAG AA body |
| White on Action `#A16657` | 4.5:1 | CTA label |
| Muted `#74645C` on white / pale | 4.5:1 | secondary text |
| Accent `#C1806C` as text on white | 3.0:1 | large text / links only if ≥ large-text size; prefer cocoa for body links with accent underline |
| White on Accent `#C1806C` | 3.0:1 | large text only (3.20:1) — never normal-size CTA |
| Cocoa on Sand `#C8A47E` | 4.5:1 | fails body (4.19:1) — large text only, or darken sand / use cocoa on blush instead |
| Decorative hairline `#DDD3CE` | n/a | exempt as pure divider |

Legal pairings (matrix: `text=#514139 bg=#FFFFFF surface=#F8F3F0 primary=#A16657 accent=#C1806C border=#DDD3CE on-primary=#FFFFFF`; blush checked as alternate bg):

- Text-safe (>=4.5): text/bg (white), text/surface (pale), text/on-primary, text/border, primary/on-primary, text on blush `#EDD9CF` (7.13:1), muted/white, muted/pale
- UI-safe (>=3.0 and <4.5): accent/on-primary (white on terracotta, large only), text/accent (cocoa on terracotta, large only), surface/primary, primary/border, bg/accent on white
- Decorative (<3.0): text/primary (cocoa on action — never), surface/accent on pale, most hairline pairings, sand as a text-bearing fill for body copy

Hard rules:
1. CTA fill is always Action `#A16657` + white text (or secondary Blush + cocoa).
2. Never ship white text on `#C1806C` at normal size; keep terracotta as accent/underline/large display.
3. Never put body copy on Sand; use Sand as a field with large display type or short labels only.

## Typography
- Display/heading font: Cormorant Garamond Medium (500/600) — sculptural editorial display from the live site
- Body / UI font: Adobe Garamond Pro (web fallback: EB Garamond 400/500 + italic) — humane reading voice; do not substitute Inter/system sans
- Scale (desktop, from live measurement):
  - Display XL: 56–64px / lh 1.15–1.23
  - Section heading: 38–46px / lh 1.25–1.3 (≤ ~65% of hero display)
  - Card heading: 26–34px / lh 1.25–1.35
  - Body: 18–20px / lh 1.65–1.8
  - Eyebrow / nav: 15–19px / lh 1.3–1.8 — sentence case preferred in new work; live site uses occasional uppercase tracking for nav/CTA
- Measure: 58–72 characters per line for body
- Licensing: confirm Adobe Garamond Pro webfont rights before production; Cormorant Garamond + EB Garamond are the safe Google Fonts pair for scaffolding

## Shape language
- Corner radius: 10–14px controls; 12–24px images/cards; ~20px large media frames
- Shadow depth: soft ambient only on elevated guide/cards (`0 18px 50px rgba(81,65,57,.12)`); marketing pages prefer tonal fields over card shadows
- Border usage: 1px `#DDD3CE` hairlines for tables/separators; no heavy multi-layer shadows; no glassmorphism

## Density & spacing
- Base unit: 8px
- Scale in use: 8 / 16 / 24 / 32 / 48 / 64 / 96
- Section padding (marketing): connective 64–88px · standard 96–120px · pivotal (hero, primary proof, closing CTA) 128–144px desktop; mobile 48–64px
- Content card internal padding: 24–32px (space-6–8)
- Compact/dense: 12–16px for nav rows / meta
- Overall density: generous whitespace, editorial
- Section separation: alternating blush / sand / white tonal fields (one mechanism); avoid mixing card-grids and tonal bands arbitrarily
- Content width: 1200–1320px max with 5–7vw outer padding; text column max ~42rem
- Grid: 12 / 6 / 4 columns; favor 5/7 and 6/6 splits

## Structure
- Macrostructure(s) used: homepage / service pages → **Long-Scroll Narrative**; brand docs → Editorial Index (print-page chapters)
- Narrative arc (homepage): hook (photographic promise) → problem (recognition / “same fight”) → solution (therapist + approach) → how-it-works (services + 3 steps) → proof (permissioned testimonials) → close (consultation CTA + FAQ)
- Suggested section order: Hero → recognition → therapist → services → proof → process → FAQ → consultation
- Shared chrome: Nav **N2** balanced product bar (wordmark + practice links + Book CTA) or minimal **N1** only if destinations stay ≤2; Footer **Ft1** masthead (wordmark, location, quiet links)
- Per-page body archetypes: Hero **H3** photographic fold (full-bleed relational photo; headline + one CTA; soft tonal message panel allowed as brand signature, keep lean); Features **F1** alternating bands for story + **F7**-like service cards (image, specific title, one sentence, one text link); Process **F4** numbered steps; Proof **P3** oversized editorial quotes with initials + consent language; CTA **C2** statement + single Book action; Section heads **S4** stacked label only when a chapter truly needs one (default off)
- Build stamp / log: `.tastemaker/log.json` once marketing pages ship

## Reference intelligence
- Reference board: `.tastemaker/reference-board.md` (viewed sources: live site + brand guide; adjacent therapy sites searched 2026-09-14)
- Design read: marketing narrative for stressed partners seeking couples therapy, mode Persuade + Read, warm editorial lane
- Dials: variance 4, motion 3, density 3, art direction 7
- Foundation: custom aesthetic lane on React / Vite / Tailwind / shadcn wrappers; do not import a second palette or dashboard kit
- Quality bar: live couplestherapyma.com warmth + candid voice; adjacent editorial therapy sites for calm hierarchy — not SaaS template kits
- Direction contract: Thesis — a calm room for an honest conversation; First viewport — brand, one promise, one short support line, one Book CTA, one relational photograph; System — blush/cocoa/terracotta, dual Garamond, tonal full-bleed sections; Risk — over-templating therapy clichés or clinical coldness
- Anti-references: indigo/purple SaaS gradients, glassmorphism, KPI strips, stock therapy-office clichés, Liquid Glass / generic Framer therapy templates, cream+terracotta Anthropic-default lookalike executed without this brand’s photography and voice

## Taste memory
- Profile priors used: none (`~/.tastemaker/profile.md` absent)
- Decision log: `.tastemaker/decisions.log`
- Last resolved decisions: keep H3 soft blush message-panel over hero photography; ship EB Garamond + Cormorant until Adobe Garamond Pro is licensed
- Pending review: none for hero overlay; Adobe Pro webfont remains a future production upgrade
- Profile promotion: none
- Memory precedence note: BrandDesignGuide + this lock win over UI/UX Pro Max design-system suggestions (e.g. rejected Liquid Glass / Montserrat pairing)

## Mood descriptors
warm, candid, editorial, unhurried

## Aesthetic mode
none

## Assets
- Anchor asset: `assets/c35660a5-102--couples-therapy-needham.webp` (hands / table / warmth)
- Supporting cast: kitchen embrace, laughing outdoors, beach closeness, reconnecting close-up under `assets/`
- Asset style: warm natural photography; muted saturation; soft daylight; organic line motifs (continuous stroke, overlapping circles, couple-and-heart mark)
- Illustration vs. photography split: real photography for relational/physical moments; sparse one-color line motifs for reconnection metaphors — no stock illustration kit, no unDraw default scenes
- Illustration source used: preserved existing brand motifs in `assets/93bb0e03-bb7--natalie-gaida-logo-couple-heart-icon.webp` and `assets/b751953b-04e--natalie-gaida-overlapping-circles-icon.webp`
- Logo: preserve Natalie Gaida couple-heart mark byte-for-byte; wordmark in Cormorant Garamond — do not recolor or replace without an explicit rebrand request

## Motion
- Dial: **3** — soft and restrained; presence, not spectacle (owner restored 2026-09-14 for modern feel)
- Curves: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`
- Durations: press 160ms · link/button hover 180–220ms · hero enter 220ms / 12px rise · drawers ≤280ms · no UI motion >300ms without a reason
- Intentional set: (1) hero `enter-rise` message panel, (2) mobile sheet slide/fade, (3) button `active: scale(0.97)`
- Also: FAQ + rotate, nav dropdown opacity, color/hover transitions, smooth scroll (disabled under `prefers-reduced-motion`)
- Forbidden: per-card stagger spam, hover-scale on every card, perpetual ambient loops, parallax, route crossfades
- Reduced motion: drop spatial travel; opacity crossfade ≤150ms only
- Verified by: restored Emil-gated set 2026-09-14

## Do not
- Do not use white text on `#C1806C` for normal-size buttons (use `#A16657`)
- Do not put body copy on Sand `#C8A47E`
- Do not introduce Inter, Roboto, system-ui stacks, or a sans “UI font” beside the Garamond pair
- Do not add purple/indigo gradients, glassmorphism, KPI strips, floating badges, or emoji-as-icons
- Do not replace the couple-heart logo or invent a letter-in-a-box mark
- Do not scatter infinity symbols, hearts, and underlines; one organic underline per viewport max
- Do not invent testimonials, metrics, or credentials
- Do not use ALL-CAPS tracked eyebrows on every section (document chapter labels in the brand guide are the exception)
- Do not follow generic UI/UX Pro Max “Liquid Glass” or feature-showcase SaaS patterns for this brand
