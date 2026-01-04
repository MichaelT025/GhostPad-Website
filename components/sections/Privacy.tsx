import {
  HardDrive,
  Lock,
  CloudOff,
  EyeOff,
  Trash2,
  Github,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { PRIVACY_POINTS, SITE_CONFIG } from "@/lib/constants";

const iconMap = {
  HardDrive,
  Lock,
  CloudOff,
  EyeOff,
  Trash2,
  Github,
};

export default function Privacy() {
  return (
    <Section id="privacy" spacing="lg" background="transparent">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
          Privacy-first by design
        </h2>
        <p className="text-lg text-text-secondary">
          Your data stays yours. No telemetry, no tracking, no cloud storage.
        </p>
      </div>

      {/* Privacy Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
        {PRIVACY_POINTS.map((feature, index) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap];
          return (
            <Card key={index} variant="bordered" hover={false} padding="md">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-md bg-success/10 flex items-center justify-center">
                  {Icon && <Icon className="w-4 h-4 text-success" />}
                </div>
                <h3 className="text-base font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Trust Statement */}
      <div className="max-w-2xl mx-auto">
        <Card variant="glass" padding="lg">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-md bg-accent-muted flex items-center justify-center">
              <Github className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary">
              Trust, but verify
            </h3>
            <p className="text-text-secondary text-sm max-w-lg mx-auto">
              Don&apos;t take our word for it. Review the source code, audit our
              privacy architecture, and see for yourself. True privacy comes
              from transparency.
            </p>
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-strong transition-colors text-sm font-medium"
            >
              <span>View source on GitHub</span>
              <span>→</span>
            </a>
          </div>
        </Card>
      </div>
    </Section>
  );
}
