"use client";

import { Download, Key, Settings, Rocket } from "lucide-react";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { SYSTEM_REQUIREMENTS, KEYBOARD_SHORTCUTS } from "@/lib/constants";

const setupSteps = [
  {
    icon: Download,
    title: "Download Shade",
    description: "Get the latest Windows installer from GitHub releases.",
  },
  {
    icon: Key,
    title: "Get an API key",
    description: "Sign up for Gemini, OpenAI, Anthropic, or use a local model with Ollama.",
  },
  {
    icon: Settings,
    title: "Configure",
    description: "Open the Dashboard, select your provider, and enter your API key.",
  },
  {
    icon: Rocket,
    title: "Start using",
    description: "Press Ctrl+/ to toggle the overlay and start getting AI assistance.",
  },
];

export default function GettingStarted() {
  return (
    <Section id="getting-started" spacing="lg" background="panel-muted">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
          Get started in minutes
        </h2>
        <p className="text-lg text-text-secondary">
          Download, configure, and start using Shade in under 5 minutes
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Setup Steps */}
        <div className="space-y-4">
          {setupSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} variant="bordered" padding="md" className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-accent-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="space-y-1 pt-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-text-tertiary font-medium">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* System Requirements + Shortcuts */}
        <div className="space-y-6">
          {/* System Requirements */}
          <Card variant="bordered" padding="md">
            <h3 className="text-base font-semibold text-text-primary mb-4">
              System Requirements
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span className="text-text-secondary">
                  <span className="text-text-primary font-medium">OS:</span>{" "}
                  {SYSTEM_REQUIREMENTS.os}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span className="text-text-secondary">
                  <span className="text-text-primary font-medium">Optional:</span>{" "}
                  {SYSTEM_REQUIREMENTS.optional}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span className="text-text-secondary">
                  <span className="text-text-primary font-medium">Required:</span>{" "}
                  {SYSTEM_REQUIREMENTS.other}
                </span>
              </li>
            </ul>
          </Card>

          {/* Keyboard Shortcuts */}
          <Card variant="bordered" padding="md">
            <h3 className="text-base font-semibold text-text-primary mb-4">
              Keyboard Shortcuts
            </h3>
            <div className="space-y-3">
              {KEYBOARD_SHORTCUTS.map((shortcut, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    {shortcut.description}
                  </span>
                  <div className="flex items-center gap-1">
                    {shortcut.keys.map((key, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <kbd>{key}</kbd>
                        {i < shortcut.keys.length - 1 && (
                          <span className="text-text-tertiary text-xs">+</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
