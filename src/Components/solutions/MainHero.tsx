import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  buttonLabel,
  buttonLink,
}) => {
  return ( 
    <section className="bg-white  flex items-start justify-center w-full px-4 lg:px-8">
      {/* Text Section */}
      <div className="flex flex-col max-w-6xl items-center text-center mt-24"> {/* Added margin-top to move content down */}
      <h2 className="mt-2 text-lg lg:text-xl font-semibold text-primary">
          {subtitle}
        </h2>
        <h1 className="text-4xl mt-4 lg:text-5xl font-semibold text-secondary">{title}</h1>
       
        <p className="mt-4 text-secondary leading-relaxed">{description}</p>
        <div className="mt-6">
          <a
            href={buttonLink}
            className="px-6 py-3 text-white bg-primary rounded-md shadow-sm hover:bg-white hover:text-primary  transition-all"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
