"use client"

import React, { useState } from "react";
import Link from "next/link";

// Organized icon imports alphabetically
import {
  CheckCircle,
  ChevronRight,
  Clipboard,
  Clock,
  DollarSign,
  FileText,
  Smartphone,
  Ruler
} from "lucide-react";

// The full feature content array, including the previously commented-out section
const FeatureContent = [
  {
    mainTitle: "Budget & Cost Control",
    content:
      "Connect your project budget directly to field activities. Gain real-time financial visibility and make proactive decisions to protect your profit margins.",
    link: "/features/cost-control",
    icon: DollarSign, // A more direct icon for financials
    subTitles: [
      {
        id: 1,
        title: "Live Budget vs. Actuals",
        content:
          "Track labor and material costs against your budget as they happen. Eliminate surprises at the end of the month with a live financial dashboard.",
      },
      {
        id: 2,
        title: "Cost Code Integration",
        content:
          "Assign every hour and expense to a specific cost code, providing granular detail and making job costing simple and accurate.",
      },
    ],
  },
  {
    mainTitle: "Daily Field Reporting",
    content:
      "Empower your site supervisors to capture comprehensive daily logs in minutes, not hours. Keep everyone from the field to the office perfectly in sync.",
    link: "/features/daily-reporting",
    icon: Clipboard, // A more fitting icon for logs
    subTitles: [
      {
        id: 1,
        title: "Mobile-First Design",
        content:
          "A simple, intuitive interface designed for the field. Log labor, materials, equipment, and add progress photos directly from a smartphone.",
      },
      {
        id: 2,
        title: "Professional PDF Exports",
        content:
          "Generate clean, professional daily reports in PDF format with a single click, ready to be shared with clients and stakeholders.",
      },
    ],
  },
  {
    mainTitle: "Drawing & Measurement Tools",
    content:
      "Turn your blueprints into an interactive workspace. Perform accurate takeoffs, link documents to locations, and manage issues visually.",
    link: "/features/drawing-tools",
    icon: Ruler, // A more specific icon for this feature
    subTitles: [
      {
        id: 1,
        title: "Accurate Takeoffs & Measurements",
        content:
          "Calibrate any drawing and perform precise distance, area, and volume measurements, saving time and reducing estimation errors.",
      },
      {
        id: 2,
        title: "Visual Issue Tracking",
        content:
          "Pin observations, RFIs, and photos directly to their location on the plan, providing clear context for faster resolution.",
      },
    ],
  },
  {
    mainTitle: "Integrated Document Management",
    content:
      "Centralize all project documentation in one secure location, making it easy to find, share, and collaborate on critical project files.",
    link: "/features/document-management",
    icon: FileText,
    subTitles: [
      {
        id: 1,
        title: "Version Control",
        content:
          "Keep track of document revisions with automatic version control, ensuring everyone works with the most up-to-date information.",
      },
      {
        id: 2,
        title: "Secure Sharing & Permissions",
        content:
          "Share documents securely with team members and stakeholders, controlling who can view, edit, and download specific files.",
      },
    ],
  },
  {
    mainTitle: "Time & Labor Management",
    content:
      "Streamline time tracking for your entire workforce. Ensure accurate payroll and get a clear picture of labor costs across all your projects.",
    link: "/features/time-management",
    icon: Clock,
    subTitles: [
      {
        id: 1,
        title: "Easy Timesheet Entry",
        content:
          "Field staff can submit individual or crew timesheets in seconds from their mobile device, complete with cost codes and notes.",
      },
      {
        id: 2,
        title: "Streamlined Approval Workflows",
        content:
          "Managers can review and approve submitted timesheets from anywhere, speeding up the entire payroll process.",
      },
    ],
  },
  {
    mainTitle: "Mobile Field Operations",
    content:
      "Empower your field teams with mobile tools that keep them connected to the office, allowing for real-time data collection and reporting from anywhere.",
    link: "/features/mobile-operations",
    icon: Smartphone,
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
];

const FeaturesWithTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeFeature = FeatureContent[activeTab];

  return (
    <div className="relative py-24 bg-orange-50">
      <div className="relative z-10 max-w-3xl px-6 sm:px-8 lg:px-6 mx-auto text-center mb-16 lg:mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-sm font-semibold mb-5 shadow-sm">
          Key Features
        </span>
        <h2 className="text-3xl leading-tight sm:text-4xl xl:text-5xl font-bold text-secondary">
          An Integrated Platform for Success
        </h2>
        <p className="mt-6 text-lg text-secondary max-w-2xl mx-auto">
          Explore our powerful, interconnected modules designed to streamline every phase of your project lifecycle, from planning to execution.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side Tab Navigation */}
          <div className="lg:col-span-6 xl:col-span-3">
            <div className="space-y-2">
              {FeatureContent.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full flex items-center p-4 rounded-2xl text-left transition-all duration-300 ${
                      activeTab === index
                        ? "bg-white shadow-lg scale-105"
                        : "bg-transparent text-secondary hover:bg-gray-200/50 hover:text-gray-900"
                    }`}
                  >
                    <Icon className={`w-6 h-6 mr-4 flex-shrink-0 ${ activeTab === index ? "text-primary" : "text-secondary"}`} />
                    <span className="">{item.mainTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side Content Display */}
          <div className="lg:col-span-8 xl:col-span-9">
            {activeFeature && (
              <div className="p-8 bg-white rounded-xl shadow-xl">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">
                    {activeFeature.mainTitle}
                  </h3>
                  <p className="text-lg text-secondary leading-relaxed">{activeFeature.content}</p>
                </div>

                <div className="border-t border-gray-200 my-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeFeature.subTitles.map((list) => (
                    <div key={list.id} className="flex items-start space-x-3">
                      <div className="bg-primary/10 text-primary rounded-full p-2">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-1 text-secondary">{list.title}</h4>
                        <p className="text-secondary leading-relaxed">{list.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <Link
                  href={activeFeature.link}
                  className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-all duration-300 mt-10 group"
                >
                  <span>Explore this feature</span>
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link> */}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="relative z-10 mt-20 text-center">
        <Link
          href="/features"
          className="inline-flex items-center px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-sm"
        >
          View All Features
          <ChevronRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturesWithTabs;