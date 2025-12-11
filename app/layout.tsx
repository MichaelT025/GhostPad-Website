import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GhostPad - Your Invisible AI Assistant",
  description: "Lightweight Windows desktop app providing real-time AI assistance through a translucent overlay. Multi-provider LLM support, instant screen capture, privacy-first architecture.",
  keywords: ["AI assistant", "Windows app", "desktop AI", "screen capture", "LLM", "Gemini", "OpenAI", "Claude", "privacy"],
  authors: [{ name: "GhostPad Team" }],
  openGraph: {
    title: "GhostPad - Your Invisible AI Assistant",
    description: "Lightweight Windows desktop app with multi-provider AI support and privacy-first architecture",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostPad - Your Invisible AI Assistant",
    description: "Lightweight Windows desktop app with multi-provider AI support and privacy-first architecture",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
