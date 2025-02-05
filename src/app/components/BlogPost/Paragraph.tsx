import React from "react";

interface ParagraphProps {
  content?: string;
  additionalContent?: string;  // Optional content to add below the main content
}

const Paragraph: React.FC<ParagraphProps> = ({ content, additionalContent }) => {
  return (
    <section className="flex flex-col md:flex-row w-full mx-auto py-8 px-8 bg-gray-100 text-black">
      {/* Right Side (Content) */}
      <div className="md:w-1/2 flex flex-col justify-center ml-auto">
        <p className="text-lg max-w-xl text-gray-700 mt-4">{content}</p>
        {/* Optional Additional Content */}
        {additionalContent && (
          <p className="text-md max-w-xl text-gray-500 mt-6">{additionalContent}</p>
        )}
      </div>
    </section>
  );
};

export default Paragraph;
