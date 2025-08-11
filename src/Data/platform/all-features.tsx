import {
  // Pre-Construction
  Calculator,
  Handshake,
  GanttChartSquare,
  
  // Project Execution
  ClipboardList,
  HardHat,
  ShoppingCart,
  Truck,
  
  // Project Controls
  DollarSign,
  BarChart,
  FileText,
  RefreshCcw,
  AlertCircle,
  
  // Platform-Wide
  Users,
  Smartphone,
  Database,
  Bell,
  Settings,
  ShieldCheck,
  CheckCheckIcon, // for closeout
} from "lucide-react";

export const ALL_FEATURES = {
    // --- HERO SECTION ---
    heroprops: {
      title: "One Platform, Every Tool You Need",
      subtitle: "The Complete Feature Suite",
      description:
        "Explore the full range of powerful, interconnected tools Zedops offers. From pre-construction planning to final closeout, our platform is designed to streamline every phase of your project lifecycle.",
      buttonLabel: "Request a Demo",
      imageAlt: "A collage of different features from the Zedops construction management software.",
      linkHref: "/book-a-demo",
    },

    // --- FLAT FEATURE ARRAY WITH ADDED 'category' PROPERTY ---
    features: [
      // Category: Pre-Construction
      {
        icon: <Calculator />,
        title: "Estimation & Bidding",
        description: "Create fast, accurate bids with on-screen takeoffs and a centralized cost database.",
        category: "Pre-Construction",
      },
      {
        icon: <Handshake />,
        title: "Prequalification",
        description: "Minimize risk by vetting and selecting the most qualified subcontractors for your projects.",
        category: "Pre-Construction",
      },
      {
        icon: <GanttChartSquare />,
        title: "Project Scheduling",
        description: "Build and manage detailed project schedules with task dependencies and critical path tracking.",
        category: "Pre-Construction",
      },
      
      // Category: Project Execution
      {
        icon: <ClipboardList />,
        title: "Field Reporting & Daily Logs",
        description: "Capture daily site activities, labor, weather, and progress photos from a mobile device.",
        category: "Project Execution",
      },
      {
        icon: <HardHat />,
        title: "Quality & Safety Management",
        description: "Conduct inspections, report incidents, manage toolbox talks, and track corrective actions.",
        category: "Project Execution",
      },
      {
        icon: <ShoppingCart />,
        title: "Procurement",
        description: "Manage purchase orders, supplier relationships, and material requests to keep your project supplied.",
        category: "Project Execution",
      },
      {
        icon: <Truck />,
        title: "Inventory & Equipment Tracking",
        description: "Track materials, tools, and equipment across your warehouse and job sites.",
        category: "Project Execution",
      },

      // Category: Project Controls
      {
        icon: <DollarSign />,
        title: "Financial Management",
        description: "Connect field data to your budget for live job costing, cash flow forecasting, and invoicing.",
        category: "Project Controls",
      },
      {
        icon: <FileText />,
        title: "Document Management",
        description: "A central, secure repository for all your plans, specs, submittals, and project documents.",
        category: "Project Controls",
      },
      {
        icon: <RefreshCcw />,
        title: "Change Order Management",
        description: "Document and track scope changes and their impact on your project's budget and schedule.",
        category: "Project Controls",
      },
      {
        icon: <AlertCircle />,
        title: "RFI & Submittal Tracking",
        description: "Streamline formal communications with a clear, collaborative workflow and audit trail.",
        category: "Project Controls",
      },
      {
        icon: <BarChart />,
        title: "Analytics & Reporting",
        description: "Generate customizable reports and get actionable insights from project data.",
        category: "Project Controls",
      },
      {
        icon: <CheckCheckIcon />,
        title: "Project Closeout",
        description: "Ensure smooth project handover with final inspections, punch lists, and warranty documentation.",
        category: "Project Controls",
      },

      // Category: Platform-Wide
      {
        icon: <Users />,
        title: "Team Collaboration",
        description: "Centralized communication, task assignments, and a unified project directory.",
        category: "Platform-Wide",
      },
      {
        icon: <Smartphone />,
        title: "Mobile App",
        description: "Access critical project information and perform key tasks from anywhere, even offline.",
        category: "Platform-Wide",
      },
      {
        icon: <Database />,
        title: "Centralized Project Data",
        description: "A single source of truth for all project information, eliminating data silos.",
        category: "Platform-Wide",
      },
      {
        icon: <Bell />,
        title: "Instant Notifications & Alerts",
        description: "Receive real-time alerts for task updates, overdue items, and critical events.",
        category: "Platform-Wide",
      },
      {
        icon: <Settings />,
        title: "Customizable Workflows",
        description: "Adapt the platform to your company's unique approval processes and procedures.",
        category: "Platform-Wide",
      },
      {
        icon: <ShieldCheck />,
        title: "Security & Permissions",
        description: "Protect your data with role-based access, enterprise-grade security, and a full audit trail.",
        category: "Platform-Wide",
      },
    ],
    
    // --- FINAL CALL TO ACTION ---
    ctaProps: {
      title: "Ready to See the Full Platform in Action?",
      description: "Schedule a personalized demo to see how Zedops can unify your teams, streamline your workflows, and increase your profitability.",
      benefits: [
        "All-in-one platform",
        "Unlimited users", // A powerful benefit to highlight
        "Dedicated support",
      ],
      button1Label: "Request a Demo",
      button1Link: "/book-a-demo",
      button2Label: "Talk to Sales",
      button2Link: "/contact-sales",
    },
  };