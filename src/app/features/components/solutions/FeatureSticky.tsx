import React from "react";

// Define the structure of the props
interface FeatureStickyProps {
  title: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

export default function FeatureSticky({ title, subtitle, description, features }: FeatureStickyProps) {
  return (
    <>
      <section className="overflow-x-clip py-12 sm:py-20 md:py-24 lg:py-28 theme-charcoal light flex flex-col gap-20 bg-custombg text-black">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-32 xl:px-48">
          <div className="relative grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-28 xl:gap-52">
            <div className="sticky flex h-fit flex-col gap-6 md:top-12 lg:top-[calc(86.5px+4rem)]">
              <div>
                {subtitle && (
                  <div className="mb-2 inline-block max-h-8 text-accent">
                    <div className="inline-flex items-center gap-x-3 text-sm font-bold uppercase tracking-wide">
                      {subtitle}
                    </div>
                  </div>
                )}
                {title && (
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
                    {title}
                  </h2>
                )}
              </div>
              {description && (
                <p className="text-foregroundmuted text-lg">
                  {description}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-20">
              {features && features.map((feature, index) => (
                <div className="flex flex-col gap-3" key={index}>
                  <div>
                    {feature.icon && (
                      <div className="relative mb-3 inline-flex rounded-xs border border-transparent p-1.5 text-foreground transition-all bg-lightmint">
                        {feature.icon}
                      </div>
                    )}
                    {feature.title && (
                      <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    )}
                  </div>
                  {feature.description && (
                    <p className="text-lg text-foregroundmuted">
                      {feature.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
