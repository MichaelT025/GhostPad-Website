import Section from "@/components/ui/Section";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <Section id="how-it-works" spacing="lg" background="transparent">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
          How it works
        </h2>
        <p className="text-lg text-text-secondary">
          From screen to answer in seconds
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative group"
            >
              {/* Step number */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-shade-panel border border-border flex items-center justify-center text-lg font-semibold text-accent group-hover:border-accent/50 transition-colors">
                  {step.step}
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line (between steps on desktop) */}
              {index < HOW_IT_WORKS_STEPS.length - 1 && index % 2 === 0 && (
                <div className="hidden md:block absolute top-5 left-[calc(100%+1rem)] w-8 border-t border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
