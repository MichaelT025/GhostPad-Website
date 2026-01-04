"use client";

import { Download, Github, ChevronDown, Star } from "lucide-react";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [starCount, setStarCount] = useState<number | null>(null);
  const fullText = SITE_CONFIG.tagline;

  useEffect(() => {
    // Fetch GitHub stars
    fetch("https://api.github.com/repos/MichaelT025/Shade")
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setStarCount(data.stargazers_count);
        }
      })
      .catch((err) => console.error("Error fetching GitHub stars:", err));
  }, []);

  useEffect(() => {
    let index = 0;
    const typeWriter = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeWriter);
        setIsTypingComplete(true);
      }
    }, 100); // Typing speed

    return () => clearInterval(typeWriter);
  }, [fullText]);

  const scrollToNextSection = () => {
    const element = document.getElementById("how-it-works");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDownload = () => {
    const element = document.getElementById("download");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section spacing="xl" className="pt-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Logo */}
            <div className="relative w-20 h-20 mb-6 group">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:bg-accent/30 transition-colors" />
              <NextImage
                src="/icon.png"
                alt="Shade Logo"
                width={80}
                height={80}
                className="relative w-full h-full rounded-2xl shadow-elev-2"
                priority
              />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center px-3 py-1.5 bg-shade-panel border border-border rounded-full text-sm text-text-secondary">
                <span>Free & Open Source</span>
              </div>
              <a 
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-shade-panel border border-border rounded-full text-sm text-text-secondary hover:border-accent/50 transition-colors"
              >
                <Star className="w-3.5 h-3.5 text-accent" />
                <span>{starCount !== null ? `${starCount} stars on GitHub` : "Star on GitHub"}</span>
              </a>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text-primary min-h-[1.2em]">
              <span>{displayText}</span>
              <span className={`inline-block w-[3px] h-[1em] ml-1 bg-accent align-middle ${isTypingComplete ? 'animate-pulse' : 'animate-pulse'}`} />
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-text-secondary max-w-xl leading-relaxed">
              A privacy-first Windows desktop app that floats above your work.
              Capture your screen, ask questions, get AI-powered answers.
              No subscriptions, no data collection.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToDownload}
                className="flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Download for Windows</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(SITE_CONFIG.github, "_blank")}
                className="flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span>{SITE_CONFIG.githubLabel}</span>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-border/50">
              <div>
                <div className="text-2xl font-semibold text-text-primary">5+</div>
                <div className="text-sm text-text-tertiary">LLM Providers</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-text-primary">$0</div>
                <div className="text-sm text-text-tertiary">No Subscriptions</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-text-primary">100%</div>
                <div className="text-sm text-text-tertiary">Private & Local</div>
              </div>
            </div>
          </div>

          {/* Right: Visual Placeholder */}
          <div className="relative animate-fade-in lg:animate-slide-in-right">
            {/* Main visual container */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-shade-panel border border-border shadow-overlay">
              {/* Simulated overlay window */}
              <div className="absolute inset-4 bg-shade-panel-strong/80 backdrop-blur rounded-md border border-border/50 shadow-elev-2">
                {/* Title bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-danger/60" />
                    <div className="w-3 h-3 rounded-full bg-warning/60" />
                    <div className="w-3 h-3 rounded-full bg-success/60" />
                  </div>
                  <div className="flex items-center gap-2">
                    <NextImage
                      src="/icon.png"
                      alt="Shade Icon"
                      width={16}
                      height={16}
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-xs text-text-tertiary font-medium">Shade</span>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Chat content placeholder */}
                <div className="p-4 space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-accent/10 border border-accent/20 rounded-md px-3 py-2 max-w-[80%]">
                      <p className="text-sm text-text-secondary">What&apos;s this error about?</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-shade-panel border border-border/50 rounded-md px-3 py-2 max-w-[80%]">
                      <p className="text-sm text-text-secondary">
                        This is a <code className="text-accent text-xs">TypeError</code>. The variable is undefined...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-border/50">
                  <div className="flex items-center gap-2 bg-shade-panel-muted rounded-md px-3 py-2 border border-border/30">
                    <span className="text-sm text-text-tertiary">Ask anything...</span>
                  </div>
                </div>
              </div>

              {/* Placeholder label */}
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-shade-bg/80 rounded text-xs text-text-tertiary">
                Demo preview
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-radial from-accent/10 via-transparent to-transparent blur-2xl -z-10" />
          </div>
        </div>

        {/* Scroll indicator - centered on the page, below hero content */}
        <div className="mt-16 hidden lg:flex justify-center">
          <button
            onClick={scrollToNextSection}
            className="p-2 text-text-tertiary hover:text-text-secondary transition-colors animate-bounce"
            aria-label="Scroll to how it works"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </Section>
  );
}
