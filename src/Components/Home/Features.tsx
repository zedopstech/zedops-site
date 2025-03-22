"use client"

import React from "react";
import Link from "next/link";

// Organized icon imports alphabetically
import { 
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Building2,
  Calendar,
  Camera,
  CheckCircle,
  ChevronRight,
  Clipboard,
  Clock,
  Cog,
  CoinsIcon,
  Command,
  Compass,
  Construction,
  CreditCard,
  Crosshair,
  Cpu,
  DollarSign,
  Eye,
  FileCode,
  FileJson,
  FileCog,
  FileText,
  FlaskConical,
  Folder,
  FolderOpen,
  Gauge,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Hammer,
  HardDrive,
  Lightbulb,
  LinkIcon,
  Mail,
  Map,
  MessageSquare,
  Navigation,
  Paperclip,
  Phone,
  PieChart,
  Receipt,
  RefreshCw,
  Rocket,
  Save,
  Settings,
  Share,
  Shield,
  Smartphone,
  Sparkles,
  Tag,
  Target,
  TrendingUp,
  Truck,
  UserCog,
  Users,
  Wallet,
  Workflow,
  Wrench
} from "lucide-react";
import { motion } from "framer-motion";

const FeatureContent = [
  {
    mainTitle: "AI-Powered Project Intelligence",
    content:
      "Leverage artificial intelligence to predict project outcomes, identify potential risks, and receive smart recommendations for improving efficiency and reducing costs.",
    link: "/features/ai-intelligence",
    icon: Brain,
    color: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    accentColor: "blue",
    orbitIcons: [Bot, Sparkles, Gauge, Lightbulb, Cpu, Command, Eye, FlaskConical],
    subTitles: [
      {
        id: 1,
        title: "Predictive Analytics",
        content:
          "Anticipate project delays and cost overruns before they happen with AI-powered forecasting based on historical project data.",
      },
      {
        id: 2,
        title: "Smart Resource Allocation",
        content:
          "Let AI optimize your resource distribution across projects based on availability, skills, and project timelines.",
      },
    ],
  },
  {
    mainTitle: "Real-Time Project Tracking",
    content:
      "Monitor all your projects in real-time with comprehensive dashboards that provide instant visibility into project status, milestones, and team performance.",
    link: "/features/project-tracking",
    icon: Rocket,
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/10 via-emerald-500/5 to-transparent",
    accentColor: "green",
    orbitIcons: [Clock, TrendingUp, RefreshCw, Target, Crosshair, BarChart3, PieChart, GitCommit],
    subTitles: [
      {
        id: 1,
        title: "Live Progress Updates",
        content:
          "Track project progress as it happens with real-time updates from the field, ensuring everyone stays informed.",
      },
      {
        id: 2,
        title: "Performance Metrics",
        content:
          "Measure team and individual performance against KPIs with customizable metrics and reporting.",
      },
    ],
  },
  {
    mainTitle: "Integrated Document Management",
    content:
      "Centralize all project documentation in one secure location, making it easy to find, share, and collaborate on critical project files.",
    link: "/features/document-management",
    icon: FileText,
    color: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    accentColor: "amber",
    orbitIcons: [FileCode, FileCog, Folder, FolderOpen, Paperclip, Tag, Save],
    subTitles: [
      {
        id: 1,
        title: "Version Control",
        content:
          "Keep track of document revisions with automatic version control, ensuring everyone works with the most up-to-date information.",
      },
      {
        id: 2,
        title: "Secure Sharing",
        content:
          "Share documents securely with team members and stakeholders, controlling access and permissions at a granular level.",
      },
    ],
  },
  {
    mainTitle: "Advanced Resource Management",
    content:
      "Optimize resource allocation across all your projects, ensuring the right people with the right skills are available when and where they're needed.",
    link: "/features/resource-management",
    icon: Users,
    color: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    accentColor: "purple",
    orbitIcons: [Users, Workflow, DollarSign, CoinsIcon, Gauge, Calendar, Cog, Wrench],
    subTitles: [
      {
        id: 1,
        title: "Skill Matching",
        content:
          "Match team members to tasks based on their skills, experience, and availability to maximize productivity.",
      },
      {
        id: 2,
        title: "Capacity Planning",
        content:
          "Plan future resource needs based on project pipelines and team capacity, avoiding bottlenecks before they occur.",
      },
    ],
  },
  {
    mainTitle: "Comprehensive Financial Management",
    content:
      "Take control of project finances with robust budgeting, cost tracking, and financial reporting tools that keep your projects profitable.",
    link: "/features/financial-management",
    icon: BarChart3,
    color: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    accentColor: "cyan",
    orbitIcons: [DollarSign, PieChart, Receipt, CreditCard, Wallet, TrendingUp],
    subTitles: [
      {
        id: 1,
        title: "Budget Tracking",
        content:
          "Monitor project budgets in real-time, tracking actual costs against estimates to prevent overruns.",
      },
      {
        id: 2,
        title: "Financial Forecasting",
        content:
          "Forecast project financials based on current performance and historical data to make informed decisions.",
      },
    ],
  },
  {
    mainTitle: "Mobile Field Operations",
    content:
      "Empower your field teams with mobile tools that keep them connected to the office, allowing for real-time data collection and reporting from anywhere.",
    link: "/features/mobile-operations",
    icon: Smartphone,
    color: "from-red-500 to-rose-600",
    bgGradient: "from-red-500/10 via-rose-500/5 to-transparent",
    accentColor: "red",
    orbitIcons: [Map, Navigation, Compass, Camera, Truck, Clipboard, Wrench],
    subTitles: [
      {
        id: 1,
        title: "Offline Capabilities",
        content:
          "Work without interruption even in areas with limited connectivity, with automatic syncing when back online.",
      },
      {
        id: 2,
        title: "Field Data Collection",
        content:
          "Capture photos, notes, and measurements directly from the field, eliminating paper forms and double entry.",
      },
    ],
  },
  {
    mainTitle: "Seamless Team Collaboration",
    content:
      "Foster collaboration across teams with integrated communication tools, ensuring everyone is aligned and working towards common goals.",
    link: "/features/team-collaboration",
    icon: Users,
    color: "from-teal-500 to-emerald-600",
    bgGradient: "from-teal-500/10 via-emerald-500/5 to-transparent",
    accentColor: "teal",
    orbitIcons: [MessageSquare, Share, LinkIcon, GitPullRequest, GitBranch, UserCog, Mail, Phone],
    subTitles: [
      {
        id: 1,
        title: "Real-time Communication",
        content:
          "Enable instant communication across teams with integrated messaging, video conferencing, and file sharing.",
      },
      {
        id: 2,
        title: "Task Assignment",
        content:
          "Assign tasks to team members and track progress in real-time, ensuring everyone knows their responsibilities.",
      },
    ],
  },
  {
    mainTitle: "Smart Construction Management",
    content:
      "Streamline construction projects with AI-powered tools that optimize workflows, predict delays, and improve resource allocation.",
    link: "/features/construction-management",
    icon: Building2,
    color: "from-yellow-500 to-orange-600",
    bgGradient: "from-yellow-500/10 via-orange-500/5 to-transparent",
    accentColor: "yellow",
    orbitIcons: [Hammer, Construction, Wrench, Cog, HardDrive, Shield, Rocket, Settings],
    subTitles: [
      {
        id: 1,
        title: "Predictive Maintenance",
        content:
          "Anticipate equipment failures and schedule maintenance with AI-powered predictive analytics.",
      },
      {
        id: 2,
        title: "Quality Control",
        content:
          "Ensure high-quality construction with AI-powered quality control tools that detect defects and anomalies.",
      },
    ],
  },
];

