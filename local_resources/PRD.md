# Product Requirements Document (PRD)
# GhostPad Marketing Website

**Version:** 1.0
**Date:** December 11, 2024
**Status:** In Development
**Project Type:** Marketing/Landing Website

---

## Executive Summary

This PRD outlines the requirements for building a marketing website for GhostPad, a Windows desktop application that provides real-time AI assistance through a translucent overlay. The website will serve as the primary marketing channel to drive downloads, educate users, and establish trust.

---

## Product Overview

### What is GhostPad?

GhostPad is a Windows 10/11 desktop application (Electron-based) that provides:
- Always-on-top translucent overlay for AI assistance
- Instant screen capture with overlay exclusion
- Multi-provider LLM support (Gemini, OpenAI, Anthropic)
- Conversation memory with intelligent context management
- Privacy-first architecture with BYOK (Bring Your Own API Key) model
- Keyboard shortcuts for productivity
- No subscriptions, no data persistence

**Current Status:** v0.1.0 MVP nearly complete, in final testing phase

### Target Audience

- **Primary:** Windows users (10/11) who want AI assistance without subscription bloat
- **Secondary Personas:**
  - Developers and technical professionals
  - Students and researchers
  - Content creators and writers
  - Privacy-conscious users who prefer BYOK models
  - Power users who value keyboard shortcuts and efficiency

---

## Website Goals & Objectives

### Primary Goal
Drive downloads of the GhostPad desktop application for Windows

### Secondary Goals
1. Educate users on features, benefits, and use cases
2. Build trust through transparency (privacy, security, open-source)
3. Provide clear setup instructions and documentation
4. Establish credibility in the AI assistant space
5. Support SEO for organic discovery
6. Foster community engagement (GitHub)

### Success Metrics (Future)
- Download conversion rate
- GitHub stars/forks
- Time on page / engagement metrics
- Bounce rate
- User feedback on clarity of setup instructions

---

## Technical Requirements

### Technology Stack

**Framework & Core:**
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Package Manager:** npm (consistent with GhostPad)

**Hosting & Deployment:**
- **Hosting:** Vercel (recommended) or Netlify
- **Domain:** TBD
- **Repository:** Git (GitHub)

**Additional Libraries:**
- Framer Motion (animations and scroll effects)
- next/image (optimized image loading)
- react-markdown or similar (if needed for docs)
- Syntax highlighting for code snippets (if needed)

### Browser Support
- Modern browsers (Chrome, Firefox, Edge, Safari)
- Last 2 versions of each major browser
- Mobile responsive (though product is Windows-only)

### Performance Requirements
- Lighthouse score: 90+ across all categories
- First Contentful Paint (FCP): < 1.5s
- Time to Interactive (TTI): < 3.5s
- Mobile-friendly despite desktop-only product

---

## Website Structure

### Site Type
**Hybrid Structure:**
- Single-page landing/home page with anchor navigation
- Separate multi-page documentation section

### Navigation

**Main Navigation:**
- Home (anchor)
- Features (anchor to section)
- Download (anchor to section)
- Docs (separate page/section)
- GitHub (external link)

**Footer Navigation:**
- About
- Documentation
- Privacy Policy
- MIT License
- GitHub Repository
- Contact/Support (if applicable)

---

## Page Sections & Content Requirements

### 1. Hero Section

**Purpose:** Capture attention and communicate value proposition immediately

**Content Requirements:**
- **Headline:** "Your Invisible AI Assistant" or "GhostPad - AI That Stays Out of Your Way"
- **Subheadline:** 1-2 sentence description emphasizing key differentiators
- **Visual:** Hero image/video/animation showing translucent overlay in action
- **Primary CTA:** "Download for Windows" button (prominent)
- **Secondary CTA:** "View on GitHub" or "Watch Demo"
- **Quick Stats/Badges:** Open source, MIT License, Multi-provider support

**Design Notes:**
- Dark background with subtle gradient
- Translucent/glassmorphic elements echoing product design
- High contrast CTAs

---

### 2. Key Features Section

**Purpose:** Highlight core capabilities and differentiators

