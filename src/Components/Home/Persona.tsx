"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you use shadcn/ui for utility classes. If not, you can remove this.

// Define the type for a single persona, including shape and color
interface Persona {
  name: string;
  imageSrc: string;
  link: string;
  shape: 'circle' | 'squircle' | 'semicircle';
  bgColor: 'black' | 'blue';
}

// Helper objects for Tailwind classes
const shapeClasses = {
  circle: "rounded-full",
  squircle: "rounded-[2.5rem]", // A nice rounded square
  semicircle: "rounded-t-full", // Rounded top half
};

const bgClasses = {
    black: "bg-[#151414]",
    blue: "bg-primary",
};


const PersonasSection = () => {
    // Data is now defined inside the component, including the new shape and bgColor properties
    const personasData = {
        subtitle: "Built for Your Entire Team",
        title: "A Solution for Every Role on the Project",
        personas: [
            {
                name: "Project Managers",
                imageSrc: "/Persona/project-managers.jpg", // Replace with your image
                link: "/solutions/project-managers",
                shape: 'circle',
                bgColor: 'black',
            },
            {
                name: "Site Supervisors",
                imageSrc: "/Persona/site-supervisor.jpg", // Replace with your image
                link: "/solutions/site-supervisors",
                shape: 'squircle',
                bgColor: 'blue',
            },
            {
                name: "Company Owners",
                imageSrc: "/Persona/company-owner.jpg", // Replace with your image
                link: "/solutions/company-owners",
                shape: 'semicircle',
                bgColor: 'black',
            },
            {
                name: "Subcontractors",
                imageSrc: "/Persona/subcontractor.jpg", // Replace with your image
                link: "/solutions/subcontractors",
                shape: 'circle',
                bgColor: 'blue',
            },
        ] as Persona[] // Add type assertion here for better type safety
    }
    const { title, subtitle, personas } = personasData;    

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 font-semibold bg-primary/10 text-primary rounded-full mb-4">
            {subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight">
            {title}
          </h2>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Link href={persona.link} className="group relative">
                <div
                  className={cn(
                    "relative w-48 h-48 md:w-56 md:h-56 overflow-hidden transition-transform duration-300 group-hover:scale-105",
                    shapeClasses[persona.shape],
                    bgClasses[persona.bgColor]
                  )}
                >
                  {/* Person Image - This element moves on hover */}
                  <Image
                    src={persona.imageSrc}
                    alt={`Image of ${persona.name}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:translate-y-[100%]"
                  />
                  
                  {/* Hover Overlay with Button - This element appears on hover */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div 
                      className="inline-flex items-center justify-center px-4 py-2 bg-white/90 text-primary
                                 font-semibold rounded-md transform transition-all duration-500 ease-out
                                 -translate-y-4 group-hover:translate-y-0"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
              <h3 className="mt-6 text-xl font-medium text-secondary">
                {persona.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;