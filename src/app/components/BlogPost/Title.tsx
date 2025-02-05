import React from "react";

interface TitleProps {
 Maintitle?: string;
  subtitle?: string;  // Optional subtitle
}

const Title: React.FC<TitleProps> = ({ Maintitle, subtitle }) => {
  return (
    <section className="flex flex-col md:flex-row w-full mx-auto py-4 px-8 bg-gray-100 text-black">
      {/* Right Side (Title) */}
      <div className="md:w-1/2 flex flex-col justify-center ml-auto">
        <h1 className="text-3xl max-w-xl font-semibold text-gray-900">{Maintitle}</h1>


        {/* Optional Subtitle */}
        {subtitle && (
          <h2 className="text-3xl font-semibold text-gray-900 mt-4">{subtitle}</h2>
        )}
      </div>
    </section>
  );
};

export default Title;
