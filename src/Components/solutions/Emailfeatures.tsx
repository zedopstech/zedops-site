import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  features: Feature[];
}

const EmailFeatures: React.FC<FeaturesProps> = ({title, features }) => {
  return (
    <div className="bg-orange-50 w-full mx-auto p-6 md:p-16 lg:p-44">
      <h2 className="text-3xl md:text-5xl font-semibold text-secondary mb-8 md:mb-16">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start space-y-4">
            <div className="bg-primary p-2 rounded-md">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-secondary text-base md:text-lg">{feature.title}</h3>
            <p className="text-secondary text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailFeatures;
