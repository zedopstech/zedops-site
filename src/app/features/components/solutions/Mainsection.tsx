import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface AdvancedSegmentationProps {
  title: string;
  description: string;
  features: Feature[];
  image: string; // Image for the left side
  imageOnRight?: boolean;
}

const AdvancedSegmentation: React.FC<AdvancedSegmentationProps> = ({ title, description, features, image, imageOnRight = false }) => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center gap-12 p-8 max-w-8xl mx-auto w-full min-h-screen">
      {/* Left Side - Reduced Size Image */}
      {!imageOnRight && (
      <div className="md:w-3/3 w-5/6 mx-auto">
        <img 
          src={image} 
          alt="Advanced segmentation" 
          className="w-full md:max-w-lg lg:max-w-1xl mx-auto"
        />
      </div>
      )
    }
      {/* Right Side - Content */}
      <div className="md:w-2/3 ml-10"> 
        <h4 className="text-[#1BB387] font-semibold uppercase text-sm">Personalization</h4>
        <h2 className="text-6xl font-semibold text-background">{title}</h2>
        <p className="mt-4 text-gray-600">{description}</p>

        {/* Features Section */}
        <div className="mt-7 space-y-7">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="bg-green-100 p-2 rounded">
                <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {imageOnRight && (
      <div className="md:w-3/3 w-5/6 mx-auto">
        <img 
          src={image} 
          alt="Advanced segmentation" 
          className="w-full md:max-w-lg lg:max-w-1xl mx-auto"
        />
      </div>
      )
    }
    
    
    </div>
  );
};

export default AdvancedSegmentation;
