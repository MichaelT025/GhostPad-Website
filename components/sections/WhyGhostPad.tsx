import { Check, X } from "lucide-react";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const comparisons = [
  {
    title: "vs Web Apps (ChatGPT, Claude)",
    ghostpad: [
      "Screen context automatically included",
      "Always accessible with overlay",
      "No tab switching required",
      "Works offline with local processing",
    ],
    others: [
      "Manual screenshot upload",
      "Separate browser tab",
      "Context switching breaks flow",
      "Requires internet connection",
    ],
  },
  {
    title: "vs Subscription AI Tools",
    ghostpad: [
      "Bring your own API key",
      "Pay only for LLM usage",
      "No monthly fees",
      "Choose any provider",
    ],
    others: [
      "Monthly subscription required",
      "Locked into one provider",
      "Expensive for occasional use",
      "Hidden costs and limits",
    ],
  },
  {
    title: "vs Bloated Desktop Apps",
    ghostpad: [
      "Lightweight and fast",
      "Minimal memory footprint",
      "Simple, focused interface",
      "Open source and transparent",
    ],
    others: [
      "Heavy resource usage",
      "Slow startup times",
      "Feature bloat and complexity",
      "Closed source, unknown behavior",
    ],
  },
];

export default function WhyShade() {
  return (
    <Section id="why-ghostpad" spacing="xl" background="panel">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
            Why Choose Shade?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary">
            Built different. No compromises on privacy, performance, or your wallet.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {comparisons.map((comparison, index) => (
            <Card key={index} variant="glass" hover={false}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white border-b border-border pb-3">
                  {comparison.title}
                </h3>

                {/* Shade Advantages */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-sm font-semibold text-success">
                      Shade
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {comparison.ghostpad.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-sm text-text-secondary"
                      >
                        <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Competitors Limitations */}
                <div className="space-y-3 pt-3 border-t border-border/50">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-text-tertiary/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-text-tertiary" />
                    </div>
                    <span className="text-sm font-semibold text-text-tertiary">
                      Others
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {comparison.others.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-sm text-text-tertiary"
                      >
                        <X className="w-4 h-4 text-text-tertiary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
