import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/Components/UI/button"; // Assuming Button is a custom component
import { LucideIcon } from "lucide-react"; // Import the base type for icons

// Define the type for a single floating card's data
interface FloatingCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  positionClasses: string;
}

// A simple reusable component for the floating cards
const FloatingUICard = ({
  icon: Icon,
  title,
  subtitle,
  className,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  className?: string;
}) => {
  return (
    <div
      className={`absolute bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${className}`}
    >
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-gray-800">{title}</p>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

// Update HeroProps to accept the floatingCards array
interface HeroProps {
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
  floatingCards?: FloatingCardProps[]; // This is the new prop
}

const Hero: React.FC<HeroProps> = ({
  subtitle,
  description,
  buttonLabel,
  imageSrc,
  imageAlt,
  linkHref,
  floatingCards = [], // Default to an empty array to prevent errors
}) => {
  return (
    <section
      id="hero"
      className="relative w-full bg-orange-50 min-h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 min-h-[80vh] py-20 lg:py-0">
          {/* Hero Text Section */}
          <div className="flex-1 text-center lg:text-left z-10">
            {subtitle && (
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                {subtitle}
              </h1>
            )}

            {description && (
              <p className="mt-6 text-lg text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
                {description}
              </p>
            )}

            {buttonLabel && (
              <div className="mt-10 flex justify-center lg:justify-start">
                <Link href={linkHref} title="Book a demo">
                  <Button className="px-8 py-6 text-lg font-semibold text-white bg-primary hover:bg-secondary transition-colors duration-300">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Hero Image Section with Floating UI (Fixed Size) */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <div className="relative w-[480px] h-[580px]"> {/* Step 1: Set a fixed size on the relative container */}
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill // Step 2: Use the 'fill' prop
                className="object-cover rounded-2xl shadow-xl" // Step 3: Use 'object-cover'
                priority
              />

              {/* Map over the floatingCards prop to render each card */}
              {/* These cards will now be positioned relative to the 480x600 container */}
              {floatingCards.map((card, index) => (
                <FloatingUICard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  subtitle={card.subtitle}
                  className={`${card.positionClasses} hidden lg:block`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;