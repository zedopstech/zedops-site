import React from "react";
import { Rocket } from "lucide-react";

interface GetStartedItem {
  title: string;
  description: string;
}

interface GetStartedSectionProps {
  title: string;
  items: GetStartedItem[];
}

const GetStartedSection: React.FC<GetStartedSectionProps> = ({
  title,
  items,
}) => {
  return (
    <div className="bg-custombg py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <div className="flex items-center space-x-3 self-start">
          <Rocket className="text-blue-500" size={24} />
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm transition-transform duration-200 ease-in-out hover:shadow-md">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
