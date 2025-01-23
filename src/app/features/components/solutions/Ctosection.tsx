import React from "react";

interface CtaSectionProps {
  title: string;
  description: string;
  benefits: string[];
  button1Label: string;
  button1Link: string;
  button2Label: string;
  button2Link: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  description,
  benefits,
  button1Label,
  button1Link,
  button2Label,
  button2Link,
}) => {
  return (
    <div className="bg-green-100 p-20 rounded-lg shadow-md max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between mt-[-50px]">


      <div>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="text-xl text-gray-700 mt-2">{description}</p>
        <ul className="flex space-x-4 text-gray-600 mt-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2">✔</span> {benefit}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 md:mt-0 flex gap-4">
        <a href={button1Link} className="bg-gray-900 text-white py-3 px-6 rounded-full font-semibold">
          {button1Label}
        </a>
        <a href={button2Link} className="border border-gray-900 text-gray-900 py-3 px-6 rounded-full font-semibold">
          {button2Label}
        </a>
      </div>
    </div>
  );
};

export default CtaSection;
