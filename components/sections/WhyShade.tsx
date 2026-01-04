import { Check, X } from "lucide-react";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { COMPARISON_POINTS } from "@/lib/constants";

export default function WhyShade() {
  return (
    <Section id="comparison" spacing="lg" background="panel">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
          Why choose Shade?
        </h2>
        <p className="text-lg text-text-secondary">
          Built different. No compromises on privacy, performance, or your wallet.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-3 gap-6">
        {COMPARISON_POINTS.map((comparison, index) => (
          <Card key={index} variant="bordered" hover={false} padding="lg">
            <div className="space-y-6">
              <h3 className="text-base font-semibold text-text-primary border-b border-border pb-3">
                {comparison.category}
              </h3>

              {/* Shade Advantages */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-sm font-medium text-success">
                    Shade
                  </span>
                </div>
                <ul className="space-y-2 pl-7">
                  {comparison.shade.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-secondary list-disc marker:text-success/50"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competitors Limitations */}
              <div className="space-y-3 pt-3 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-text-tertiary/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-text-tertiary" />
                  </div>
                  <span className="text-sm font-medium text-text-tertiary">
                    Others
                  </span>
                </div>
                <ul className="space-y-2 pl-7">
                  {comparison.others.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-tertiary list-disc marker:text-text-tertiary/50"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
