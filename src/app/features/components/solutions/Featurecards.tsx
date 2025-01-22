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
    <div className="bg-black text-white py-24">
      <div className="container mx-auto px-36">
      <h2 className="text-[#1BB387] font-semibold text-center mb-4">Resources</h2>
      <h2 className="text-5xl font-semibold text-center mb-4">Master email marketing</h2>
       <p className="text-center text-gray-400 mb-12">
          Explore best practices, expert tips, and guides or an effective email marketing strategy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-500 p-8 rounded-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600 hover:shadow-lg"
            >
              <div className="bg-black p-4 mb-4 mr-72 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl text-white font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-100 mb-4 mr-36">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
