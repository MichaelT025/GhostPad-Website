"use client";

import { Download as DownloadIcon, Github, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Download() {
  return (
    <Section id="download" spacing="xl" background="gradient">
      <Container size="md">
        <Card variant="glow">
          <div className="text-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl text-ghost-gray-light max-w-2xl mx-auto">
                Download GhostPad for Windows and experience AI assistance
                without the bloat
              </p>
            </div>

            {/* Download Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  window.open("https://github.com/ghostpad/releases", "_blank")
                }
                className="flex items-center space-x-2 text-lg px-8 py-4"
              >
                <DownloadIcon className="w-6 h-6" />
                <span>Download for Windows</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open("https://github.com/ghostpad", "_blank")
                }
                className="flex items-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </Button>
            </div>

            {/* Version Info */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-sm text-ghost-gray">
              <span>Version: 0.1.0 (Beta)</span>
              <span>•</span>
              <span>Windows 10/11</span>
              <span>•</span>
              <span>MIT License</span>
            </div>

            {/* Additional Links */}
            <div className="pt-6 border-t border-ghost-gray/20">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/docs/getting-started"
                  className="text-accent-blue hover:text-accent-blue-light transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Setup Guide</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <span className="hidden sm:block text-ghost-gray">•</span>
                <a
                  href="https://github.com/ghostpad/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue hover:text-accent-blue-light transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Release Notes</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <span className="hidden sm:block text-ghost-gray">•</span>
                <a
                  href="/docs/troubleshooting"
                  className="text-accent-blue hover:text-accent-blue-light transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Troubleshooting</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Note */}
            <p className="text-xs text-ghost-gray max-w-xl mx-auto">
              By downloading, you agree to use GhostPad in accordance with its MIT License.
              No warranty is provided. Bring your own API key from your preferred LLM provider.
            </p>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
