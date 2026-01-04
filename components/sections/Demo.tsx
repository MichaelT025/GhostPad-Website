import { Play, Monitor } from "lucide-react";
import Section from "@/components/ui/Section";

export default function Demo() {
  return (
    <Section id="demo" spacing="lg" background="gradient">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
          See it in action
        </h2>
        <p className="text-lg text-text-secondary">
          Watch Shade&apos;s translucent overlay seamlessly integrate into your workflow.
        </p>
      </div>

      {/* Video Player Placeholder */}
      <div className="max-w-4xl mx-auto">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-shade-panel border border-border shadow-overlay">
          {/* Placeholder Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center hover:bg-accent/20 hover:border-accent/50 transition-all cursor-pointer group">
                  <Play className="w-7 h-7 text-accent group-hover:text-accent-strong transition-colors ml-0.5" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-text-secondary">
                  <Monitor className="w-4 h-4" />
                  <span className="text-sm font-medium">Demo Video</span>
                </div>
                <p className="text-xs text-text-tertiary max-w-xs mx-auto">
                  Overlay positioning, screen capture, AI response streaming, markdown rendering
                </p>
              </div>
            </div>
          </div>

          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent/5 pointer-events-none" />
        </div>

        {/* Caption */}
        <p className="mt-6 text-center text-sm text-text-tertiary">
          Video placeholder - actual demo coming soon
        </p>
      </div>
    </Section>
  );
}
