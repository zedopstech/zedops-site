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
    <div className="bg-zinc-50 container mx-auto p-32">
      <h2 className="text-5xl font-semibold text-background mb-16">Email features</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-24">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start space-y-2">
            <div className="bg-green-100 p-2  rounded-md">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-background">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
