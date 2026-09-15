# AGENTS.md

## Purpose

This repository is a public-facing website skeleton (React, Vite, TypeScript, Tailwind).

Coding agents should optimize for **SEO** (search engines) and **AEO** (answer engines: featured snippets, AI overviews, voice, and citation-friendly pages) as well as visual craft.

Before modifying the repository, read:

1. `.specify/memory/constitution.md`
2. The relevant `specs/<feature>/spec.md` when it exists
3. `.tastemaker/style-lock.md` when it exists
4. Skill files required for the specific task, as described below

Do not begin a substantial implementation until the relevant specification has been reviewed.

Do not load unrelated skills simply because they exist in the repository.

---

## Source of Truth

Requirements are defined in:

```text
specs/
```

Do not infer requirements from the current implementation when they conflict with the specification.

The specification describes intended behavior.

The implementation may be incomplete or incorrect.

For UI work, approved reference designs and `.tastemaker/style-lock.md` further define the intended visual implementation.

---

## Instruction Priority

When instructions conflict, use the following priority:

1. Product requirements and acceptance criteria in `specs/`
2. Approved reference designs and mockups
3. `.tastemaker/style-lock.md`
4. SEO / AEO and accessibility requirements in this file
5. Existing design tokens and component patterns
6. Task-relevant skill guidance
7. Existing implementation details

Skills supplement the project specification. They do not override it.

Do not redesign an established surface merely because a skill recommends a different aesthetic.

---

## Architecture

Single frontend application:

```text
src/                 React application
src/pages/           Routable pages (crawlable content lives here)
src/ui/primitives/   CLI-generated shadcn/Radix source (not imported by pages)
src/ui/components/   Application wrappers (pages import these)
src/lib/cn.ts        Shared className helper
public/              robots.txt, sitemap, static assets
skills/              Vendored agent skills
.tastemaker/         Persistent visual lock
specs/               Product requirements
```

Prefer real routes and semantic HTML over a single client-only view. Answer engines and crawlers need stable URLs and readable document structure.

---

## Agent Skills

Vendored agent skills are stored under:

```text
skills/
```

A skill being present does not mean it should be used for every task.

Prefer the smallest set of skills necessary to complete the current task.

Skill files are repository-owned. Read them directly when relevant.

### Skill Loading

1. Determine whether a skill is relevant using the triggers in this file.
2. If relevant, read its `SKILL.md`.
3. Read `references/` and other supporting assets only when the skill directs you to them or they are directly relevant.
4. Do not recursively load an entire skill directory by default.
5. Do not reread the same skill during one task unless necessary.

### Frontend Design

Location: `skills/frontend-design/SKILL.md`

Use when creating a new page or substantial surface, establishing composition, hierarchy, typography, or performing a visual-quality pass.

Use it to improve execution within the established visual language. Do not use it to replace the approved design direction.

Do not load it for routine spacing changes or small modifications to an established component.

### shadcn/ui

Location: `skills/shadcn/SKILL.md`

Use when selecting or adding UI components, Radix primitives, forms, dialogs, menus, popovers, selects, tables, or sheets.

Preferred layering:

```text
shadcn/Radix primitive
        ↓
application UI component (src/ui/components)
        ↓
page or layout
```

CLI-generated source lives in `src/ui/primitives/` and is not imported by pages.

When adding a primitive:

1. From the project root, run `pnpm dlx shadcn@latest add <name>` (`components.json` is at the root).
2. After the CLI writes the file, ensure `cn` imports resolve to `src/lib/cn.ts`. Prefer `@/lib/cn` (Vite `@` → `src`). If the CLI writes `@/cn`, rewrite it. Do **not** add `compilerOptions.baseUrl` — it is deprecated in TypeScript 6+ and will fail typecheck. Do not set `ignoreDeprecations` to hide that.
3. Wrap the primitive in `src/ui/components/` and export it from `src/ui/components` (or a barrel you already use).
4. Pages import wrappers, never `src/ui/primitives`.

Do not pull shadcn dashboard blocks, Sidebar kits, or a second palette that overrides the style lock. After `shadcn init` or `add`, re-apply lock tokens if the CLI rewrote CSS variables.

### Tastemaker

Location: `skills/tastemaker/SKILL.md`

Use when initially establishing or deliberately changing the visual language, comparing major UI against references, or updating `.tastemaker/style-lock.md`.

Do not invoke Tastemaker for routine UI implementation.

Do not run a product-wide Tastemaker `build` that introduces illustrations, narrative landing arcs, or home-dir `~/.tastemaker` / `~/.ideagram` workflows unless the specification explicitly requires that.

Once `.tastemaker/style-lock.md` exists, consult it rather than rerunning Tastemaker.

### UI/UX Pro Max

Location: `skills/ui-ux-pro-max/SKILL.md`

Use as a UX review skill: keyboard, focus, hierarchy, empty/error states, responsive behavior, forms.

