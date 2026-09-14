"""Every script invocation in the vendored skill markdown resolves to a real file.

This skill is vendored at skills/ui-ux-pro-max/ in the CRM repository, not under
the upstream Claude plugin layout (.claude/skills/ or ${CLAUDE_PLUGIN_ROOT}).
Documented commands must use that repository-relative path so agents can run
them from the repo root.
"""

import re
import unittest
from pathlib import Path

SKILL_DIR = Path(__file__).resolve().parents[2]
REPO = SKILL_DIR.parents[1]
SEARCH_SCRIPT = "skills/ui-ux-pro-max/scripts/search.py"
INVOCATION = re.compile(r'(?<![\w/.-])(?:python3?|node|bash)\s+"?([^\s"`\']+\.(?:py|cjs|js|mjs|sh))')
PLUGIN_ROOT = "${CLAUDE_PLUGIN_ROOT}"


def shipped_invocations():
    for md in sorted(SKILL_DIR.rglob("*.md")):
        for lineno, line in enumerate(md.read_text(encoding="utf-8").splitlines(), 1):
            for match in INVOCATION.finditer(line):
                yield md, lineno, match.group(1)


def resolve(path):
    """Return (target, None) for a valid path, or (None, reason)."""
    if PLUGIN_ROOT in path or path.startswith(".claude/") or "/.claude/skills/" in path:
        return None, "plugin-root paths are not valid in this vendored skill layout"
    if path == SEARCH_SCRIPT or path.startswith("skills/ui-ux-pro-max/scripts/"):
        return REPO / path, None
    if path.startswith("scripts/"):
        return SKILL_DIR / path, None
    return None, "expected skills/ui-ux-pro-max/scripts/<file> from the repository root"


class SkillScriptPathsTest(unittest.TestCase):
    def test_every_shipped_markdown_invocation_resolves_from_the_repository_root(self):
        problems, seen = [], 0
        for md, lineno, path in shipped_invocations():
            seen += 1
            target, reason = resolve(path)
            if reason is None and not target.is_file():
                reason = f"no such file: {target}"
            if reason:
                problems.append(f"{md.relative_to(REPO)}:{lineno}: {path} -- {reason}")
        self.assertGreater(seen, 0, "extractor found no script invocations in the vendored skill")
        self.assertEqual(problems, [], "\n" + "\n".join(problems))


if __name__ == "__main__":
    unittest.main()
