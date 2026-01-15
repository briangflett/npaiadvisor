# NPAIAdvisor.com - Portfolio Website

Portfolio website showcasing nonprofit AI automation projects and tech peer collaboration network.

## Overview

This is the public-facing website for NPAIAdvisor - Brian Flett's portfolio of nonprofit AI automation work. The site features project case studies, information about tech peer collaboration opportunities, and background on nonprofit technology consulting work.

**Related Projects**:
- **Strategy & Frameworks**: `/home/brian/workspace/workflows/npaiadvisor-strategy/`
- **n8n Workflows**: `/home/brian/workspace/workflows/personal/npaiadvisor/`
- **Reference**: [Allard Prize workflows](https://github.com/briangflett/n8n-ap-workflows)

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Package Manager:** pnpm (not npm)
- **Deployment:** Vercel at [npaiadvisor.com](https://npaiadvisor.com)

## Development

```bash
# Install dependencies
pnpm install

# Run development server (http://localhost:3000)
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm start

# Add shadcn/ui components
pnpm dlx shadcn@latest add [component-name]
```

## Project Structure

**Current pages**: See `app/*/page.tsx` for up-to-date page structure

**Main sections**:
- Home (Are you a Nonprofit or AI Engineer?)
- Nonprofits (Landing page for nonprofit organizations)
- AI Engineers (Landing page for tech peers)
- Projects (Case studies, starting with Allard Prize)
- About (Background, Technical Focus, Connect)
- Contact (Contact form)

**Check the actual files** for current content and structure - they change regularly.

## Design Principles

- **Minimal & Focused:** Simple, clean design without unnecessary features
- **Technical Peer-to-Peer:** Professional but approachable tone
- **Portfolio-First:** Showcases projects, not selling services
- **Collaboration-Oriented:** Emphasizes peer learning network

## What's NOT Included

- ❌ Service pricing or "hire me" CTAs
- ❌ Newsletter signup
- ❌ Blog infrastructure (may add later)
- ❌ Testimonials

## Related Documentation

- **CLAUDE.md** - Working guide for Claude Code
- **Strategy docs** - `/home/brian/workspace/workflows/npaiadvisor-strategy/docs/`
- **Workflows** - `/home/brian/workspace/workflows/personal/npaiadvisor/`

## License

© 2026 Brian Flett. All rights reserved.
