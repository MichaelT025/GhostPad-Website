import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";

type SectionSpacing = "sm" | "md" | "lg" | "xl";
type SectionBackground = "transparent" | "panel" | "panel-muted" | "gradient";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
  background?: SectionBackground;
  container?: boolean;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      spacing = "lg",
      background = "transparent",
      container = true,
      containerSize = "lg",
      children,
      ...props
    },
    ref
  ) => {
    const spacingStyles: Record<SectionSpacing, string> = {
      sm: "py-12 md:py-16",
      md: "py-16 md:py-20",
      lg: "py-20 md:py-28",
      xl: "py-24 md:py-36",
    };

    const backgroundStyles: Record<SectionBackground, string> = {
      transparent: "bg-transparent",
      panel: "bg-shade-panel",
      "panel-muted": "bg-shade-panel-muted",
      gradient: "bg-gradient-to-b from-shade-bg via-shade-panel-muted to-shade-bg",
    };

    return (
      <section
        ref={ref}
        className={cn(spacingStyles[spacing], backgroundStyles[background], className)}
        {...props}
      >
        {container ? (
          <Container size={containerSize}>{children}</Container>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