**Content Requirements:**
- 6 feature cards with icons:
  1. **Translucent Overlay** - Always on top, stays out of your way
  2. **Multi-Provider LLMs** - Gemini, OpenAI, Claude support
  3. **Instant Screen Capture** - Overlay excluded from capture
  4. **Privacy First** - No data persistence, BYOK model
  5. **Conversation Memory** - AI remembers context from earlier messages
  6. **Keyboard Shortcuts** - Ctrl+/, Ctrl+R for productivity

**Design Notes:**
- Grid layout (3 columns on desktop, 1-2 on mobile)
- Icons for each feature (SVG)
- Hover effects
- Brief description under each feature (2-3 sentences)

---

### 3. How It Works Section

**Purpose:** Show users the workflow in simple steps

**Content Requirements:**
- 4-step process:
  1. **Capture your screen** - Click screenshot button
  2. **Ask a question** - Type in the input field
  3. **Get AI-powered answers** - Streaming responses with markdown/code
  4. **Continue the conversation** - Context preserved throughout chat

**Design Notes:**
- Step-by-step visual flow (numbered)
- Screenshots or illustrations for each step
- Progressive disclosure pattern

---

### 4. Demo Section

**Purpose:** Show the product in action through visual media

**Content Requirements:**
- **Demo video or GIF showing:**
  - Overlay positioning and translucency
  - Screen capture functionality
  - AI response streaming
  - Markdown/code rendering
  - Conversation flow

**Placeholder Requirements:**
- Video player or embedded GIF
- Captions explaining what's happening
- Optional: Multiple demos for different use cases

---

### 5. Why GhostPad? (Comparison/Benefits)

**Purpose:** Differentiate from alternatives and address objections

**Content Requirements:**
- **vs ChatGPT/Claude Web Apps:**
  - GhostPad: Screen context, overlay stays on top
  - Web apps: Tab switching, no screen context

- **vs Subscription AI Tools:**
  - GhostPad: BYOK, pay only API costs
  - Others: Monthly fees, locked-in pricing

- **vs Bloated Desktop Apps:**
  - GhostPad: Lightweight (small footprint), fast
  - Others: Heavy resource usage

**Design Notes:**
- Comparison table or side-by-side layout
- Checkmarks/crosses for feature comparison
- Highlight GhostPad advantages

---

### 6. Privacy & Security Section

**Purpose:** Build trust with privacy-conscious users

**Content Requirements:**
- **No Data Persistence** - Screenshots never saved (except dev mode)
- **Session-Only History** - Chat cleared on new session/restart
- **Local API Keys** - Stored locally, never transmitted to third parties
- **User-Controlled Capture** - Screenshots only when you click
- **Open Source** - Transparent, auditable code
- **MIT License** - Free and open

**Design Notes:**
- Trust badges/icons
- Clear, concise statements
- Link to GitHub for transparency

---

### 7. Getting Started Section

**Purpose:** Guide users from interest to successful setup

**Content Requirements:**
- **Prerequisites:**
  - Windows 10 (v2004+) or Windows 11
  - Node.js 18+ and npm
  - API key from chosen LLM provider (Gemini, OpenAI, or Anthropic)

- **Quick Setup Steps:**
  1. Download the application
  2. Extract and install
  3. Run GhostPad
  4. Configure LLM provider in settings
  5. Enter API key
  6. Start using

- **Links:**
  - Detailed documentation
  - API key signup links (Gemini, OpenAI, Anthropic)
  - GitHub repository

**Design Notes:**
- Numbered steps with icons
- Expandable details if needed
- Clear CTAs to docs and download

---

### 8. Download Section

**Purpose:** Primary conversion point - get users to download

**Content Requirements:**
- **Primary CTA:** Large "Download for Windows" button
- **Alternative:** "View on GitHub" / "Download from Releases"
- **System Requirements:**
  - Windows 10 (version 2004+) or Windows 11
  - Node.js 18+
  - API key for LLM provider
- **Current Version:** v0.1.0 (update dynamically)
- **File Size:** TBD
- **Release Notes:** Link to changelog

**Design Notes:**
- Most prominent section
- High contrast CTA button
- Platform badge (Windows logo)
- Checksum/verification info if applicable

