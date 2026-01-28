# NPAIAdvisor - Claude Guide

## ⚠️ CRITICAL: Security

**NEVER commit secrets to git:**
- NO real passwords, API keys, tokens, or credentials in ANY files
- Use placeholders: `username:password`, `your-token-here`, `your-api-key`
- Check before every commit: `git diff --cached`
- Real secrets ONLY in `.env.local` or `.env` files (git-ignored)

**Reference:** @/home/brian/SECURITY.md

---

## ⚠️ Use Web Interface (Not Android App)

**Required for**: GitHub file access, MCP tools, strategic planning

**Decision**: Web interface for planning → CLI for implementation

---

## Project Overview

**Three Related Directories**:
1. `/home/brian/workspace/development/npaiadvisor` - Website (Next.js)
2. `/home/brian/workspace/workflows/npaiadvisor-strategy` - Strategic docs
3. `/home/brian/workspace/workflows/personal/npaiadvisor` - n8n workflows

**GitHub Access** (web interface):
```
web_fetch: https://raw.githubusercontent.com/briangflett/npaiadvisor/main/[file]
web_fetch: https://raw.githubusercontent.com/briangflett/npaiadvisor-strategy/main/[file]
```

---

## Working Principles

1. **Read files first** - Check all 3 directories before changes
2. **Strategy alignment** - Read strategy docs before coding
3. **Simple changes** - Minimal, focused modifications
4. **Use proper tools** - `view`/`web_fetch` for reading, `str_replace` for editing

---

## Tech Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui
- **Package manager**: pnpm (not npm!)
- **Deployment**: Vercel at npaiadvisor.com
- **Local dev port**: 3002

```bash
pnpm install            # Install dependencies
pnpm run dev -p 3002    # Dev server on port 3002
pnpm run build          # Production build
```

---

## Key Files

**Strategy docs** (read before content changes):
- `/workflows/npaiadvisor-strategy/docs/STRATEGY.md`
- `/workflows/npaiadvisor-strategy/docs/COLLABORATION_MODEL.md`
- `/workflows/npaiadvisor-strategy/docs/AI_ADOPTION_FRAMEWORK.md`

**Website**:
- `/development/npaiadvisor/README.md`
- `/development/npaiadvisor/app/*/page.tsx`

---

## Design Principles

- Minimal portfolio (not selling services)
- No pricing, no "hire me" CTAs
- Technical peer-to-peer tone
- Collaboration-oriented
- Strategy before implementation

---

**Last Updated**: 2026-01-22