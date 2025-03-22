"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Building2, Clock, Users, Workflow, Shield, ArrowRight, Calendar, ClipboardList, LineChart, CalendarDays, FileText, FolderOpen, Layers, BarChart, MessageSquare, XCircle, Cpu } from "lucide-react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companyType: "",
    projectSize: "",
    interests: [] as string[],
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Define features with useMemo before using it in useEffect
  const features = useMemo(() => [
    {
      id: "centralized_project_hub",
      icon: Building2,
      title: "Centralized Project Hub",
      description: "Manage all construction projects from a single dashboard with real-time updates and insights."
    },
    {
      id: "ai_powered_scheduling",
      icon: Cpu,
      title: "AI-Powered Scheduling",
      description: "Our intelligent algorithms optimize resource allocation and predict potential delays before they happen."
    },
    {
      id: "seamless_team_collaboration",
      icon: Users,
      title: "Seamless Team Collaboration",
      description: "Connect field teams, office staff, and stakeholders with integrated communication tools."
    },
    {
      id: "automated_workflows",
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // In a real implementation, you would send this data to your backend
    setFormSubmitted(true);
  };

  useEffect(() => {
    // Set initial interests to all features
    setFormData(prev => ({
      ...prev,
      interests: features.map(f => f.id)
    }));
  }, [features]);

  const faqs = [
    {
      question: "What makes ZedOps different from other construction management software?",
      answer: "ZedOps is built specifically for modern construction needs with AI-powered insights, real-time collaboration, and intuitive mobile access. Our platform focuses on simplifying complex workflows while providing powerful analytics to help you make better decisions faster."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Most teams are up and running with ZedOps in less than two weeks. Our streamlined onboarding process includes data migration, team training, and personalized configuration to match your specific workflows."
    },
    {
      question: "Is ZedOps suitable for small construction businesses?",
      answer: "Absolutely! ZedOps scales to fit businesses of all sizes. We offer flexible pricing plans that grow with your needs, making enterprise-grade construction management accessible to smaller teams."
    },
    {
      question: "Can ZedOps integrate with our existing software tools?",
      answer: "Yes, ZedOps offers robust API integration capabilities with popular construction and business software including accounting systems, BIM tools, and project management platforms."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Hero Section with animated background */}
      {/* <div className="relative overflow-hidden bg-gradient-to-b from-secondary via-secondary/90 to-secondary/80">
        <div className="relative py-24 px-6 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Revolutionize Your <span className="relative inline-block">
                  <span className="relative z-10 text-white">Construction Management</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 -rotate-1"></span>
                </span>
              </h1>
              
              <p className="text-xl text-card-foreground/80 leading-relaxed mb-8">
                Experience how our AI-powered platform can reduce costs, improve efficiency, and help deliver projects on time.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center bg-muted px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-muted/80 transition-all duration-300">
                  <Bot className="w-5 h-5 text-accent mr-2" />
                  <span className="text-sm font-medium text-card-foreground">AI-Powered Insights</span>
                </div>
                
                <div className="flex items-center bg-muted px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-muted/80 transition-all duration-300">
                  <Shield className="w-5 h-5 text-accent mr-2" />
                  <span className="text-sm font-medium text-card-foreground">Enterprise-Grade Security</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 text-sm text-card-foreground/70">
                {["Predictive Analytics", "Real-time Dashboards", "Mobile Access", "Custom Reporting"].map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-1" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex-grow py-16 px-6 bg-gradient-to-b from-secondary/95 to-secondary">
        <div className="max-w-7xl mx-auto">
          {formSubmitted ? (
            <ThankYouMessage />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Content: Features and FAQs */}
              <div className="lg:col-span-5 space-y-12">
                {/* Features Section */}
                <div className="bg-muted rounded-xl shadow-lg p-8 border border-muted/50">
                  <h2 className="text-2xl font-bold text-primary mb-6">Why Choose ZedOps</h2>
                  <div className="space-y-6">
                    {features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-start gap-4 group p-4 rounded-xl hover:bg-card hover:shadow-lg transition-all duration-300 ${
                          idx === activeFeature ? 'bg-card shadow-lg scale-[1.02]' : ''
                        }`}
                        onClick={() => setActiveFeature(idx)}
                      >
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${
                          idx === activeFeature ? 'bg-accent text-white' : 'bg-accent/20 text-accent'
                        } flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300`}>
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                          <p className="text-card-foreground/70">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Showcase */}
                <div className="bg-muted rounded-xl shadow-lg p-8 border border-muted/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-br-full -z-0"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-tl-full -z-0"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-primary mb-6">Powerful Features</h2>
                    
                    <Carousel className="w-full">
                      <CarouselContent>
                        {[
                          {
                            title: "Smart Scheduling",
                            description: "AI algorithms that optimize project timelines and resource allocation",
                            icon: <Clock className="w-8 h-8" />
                          },
                          {
                            title: "Real-time Analytics",
                            description: "Instant insights into project performance and financial metrics",
                            icon: <LineChart className="w-8 h-8" />
                          },
                          {
                            title: "Document Control",
                            description: "Centralized system for all project documentation with version control",
                            icon: <FileText className="w-8 h-8" />
                          }
                        ].map((item, idx) => (
                          <CarouselItem key={idx}>
                            <div className="p-4">
                              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl h-full">
                                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                                  <div className="text-accent">{item.icon}</div>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                <p className="text-card-foreground/70">{item.description}</p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="flex justify-center gap-2 mt-4">
                        <CarouselPrevious className="relative inset-0 translate-y-0 bg-accent/20 text-accent hover:bg-accent hover:text-white" />
                        <CarouselNext className="relative inset-0 translate-y-0 bg-accent/20 text-accent hover:bg-accent hover:text-white" />
                      </div>
                    </Carousel>
                  </div>
                </div>

                {/* FAQs Section */}
                <div className="bg-muted rounded-xl p-8 shadow-lg border border-muted/50">
                  <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-muted/30">
                        <AccordionTrigger className="text-left font-medium text-primary hover:text-accent">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-card-foreground/70">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* Right Content: Demo Form */}
              <div className="lg:col-span-7">
                <div className="bg-muted rounded-xl shadow-xl p-8 border border-muted/50 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-br-full -z-0"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-tl-full -z-0"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/20 text-primary rounded-full mb-3">
                        15-Minute Demo
                      </span>
                      <h2 className="text-3xl font-bold text-primary">See ZedOps in Action</h2>
                      <p className="mt-3 text-card-foreground/70">
                        Schedule a personalized walkthrough of our platform tailored to your construction needs
                      </p>
                    </div>
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-primary">
                            First Name <span className="text-accent">*</span>
                          </Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder="Enter your first name"
                              className="bg-card border-accent text-card-foreground placeholder:text-card-foreground/50 focus:border-accent focus:ring-accent"
                              required/>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-primary">
                            Last Name <span className="text-accent">*</span>
                          </Label>
                          <div className="relative">
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder="Enter your last name"
                              className="bg-card border-accent text-card-foreground placeholder:text-card-foreground/50 focus:border-accent focus:ring-accent"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-primary">
                            Business Email <span className="text-accent">*</span>
                          </Label>
                          <div className="relative">
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="you@company.com"
                              className="bg-card border-accent text-card-foreground placeholder:text-card-foreground/50 focus:border-accent focus:ring-accent"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-primary">
                            Phone Number <span className="text-accent">*</span>
                          </Label>
                          <div className="relative">
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+1 (555) 000-0000"
                              className="bg-card border-accent text-card-foreground placeholder:text-card-foreground/50 focus:border-accent focus:ring-accent"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="companyName" className="text-primary">
                            Company Name <span className="text-accent">*</span>
                          </Label>
                          <div className="relative">
                            <Input
                              id="companyName"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleInputChange}
                              placeholder="Your company name"
                              className="bg-card border-accent text-card-foreground placeholder:text-card-foreground/50 focus:border-accent focus:ring-accent"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="companyType" className="text-primary">
                            Company Type <span className="text-accent">*</span>
                          </Label>
                          <div className="relative">
                            <Select name="companyType" value={formData.companyType} onValueChange={(value) => setFormData(prev => ({ ...prev, companyType: value }))}>
                              <SelectTrigger className="bg-card border-accent text-card-foreground focus:border-accent focus:ring-accent">
                                <SelectValue placeholder="Select company type" />
                              </SelectTrigger>
                              <SelectContent className="bg-card border-accent text-card-foreground">
                                <SelectItem value="general_contractor">General Contractor</SelectItem>
                                <SelectItem value="subcontractor">Subcontractor</SelectItem>
                                <SelectItem value="developer">Owner/Developer</SelectItem>
                                <SelectItem value="engineering">Engineering Firm</SelectItem>
                                <SelectItem value="architecture">Architecture Firm</SelectItem>
                                <SelectItem value="government">Government/Public Sector</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="projectSize" className="text-primary">
                          Typical Project Size <span className="text-accent">*</span>
                        </Label>
                        <div className="relative">
                          <Select name="projectSize" value={formData.projectSize} onValueChange={(value) => setFormData(prev => ({ ...prev, projectSize: value }))}>
                            <SelectTrigger className="bg-card border-accent text-card-foreground focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="Select project size" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-accent text-card-foreground">
                              <SelectItem value="small">Under $1 million</SelectItem>
                              <SelectItem value="medium">$1-10 million</SelectItem>
                              <SelectItem value="large">$10-50 million</SelectItem>
                              <SelectItem value="enterprise">Over $50 million</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="bg-card p-5 rounded-xl border border-muted/30 hover:shadow-md transition-all duration-300 hover:border-accent/20">
                        <Label className="block mb-3 text-primary">
                          What features are you most interested in?
                        </Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            { id: "project_management", label: "Project Management", icon: <ClipboardList className="w-4 h-4" /> },
                            { id: "financial_tracking", label: "Financial Tracking", icon: <LineChart className="w-4 h-4" /> },
                            { id: "scheduling", label: "Scheduling & Planning", icon: <CalendarDays className="w-4 h-4" /> },
                            { id: "field_reporting", label: "Field Reporting", icon: <FileText className="w-4 h-4" /> },
                            { id: "document_management", label: "Document Management", icon: <FolderOpen className="w-4 h-4" /> },
                            { id: "bim_integration", label: "BIM Integration", icon: <Layers className="w-4 h-4" /> },
                            { id: "resource_management", label: "Resource Management", icon: <Users className="w-4 h-4" /> },
                            { id: "analytics", label: "Analytics & Reporting", icon: <BarChart className="w-4 h-4" /> },
                          ].map((interest) => (
                            <div key={interest.id} className="flex items-center space-x-2">
                              <Checkbox 
                                id={interest.id}
                                className="border-accent text-accent focus:border-accent focus:ring-accent hover:border-accent/50 transition-all duration-300"
                                checked={formData.interests.includes(interest.id)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setFormData(prev => ({
                                      ...prev,
                                      interests: [...prev.interests, interest.id]
                                    }));
                                  } else {
                                    setFormData(prev => ({
                                      ...prev,
                                      interests: prev.interests.filter(i => i !== interest.id)
                                    }));
                                  }
                                }}
                              />
                              <Label htmlFor={interest.id} className="flex items-center text-sm text-card-foreground cursor-pointer">
                                <span className="text-accent mr-1.5">{interest.icon}</span>
                                {interest.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo" className="block text-primary">
                          Additional Information
                        </Label>
                        <div className="relative">
                          <Textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            rows={3}                          
                            placeholder="Tell us about your specific needs or questions"
                            onChange={handleInputChange}
                            className="bg-card border-accent text-card-foreground placeholder:text-card-foreground/50 focus:border-accent focus:ring-accent w-full"
                          ></Textarea>
                        </div>
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full py-6 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
                      >
                        Schedule Your Demo
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      
                      <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-card-foreground/70">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-accent" />
                          <span>15-min setup</span>
                        </div>
                        <div className="flex items-center">
                          <Shield className="w-4 h-4 mr-1 text-accent" />
                          <span>Secure & confidential</span>
                        </div>
                        <div className="flex items-center">
                          <XCircle className="w-4 h-4 mr-1 text-accent" />
                          <span>No credit card</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-card-foreground/70 text-center mt-4">
                        By submitting this form, you agree to our{" "}
                        <Link href="/privacy-policy" className="text-accent hover:underline">
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms" className="text-accent hover:underline">
                          Terms of Service
                        </Link>
                        .
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer with accent color */}
      <div className="bg-card py-8 px-6 border-t border-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-card-foreground/70 mb-4">Ready to transform your construction management?</p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-card border border-accent/50 text-accent hover:bg-accent/10 shadow-md hover:shadow-lg transition-all duration-300">
              <Link href="/contact">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThankYouMessage = () => (
  <div className="bg-white rounded-xl shadow-lg p-12 text-center max-w-2xl mx-auto border border-secondary/20 relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-bl-full -z-0"></div>
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-tr-full -z-0"></div>
    
    <div className="relative z-10">
      <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-secondary" />
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Interest!</h2>
      
      <p className="text-lg text-gray-600 mb-8">
        We&apos;ll be in touch shortly to schedule your personalized demo.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-xl mb-8">
        <h3 className="font-bold text-gray-800 mb-3">What happens next?</h3>
        <div className="space-y-4">
          {[
            {
              icon: <Calendar className="w-5 h-5 text-secondary" />,
              title: "Schedule a Call",
              description: "Our team will reach out to find a time that works for you."
            },
            {
              icon: <Users className="w-5 h-5 text-secondary" />,
              title: "Meet Your Expert",
              description: "Connect with a construction technology specialist."
            },
            {
              icon: <Building2 className="w-5 h-5 text-secondary" />,
              title: "Customized Demo",
              description: "See how ZedOps can help your specific projects."
            }
          ].map((step, idx) => (
            <div key={idx} className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mr-4">
                {step.icon}
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-gray-600 mb-6">
        In the meantime, check your email for some resources about how ZedOps can transform your construction management.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/">
          <Button className="bg-secondary hover:bg-secondary/90 text-white px-6">
            Return to Homepage
          </Button>
        </Link>
        <Link href="/resources">
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 px-6">
            Explore Resources
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default BookDemo;
