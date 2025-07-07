import React from "react";

interface Highlight {
  label: string;
  value: string;
}

interface SearchSectionProps {
  title: string;
  subtitle?: string;
  placeholder: string;
  videoUrl?: string;
  videoName?: string;
  description?: string;
  highlights?: Highlight[];
  icons?: {
    search?: React.ReactNode;
    video?: React.ReactNode;
  };
}

const SearchSection: React.FC<SearchSectionProps> = ({
  title,
  subtitle,
  placeholder,
  videoUrl,
  videoName,
  description,
  highlights,
  icons,
}) => {
  return (
    <section className="relative bg-secondary text-white py-20 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{title}</h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg text-white/90 mb-6">{subtitle}</p>
        )}

        {/* 🔹 Highlight Badges */}
        {Array.isArray(highlights) && highlights.length > 0 && (
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            {highlights.map((badge, index) => (
              <div
                key={index}
                className="px-5 py-2 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md shadow-md text-center"
              >
                <div className="text-xl font-bold">{badge.value}</div>
                <div className="text-sm text-white/80">{badge.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* 🔍 Search Input */}
        <div className="max-w-xl mx-auto mt-8">
          <div className="relative flex items-center">
            {icons?.search && (
              <div className="absolute left-4 text-gray-300">
                {icons.search}
              </div>
            )}
            <input
              type="text"
              placeholder={placeholder}
              className="w-full py-3 pl-12 pr-4 rounded-lg text-black focus:outline-none text-base shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
