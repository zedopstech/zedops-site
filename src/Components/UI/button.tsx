import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-white",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent text-primary hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        text: "bg-transparent text-primary hover:bg-primary/10",
        subdued: "bg-muted text-muted-foreground hover:bg-muted/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3",
        lg: "h-12 rounded-md px-6",
        icon: "h-10 w-10",
        compressed: "h-6 px-2 text-xs",
        fullWidth: "w-full h-10 px-4 py-2", // Full width button
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ElementType; // The icon component
  iconPosition?: "left" | "right"; // Position of the icon
  iconStyle?: string; // Custom styles for the icon
  loading?: boolean; // Loading state
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon: Icon,
      iconPosition = "left",
      iconStyle = "h-4 w-4", // Default styles for the icon
      loading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          "flex items-center space-x-2"
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : Icon && iconPosition === "left" ? (
          <Icon className={cn(iconStyle)} aria-hidden="true" />
        ) : null}
        <span>{children}</span>
        {!loading && Icon && iconPosition === "right" && (
          <Icon className={cn(iconStyle)} aria-hidden="true" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
