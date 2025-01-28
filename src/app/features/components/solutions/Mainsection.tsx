import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface SectionData {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  features: Feature[];
}

const Mainsection: React.FC<{ sections: SectionData[] }> = ({ sections }) => {
  return (
    <div className="bg-white w-full">
      {sections?.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="flex flex-col md:flex-row items-center gap-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full min-h-screen mb-16 last:mb-0" // Added margin-bottom for spacing
        >
          {sectionIndex % 2 === 0 ? (
            <>
              {/* Image Section */}
              <div className="md:w-1/2 w-full">
                <img
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
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-background mt-4">
                  {section.title}
                </h2>
                <p className="mt-4 text-gray-600 max-w-prose mx-auto md:mx-0">
                  {section.description}
                </p>

                <div className="mt-7 space-y-7">
                  {section.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded flex-shrink-0">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Content Section */}
    
              <div className="md:w-1/2 w-full text-center md:text-left">
                <h4 className="text-[#1BB387] font-semibold uppercase text-sm">
                  {section.subtitle}
                </h4>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-background mt-4">
                  {section.title}
                </h2>
                <p className="mt-4 text-gray-600 max-w-prose mx-auto md:mx-0">
                  {section.description}
                </p>

                <div className="mt-7 space-y-7">
                  {section.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded flex-shrink-0">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 w-full">
                <img
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
