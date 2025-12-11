"use client";

import { Download, Github, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section spacing="xl" className="pt-32 min-h-screen flex items-center relative">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 text-xs font-medium bg-ghost-darker border border-accent-blue/30 text-accent-blue rounded-full">
                Open Source
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-ghost-darker border border-accent-purple/30 text-accent-purple rounded-full">
                MIT License
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-ghost-darker border border-accent-cyan/30 text-accent-cyan rounded-full">
                Multi-Provider
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your{" "}
              <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
                Invisible
              </span>
              <br />
              AI Assistant
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-ghost-gray-light max-w-2xl">
              Lightweight Windows desktop app providing real-time AI assistance
              through a translucent overlay. Multi-provider LLM support, instant
              screen capture, privacy-first architecture.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  const downloadSection = document.getElementById("download");
                  downloadSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download for Windows</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://github.com/ghostpad", "_blank")}
                className="flex items-center justify-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-sm text-ghost-gray">LLM Providers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">0</div>
                <div className="text-sm text-ghost-gray">Subscriptions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-ghost-gray">Privacy-First</div>
              </div>
            </div>
          </div>

          {/* Right: Visual Placeholder */}
          <div className="relative animate-fade-in">
            {/* Placeholder for hero image/video */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-accent-blue/20 via-accent-purple/20 to-accent-cyan/20 border border-ghost-gray/20 shadow-glow-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent-blue to-accent-purple rounded-2xl opacity-50" />
                  <p className="text-ghost-gray text-sm">
                    Hero Visual Placeholder
                    <br />
                    <span className="text-xs">
                      (Demo video/screenshot of translucent overlay)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-blue/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-purple/20 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToFeatures}
            className="text-ghost-gray hover:text-white transition-colors"
            aria-label="Scroll to features"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </Container>
    </Section>
  );
}
