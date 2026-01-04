/**
 * Shade Website Constants
 * 
 * Central configuration for all site content and data
 */

export const SITE_CONFIG = {
  name: "Shade",
  tagline: "Your screen, smarter",
  description:
    "A privacy-first Windows desktop app providing real-time AI assistance through a translucent overlay. Multi-provider LLM support, instant screen capture, BYOK model.",
  github: "https://github.com/MichaelT025/Shade",
  githubReleases: "https://github.com/MichaelT025/Shade/releases",
  githubLabel: "View on GitHub",
  version: "1.0.0",
};

export const FEATURES = [
  {
    id: "translucent-overlay",
    title: "Translucent Overlay",
    description:
      "Always-on-top interface that floats above your work. Collapsible design stays minimal until you need it. Toggle visibility instantly with Ctrl+/.",
    icon: "Layers",
  },
  {
    id: "multi-provider",
    title: "Multi-Provider LLMs",
    description:
      "Works with Gemini, OpenAI, Anthropic, Grok, OpenRouter, and local models via Ollama or LM Studio. Switch providers seamlessly.",
    icon: "Zap",
  },
  {
    id: "screen-capture",
    title: "Smart Screen Capture",
    description:
      "Capture your screen with one click or enable auto-capture. The overlay is automatically excluded from screenshots.",
    icon: "Camera",
  },
  {
    id: "session-dashboard",
    title: "Session Dashboard",
    description:
      "Browse, search, rename, save, and resume your conversations. Full history stored locally with smart retention.",
    icon: "LayoutDashboard",
  },
  {
    id: "privacy",
    title: "Privacy First",
    description:
      "All data stays on your machine. API keys encrypted locally. No telemetry, no cloud sync, no tracking.",
    icon: "Shield",
  },
  {
    id: "byok",
    title: "BYOK Model",
    description:
      "Bring Your Own Key. No subscriptions, no monthly fees. Pay only for what you use directly to providers.",
    icon: "Key",
  },
  {
    id: "modes",
    title: "System Prompt Modes",
    description:
      "Built-in modes for different tasks plus fully editable custom prompts. Tailor the AI to your workflow.",
    icon: "Sliders",
  },
  {
    id: "keyboard-shortcuts",
    title: "Keyboard Shortcuts",
    description:
      "Global hotkeys for instant access. Toggle, capture, switch models, start new chats - all without touching your mouse.",
    icon: "Keyboard",
  },
];

export const LLM_PROVIDERS = [
  {
    id: "gemini",
    name: "Google Gemini",
    description: "Google's latest AI models with free tier available",
    signupUrl: "https://makersuite.google.com/app/apikey",
  },
  {
    id: "openai",
    name: "OpenAI",
    description: "GPT-4 and GPT-4o models",
    signupUrl: "https://platform.openai.com/api-keys",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    description: "Claude models for nuanced conversations",
    signupUrl: "https://console.anthropic.com/",
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    description: "Access multiple providers through one API",
    signupUrl: "https://openrouter.ai/",
  },
  {
    id: "local",
    name: "Local Models",
    description: "Run AI completely offline with Ollama or LM Studio",
    signupUrl: "https://ollama.ai/",
  },
];

export const KEYBOARD_SHORTCUTS = [
  {
    keys: ["Ctrl", "/"],
    description: "Toggle overlay visibility",
  },
  {
    keys: ["Ctrl", "R"],
    description: "Start new chat",
  },
  {
    keys: ["Ctrl", "'"],
    description: "Toggle collapsed/expanded",
  },
  {
    keys: ["Ctrl", "Shift", "S"],
    description: "Capture screenshot",
  },
  {
    keys: ["Ctrl", "M"],
    description: "Open model switcher",
  },
];

export const SYSTEM_REQUIREMENTS = {
  os: "Windows 10 (version 2004+) or Windows 11",
  optional: "Node.js 18+ (for development)",
  other: "API key from at least one LLM provider",
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "See something on screen",
    description: "Whether it's code, lecture notes, an error message, or anything else you need help with.",
  },
  {
    step: 2,
    title: "Capture & ask",
    description: "Press the shortcut to show Shade, capture your screen, and type your question.",
  },
  {
    step: 3,
    title: "Get instant answers",
    description: "AI analyzes your screen context and streams back intelligent, formatted responses.",
  },
  {
    step: 4,
    title: "Continue the conversation",
    description: "Follow up with more questions. Context is preserved throughout your session.",
  },
];

export const COMPARISON_POINTS = [
  {
    category: "vs Web AI Apps",
    shade: ["Screen context awareness", "No tab switching", "Always accessible overlay"],
    others: ["Text-only input", "Constant context switching", "Buried in browser tabs"],
  },
  {
    category: "vs Subscription Tools",
    shade: ["BYOK - pay only API costs", "No monthly fees", "Use any provider"],
    others: ["$20+/month subscriptions", "Locked to one provider", "Hidden usage limits"],
  },
  {
    category: "vs Other Desktop Apps",
    shade: ["Lightweight & fast", "Privacy-first", "Open source"],
    others: ["Resource heavy", "Data collection", "Closed source"],
  },
];

export const PRIVACY_POINTS = [
  {
    title: "Local Storage Only",
    description: "Config and sessions stored in your user data directory. Nothing leaves your machine except API calls.",
    icon: "HardDrive",
  },
  {
    title: "Encrypted API Keys",
    description: "Stored using OS-level encryption via Electron safeStorage when available.",
    icon: "Lock",
  },
  {
    title: "No Cloud Sync",
    description: "Your conversations, settings, and screenshots never touch our servers. There are no servers.",
    icon: "CloudOff",
  },
  {
    title: "No Telemetry",
    description: "We don't track usage, collect analytics, or phone home. Zero data collection.",
    icon: "EyeOff",
  },
  {
    title: "You Control the Data",
    description: "Delete individual sessions or wipe everything from the dashboard. Open data folder anytime.",
    icon: "Trash2",
  },
  {
    title: "Open Source",
    description: "Audit the code yourself. MIT licensed, community-driven development.",
    icon: "Github",
  },
];

export const NAVIGATION_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#privacy", label: "Privacy" },
  { href: "#download", label: "Download" },
];

export const FOOTER_LINKS = {
  product: [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#download", label: "Download" },
    { href: "/releases", label: "Changelog" },
  ],
  resources: [
    { href: SITE_CONFIG.github, label: "GitHub", external: true },
    { href: `${SITE_CONFIG.github}/issues`, label: "Report Issue", external: true },
    { href: `${SITE_CONFIG.github}/discussions`, label: "Discussions", external: true },
  ],
  legal: [
    { href: "https://opensource.org/licenses/MIT", label: "MIT License", external: true },
  ],
};

export const CHANGELOG = [
  {
    version: "1.0.0",
    date: "2025-01-01",
    changes: [
      "Initial public release",
      "Multi-provider LLM support (Gemini, OpenAI, Anthropic, Grok, OpenRouter)",
      "Local model support via Ollama and LM Studio",
      "Screen capture with overlay exclusion",
      "Session history dashboard with search and save",
      "System prompt modes (built-in + editable)",
      "Model switcher with Ctrl+M",
      "Smart memory management with summarization",
      "Encrypted local storage for API keys",
    ],
  },
];
