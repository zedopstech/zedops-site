import React from "react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 -mt-72">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col bg-custombg rounded-lg shadow-md p-12 items-center text-center transform scale-100"
          >
            <h3 className="text-3xl font-semibold text-background text-left">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-4 text-lg text-left">
              {feature.description}
            </p>
            <div className="mt-6">
              <Image
                layout="intrinsic"
                width={1920} // Large width to ensure responsiveness
                height={1080}
                src={feature.imageSrc}
                alt={feature.imageAlt || feature.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
