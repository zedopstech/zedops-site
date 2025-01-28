import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  
}

interface FeaturesProps {
  features: Feature[];
  sectionTitle: string; // For the section's main heading
  subtitle: string; // For the section's subtitle
  sectionDescription: string; // For the section's description paragraph
}

const Features: React.FC<FeaturesProps> = ({sectionTitle, subtitle, sectionDescription, features }) => {
   
  return (
    <div className="bg-black text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-32 xl:px-48">
        {/* Section Heading */}
        <h2 className="text-[#1BB387] font-semibold text-center mb-1">{sectionTitle}</h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-4">
          {subtitle}
        </h2>
        <p className="text-center text-gray-400 text-sm sm:text-base mb-12">
          {sectionDescription}
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#2E2E2D] p-6 md:p-8 rounded-lg flex flex-col items-start transform transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-lg"
            >
             <div className="bg-black p-4 mb-4 flex items-center justify-center rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl text-white font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