Do not `--persist` a UI/UX Pro Max design system that replaces the style lock.

Do not use it to pick a new visual style for the product.

From the repository root:

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --domain ux
```

### Design Engineering / Motion

Location: `skills/emil/emil-design-eng/SKILL.md`

Related (load by trigger; prefer the smallest set needed):

| Path | When to load |
|------|----------------|
| `skills/emil/emil-design-eng/SKILL.md` | Any animation, transition, or interaction-feedback work; default motion judgment |
| `skills/emil/animate/SKILL.md` | Building a new motion from scratch (curve, duration, properties) |
| `skills/emil/find-animation-opportunities/SKILL.md` | Before adding motion — decide what deserves animation vs what not to animate |
| `skills/emil/improve-animations/SKILL.md` | After a first motion pass — audit and prioritize fixes |
| `skills/emil/review-animations/SKILL.md` | Gate before calling UI work done when motion shipped |
| `skills/emil/animation-vocabulary/SKILL.md` | When specifying or critiquing motion in precise language |

Use only when the task involves animation, transitions, or interaction feedback.

Motion must be restrained. Prefer CSS over a new animation dependency.

Do not vendor or use `skills/emil/pick-ui-library` — the stack is already shadcn/Radix + Tailwind.

Motion workflow when shipping interaction feedback:

```text
find-animation-opportunities
        ↓
animate / emil-design-eng (CSS-first)
        ↓
improve-animations
        ↓
review-animations
```

---

## UI Task Workflow

```text
relevant specification
        ↓
approved mockup/reference
        ↓
style lock
        ↓
frontend-design when design judgment is required
        ↓
shadcn when primitives are being selected or built
        ↓
implementation (semantic HTML + SEO/AEO metadata)
        ↓
UI/UX review for substantial features
        ↓
find-animation-opportunities → animate / emil-design-eng → improve-animations → review-animations
```

For a new marketing or content page, also verify title, description, headings, canonical, and structured data before calling the work complete.

---

## SEO and AEO

These are product requirements, not optional polish.

### SEO

Every public route must have:

- a unique, human-readable `<title>`
- a unique meta description
- a canonical URL
- one `h1` that matches the page’s topic
- a sensible heading hierarchy (`h2` / `h3`) — do not skip levels for style
- meaningful `alt` text on informative images; empty `alt` only when decorative
- crawlable primary content in the HTML document (do not hide the main answer behind a client-only fetch with no fallback)
- Open Graph and Twitter/X tags that match the visible page
- `lang` on `<html>`

Site-level:

- keep `public/robots.txt` and `public/sitemap.xml` accurate as routes are added
- prefer stable paths; do not change URLs without redirects
- do not block CSS/JS that the page needs to render content
- use readable URLs (`/services/espresso-catering`, not `/p?id=12`)

### AEO (answer engines)

Write pages so a model or snippet can cite them:

- Lead with a direct answer (1–3 sentences) before supporting detail
- Use question-shaped headings when they match real queries
- Prefer definition lists, numbered steps, and short FAQ sections over walls of prose
- Add JSON-LD (`WebSite`, `Organization`, `Article` or `FAQPage`, `BreadcrumbList`) when the page type warrants it
- One topic per URL; do not mix unrelated offers on a URL you want cited
- Keep facts consistent across title, h1, body, and schema
- Do not cloak: the same primary content must be visible to users and crawlers

When implementing a page, treat missing metadata or an uncrawlable main as incomplete work.

---

## Visual Direction

Until a style lock is written, stay:

```text
restrained
high contrast
clear hierarchy
minimal decorative chrome
```

Avoid generic AI-generated SaaS patterns unless the specification requires them:

- gradient heroes without a product reason
- oversized KPI cards
- glassmorphism
- gratuitous illustrations
- arbitrary accent colors
- decorative motion

Run Tastemaker **study** then write `.tastemaker/style-lock.md` before a large visual pass.

---

## Accessibility

Use semantic HTML. Require associated labels, keyboard-accessible controls, visible focus, sufficient contrast, and accessible Radix/shadcn primitives for complex controls.

Do not replace semantic controls with clickable `<div>` elements.

---

## Code Quality

Use TypeScript strict mode. Avoid `any`. Prefer small focused modules.

Do not introduce new dependencies when the existing React / Tailwind / shadcn / Radix / Lucide stack is enough.

Do not add `compilerOptions.baseUrl`.

---

## Testing

Before considering work complete, run:

```bash
pnpm typecheck
pnpm build
```

For substantial UI work, also verify loading, empty, and error states, keyboard and focus behavior, and how the page reads with CSS disabled or in the document outline (SEO).

---

## GitHub

Codex PR review lives in `.github/workflows/codex-pr-review.yml`. It needs repository secret `OPENAI_API_KEY`.

SkillSpector is intentionally not part of this skeleton. Do not add it unless the new repository explicitly wants that scan.
