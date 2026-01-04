import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0e12",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Shade - The Invisible AI Assistant",
    template: "%s | Shade",
  },
  description:
    "A privacy-first Windows desktop app providing real-time AI assistance through a translucent overlay. Multi-provider LLM support, instant screen capture, BYOK model - no subscriptions.",
  keywords: [
    "AI assistant",
    "Windows app",
    "desktop AI",
    "screen capture",
    "LLM",
    "Gemini",
    "OpenAI",
    "Claude",
    "Anthropic",
    "privacy",
    "BYOK",
    "open source",
    "translucent overlay",
    "Ollama",
    "local AI",
  ],
  authors: [{ name: "Michael T", url: "https://github.com/MichaelT025" }],
  creator: "Michael T",
  openGraph: {
    title: "Shade - The Invisible AI Assistant",
    description:
      "Privacy-first Windows desktop app with multi-provider AI support. BYOK, no subscriptions, open source.",
    type: "website",
    locale: "en_US",
    siteName: "Shade",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shade - The Invisible AI Assistant",
    description:
      "Privacy-first Windows desktop app with multi-provider AI support. BYOK, no subscriptions, open source.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-shade-bg text-text-primary`}>
        {children}
      </body>
    </html>
  );
}
