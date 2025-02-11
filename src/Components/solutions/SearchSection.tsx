import React from "react";
import { Search, PlayCircle } from "lucide-react";

interface SearchSectionProps {
  title: string;
  placeholder: string;
  videoUrl?: string;
  description?: string;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  title,
  placeholder,
  videoUrl,
  description,
}) => {
  return (
    <div className="bg-black py-44 px-4 flex flex-col items-center justify-center text-center relative">
      <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>

      <div className="mt-6 w-full max-w-sm sm:max-w-md md:max-w-lg relative">
        <div className="relative flex items-center">
          <Search className="absolute left-4 text-gray-400" size={20} />
          <input
            type="text"
            placeholder={placeholder}
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Left-aligned video and description with independent spacing */}
      {(videoUrl || description) && (
        <div className="w-full max-w-xl flex justify-start">
          <div className="absolute left-0 mt-10 sm:mt-16 md:mt-24 ml-4 sm:ml-10 md:ml-24 lg:ml-36 xl:ml-44">
            {videoUrl && (
              <div className="flex items-center space-x-2 text-white">
                <PlayCircle size={40} className="text-black fill-white" />
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline"
                >
                  Videos
                </a>
              </div>
            )}
            {description && (
              <p className="mt-2 text-gray-300 text-sm">{description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSection;
