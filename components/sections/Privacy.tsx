import { Shield, Lock, Eye, Code, UserCheck, FileCheck } from "lucide-react";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const privacyFeatures = [
  {
    icon: Shield,
    title: "No Data Persistence",
    description:
      "Chat history exists only during your session. Close the app, and everything is gone. We don't store, log, or transmit your conversations.",
  },
  {
    icon: Lock,
    title: "Local API Keys",
    description:
      "Your API keys are stored locally on your machine, encrypted and secure. We never see or have access to your credentials.",
  },
  {
    icon: Eye,
    title: "Session-Only History",
    description:
      "Conversation context is maintained in memory during your session. No databases, no cloud storage, no tracking.",
  },
  {
    icon: UserCheck,
    title: "User-Controlled Capture",
    description:
      "You decide when to capture your screen. No automatic screenshots, no background monitoring, no surprises.",
  },
  {
    icon: Code,
    title: "Open Source",
    description:
      "Full source code available on GitHub. Audit our privacy claims yourself. No hidden behavior, complete transparency.",
  },
  {
    icon: FileCheck,
    title: "MIT License",
    description:
      "Free and open forever. Use it, modify it, study it. Your data and your freedom are yours to keep.",
  },
];

export default function Privacy() {
  return (
    <Section id="privacy" spacing="xl" background="transparent">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Privacy-First by Design
          </h2>
          <p className="text-lg md:text-xl text-ghost-gray-light">
            Your data stays yours. No telemetry, no tracking, no cloud storage.
            Complete transparency through open source code.
          </p>
        </div>

        {/* Privacy Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {privacyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} variant="glass" hover={false}>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-green/20 to-accent-cyan/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-ghost-gray-light text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Trust Statement */}
        <div className="max-w-3xl mx-auto">
          <Card variant="glow">
            <div className="text-center space-y-4">
              <Shield className="w-16 h-16 mx-auto text-accent-blue" />
              <h3 className="text-2xl font-bold text-white">
                Trust, but Verify
              </h3>
              <p className="text-ghost-gray-light">
                Don&apos;t take our word for it. Review the source code on GitHub,
                audit our privacy architecture, and see for yourself. True
                privacy comes from transparency, not promises.
              </p>
              <a
                href="https://github.com/ghostpad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent-blue hover:text-accent-blue-light transition-colors duration-200 font-medium"
              >
                View Source Code on GitHub →
              </a>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
