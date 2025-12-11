# GhostPad Website Project

## Project Overview

This is the marketing/landing website for **GhostPad** - a Windows desktop application that provides real-time AI assistance through a translucent overlay. The website will serve as the primary marketing tool to attract users and drive downloads.

### About GhostPad (The Product)

**GhostPad** is a Windows 10/11 desktop application built with Electron that provides:
- Always-on-top translucent overlay for AI assistance
- Instant screen capture (overlay automatically excluded)
- Multi-provider LLM support (Gemini, OpenAI, Anthropic)
- Conversation memory with context preservation
- Global keyboard shortcuts (Ctrl+/, Ctrl+R)
- Privacy-first architecture (no data persistence)
- Bring-your-own-API-key model (no subscriptions)
- Lightweight and fast performance

**Technology Stack (Desktop App):**
- Electron v32.2.7
- Vanilla JavaScript/HTML/CSS
- Vite build tool
- Multiple LLM providers (@google/generative-ai, openai, @anthropic-ai/sdk)
- Sharp for image processing
- marked.js for markdown rendering
- KaTeX for math equations
- highlight.js for code syntax highlighting

**Current Status:**
- MVP nearly complete (v0.1.0)
- Core features fully implemented
- Final testing & polish phase
- Ready for Windows installer/executable

**Target Audience:**
- Windows users (10/11)
- Developers, students, researchers, content creators
- Users who want AI assistance without subscription bloat
- Privacy-conscious users who prefer BYOK (Bring Your Own Key)

## Website Goals

1. **Primary Goal:** Drive downloads of GhostPad desktop application
2. **Secondary Goals:**
   - Educate users on features and benefits
   - Build trust through transparency (privacy, security, open-source)
   - Provide clear setup instructions
   - Establish credibility in the AI assistant space
   - Support SEO for discovery

## Design Inspiration

Based on analysis of cluely.com, interviewcoder.co, and pluely.com:

### Key Design Patterns to Adopt:
1. **Dark-first modern design** - Tech-forward aesthetic appropriate for developer tools
2. **Strong hero section** with clear value proposition and immediate CTA
3. **Prominent download buttons** - Mac/Windows options (though GhostPad is Windows-only for now)
4. **Feature showcase** using card grids with icons
5. **Video/GIF demos** showing product in action (translucent overlay, screen capture, AI responses)
6. **Social proof** - Testimonials when available, badges (open source, privacy-focused)
7. **Comparison elements** - vs traditional AI assistants or subscription services
8. **Privacy/security emphasis** - SOC 2-style trust indicators adapted for open-source context
9. **Minimalist navigation** - Keep it simple and focused
10. **Gradient accents** and translucent effects (mirrors the product's overlay aesthetic)
11. **Clear pricing/model transparency** - BYOK, no subscriptions, pay only LLM API costs

### Color Palette Ideas:
- **Primary:** Dark backgrounds (#161616, #1a1a1a) with subtle gradients
- **Accents:** Soft blues/purples for tech feel, possibly ghost-themed subtle whites/grays
- **CTAs:** Bright, high-contrast buttons (green, blue, or white on dark)
- **Text:** White/light gray for primary, muted for secondary

### Typography:
- Modern sans-serif (Inter, Geist, or similar)
- Clear heading hierarchy (5xl → 4xl → 3xl → 2xl)
- Readable body text (16-18px)
- Code snippets in monospace font

## Website Structure (Planned)

### Navigation:
- Home (anchor)
- Features (anchor)
- Download
- Docs/Setup
- GitHub (external link)

### Sections:

#### 1. Hero Section
- **Headline:** "Your Invisible AI Assistant" or "GhostPad - AI That Stays Out of Your Way"
- **Subheadline:** Brief description (1-2 sentences)
- **Primary CTA:** Download for Windows button
- **Secondary CTA:** View on GitHub / Watch Demo
- **Visual:** Hero image/video showing the translucent overlay in action

#### 2. Key Features (4-6 cards)
- Translucent overlay that stays on top
- Multi-provider LLM support (Gemini, OpenAI, Claude)
- Instant screen capture (excluded from capture)
- Privacy-first (no data persistence)
- BYOK model (no subscriptions)
- Keyboard shortcuts & productivity

#### 3. How It Works (Step-by-step)
1. Capture your screen
2. Ask a question
3. Get AI-powered answers
4. Continue the conversation

#### 4. Demo Section
- Video/GIF showing:
  - Overlay positioning
  - Screen capture
  - AI response streaming
  - Markdown/code rendering

#### 5. Why GhostPad?
- Comparison table or feature list:
  - vs ChatGPT/Claude web apps (context from screen)
  - vs subscription AI tools (BYOK model)
  - vs bloated desktop apps (lightweight, fast)

#### 6. Privacy & Security
- No data persistence
- Local API key storage
- Session-only chat history
- User-controlled capture
- Open source & transparent

#### 7. Getting Started
- Prerequisites (Windows 10/11, Node.js, API key)
- Quick setup steps
- Links to detailed docs

#### 8. Download Section
- Download for Windows button (primary)
- Link to GitHub releases
- System requirements
- Version info

#### 9. FAQ (if needed)
- Common questions about setup, privacy, cost

#### 10. Footer
- Links: GitHub, Docs, Privacy Policy, MIT License
- Social links (if applicable)
- "Made with ☕ for Windows users who want AI assistance without the bloat."

## Technology Stack (Website)

**To Be Determined:**
- Framework options:
  - Next.js (React) with Tailwind CSS
  - Astro (static site with optional React islands)
  - Vite + Vanilla HTML/CSS/JS (consistent with GhostPad's stack)
  - SvelteKit
- Hosting: Vercel, Netlify, or GitHub Pages
- Analytics: Optional (privacy-respecting)

## Content Priorities

1. **Clear value proposition** - What is GhostPad and why should I use it?
2. **Visual demonstration** - Show, don't just tell
3. **Trust building** - Privacy, open source, transparent pricing
4. **Easy onboarding** - Clear path from landing to download to setup
5. **Developer-friendly** - Technical but accessible

## Brand Voice

- **Tone:** Professional but approachable, technical but not intimidating
- **Style:** Direct, transparent, no marketing fluff
- **Personality:** Built for power users who value efficiency and privacy
- **Key messages:**
  - "Lightweight and fast"
  - "Privacy-first"
  - "No subscriptions, no bloat"
  - "Bring your own API key"
  - "Open source and transparent"

## Success Metrics (Future)

- Download conversions
- GitHub stars/forks
- Time on page
- Bounce rate
- User feedback on setup clarity

## Next Steps

1. Choose web technology stack
2. Set up project structure
3. Design mockups/wireframes (optional, or build directly)
4. Implement hero section
5. Build out feature sections
6. Create demo assets (videos/GIFs from GhostPad app)
7. Polish and deploy
8. Set up analytics (optional)

## Reference Links

- **GhostPad Repository:** (Local: ../Project-GhostPad)
- **GhostPad README:** ../Project-GhostPad/README.md
- **Inspiration sites:**
  - https://cluely.com
  - https://interviewcoder.co
  - https://pluely.com

## Notes

- The website should reflect the product's aesthetic: clean, minimal, translucent/ghost-themed
- Emphasize the "invisible assistant" concept
- Focus on the unique value: screen context + multi-provider LLMs + privacy + BYOK
- Keep it simple - this is an MVP website for an MVP product
- Consider adding a blog section later for SEO and community building
