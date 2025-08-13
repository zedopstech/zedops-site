import { FC } from "react";
import Link from "next/link";
import { Button } from "@/Components/UI/button"; // It's better to use your existing Button component for consistency

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  linkHref?: string;
}

const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  description,
  buttonLabel,
  linkHref,
}) => {
  return (
    <section className="bg-orange-50 text-foreground py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Title / Pre-headline */}
        {title && (
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 text-sm font-bold text-primary uppercase tracking-wider bg-primary/10 rounded-full">
              {title}
            </span>
          </div>
        )}
        
        {/* Main Headline */}
        {subtitle && (
          <h1 className="text-4xl md:text-6xl font-bold text-secondary capitalize leading-tight md:leading-tight">
            {subtitle}
          </h1>
        )}
        
        {/* Description */}
        {description && (
          <p className="mt-6 mx-auto max-w-2xl text-lg text-secondary/80 leading-relaxed">
            {description}
          </p>
        )}

        {/* Action Buttons */}
        {buttonLabel && linkHref && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href={linkHref}>
              <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-primary text-white shadow-sm hover:shadow-lg hover:bg-secondary transition-all duration-300 group">
                {buttonLabel}
                {/* Optional: Add an icon if you want */}
              </Button>
            </Link>
            
            {/* Example of a secondary "Product Tour" button */}
            {/* <Link href="/product-tour" className="text-secondary hover:text-primary">
              <Button size="lg" className="px-8 py-6 text-lg transition-colors duration-300 group bg-transparent">
                <Play className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110" />
                Product Tour
              </Button>
            </Link> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;