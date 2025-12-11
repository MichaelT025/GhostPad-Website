import { Play } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Demo() {
  return (
    <Section id="demo" spacing="xl" background="gradient">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            See It in Action
          </h2>
          <p className="text-lg md:text-xl text-ghost-gray-light">
            Watch GhostPad&apos;s translucent overlay in action. Real-time AI assistance without leaving your workflow.
          </p>
        </div>

        {/* Video Player Placeholder */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-ghost-darker border border-ghost-gray/20 shadow-glow-lg">
            {/* Placeholder Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shadow-glow-md hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <div className="space-y-2">
                  <p className="text-white text-xl font-semibold">
                    Demo Video Placeholder
                  </p>
                  <p className="text-ghost-gray text-sm">
                    (Video showing: overlay positioning, screen capture, AI response streaming)
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 via-transparent to-accent-purple/10 pointer-events-none" />
          </div>

          {/* Caption */}
          <div className="mt-6 text-center">
            <p className="text-ghost-gray-light">
              GhostPad seamlessly integrates into your workflow, providing instant AI assistance
              without disrupting your screen or productivity.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
