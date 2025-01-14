/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React from "react";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "normal" | "primary";
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("text-2xl font-extrabold", className)}
        {...props}
      >
        <img
          src={"/images/logo-with-text-svg.svg"}
          alt="Logo"
          width={132}
          height={132}
        />
      </div>
    );
  }
);

Logo.displayName = "Logo";

export default Logo;
