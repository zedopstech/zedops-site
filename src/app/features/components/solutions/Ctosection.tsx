import React from "react";

interface CtoSectionProps {
  title: string;
  description: string;
  benefits: string[];
  button1Label: string;
  button1Link: string;
  button2Label: string;
  button2Link: string;
}

const CtoSection: React.FC<CtoSectionProps> = ({
  title,
  description,
  benefits,
  button1Label,
  button1Link,
  button2Label,
  button2Link,
}) => {
  return (
    <div className="bg-green-100 p-6 md:p-12 lg:p-20 rounded-lg shadow-md max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mt-[-40px]">
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-background">
          {title}
        </h2>
        <p className="text-base md:text-xl text-gray-700 mt-2">{description}</p>
        <ul className="flex flex-col md:flex-row md:space-x-4 text-gray-600 mt-4 space-y-2 md:space-y-0">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-center justify-center md:justify-start"
            >
              <span className="mr-2">✔</span> {benefit}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 mt-6 md:mt-0">
        <a
          href={button1Link}
          className="bg-gray-900 text-white py-3 px-6 rounded-full font-semibold text-center"
        >
          {button1Label}
        </a>
        <a
          href={button2Link}
          className="border border-gray-900 text-gray-900 py-3 px-6 rounded-full font-semibold text-center"
        >
          {button2Label}
        </a>
      </div>
    </div>
  );
};

export default CtoSection;
