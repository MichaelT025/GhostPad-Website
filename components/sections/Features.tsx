import { Eye, Zap, Camera, Shield, MessageSquare, Keyboard } from "lucide-react";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { FEATURES } from "@/lib/constants";

const iconMap = {
  Eye,
  Zap,
  Camera,
  Shield,
  MessageSquare,
  Keyboard,
};

export default function Features() {
  return (
    <Section id="features" spacing="xl" background="dark">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Powerful Features,{" "}
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Zero Bloat
            </span>
          </h2>
          <p className="text-lg md:text-xl text-ghost-gray-light">
            Everything you need for AI assistance, nothing you don&apos;t.
            Built for speed, privacy, and productivity.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <Card
                key={feature.id}
                variant="glass"
                hover
                className="group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center group-hover:shadow-glow-sm transition-shadow duration-300">
                    <Icon className="w-6 h-6 text-accent-blue group-hover:text-accent-blue-light transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-ghost-gray-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
