# NPAIAdvisor - Claude Guide

## Project Overview

NPAIAdvisor helps nonprofits adopt AI through collaboration and shared knowledge.

**Three Related Directories**:
1. **This directory** (`/home/brian/workspace/development/npaiadvisor`) - Public portfolio website (Next.js)
2. **Strategy repo** (`/home/brian/workspace/workflows/npaiadvisor-strategy`) - Strategic planning and frameworks
3. **Workflows** (`/home/brian/workspace/workflows/personal/npaiadvisor`) - n8n workflows and automation

**Always read files from all three directories** to understand current state and strategy.

---

## Quick Reference

### Tech Stack (Website)
- Next.js 16 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui
- **Package manager**: pnpm (not npm)
- **Deployment**: Vercel at npaiadvisor.com

### Development
```bash
pnpm install       # Install dependencies
pnpm run dev       # Dev server at localhost:3000
pnpm run build     # Production build
```

---

## Working Principles

1. **Read files first**: Always check current state in all three directories before making changes
2. **Strategy alignment**: Read strategy docs before writing website content
3. **Cross-directory awareness**: Use Read/Glob tools to check related files
4. **Simple changes**: Minimal, focused modifications
5. **Strategy before implementation**: This project prioritizes thinking before building

---

## Finding Current Information

### Website Content & Structure
```bash
# List current pages
ls /home/brian/workspace/development/npaiadvisor/app/*/page.tsx

# Read README for current status
Read: /home/brian/workspace/development/npaiadvisor/README.md
```

### Strategic Context
```bash
# Read strategy documentation
Read: /home/brian/workspace/workflows/npaiadvisor-strategy/README.md
Read: /home/brian/workspace/workflows/npaiadvisor-strategy/NAVIGATION.md

# Key strategic docs (in /workflows/npaiadvisor-strategy/docs/)
- STRATEGY.md - Strategic planning and decisions
- COLLABORATION_MODEL.md - How people work together
- AI_ADOPTION_FRAMEWORK.md - Nonprofit AI adoption framework
```

### Workflows & Automation
```bash
# Check current workflows
ls /home/brian/workspace/workflows/personal/npaiadvisor/

# Read workflow documentation
Read: /home/brian/workspace/workflows/personal/npaiadvisor/*.md
```

---

## Design Principles

**Website**: Minimal portfolio showcasing projects, not selling services
- No pricing, no "hire me" CTAs, no newsletter
- Technical peer-to-peer tone
- Collaboration-oriented

**Project**: Strategy before implementation
- Currently in strategic planning phase
- Focus on collaboration models and frameworks
- Reference: Allard Prize workflows (similar patterns)

---

## External Resources

- **Website**: https://npaiadvisor.com
- **GitHub**:
  - Website: https://github.com/briangflett/npaiadvisor
  - Strategy: https://github.com/briangflett/npaiadvisor-strategy
  - Workflows: https://github.com/briangflett/n8n-brian-workflows
- **Reference project**: https://github.com/briangflett/n8n-ap-workflows (Allard Prize)
- **n8n instance**: https://n8n.masadvise.org

---

## Before Making Changes

1. Read README.md in all three directories
2. Check relevant strategy docs if updating content
3. Review current page structure (ls app/)
4. Test locally before committing
5. Use pnpm, not npm

---

**Last Updated**: 2026-01-15
**Creator**: Brian Flett (MAS - Oakville, Ontario)
