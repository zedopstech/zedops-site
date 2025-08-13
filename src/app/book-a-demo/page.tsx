"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/Components/UI/button";
import { Building2, Users, Workflow, ArrowRight, Shield, Clock, CheckCircle, LineChart } from "lucide-react";
import Link from "next/link";
import { Input } from "@/Components/UI/input";
import { Label } from "@/Components/UI/label";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "", // Keep phone as it's a high-value field for sales
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Define features with useMemo
  const features = useMemo(() => [
    {
      icon: Building2,
      title: "Centralized Project Hub",
      description: "Manage all projects from a single dashboard with real-time updates and insights."
    },
    {
      icon: LineChart, // Changed Icon
      title: "Financial Tracking & Cost Control",
      description: "Connect your budget to real-time field data to protect your profit margins and eliminate surprises."
    },
    {
      icon: Users,
      title: "Seamless Team Collaboration",
      description: "Connect field teams, office staff, and stakeholders with integrated communication tools."
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Eliminate repetitive tasks and streamline approval processes to save time and reduce errors."
    }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // In a real implementation, you would send this data to your backend
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-secondary">
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {formSubmitted ? (
            <ThankYouMessage />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              {/* Left Content: Value Proposition */}
              <div className="space-y-8">
                {/* <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-primary text-white rounded-full">
                  See What's Possible
                </span> */}
                <h1 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
                  Schedule Your Personalized Demo Today
                </h1>
                <p className="text-lg text-secondary/80">
                  In just 30 minutes, discover how Zedops can transform your construction management by:
                </p>
                <div className="space-y-4">
                  {features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                        idx === activeFeature ? 'bg-white shadow-md' : ''
                      }`}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${
                        idx === activeFeature ? 'bg-primary text-white' : 'bg-orange-100 text-primary'
                      } flex items-center justify-center transition-colors duration-300`}>
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-md font-bold text-primary">{feature.title}</h3>
                        <p className="text-sm text-secondary/70">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content: Simplified Demo Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-200">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-secondary">See Zedops in Action</h2>
                  <p className="mt-2 text-secondary/70">
                    Fill out the form below and our team will contact you shortly to schedule your demo.
                  </p>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-secondary font-medium">
                      Full Name <span className="text-primary/70">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g., John Doe"
                      className="bg-gray-50 border-gray-300 text-secondary placeholder:text-gray-400 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-secondary font-medium">
                      Business Email <span className="text-primary/70">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      className="bg-gray-50 border-gray-300 text-secondary placeholder:text-gray-400 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-secondary font-medium">
                      Company Name <span className="text-primary/70">*</span>
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g., ABC Contracting"
                      className="bg-gray-50 border-gray-300 text-secondary placeholder:text-gray-400 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>

                   <div className="space-y-2">
                    <Label htmlFor="phone" className="text-secondary font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="bg-gray-50 border-gray-300 text-secondary placeholder:text-gray-400 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl bg-secondary text-white hover:bg-primary transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
                  >
                    Schedule My Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-secondary/70 pt-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5 text-primary" />
                      <span>30-min walkthrough</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-1.5 text-primary" />
                      <span>Secure & confidential</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ThankYouMessage component remains largely the same, but can be simplified too
const ThankYouMessage = () => (
    <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-2xl mx-auto border border-gray-200">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h2>
      <p className="text-lg text-gray-600 mb-8">
        Your demo request has been received. Our team will contact you within the next 24 hours to schedule a time that works for you.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/">
          <Button className="bg-primary hover:bg-secondary text-white px-6 py-3">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );

export default BookDemo;