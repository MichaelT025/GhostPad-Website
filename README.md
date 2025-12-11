# GhostPad Website

Official marketing and documentation website for [GhostPad](https://github.com/ghostpad) - a lightweight Windows desktop application that provides real-time AI assistance through a translucent overlay.

## About GhostPad

**GhostPad** is a Windows 10/11 desktop application that gives you instant access to AI assistance without leaving your workflow. Built with privacy and performance in mind, it features:

- **Translucent Overlay** - Always-on-top interface that stays out of your way
- **Multi-Provider LLM Support** - Works with Gemini, OpenAI, and Anthropic
- **Instant Screen Capture** - Capture your screen with the overlay automatically excluded
- **Privacy-First** - No data persistence, session-only history, local API key storage
- **Bring Your Own Key** - No subscriptions, pay only for what you use
- **Keyboard Shortcuts** - Quick access with global hotkeys (Ctrl+/, Ctrl+R)

## This Website

This is the marketing and documentation website for GhostPad, built with:

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Vercel (planned)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site in development mode.

## Project Structure

```
/app                    # Next.js App Router pages
  /page.tsx            # Landing page
  /layout.tsx          # Root layout
  /globals.css         # Global styles
  /docs                # Documentation pages
/components
  /ui                  # Reusable UI components
  /sections            # Page sections (Hero, Features, etc.)
  /docs                # Documentation-specific components
/public
  /images              # Static images
  /videos              # Demo videos
/lib                   # Utilities and constants
/local_resources       # Project documentation (PRD, plan, assets)
```

## Development Guidelines

- Use TypeScript strictly (no `any` types)
- Follow Next.js App Router best practices
- Maintain responsive design (mobile-first)
- Keep components small and reusable
- Ensure accessibility (WCAG 2.1 AA)
- Optimize for performance (Lighthouse 90+)

## Features

### Landing Page
- Hero section with compelling value proposition
- Feature showcase (6 key features)
- How It Works walkthrough
- Demo section with video/GIF
- Comparison section (vs competitors)
- Privacy & Security highlights
- Getting Started guide
- Download section
- Footer with links and resources

### Documentation
- Getting Started guide
- Feature documentation
- Keyboard shortcuts reference
- Privacy & security details
- Troubleshooting guide
- API key setup guides (Gemini, OpenAI, Anthropic)

## Design System

### Colors
- **Ghost Black:** `#0a0a0a` - Primary background
- **Ghost Dark:** `#161616` - Secondary background
- **Ghost Darker:** `#1a1a1a` - Tertiary background
- **Ghost Gray:** `#a0a0a0` - Secondary text
- **Ghost Light:** `#f5f5f5` - Primary text
- **Accent Blue:** `#3b82f6`
- **Accent Purple:** `#8b5cf6`
- **Accent Cyan:** `#06b6d4`

### Typography
- **Font:** Inter (via Google Fonts)
- **Headings:** Bold, gradient accents
- **Body:** 16-18px, readable line height

## Deployment

This site is designed to be deployed on [Vercel](https://vercel.com):

```bash
# Deploy to Vercel
npm install -g vercel
vercel
```

## Contributing

This is the official website for GhostPad. Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - See LICENSE file for details

## Links

- **GhostPad Desktop App:** (Coming soon)
- **Documentation:** [/docs](/docs)
- **GitHub:** (Coming soon)

## Contact

For questions or feedback about the website, please open an issue on GitHub.

---

**Built with ☕ for Windows users who want AI assistance without the bloat.**
