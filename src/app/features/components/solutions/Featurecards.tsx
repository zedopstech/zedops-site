import { MoveRight } from "lucide-react";
import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  featuresData: {
    title: string;
    subtitle: string;
    description: string;
    features: Feature[];
    bgColor?: string;
    tagColor?: string;
    titleColor?: string;
    descriptionColor?: string;
    cardBgColor?: string;
    hoverColor?: string;
    iconBgColor?: string;
  };
}

const Features: React.FC<FeaturesProps> = ({ featuresData }) => {
  return (
    <div className={`py-24 ${featuresData.bgColor || "bg-[#151414]"}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-32 xl:px-48">
        {/* Section Heading */}
        <h2
          className={`${
            featuresData.tagColor || "text-accent"
          } font-semibold text-center mb-1`}
        >
          {featuresData.title}
        </h2>
        <h2
          className={` ${
            featuresData.titleColor || "text-white"
          } text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-4`}
        >
          {featuresData.subtitle}
        </h2>
        <p
          className={`  ${
            featuresData.descriptionColor || "text-white"
          } text-center text-sm sm:text-lg mb-12`}
        >
          {featuresData.description}
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuresData.features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 md:p-8 ${
                featuresData.cardBgColor || "bg-backgroundlight"
              } ${
                !featuresData.cardBgColor
                  ? "hover:bg-backgroundlighter"
                  : "hover:shadow-lg"
              } rounded-lg flex flex-col items-start transform transition-transform duration-300 hover:scale-105`}
            >
              <div
                className={`p-2 mb-4 ${
                  featuresData.iconBgColor || "bg-black"
                } flex items-center justify-center rounded-md`}
              >
                {feature.icon}
              </div>
              <h3
                className={` ${
                  featuresData.titleColor || "text-white"
                } text-lg sm:text-xl font-bold mb-2`}
              >
                {feature.title}
              </h3>
              <p
                className={` ${
                  featuresData.descriptionColor || "text-white"
                } text-sm sm:text-base`}
              >
                {feature.description}
              </p>
              <div className="mt-auto pt-4 w-full">
                <div className="flex justify-between items-center w-full cursor-pointer group">
                  <span
                    className={`${
                      featuresData.titleColor || "text-white"
                    } text-sm font-medium group-hover:underline`}
                  >
                    Access the guide
                  </span>
                  <MoveRight className="size-4 text-white transition-transform transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
