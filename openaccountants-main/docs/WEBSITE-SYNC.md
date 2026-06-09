# Website sync — how skills reach openaccountants.com

This repo is the **source of truth for skill content**. The website does **not** read GitHub directly.

## How it works

1. You edit files under **`skills/`** (never `packages/` — those are generated).
2. Your changes merge to **`main`** on GitHub.
3. Someone runs **Sync Skills** in the **web app repo** (openaccountants.com backend).
4. Sync reads **`skills/` only** — not `packages/`, not `mcp/`.
5. Each skill is upserted into **Supabase** and appears on the site.

**Merging to `main` does not make a skill live.** Sync must run after merge.

## Jurisdiction — required for sync

Every skill file that should appear on the website must have a **resolvable jurisdiction**. Sync uses:

1. **Folder path** (preferred when obvious), or
2. **`jurisdiction:` in YAML frontmatter** (required backup)

If sync cannot resolve jurisdiction → **the file is skipped** and will not show on openaccountants.com.

### Recognized folder → jurisdiction mapping

| Path | Jurisdiction code |
|------|-------------------|
| `skills/international/malta/` | `MT` |
| `skills/international/uk/` | `GB` |
| `skills/international/germany/` | `DE` |
| `skills/international/[country-slug]/` | ISO code from folder (see country skill frontmatter) |
| `skills/federal/` | `US` |
| `skills/us-states/ca/` | `US-CA` |
| `skills/us-states/[code]/` | `US-[CODE]` (two-letter state code, uppercase) |
| `skills/cross-border/` | Set in frontmatter — use `INTL`, `EU-27`, or `GLOBAL` |
| `skills/verticals/` | `GLOBAL` in frontmatter |
| `skills/integrations/` | `GLOBAL` in frontmatter |
| `skills/orchestrator/` | Country code (e.g. `MT`, `GB`) or `GLOBAL` for global-router |
| `skills/foundation/` | Usually **not synced** to website (MCP/packages only) |

When in doubt, add explicit frontmatter:

```yaml
jurisdiction: MT   # Malta
jurisdiction: GB   # United Kingdom
jurisdiction: US   # US federal
jurisdiction: US-CA
jurisdiction: GLOBAL   # verticals, integrations, global orchestrator
jurisdiction: INTL   # cross-border (non-EU-specific)
jurisdiction: EU-27  # EU-wide cross-border rules
```

## What sync does NOT use

- **`packages/`** — generated output for MCP/manual upload; not the website source
- **`packages/manifest.json`** — build artifact only
- **`skills/manifest.json`** — optional metadata; sync works from files + frontmatter

Optional: add an entry to `skills/manifest.json` for discoverability, but folder + frontmatter are enough.

## Checklist before you expect a skill to go live

- [ ] File is in `skills/` (not only in `packages/`)
- [ ] Jurisdiction is clear (folder path or `jurisdiction:` in frontmatter)
- [ ] PR merged to `main`
- [ ] **Sync Skills** run in the web app repo
- [ ] Skill visible on openaccountants.com (may take a few minutes)

## What lives elsewhere

| Concern | Where |
|---------|--------|
| Supabase schema, sync script, deploy | Web app repo |
| Accountant verification, user accounts | openaccountants.com |
| MCP server, package generation | This repo (`mcp/`, `scripts/build-packages.py`) |

This repo owns **content and structure**. The web app owns **publishing and verification**.
