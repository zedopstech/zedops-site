"use client"

import { PlayIcon, Sparkles, BarChart3, Clock, Smartphone, FileText, Shield, Calendar, GitBranch, Settings, CheckCircle, HardHat, Play, ArrowRight, ArrowRightIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../UI/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90 z-0"></div>
      
      {/* Decorative elements */}
      {/* <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-primary blur-3xl animate-blob-motion-1"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl animate-blob-motion-2"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-white/10 blur-2xl animate-blob-motion-3"></div>
      </div> */}
      
      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col max-w-7xl mt-20 lg:m-12 lg:flex-row items-center justify-center gap-8 px-6 lg:px-0 py-12">
        {/* Left Side: Text and CTA */}
        <div className="lg:w-1/2 flex flex-col item-center text-center lg:items-start lg:text-start">
          <div
            className="hidden mb-4 sm:mb-6 px-2 py-1 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm md:flex items-center gap-1 sm:gap-2 animate-fadeIn shadow-sm border border-primary text-xs font-semibold bg-orange-100"
          >
            <HardHat className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="tracking-wide">End to End Construction Operation Platform</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            <span>
            Building Construction Success, Together {" "}
                <span className="text-primary font-extrabold">
                with ZedOps
                </span>
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl">
          From bidding to closeout, ZedOps keeps every project, team, and document connected. Get the clarity, control, and confidence you need to deliver on time and on budget every time.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5">
          <Link
              href="/book-a-demo" title="Request early access"
              className="bg-primary text-white hover:bg-secondary transition-all duration-300 flex items-center gap-2 group px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm"
            >
              Join Early Access
            </Link>
            <Link
              href="#core-features"
              className="text-secondary hover:text-primary transition-all duration-300 flex items-center gap-2 group bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg  backdrop-blur-sm"
            >
           
              <span>Get Started</span>
                 <div>
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
          <div className="hidden md:block relative w-full max-w-3xl mx-auto overflow-hidden mt-10">
            {/* First scrolling container - left to right */}
            <div className="flex gap-5 py-2 overflow-hidden">
              <div className="flex gap-5 animate-scroll-left hover:pause">
                {[
                  { text: "Predictive Analytics", icon: BarChart3 },
                  { text: "Real-time Dashboards", icon: Clock },
                  { text: "Mobile Access", icon: Smartphone },
                  { text: "Custom Reporting", icon: FileText },
                  { text: "Smart Scheduling", icon: Calendar },
                  { text: "Automated Workflows", icon: GitBranch },
                  { text: "Resource Optimization", icon: Settings },
                  { text: "Compliance Tracking", icon: CheckCircle },
                ].map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex bg-orange-100 items-center px-3 py-1.5 rounded-full transition-all duration-300 flex-shrink-0"
                  >
                    <feature.icon className="w-4 h-4 text-primary mr-1.5" />
                    <span className="text-sm  font-medium whitespace-nowrap">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 flex items-center justify-center relative group">
      {/* Image */}
      <img
        src="/hero-image.jpeg"
        alt="Hero Image"
        className="rounded-lg shadow-2xl"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

      {/* Play Button Pill */}
      <button
        className="absolute flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-md shadow-orange-300
                   transform transition-transform duration-300 group-hover:scale-105  border border-primary"
        onClick={() => console.log("Play video")}
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary ">
          <Play className="h-4 w-4 text-white" />
        </div>
        <span className="text-sm font-medium">
          See ZedOps in <span className="font-semibold">Action</span>
        </span>
      </button>
    </div>
    </div>
    </section>
  );
};

export default Hero;
