"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import { Button } from "@/Components/UI/button"; // Import your button for consistency

// Define the structure for a single app/integration
interface App {
  href: string;
  image: string;
  name: string;
  description: string;
  category: string; // Added category for filtering
}

// Define the props for the entire section
interface IntegrationsSectionProps {
  title: string;
  subtitle: string;
  apps: App[];
}

const IntegrationsSection: React.FC<{ data: IntegrationsSectionProps }> = ({ data }) => {
  // Get all unique categories from the data
  const categories = ["All", ...Array.from(new Set(data.apps.map((app) => app.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter apps based on the active category
  const filteredApps = activeCategory === "All"
    ? data.apps
    : data.apps.filter((app) => app.category === activeCategory);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary rounded-full mb-4 uppercase tracking-wider">
            {data.title}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight">
            {data.subtitle}
          </h2>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-5 py-2.5 font-semibold transition-all duration-300 hover:bg-primary ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'text-secondary/80 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map((app, index) => (
            <Link href={app.href} key={index} className="group">
              <div className="h-full bg-gray-50 p-8 rounded-2xl border border-gray-200/80 transition-all duration-300 hover:shadow-xl hover:border-secondary hover:-translate-y-2">
                <div className="flex h-full flex-col justify-between">
                  {/* Top part: Icon and Text */}
                  <div className="flex flex-col">
                    <div className="relative h-12 w-32 mb-6">
                      {app.image && (
                        <Image
                          fill
                          src={app.image}
                          alt={`${app.name} logo`}
                          className="object-contain object-left"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-secondary">
                        {app.name}
                      </h3>
                      <p className="text-base text-secondary/70">
                        {app.description}
                      </p>
                    </div>
                  </div>
                  {/* Bottom part: Learn More Link */}
                  <div className="mt-6 flex items-center font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>Learn more</span>
                    <MoveRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* "View All" Button */}
        {/* <div className="mt-20 text-center">
            <Link href="/integrations">
                <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-primary text-white hover:bg-secondary shadow-lg">
                    See All Integrations
                </Button>
            </Link>
        </div> */}
      </div>
    </section>
  );
};

export default IntegrationsSection;