import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface SectionData {
  image: string;
  title: string;
  description: string;
  features: Feature[];
}

// Updated component to accept an array of sections
const Mainsection: React.FC<{ sections: SectionData[] }> = ({ sections }) => {
  return (
    <div className="bg-white w-full">
      {sections?.map((section, sectionIndex) => (
        <div 
          key={sectionIndex}
          className="flex flex-col md:flex-row items-center gap-12 p-8 max-w-8xl mx-auto w-full min-h-screen"
        >
          {/* Conditionally render content based on imageOnRight prop */}
          {sectionIndex % 2 === 0 ? (
            <>
              {/* Image Section */}
              <div className="md:w-3/3 w-5/6 mx-auto">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full md:max-w-lg lg:max-w-1xl mx-auto"
                />
              </div>
              
              {/* Content Section */}
              <div className="md:w-2/3"> 
                <h4 className="text-[#1BB387] font-semibold uppercase text-sm ml-4">Personalization</h4>
                <h2 className="text-6xl font-semibold text-background">{section.title}</h2>
                <p className="mt-4 text-gray-600 max-w-xs">{section.description}</p>

                {/* Features Section */}
                <div className="mt-7 space-y-7">
                  {section.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="bg-green-100 p-2 rounded">
                        <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-gray-600 max-w-xs">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
             <div className="w-full md:w-3/3 md:ml-40 px-4 md:px-0"> 
                <h4 className="text-[#1BB387] font-semibold uppercase text-sm ml-4">Personalization</h4>
               <h2 className="text-6xl font-semibold text-background">{section.title}</h2> 
               <p className="mt-4 text-gray-600 max-w-xs">{section.description}</p>

                 {/* Features Section */}
                 <div className="mt-7 space-y-7">
                 {section.features.map((feature, index) => (
                 <div key={index} className="flex items-start gap-4"> 
                 <div className="bg-green-100 p-2 rounded flex-shrink-0"> 
                 <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
                  </div>
                  <div>
                   <h3 className="font-semibold">{feature.title}</h3>
                   <p className="text-gray-600 max-w-xs">{feature.description}</p>
                 </div>
                </div>
                 ))}
                 </div>
               </div>
              
              {/* Content Section */}
              <div className="md:w-3/3 w-full md:mr-12"> 
              <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full md:max-w-lg lg:max-w-1xl"
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
