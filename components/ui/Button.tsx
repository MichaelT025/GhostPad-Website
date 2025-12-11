import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ghost-black disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:from-accent-blue-light hover:to-accent-purple-light focus:ring-accent-blue shadow-glow-sm hover:shadow-glow-md",
      secondary:
        "bg-ghost-darker text-ghost-light border border-ghost-gray/30 hover:bg-ghost-dark hover:border-ghost-gray/50 focus:ring-ghost-gray",
      ghost:
        "text-ghost-light hover:bg-ghost-darker hover:text-white focus:ring-ghost-gray",
      outline:
        "border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white focus:ring-accent-blue",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
