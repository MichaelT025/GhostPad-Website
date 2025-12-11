/**
 * Site-wide constants for GhostPad website
 */

export const SITE_CONFIG = {
  name: "GhostPad",
  tagline: "Your Invisible AI Assistant",
  description:
    "Lightweight Windows desktop app providing real-time AI assistance through a translucent overlay. Multi-provider LLM support, instant screen capture, privacy-first architecture.",
  url: "https://ghostpad.dev", // TODO: Update with actual URL
  github: "https://github.com/ghostpad", // TODO: Update with actual GitHub URL
};

export const FEATURES = [
  {
    id: "translucent-overlay",
    title: "Translucent Overlay",
    description:
      "Always-on-top interface that stays visible without blocking your work. Toggle visibility with Ctrl+/.",
    icon: "Eye",
  },
  {
    id: "multi-provider",
    title: "Multi-Provider LLMs",
    description:
      "Works with Gemini, OpenAI, and Anthropic. Switch providers seamlessly or stick with your favorite.",
    icon: "Zap",
  },
  {
    id: "screen-capture",
    title: "Instant Screen Capture",
    description:
      "Capture your screen with one click. The overlay is automatically excluded from captures.",
    icon: "Camera",
  },
  {
    id: "privacy",
    title: "Privacy First",
    description:
      "No data persistence, session-only history, local API key storage. Your data stays yours.",
    icon: "Shield",
  },
  {
    id: "conversation-memory",
    title: "Conversation Memory",
    description:
      "Context is preserved throughout your session. Start fresh anytime with Ctrl+R.",
    icon: "MessageSquare",
  },
  {
    id: "keyboard-shortcuts",
    title: "Keyboard Shortcuts",
    description:
      "Global hotkeys for instant access. Work faster without touching your mouse.",
    icon: "Keyboard",
  },
];

export const LLM_PROVIDERS = [
  {
    id: "gemini",
    name: "Google Gemini",
    url: "https://ai.google.dev/",
    signupUrl: "https://makersuite.google.com/app/apikey",
    models: ["gemini-2.0-flash-exp", "gemini-1.5-pro", "gemini-1.5-flash"],
    defaultModel: "gemini-2.0-flash-exp",
  },
  {
    id: "openai",
    name: "OpenAI",
    url: "https://openai.com/",
    signupUrl: "https://platform.openai.com/api-keys",
    models: ["gpt-4o", "gpt-4-turbo", "gpt-3.5-turbo"],
    defaultModel: "gpt-4o",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    url: "https://www.anthropic.com/",
    signupUrl: "https://console.anthropic.com/",
    models: ["claude-3-5-sonnet", "claude-3-5-haiku", "claude-3-opus"],
    defaultModel: "claude-3-5-haiku",
  },
];

export const KEYBOARD_SHORTCUTS = [
  {
    key: "Ctrl + /",
    description: "Toggle overlay visibility",
  },
  {
    key: "Ctrl + R",
    description: "Start new chat (clear conversation)",
  },
];

export const SYSTEM_REQUIREMENTS = {
  os: "Windows 10 (version 2004+) or Windows 11",
  runtime: "Node.js 18+",
  other: "API key from at least one LLM provider",
};

export const NAVIGATION_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#download", label: "Download" },
  { href: "/docs", label: "Docs" },
];

export const FOOTER_LINKS = {
  navigation: [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#download", label: "Download" },
    { href: "/docs", label: "Documentation" },
  ],
  resources: [
    { href: "https://github.com/ghostpad", label: "GitHub", external: true },
    { href: "/docs/getting-started", label: "Getting Started" },
    { href: "/docs/api-keys", label: "API Key Guides" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "https://opensource.org/licenses/MIT", label: "MIT License", external: true },
  ],
};
