import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "glow";
  hover?: boolean;
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const baseStyles =
      "rounded-xl transition-all duration-300";

    const variantStyles = {
      default:
        "bg-ghost-darker border border-ghost-gray/20 p-6",
      glass:
        "bg-ghost-dark/50 backdrop-blur-sm border border-ghost-gray/10 p-6",
      glow:
        "bg-ghost-darker border border-accent-blue/30 shadow-glow-sm p-6",
    };

    const hoverStyles = hover
      ? "hover:scale-105 hover:shadow-xl hover:border-ghost-gray/40 cursor-pointer"
      : "";

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
