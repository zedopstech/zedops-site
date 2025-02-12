import React from "react";
import Image from "next/image";

interface Feature {
  icon: React.ReactNode; // Now accepts a ReactNode for icons
  title: string;
  description: string;
}

interface SectionData {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  features?: Feature[]; // Make features optional
}

const Mainsection: React.FC<{ sections: SectionData[] }> = ({ sections }) => {
  return (
    <div className="bg-white w-full">
      {sections?.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="flex flex-col md:flex-row items-center gap-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full min-h-screen mb-16 last:mb-0"
        >
          {sectionIndex % 2 === 0 ? (
            <>
              {/* Image Section */}
              <div className="md:w-1/2 w-full">
                <Image
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 w-full text-center md:text-left">
                <h4 className="text-[#1BB387] font-semibold uppercase text-sm">
                  {section.subtitle}
                </h4>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-background mt-4">
                  {section.title}
                </h2>
                <p className="mt-4 text-gray-600 max-w-prose mx-auto md:mx-0">
                  {section.description}
                </p>

                {/* Features Section (Optional) */}
                {section.features && (
                  <div className="mt-7 space-y-7">
                    {section.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-lightmint p-2 rounded flex-shrink-0">
                          <div className="w-6 h-6">{feature.icon}</div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-left sm:text-xl">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-left sm:text-base">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Content Section */}
              <div className="md:w-1/2 w-full text-center md:text-left">
                <h4 className="text-[#1BB387] font-semibold uppercase text-sm">
                  {section.subtitle}
                </h4>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-background mt-4">
                  {section.title}
                </h2>
                <p className="mt-4 text-gray-600 max-w-prose mx-auto md:mx-0">
                  {section.description}
                </p>

                {/* Features Section (Optional) */}
                {section.features && (
                  <div className="mt-7 space-y-7">
                    {section.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-lightmint p-2 rounded flex-shrink-0">
                          <div className="w-6 h-6">{feature.icon}</div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-left sm:text-xl">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-left sm:text-base">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 w-full">
                <Image
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Mainsection;
