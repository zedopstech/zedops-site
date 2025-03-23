"use client"

import { PlayIcon, Sparkles, BarChart3, Clock, Smartphone, FileText, Shield, Calendar, GitBranch, Settings, CheckCircle } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full min-h-[94vh] overflow-hidden flex items-center justify-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-primary blur-3xl animate-blob-motion-1"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl animate-blob-motion-2"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-white/10 blur-2xl animate-blob-motion-3"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center gap-8 px-6 lg:px-0 py-12">
        {/* Hero Text Section */}
        <div className="flex flex-col w-full max-w-7xl mx-auto items-center text-center">
          <div
            className="mb-4 sm:mb-6 px-2 py-1 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold flex items-center gap-1 sm:gap-2 animate-fadeIn shadow-sm border border-white/10 text-xs sm:text-sm"
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
            <span className="tracking-wide">Next-Gen Construction Management Platform</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">
              Breakthrough Efficiency in Construction
            </span>
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent font-extrabold">
                Streamline Your Projects Today
              </span>
            </span>
          </h1>

          <p className="mt-6 text-xl text-white/90 font-medium leading-relaxed max-w-2xl">
            <span className="font-black text-accent">
              Boost productivity by up to 35%
            </span>{" "}
            with our innovative AI-powered platform that eliminates bottlenecks, enhances collaboration, and delivers data-driven insights for smarter decision-making.
          </p>
          
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden mt-8 mb-10">
            {/* First scrolling container - left to right */}
            <div className="flex gap-5 py-2 overflow-hidden">
              <div className="flex gap-5 animate-scroll-left hover:pause">
                {[
                  { text: "Predictive Analytics", icon: BarChart3 },
                  { text: "Real-time Dashboards", icon: Clock },
                  { text: "Mobile Access", icon: Smartphone },
                  { text: "Custom Reporting", icon: FileText },
                  { text: "AI Risk Assessment", icon: Shield },
                  { text: "Smart Scheduling", icon: Calendar },
                  { text: "Automated Workflows", icon: GitBranch },
                  { text: "Resource Optimization", icon: Settings },
                  { text: "Compliance Tracking", icon: CheckCircle },
                  { text: "Predictive Analytics", icon: BarChart3 },
                  { text: "Real-time Dashboards", icon: Clock },
                  { text: "Mobile Access", icon: Smartphone },
                  { text: "Custom Reporting", icon: FileText },
                  { text: "AI Risk Assessment", icon: Shield },
                  { text: "Smart Scheduling", icon: Calendar }
                ].map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center bg-white/10 px-3 py-1.5 rounded-full border border-white/10 shadow-sm hover:bg-white/15 transition-all duration-300 flex-shrink-0"
                  >
                    <feature.icon className="w-4 h-4 text-accent mr-1.5" />
                    <span className="text-sm text-white font-medium whitespace-nowrap">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-5">
          <Link
              href="/book-a-demo" title="Request early access"
              className="bg-primary hover:text-white hover:bg-accent transition-all duration-300 flex items-center gap-2 group px-6 py-3 rounded-lg border border-white/10 backdrop-blur-sm"
            >
              Get Early Access
            </Link>
            <Link
              href="#core-features"
              className=" text-white hover:text-primary transition-all duration-300 flex items-center gap-2 group bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg border border-white/10 backdrop-blur-sm"
            >
              <div>
                <PlayIcon className="w-5 h-5" />
              </div>
              <span>Watch Demo (2 min)</span>
            </Link>
          </div>
          
          {/* Stats Section */}
          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:shadow-lg border border-white/10">
              <div className="text-4xl font-bold text-white mb-2">35%</div>
              <div className="text-white/80">Average Time Saved on Project Management</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:shadow-lg border border-white/10">
              <div className="text-4xl font-bold text-white mb-2">28%</div>
              <div className="text-white/80">Reduction in Project Delays with AI Forecasting</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:shadow-lg border border-white/10">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Construction Companies Using ZedOps</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
