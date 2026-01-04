import {
  Layers,
  Zap,
  Camera,
  LayoutDashboard,
  Shield,
  Key,
  Sliders,
  Keyboard,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { FEATURES } from "@/lib/constants";

const iconMap = {
  Layers,
  Zap,
  Camera,
  LayoutDashboard,
  Shield,
  Key,
  Sliders,
  Keyboard,
};

export default function Features() {
  return (
    <Section id="features" spacing="lg" background="panel-muted">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
          Everything you need,{" "}
          <span className="text-accent-strong">nothing you don&apos;t</span>
        </h2>
        <p className="text-lg text-text-secondary">
          Built for speed, privacy, and productivity. No bloat, no subscriptions.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {FEATURES.map((feature, index) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap];
          return (
            <Card
              key={feature.id}
              variant="bordered"
              hover
              padding="md"
              className="group"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-md bg-accent-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  {Icon && (
                    <Icon className="w-5 h-5 text-accent group-hover:text-accent-strong transition-colors" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-text-primary">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
