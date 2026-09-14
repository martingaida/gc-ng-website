export function HomePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-foreground">
      <h1 className="text-3xl font-medium tracking-tight">Site title</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Replace this paragraph with a one-to-three sentence answer to the query this page should
        rank and be cited for.
      </p>
      <h2 className="mt-10 text-xl font-medium">What this skeleton includes</h2>
      <ul className="mt-3 list-disc pl-5 text-sm leading-7">
        <li>Agent rules in AGENTS.md, including SEO and AEO</li>
        <li>Vendored skills under skills/</li>
        <li>Codex PR review workflow (no SkillSpector)</li>
        <li>Vite, React, TypeScript, and Tailwind</li>
      </ul>
    </main>
  );
}
