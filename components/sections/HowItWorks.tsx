import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Capture Your Screen",
    description:
      "Press the capture button or use a keyboard shortcut. GhostPad captures your screen while automatically excluding its own overlay.",
    placeholder: "Screenshot capture interface",
  },
  {
    number: "02",
    title: "Ask a Question",
    description:
      "Type your question or request in the overlay. The captured screen provides context for the AI to understand what you're working on.",
    placeholder: "Chat interface with question",
  },
  {
    number: "03",
    title: "Get AI-Powered Answers",
    description:
      "Receive instant responses from your chosen LLM provider. Watch as answers stream in real-time with proper markdown and code formatting.",
    placeholder: "AI response streaming",
  },
  {
    number: "04",
    title: "Continue the Conversation",
    description:
      "Context is preserved throughout your session. Ask follow-up questions or start fresh with Ctrl+R whenever you need.",
    placeholder: "Conversation history",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" spacing="xl" background="transparent">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-ghost-gray-light">
            From screen capture to AI-powered insights in seconds
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-4 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-6xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-8 h-8 text-accent-blue" />
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-lg text-ghost-gray-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual Placeholder */}
              <div
                className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="aspect-video rounded-xl bg-ghost-darker border border-ghost-gray/20 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-lg" />
                      <p className="text-ghost-gray text-sm">
                        {step.placeholder}
                        <br />
                        <span className="text-xs">(Screenshot placeholder)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
