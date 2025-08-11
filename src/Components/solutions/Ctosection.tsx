"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/Components/UI/button"; // Assuming you use a custom Button component
import { Check } from "lucide-react"; // A better icon for checkmarks

interface CtoSectionProps {
  title: string;
  description?: string; // Description is optional
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
    // The relative and z-index are crucial for floating behavior
    // The negative margin pulls the section up
    <div className="relative z-10 max-w-7xl mx-auto mt-[-80px] px-4">
      <div className="bg-secondary p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Title, Description, Benefits */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            {title}
          </h2>

          {description && (
            <p className="text-base md:text-lg text-white/80 mt-2">
              {description}
            </p>
          )}

          <ul className="flex flex-col sm:flex-row sm:space-x-6 text-white/90 mt-6 space-y-2 sm:space-y-0 justify-center lg:justify-start">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 mt-6 lg:mt-0 flex-shrink-0">
          <Link href={button2Link} className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full bg-transparent border-white/50 text-white hover:bg-white hover:text-primary transition-colors duration-300 py-3 px-6 text-lg font-semibold"
            >
              {button2Label}
            </Button>
          </Link>
          <Link href={button1Link} className="w-full sm:w-auto">
            <Button className="w-full bg-white text-primary hover:bg-gray-200 transition-colors duration-300 py-3 px-6 text-lg font-semibold">
              {button1Label}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtoSection;