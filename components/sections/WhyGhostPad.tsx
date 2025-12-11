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

export default function WhyGhostPad() {
  return (
    <Section id="why-ghostpad" spacing="xl" background="dark">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Choose GhostPad?
          </h2>
          <p className="text-lg md:text-xl text-ghost-gray-light">
            Built different. No compromises on privacy, performance, or your wallet.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {comparisons.map((comparison, index) => (
            <Card key={index} variant="glass" hover={false}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white border-b border-ghost-gray/20 pb-3">
                  {comparison.title}
                </h3>

                {/* GhostPad Advantages */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent-green" />
                    </div>
                    <span className="text-sm font-semibold text-accent-green">
                      GhostPad
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {comparison.ghostpad.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-sm text-ghost-light"
                      >
                        <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Competitors Limitations */}
                <div className="space-y-3 pt-3 border-t border-ghost-gray/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-ghost-gray/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-ghost-gray" />
                    </div>
                    <span className="text-sm font-semibold text-ghost-gray">
                      Others
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {comparison.others.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-sm text-ghost-gray"
                      >
                        <X className="w-4 h-4 text-ghost-gray mt-0.5 flex-shrink-0" />
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
