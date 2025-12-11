"use client";

import { Download, Settings, Play, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { SYSTEM_REQUIREMENTS } from "@/lib/constants";

const setupSteps = [
  {
    icon: Download,
    title: "Download GhostPad",
    description: "Get the latest Windows installer from GitHub releases or download directly from this site.",
  },
  {
    icon: Settings,
    title: "Get an API Key",
    description: "Sign up for Google Gemini, OpenAI, or Anthropic. Free tiers available for all providers.",
  },
  {
    icon: Settings,
    title: "Configure Provider",
    description: "Launch GhostPad, select your preferred LLM provider, and enter your API key securely.",
  },
  {
    icon: Play,
    title: "Start Using",
    description: "Press Ctrl+/ to toggle the overlay, capture your screen, and start getting AI assistance instantly.",
  },
];

export default function GettingStarted() {
  return (
    <Section id="getting-started" spacing="xl" background="dark">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get Started in Minutes
          </h2>
          <p className="text-lg md:text-xl text-ghost-gray-light">
            Download, configure, and start using GhostPad in under 5 minutes
          </p>
        </div>

        {/* Setup Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {setupSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card variant="glass" hover={false}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent-blue" />
                      </div>
                      <span className="text-3xl font-bold text-ghost-dark">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-ghost-gray-light text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
                {index < setupSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 text-accent-blue z-10" />
                )}
              </div>
            );
          })}
        </div>

        {/* System Requirements */}
        <div className="max-w-3xl mx-auto">
          <Card variant="glass">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                System Requirements
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span className="text-ghost-gray-light">
                    <span className="font-medium text-white">Operating System:</span>{" "}
                    {SYSTEM_REQUIREMENTS.os}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span className="text-ghost-gray-light">
                    <span className="font-medium text-white">Runtime:</span>{" "}
                    {SYSTEM_REQUIREMENTS.runtime}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span className="text-ghost-gray-light">
                    <span className="font-medium text-white">Requirements:</span>{" "}
                    {SYSTEM_REQUIREMENTS.other}
                  </span>
                </li>
              </ul>
              <div className="pt-4 border-t border-ghost-gray/20">
                <Button
                  variant="secondary"
                  onClick={() => window.open("/docs/getting-started", "_blank")}
                >
                  View Detailed Setup Guide →
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
