# Frontend agent skeleton

Reusable starting point for a public website: Vite + React + TypeScript + Tailwind, plus the agent skills and rules used on the TCT Ops CRM.

Built so you can stand up another site with **SEO** and **AEO** (answer-engine) requirements from day one.

## What is included

- `AGENTS.md` — how coding agents should work, including skill routing, shadcn wrapping, and SEO/AEO
- `skills/` — frontend-design, shadcn, tastemaker, ui-ux-pro-max, emil (no SkillSpector)
- `.github/workflows/codex-pr-review.yml` and `.github/codex/pr-review-prompt.md`
- `.specify/memory/constitution.md`
- `.tastemaker/` — empty lock to fill after Tastemaker study
- `specs/` — drop product requirements here
- Minimal app: one homepage with title, description, and a direct-answer lead

SkillSpector is **not** included and should not be copied back in unless you explicitly want that scan.

## Start

```sh
pnpm install
pnpm dev
```

Then:

1. Replace `@YOUR_GITHUB_USERNAME` in `.github/CODEOWNERS`
2. Set repository secret `OPENAI_API_KEY` if you use Codex PR review
3. Write `specs/` and run Tastemaker **study** → `.tastemaker/style-lock.md`
4. Update `index.html`, `public/robots.txt`, and `public/sitemap.xml` with the real site URL
5. Add shadcn primitives from the project root: `pnpm dlx shadcn@latest add button` — wrap them in `src/ui/components` (see `AGENTS.md`)

## Do not add `baseUrl`

TypeScript 6+ rejects `compilerOptions.baseUrl`. Vite already maps `@` to `src`. After `shadcn add`, point `cn` at `@/lib/cn` or a relative import. Do not silence the deprecation with `ignoreDeprecations`.