---

### 9. FAQ Section (Optional, if needed)

**Purpose:** Address common questions and objections

**Potential Questions:**
- What LLM providers are supported?
- How much does it cost?
- Is my data safe?
- Why do I need to bring my own API key?
- Can I use it on Mac/Linux?
- How do I get an API key?

**Design Notes:**
- Accordion/expandable format
- Categorized if many questions
- Search functionality if extensive

---

### 10. Footer

**Purpose:** Provide secondary navigation and legal/social links

**Content Requirements:**
- **Navigation Links:**
  - Home, Features, Download, Docs
- **Resources:**
  - GitHub Repository
  - Documentation
  - API Key Setup Guides
- **Legal:**
  - Privacy Policy
  - MIT License
  - Terms of Use (if applicable)
- **Social/Community:**
  - GitHub link
  - Contact/Support (email or GitHub issues)
- **Branding:** "Made with ☕ for Windows users who want AI assistance without the bloat."

**Design Notes:**
- Dark background
- Multi-column layout
- Copyright notice
- Social icons

---

## Documentation Section (Separate Pages)

### Structure
- `/docs` route with sub-pages:
  - `/docs/getting-started` - Installation and setup
  - `/docs/features` - Detailed feature documentation
  - `/docs/keyboard-shortcuts` - Hotkey reference
  - `/docs/privacy` - Privacy and security details
  - `/docs/troubleshooting` - Common issues and solutions
  - `/docs/api-keys` - How to get API keys from each provider
  - `/docs/contributing` - For open-source contributors

### Design Requirements
- Sidebar navigation
- Search functionality (future)
- Code syntax highlighting
- Step-by-step guides with screenshots
- Breadcrumbs
- "Edit on GitHub" links

---

## Design Requirements

### Visual Design

