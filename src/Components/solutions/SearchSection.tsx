import React from "react";

interface SearchSectionProps {
  title: string;
  subtitle?: string;
  placeholder: string;
  videoUrl?: string;
    videoName?: string;
  description?: string;
  icons?: { [key: string]: React.ReactNode }; // Common icon prop
}

const SearchSection: React.FC<SearchSectionProps> = ({
  title,
  subtitle,
  placeholder,
    videoUrl,
  videoName,
  description,
  icons,
}) => {
  return (
    <div className="bg-black py-44 px-4 flex flex-col items-center justify-center text-center relative">
      {subtitle && <p className="text-lg text-gray-300 mt-2">{subtitle}</p>}

      <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>

      <div className="mt-6 w-full max-w-sm sm:max-w-md md:max-w-lg relative">
              <div className="relative flex items-center">
                  
          <div className="absolute left-4 text-gray-400">{icons?.search}</div>
          <input
            type="text"
            placeholder={placeholder}
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none text-sm sm:text-base"
          />
        </div>
      </div>

      {(videoUrl || description) && (
        <div className="w-full max-w-xl flex justify-start">
          <div className="absolute left-0 mt-10 sm:mt-16 md:mt-24 ml-4 sm:ml-10 md:ml-24 lg:ml-36 xl:ml-44">
            {videoUrl && (
              <div className="flex items-center space-x-2 text-white">
                {icons?.video}
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline"
                >
                {videoName}
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
