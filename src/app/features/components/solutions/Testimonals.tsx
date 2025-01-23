import React from "react";

interface ControlFeature {
  title: string;
  description: string;
  icon?: React.ReactNode; // Accepts React components or images
}

interface ControlSectionProps {
  subtitle: string;
  title: string;
  features: ControlFeature[];
  imageSrc?: string; // Optional image for the section
  imageAlt?: string; // Alt text for the image
}

const ControlSection: React.FC<ControlSectionProps> = ({
  subtitle,
  title,
  features,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[80rem] mx-auto text-center px-4 lg:px-12">
        <h3 className="text-[#1BB387] font-semibold text-lg">{subtitle}</h3>
        <h2 className="text-5xl lg:text-6xl  text-background mt-2">
          {title}
        </h2>

        {/* Centered Image */}
        {imageSrc && (
          <div className="mt-10">
            <img
              src={imageSrc}
              alt={imageAlt || "Section Image"}
              className="mx-auto w-full h-auto object-cover"
              style={{ width: "100%", height: "80vh" }}
            />
          </div>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"> {/* Reduced gap between cards */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex text-left items-start space-x-4 p-1 hover:shadow-md transition-transform transform hover:scale-105" // Further reduced padding and hover scale
            >
              {/* Icon at Top-Left */}
              {feature.icon && (
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-gray-900 flex justify-center items-center rounded-full"> {/* Further reduced icon size */}
                  {typeof feature.icon === "string" ? (
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-6 h-6 object-contain" // Further reduced image size
                    />
                  ) : (
                    feature.icon
                  )}
                </div>
              )}

              {/* Text Content */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900"> {/* Reduced title size */}
                  {feature.title}
                </h4>
                <p className="text-gray-600 mt-2 text-base"> {/* Reduced description size */}
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ControlSection;