**Color Palette:**
- **Primary Background:** Dark (#0a0a0a, #161616)
- **Secondary Background:** Slightly lighter dark (#1a1a1a, #1f1f1f)
- **Accent Colors:** Soft blues/purples, ghost-themed whites/grays
- **Text Primary:** White/off-white (#ffffff, #f5f5f5)
- **Text Secondary:** Muted gray (#a0a0a0, #888888)
- **CTA Buttons:** Bright, high contrast (blue, green, or white on dark)
- **Success/Trust:** Green tones
- **Warning/Alert:** Amber/orange tones

**Typography:**
- **Font Family:** Inter, Geist, or similar modern sans-serif
- **Heading Hierarchy:**
  - H1: 5xl (48px+)
  - H2: 4xl (36px+)
  - H3: 3xl (30px)
  - H4: 2xl (24px)
- **Body Text:** 16-18px for readability
- **Code/Monospace:** JetBrains Mono, Fira Code, or Consolas

**Visual Elements:**
- Gradient accents (subtle)
- Glassmorphic/translucent cards (echoing overlay aesthetic)
- Smooth animations (Framer Motion)
- Hover effects on interactive elements
- Scroll-triggered animations (entrance effects)

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- Touch-friendly buttons on mobile (min 44x44px)

### Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Focus states on interactive elements
- Sufficient color contrast ratios

---

## Content Requirements

### Copy Guidelines

**Tone & Voice:**
- Professional but approachable
- Technical but not intimidating
- Direct and transparent (no marketing fluff)
- Developer-friendly
- Confident but humble

**Key Messaging:**
- "Lightweight and fast"
- "Privacy-first"
- "No subscriptions, no bloat"
- "Bring your own API key"
- "Open source and transparent"
- "Your invisible AI assistant"

**Writing Style:**
- Short paragraphs (2-4 sentences)
- Bullet points for scannability
- Active voice
- Clear, concise language
- Technical accuracy
- Avoid jargon unless necessary (define when used)

---

## Asset Requirements

### Required Visual Assets

**Hero Section:**
- Hero image/video showing GhostPad overlay in action (1920x1080+)
- Logo/wordmark (SVG)

**Feature Section:**
- 6 SVG icons for features

**Demo Section:**
- Demo video or high-quality GIF showing:
  - Overlay positioning
  - Screen capture
  - AI interaction
  - Response rendering

**How It Works:**
- 4 screenshots or illustrations for each step

**General:**
- Favicon (multiple sizes)
- Open Graph image (1200x630)
- Twitter card image (1200x600)

**Placeholder Strategy:**
- Use placeholder images/videos initially
- Document required assets in `assets/ASSETS_NEEDED.md`
- Replace with real assets when available

---

## SEO Requirements

### Meta Information
- **Title Tag:** "GhostPad - Your Invisible AI Assistant for Windows"
- **Meta Description:** ~155 characters highlighting key benefits
- **Keywords:** AI assistant, Windows, screen capture, Gemini, Claude, OpenAI, privacy-first, BYOK

### Structured Data
- Organization schema
- SoftwareApplication schema
- BreadcrumbList for docs

### Other SEO Elements
- Semantic HTML (proper heading hierarchy)
- Alt text for images
- Sitemap.xml
- Robots.txt
- Open Graph tags
- Twitter Card tags
- Fast loading times
- Mobile-friendly

---

## Out of Scope (v1)

The following features are **not** included in the initial launch:

- ❌ Email collection / Newsletter signup
- ❌ Analytics tracking
- ❌ Blog section
- ❌ Contact form
- ❌ User accounts / authentication
- ❌ Community forum
- ❌ Live chat support
- ❌ Pricing page (free/open-source product)
- ❌ Testimonials section (no users yet)
- ❌ Affiliate program
- ❌ Internationalization (English only)

These may be added in future iterations based on user feedback and growth.

---

## Launch Checklist

### Pre-Launch
- [ ] All content written and reviewed
- [ ] All placeholder assets replaced (or acceptable placeholders)
- [ ] Responsive design tested on multiple devices
- [ ] Browser compatibility tested
- [ ] Performance optimization (Lighthouse 90+)
- [ ] SEO meta tags verified
- [ ] Accessibility audit completed
- [ ] Links tested (internal and external)
- [ ] 404 page designed
- [ ] Privacy policy created (if needed)

### Launch
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Production build deployed
- [ ] DNS propagated
- [ ] Redirects configured (if any)

### Post-Launch
- [ ] Submit sitemap to search engines
- [ ] Monitor for broken links
- [ ] Track initial feedback
- [ ] Plan iteration based on user behavior

---

## Timeline & Phases

### Phase 1: Foundation (Days 1-2)
- Project setup (Next.js + Tailwind)
- Basic structure and routing
- Hero section implementation
- Core layout components

### Phase 2: Content Sections (Days 3-5)
- Features section
- How It Works section
- Demo section (with placeholders)
- Download section
- Footer

### Phase 3: Documentation (Days 6-7)
- Docs structure and routing
- Getting Started guide
- Feature documentation
- Troubleshooting page

### Phase 4: Polish & Optimization (Days 8-9)
- Animations and transitions
- Responsive design refinement
- Performance optimization
- SEO implementation
- Accessibility audit

### Phase 5: Launch (Day 10)
- Final testing
- Deploy to production
- Monitor and iterate

**Total Estimated Time:** 10 days (flexible based on asset availability)

---

## Maintenance & Updates

### Regular Updates
- Update version number when GhostPad releases new versions
- Update documentation as features change
- Add new LLM providers if added to GhostPad
- Refresh screenshots/demos periodically

### Content Updates
- Add testimonials/social proof as users adopt
- Create blog posts for SEO (future)
- Update FAQ based on common user questions

---

## Approval & Sign-off

**Document Owner:** [Your Name]
**Stakeholders:** [Project Team]
**Approval Date:** TBD

**Version History:**
- v1.0 (2024-12-11): Initial PRD created

---

## Appendix

### Reference Links
- **GhostPad Repository:** ../Project-GhostPad
- **GhostPad README:** ../Project-GhostPad/README.md
- **Inspiration Sites:**
  - https://cluely.com
  - https://interviewcoder.co
  - https://pluely.com

### Related Documents
- `CLAUDE.md` - Project context and overview
- `plan.md` - Step-by-step implementation plan
- `local_resources/ASSETS_NEEDED.md` - Visual asset requirements