const Features: React.FC = () => {


  return (
    <div className="relative text-white py-24">
      <div className="relative z-10 max-w-3xl px-6 sm:px-8 lg:px-6 mx-auto text-center mb-16 lg:mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-5 shadow-sm">Key Features</span>
        <h2 className="text-3xl leading-tight sm:text-4xl xl:text-5xl font-bold">
          Built for Construction Teams
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Tools designed specifically for the challenges of modern construction management, helping teams work smarter and deliver better results.
        </p>
      </div>

      {FeatureContent.map((item, index) => (
        <section key={index} className="py-12 md:py-18 relative"> 
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-center px-6 lg:px-8">
            {/* Interactive Visual Element - takes 6 columns on large screens */}
            <div
              className={`${
                index % 2 === 0 ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:order-2"
              } order-1`}
            >
              <div className="relative h-96 rounded-xl overflow-hidden group">
                {/* Animated border */}
                <motion.div 
                  className="absolute inset-0 rounded-xl"
                  initial={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileHover={{ borderColor: 'rgba(158, 255, 142, 0.3)' }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Main feature icon - large and centered */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div 
                    className={`w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg main-icon-pulse`}
                  >
                    <item.icon className="w-16 h-16 text-primary" />
                  </motion.div>
                </motion.div>
                
                {/* Orbiting elements using Framer Motion */}
                <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  {/* Generate orbiting icons in a circular pattern */}
                  {item.orbitIcons && item.orbitIcons.map((OrbitIcon, index) => {
                    // Calculate position on the circle
                    const totalIcons = item.orbitIcons.length;
                    const angle = (index / totalIcons) * 2 * Math.PI;
                    const radius = 120; // Increased radius from 80 to 120
                    const randomOffset = index % 3 === 0 ? 15 : index % 3 === 1 ? 8 : 0; // Slightly larger random offset
                    const adjustedRadius = radius + randomOffset;
                    
                    // Calculate x and y coordinates
                    const x = Math.round(Math.cos(angle) * adjustedRadius * 100) / 100;
                    const y = Math.round(Math.sin(angle) * adjustedRadius * 100) / 100;
                    
                    // Calculate animation duration with slight variations
                    // Use fewer variations to reduce calculations
                    const baseDuration = index % 2 === 0 ? 25 : 30;
                    
                    // Determine rotation direction
                    const clockwise = index % 2 === 0;
                    
                    // Vary icon sizes - use fewer size options
                    const sizeVariants = ["w-8 h-8", "w-10 h-10"];
                    const iconSize = sizeVariants[index % sizeVariants.length];
                    
                    // Set icon colors to a consistent scheme
                    let iconColor = "text-primary";
                    let bgClass = "bg-primary/10";
                    
                    // Vary background opacity and add colored backgrounds - simplified
                    // Only render a subset of icons for better performance
                    // Skip rendering some icons when there are too many
                    if (totalIcons > 6 && index % 2 !== 0 && index > 4) {
                      return null;
                    }
                    
                    return (
                      <motion.div
                        key={index}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        initial={{ rotate: clockwise ? 0 : 360 }}
                        animate={{ rotate: clockwise ? 360 : 0 }}
                        transition={{ 
                          duration: baseDuration, 
                          repeat: Infinity, 
                          ease: "linear",
                          repeatType: "loop"
                        }}
                        style={{
                          willChange: "transform"
                        }}
                      >
                        <motion.div 
                          className="absolute transform -translate-x-1/2 -translate-y-1/2"
                          style={{ x, y }}
                          whileHover={{ 
                            scale: 1.25, 
                            x: x > 0 ? x + 10 : x - 10, 
                            y: y > 0 ? y + 10 : y - 10,
                            transition: { type: "spring", stiffness: 300, damping: 10 }
                          }}
                        >
                          <motion.div 
                            className={`${iconSize} rounded-lg ${bgClass} backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg ${index % 3 === 0 ? 'orbit-icon-pulse' : index % 3 === 1 ? 'orbit-icon-pulse-slow' : 'orbit-icon-pulse-fast'}`}
                            whileHover={{ 
                              scale: 1.2, 
                              backgroundColor: "rgba(255, 255, 255, 0.25)",
                              boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 10px 15px -6px rgba(0, 0, 0, 0.15)",
                              borderColor: "rgba(255, 255, 255, 0.4)",
                              transition: { type: "spring", stiffness: 400, damping: 15 }
                            }}
                          >
                            {React.createElement(OrbitIcon, { 
                              className: `${index % 2 === 0 ? "w-5 h-5" : "w-6 h-6"} ${iconColor}`,
                              style: { filter: "drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))" }
                            })}
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Animated pulse rings using Framer Motion */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/20"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.5, 0],
                    transition: { 
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut"
                    }
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.3, 0],
                    transition: { 
                      repeat: Infinity,
                      duration: 3,
                      delay: 0.5,
                      ease: "easeInOut"
                    }
                  }}
                />
                
                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-secondary/20 to-transparent rounded-tl-3xl"></div>
              </div>
            </div>

            {/* Text Content - takes 6 columns on large screens */}
            <div
              className={`${
                index % 2 === 0 ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1"
              } space-y-8 order-2`}
            >
              <div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  <span className="text-primary">{item.mainTitle}</span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">{item.content}</p>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-8">
                {item.subTitles.map((list) => (
                  <div 
                    key={list.id} 
                    className="flex flex-col p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 text-primary rounded-lg p-2 group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{list.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{list.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link 
                href={item.link} 
                className="inline-flex items-center px-5 py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-secondary rounded-lg transition-all duration-300 mt-6 group shadow-sm hover:shadow-lg"
              >
                <span className="mr-2 font-medium">Explore this feature</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      ))}
      
      {/* Bottom CTA */}
      <div className="relative z-10 mt-8 mb-16 text-center">
        <Link 
          href="/features" 
          className="inline-flex items-center px-8 py-3.5 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"
        >
          View All Features
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Features;
