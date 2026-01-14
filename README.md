# NPAIAdvisor.com - Portfolio Website

Portfolio website showcasing nonprofit AI automation projects and tech peer collaboration network.

## Overview

This is the public-facing website for NPAIAdvisor - Brian Flett's portfolio of nonprofit AI automation work. The site features project case studies, information about tech peer collaboration opportunities, and background on nonprofit technology consulting work.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Deployment:** Vercel (coming soon)

## Project Structure

```
app/
├── page.tsx              # Home page (Hero, Featured Project, Tech Peers, Current Work)
├── about/
│   └── page.tsx          # About page (Background, Technical Focus, Connect)
├── projects/
│   ├── page.tsx          # Projects landing page
│   └── allard-prize/
│       └── page.tsx      # Allard Prize case study
├── layout.tsx            # Root layout with navigation and footer
└── globals.css           # Global styles

components/
├── navigation.tsx        # Site navigation header
├── footer.tsx           # Site footer
└── ui/                  # shadcn/ui components
    ├── card.tsx
    └── button.tsx
```

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Key Pages

### Home (/)
Four sections:
1. **Hero** - Main tagline and CTAs
2. **Featured Project** - Allard Prize preview
3. **For Tech Peers** - Collaboration opportunity
4. **Current Work** - MAS consulting link

### Projects (/projects)
- Landing page for project case studies
- Featured: Allard Prize donor outreach automation
- Placeholder for 1-2 future projects

### Allard Prize Case Study (/projects/allard-prize)
Detailed breakdown:
- Problem/Challenge
- Solution (4-part workflow system)
- Technology Stack
- Results & Impact
- Links to GitHub and Allard Prize

### About (/about)
- Background (career, MAS work)
- Technical Focus (tools, specializations)
- Current Work (MAS, Allard Prize)
- Looking for Collaborators
- Outside Interests
- Connect (LinkedIn, GitHub, Email)

## Design Principles

- **Minimal & Focused:** Simple, clean design without unnecessary features
- **Technical Peer-to-Peer:** Professional but approachable tone
- **Portfolio-First:** Showcases projects, not selling services
- **Collaboration-Oriented:** Emphasizes peer learning network

## What's NOT Included

- ❌ Service pricing
- ❌ Newsletter signup
- ❌ Blog infrastructure (may add later)
- ❌ Testimonials
- ❌ "Hire me" CTAs

## Deployment

Will be deployed to Vercel at **npaiadvisor.com** (coming soon).

## License

© 2026 Brian Flett. All rights reserved.
