"use client";
import { Building2, ClipboardCheck, Clock, Coins, FileText, HardHat, LineChart, Ruler, ShieldCheck, Users, Workflow, BadgeDollarSign, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/UI/carousel";
import type { CarouselApi } from "@/Components/UI/carousel";
import { Button } from "../UI/button";

const content = {
  mainTitle: "Construction Management Built for Modern Teams",
  subTitle: "Everything you need to manage your construction projects efficiently",
  // Features organized with icons for the grid layout
  features: [
    { 
      id: 1, 
      text: "Team Collaboration", 
      icon: Users,
      description: "Connect your team with real-time communication and file sharing"
    },
    { 
      id: 2, 
      text: "Project Planning", 
      icon: Workflow,
      description: "Plan your projects with interactive Gantt charts and task assignments"
    },
    { 
      id: 3, 
      text: "Cost Control", 
      icon: Coins,
      description: "Track and analyze costs with detailed financial reporting"
    },
    { 
      id: 4, 
      text: "Quality Management", 
      icon: ClipboardCheck,
      description: "Implement quality checks and approvals for superior results"
    },
    { 
      id: 5, 
      text: "Fast Execution", 
      icon: Clock,
      description: "Streamline processes with automated workflows and approvals"
    },
    { 
      id: 6, 
      text: "Safety Compliance", 
      icon: HardHat,
      description: "Ensure safety standards with checklists and incident reporting"
    },
    { 
      id: 7, 
      text: "Resource Allocation", 
      icon: Building2,
      description: "Optimize resource usage across multiple projects"
    },
    { 
      id: 8, 
      text: "Documentation", 
      icon: FileText,
      description: "Centralize all project documentation with version control"
    },
    { 
      id: 9, 
      text: "Risk Management", 
      icon: ShieldCheck,
      description: "Identify and mitigate risks before they impact your project"
    },
    { 
      id: 10, 
      text: "Schedule Tracking", 
      icon: LineChart,
      description: "Monitor project timelines and milestones in real-time"
    },
    { 
      id: 11, 
      text: "Field Reports", 
      icon: Ruler,
      description: "Collect data from the field with mobile-friendly forms"
    },
    { 
      id: 12, 
      text: "Budgeting", 
      icon: BadgeDollarSign,
      description: "Create and manage detailed budgets with variance analysis"
    },
  ],
  cta: {
    text: "Get Started Today",
    link: "/signup"
  }
};

// Split features into groups of 6 for the carousel
const featureGroups = [
  content.features.slice(0, 6),
  content.features.slice(6, 12)
];

const FeatureCard = ({ feature }: { feature: typeof content.features[0] }) => (
  <div 
    className="rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group border border-gray-200 relative overflow-hidden h-full"
  >
    {/* Gradient overlay effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    {/* Content with relative positioning */}
    <div className="relative z-10">
      {/* Subtle background decoration */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300"></div>
      
      <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-orange-100 text-primary transition-all duration-300 shadow-sm">
        <feature.icon size={26} />
      </div>
      
      <h3 className="text-xl font-bold text-gray-700 mb-3 group-hover:text-secondary transition-colors duration-300">
        {feature.text}
      </h3>
      
      <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300 relative z-10">
        {feature.description}
      </p>
    </div>
  </div>
);

const CoreFeatures: React.FC = () => {
  // Refs for the two carousels
  const [firstCarouselApi, setFirstCarouselApi] = useState<CarouselApi>();
  const [secondCarouselApi, setSecondCarouselApi] = useState<CarouselApi>();

  // Check window size for responsive layout
  useEffect(() => {
    const checkIfMobile = () => {
      // We're using CSS media queries for responsive design
      // No need to track mobile state in JS
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Function to handle navigation for both carousels
  const scrollPrev = () => {
    firstCarouselApi?.scrollPrev();
    secondCarouselApi?.scrollPrev();
  };

  const scrollNext = () => {
    firstCarouselApi?.scrollNext();
    secondCarouselApi?.scrollNext();
  };

  return (
    <section
      id="core-features"
      className="py-20 lg:py-28 px-6 lg:px-0 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100/50"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-white text-sm font-semibold mb-5 shadow-sm">Core Capabilities</span>
          <h2 className="text-3xl leading-tight sm:text-4xl xl:text-5xl font-bold mb-6">
            <span className="text-primary">{content.mainTitle}</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            {content.subTitle}
          </p>
        </div>

        {/* Features Carousel - Two rows for both mobile and desktop */}
        <div className="space-y-4 sm:space-y-8 relative mx-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setFirstCarouselApi}
            className="w-full"
          >
            <CarouselContent className="mb-4 sm:mb-8">
              {featureGroups[0].map((feature) => (
                <CarouselItem key={feature.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <FeatureCard feature={feature} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setSecondCarouselApi}
            className="w-full"
          >
            <CarouselContent className="mb-4 sm:mb-8">
              {featureGroups[1].map((feature) => (
                <CarouselItem key={feature.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <FeatureCard feature={feature} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Centralized navigation controls for both carousels */}
          <div className="flex justify-center mt-8">
            <Button
              
              size="icon"
              onClick={scrollPrev}
              className="relative mr-2 rounded-full text-white hover:bg-orange-200 bg-secondary" 
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              size="icon"
              onClick={scrollNext}
              className="relative ml-2 rounded-full hover:bg-orange-200 text-white bg-secondary"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className="mt-20 text-center">
          <Link 
            href={content.cta.link}
            className="inline-flex items-center px-4 py-2 bg-primary hover:bg-secondary text-white rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            {content.cta.text}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default CoreFeatures;
