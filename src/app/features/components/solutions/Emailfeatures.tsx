import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <div className="bg-gray-100 container mx-auto p-44">
      <h2 className="text-5xl font-semibold text-background mb-16">Email features</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start space-y-4">
            <div className="bg-green-100 p-4 rounded-md">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-background text-lg">{feature.title}</h3>
            <p className="text-gray-600 text-sm ">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
