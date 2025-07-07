import React from "react";
import Link from "next/link";
import { Rocket, FileText } from "lucide-react";

interface GetStartedItem {
  title: string;
  sub_title?: string;
  description: string;
  slug: string;
  icon?: React.ElementType;
}

interface GetStartedSectionProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  items: GetStartedItem[];
}

const GetStartedSection: React.FC<GetStartedSectionProps> = ({
  title,
  description,
  // icon = <Rocket className="text-blue-500" size={24} />,
  items,
}) => {
  return (
    <div className="bg-custombg py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        {/* Section Title + Icon */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-2">
            {/* {icon} */}
            <h2 className="text-3xl font-bold text-secondary">{title}</h2>
          </div>
          {description && (
            <p className="text-lg max-w-2xl text-gray-500">
              {description}
            </p>
          )}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon || FileText;

            return (
              <Link
                key={index}
                href={`/resources/knowledge-base/${item.slug}`}
                className="group relative p-6 block bg-white rounded-xl overflow-hidden shadow transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
              >
                {/* Floating Background Circle */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300 z-0" />

                {/* Icon */}
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/20 group-hover:text-secondary transition-all duration-300 shadow-sm relative z-10">
                  <Icon size={26} />
                </div>

                {/* Subtitle */}
                {item.sub_title && (
                  <div className="mb-2 font-semibold text-gray-700 group-hover:text-secondary transition-colors duration-300 relative z-10">
                    <span className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {item.sub_title}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg uppercase font-black text-secondary mb-3 group-hover:text-secondary transition-colors duration-300 relative z-10">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 font-medium group-hover:text-gray-600 transition-colors duration-300 relative z-10">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
