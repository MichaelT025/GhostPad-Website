import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl";
  background?: "transparent" | "dark" | "darker" | "gradient";
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    { className, spacing = "lg", background = "transparent", children, ...props },
    ref
  ) => {
    const spacingStyles = {
      sm: "py-12",
      md: "py-16",
      lg: "py-20 md:py-24",
      xl: "py-24 md:py-32",
    };

    const backgroundStyles = {
      transparent: "bg-transparent",
      dark: "bg-ghost-dark",
      darker: "bg-ghost-darker",
      gradient:
        "bg-gradient-to-b from-ghost-black via-ghost-dark to-ghost-black",
    };

    return (
      <section
        ref={ref}
        className={cn(
          spacingStyles[spacing],
          backgroundStyles[background],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
