import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const Logo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-2xl font-extrabold", className)}
      {...props}
    >
      <Image src="/full-logo.png" alt="Logo" width={116} height={116} />
    </div>
  );
});

Logo.displayName = "Logo";

export default Logo;
