"use client";

import { Download as DownloadIcon, Github, FileText } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";

export default function Download() {
  return (
    <Section id="download" spacing="lg" background="transparent">
      <Card variant="glass" padding="lg" className="max-w-3xl mx-auto">
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Ready to get started?
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Download Shade for Windows and experience AI assistance without the bloat.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(SITE_CONFIG.githubReleases, "_blank")}
              className="flex items-center gap-2"
            >
              <DownloadIcon className="w-5 h-5" />
              <span>Download for Windows</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(SITE_CONFIG.github, "_blank")}
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </Button>
          </div>

          {/* Version Info */}
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center text-sm text-text-tertiary">
            <span>Version {SITE_CONFIG.version}</span>
            <span className="hidden sm:inline">•</span>
            <span>Windows 10/11</span>
            <span className="hidden sm:inline">•</span>
            <span>MIT License</span>
          </div>

          {/* Additional Links */}
          <div className="pt-6 border-t border-border/50">
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <a
                href={SITE_CONFIG.githubReleases}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-strong transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Release Notes</span>
              </a>
              <a
                href={`${SITE_CONFIG.github}/issues`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-strong transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Report an Issue</span>
              </a>
            </div>
          </div>

          {/* Note */}
          <p className="text-xs text-text-tertiary max-w-lg mx-auto">
            By downloading, you agree to use Shade in accordance with its MIT License.
            Bring your own API key from your preferred LLM provider.
          </p>
        </div>
      </Card>
    </Section>
  );
}
