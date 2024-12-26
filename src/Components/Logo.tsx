import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "normal" | "primary";
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, variant = "normal", ...props }, ref) => {
    const logoSrc =
      variant === "primary" ? "/full-logo-primary.png" : "/full-logo.png";

    return (
      <div
        ref={ref}
        className={cn("text-2xl font-extrabold", className)}
        {...props}
      >
        <Image src={logoSrc} alt="Logo" width={100} height={100} />
      </div>
    );
  }
);

Logo.displayName = "Logo";

export default Logo;
