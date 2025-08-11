"use client";

import React, { useState } from "react";
// Import all the necessary icons directly into the client component
import { PanelsTopLeft, Lock, ShieldCheck, Layers, LucideProps } from "lucide-react";

// Create a mapping from string names to the actual components
const iconMap: { [key: string]: React.ElementType<LucideProps> } = {
  PanelsTopLeft,
  Lock,
  ShieldCheck,
  Layers,
};

// Define the structure for a single feature/tab
interface FeatureTab {
  title: string;
  description: string;
  Icon: string; // Use the string identifier
}

// Define the props for the entire section
interface FeatureTabsProps {
  title: string;
  subtitle: string;
  description: string;
  features: FeatureTab[];
}

const FeatureTabsSection: React.FC<FeatureTabsProps> = ({
  title,
  subtitle,
  description,
  features,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary rounded-full mb-4 uppercase tracking-wider">
            {subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight">
            {title}
          </h2>
          <p className="mt-6 text-lg text-secondary/80">
            {description}
          </p>
        </div>

        {/* Horizontal Tab Buttons */}
        <div className="flex justify-center border-b border-gray-200 mb-12">
          <div className="flex flex-wrap -mb-px space-x-4 sm:space-x-8" aria-label="Tabs">
            {features.map((feature, index) => {
              // Look up the icon component using the string name
              const Icon = iconMap[feature.Icon];
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`inline-flex items-center justify-center p-4 border-b-2 text-lg font-semibold transition-colors duration-300
                    ${
                      activeTab === index
                        ? "border-primary text-primary"
                        : "border-transparent text-secondary/60 hover:text-secondary hover:border-gray-300"
                    }`}
                >
                  {Icon && <Icon className="w-5 h-5 mr-3" />} {/* Render the looked-up icon */}
                  <span>{feature.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200/80 min-h-[250px] flex items-center text-center">
            <div className="w-full">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {features[activeTab].title}
                </h3>
                <p className="text-lg text-secondary/80 leading-relaxed max-w-2xl mx-auto">
                  {features[activeTab].description}
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabsSection;