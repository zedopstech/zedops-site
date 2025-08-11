import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CampaignChannelsProps {
  sectionTitle: string;
  subtitle?: string;
  description: string;
  features: Feature[];
}

const CampaignChannels: React.FC<{ data: CampaignChannelsProps }> = ({
  data,
}) => {
  return (
    <section className="w-full bg-white min-h-screen py-24 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Content */}
        <div className="md:w-1/2 w-full">
          {data.subtitle && (
            <h4 className="text-primary font-semibold uppercase text-sm">
              {data.subtitle}
            </h4>
          )}
          <h2 className="text-4xl md:text-5xl font-semibold text-secondary mt-4">
            {data.sectionTitle}
          </h2>
          <p className="mt-4 text-secondary">{data.description}</p>
        </div>

        {/* Right Side Features Grid */}
        <div className="md:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.features.map((feature, index) => (
            <div key={index} className="bg-custombg p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300">
              <div className="bg-primary p-2 rounded-md inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignChannels;
