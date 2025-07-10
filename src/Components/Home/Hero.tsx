"use client"

import {
    Sparkles,
    BarChart3,
    Clock,
    Smartphone,
    FileText,
    Shield,
    Calendar,
    GitBranch,
    Settings,
    CheckCircle, ArrowRight
} from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <>
            <section
                id="hero"
                className="relative mx-auto w-full min-h-[90vh] sm:min-h-[94vh] overflow-hidden flex items-center justify-center"
            >
                {/* Background */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90 z-0"></div>

                {/* Decorative Blobs */}
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="absolute top-10 left-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full bg-primary blur-3xl animate-blob-motion-1"/>
                    <div
                        className="absolute bottom-10 right-10 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-accent blur-3xl animate-blob-motion-2"/>
                    <div
                        className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-white/10 blur-2xl animate-blob-motion-3"/>
                </div>

                {/* Content */}
                <div
                    className="relative z-10 w-full flex flex-col items-center justify-center gap-8 px-4 sm:px-6 py-12">
                    <div className="flex flex-col w-full max-w-7xl mx-auto items-center text-center">
                        {/* Badge */}
                        <div
                            className="inline-block text-xs sm:text-sm lg:text-lg mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold items-center gap-2 animate-fadeIn shadow-sm border border-white/10">
                            <div className="flex">
                                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-accent my-auto mr-3"/>
                                <span className="tracking-wide text-xs sm:text-sm lg:text-lg">Next-Gen Construction Management Platform</span>
                            </div>
                        </div>

                        {/* Hero Heading */}
                        <h1 className="text-3xl sm:text-5xl lg:text-8xl font-black leading-tight mb-4 sm:mb-6">
                            <span className="text-white">Built Smarter,&nbsp;</span>
                            <span className="relative inline-block">
                            <span
                                className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent font-extrabold">
                                Not Harder
                            </span>
                        </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-2 text-sm sm:text-sm lg:text-lg text-white/90 font-medium leading-relaxed max-w-md sm:max-w-xl lg:max-w-3xl mx-auto">
                            ZedOps transforms construction chaos into streamlined success. Manage projects, teams,
                            and operations
                            with intelligent automation that delivers results faster than ever.
                        </p>

                        {/* Feature Scroll */}
                        <div className="relative w-full max-w-full mx-auto overflow-hidden mt-8 mb-10">
                            {/* First scrolling container - left to right */}
                            <div className="flex gap-5 py-2 overflow-hidden">
                                <div className="flex gap-5 animate-scroll-left hover:pause">
                                    {[
                                        {text: "Predictive Analytics", icon: BarChart3},
                                        {text: "Real-time Dashboards", icon: Clock},
                                        {text: "Mobile Access", icon: Smartphone},
                                        {text: "Custom Reporting", icon: FileText},
                                        {text: "AI Risk Assessment", icon: Shield},
                                        {text: "Smart Scheduling", icon: Calendar},
                                        {text: "Automated Workflows", icon: GitBranch},
                                        {text: "Resource Optimization", icon: Settings},
                                        {text: "Compliance Tracking", icon: CheckCircle},
                                        {text: "Predictive Analytics", icon: BarChart3},
                                        {text: "Real-time Dashboards", icon: Clock},
                                        {text: "Mobile Access", icon: Smartphone},
                                        {text: "Custom Reporting", icon: FileText},
                                        {text: "AI Risk Assessment", icon: Shield},
                                        {text: "Smart Scheduling", icon: Calendar}
                                    ].map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center bg-white/10 px-3 py-1.5 rounded-full border border-white/10 shadow-sm hover:bg-white/15 transition-all duration-300 flex-shrink-0"
                                        >
                                            <feature.icon className="w-4 h-4 text-accent mr-1.5"/>
                                            <span
                                                className="text-sm text-white font-medium whitespace-nowrap">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div
                            className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 text-center">
                            <Link
                                href="/book-a-demo"
                                className="bg-primary text-secondary font-semibold hover:bg-primary transition-all duration-300 flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 backdrop-blur-sm"
                            >
                                <Calendar className="w-5 h-5"/>
                                <span>Book a Demo</span>
                            </Link>
                            <Link
                                href="#core-features"
                                className="font-semibold text-white hover:text-primary transition-all duration-300 flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg border border-white/10 backdrop-blur-sm"
                            >
                                Get Started <ArrowRight/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Hero;
