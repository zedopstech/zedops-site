import {
  DollarSign,
  TrendingUp,
  ShieldAlert,
  BarChart,
  Clock,
  PieChart,
  AlertTriangle,
  Receipt,
  Calculator,
  LineChart,
  ClipboardList,
  Layers,
  Bell,
  ClipboardCheck,
  RefreshCcw,
  Target,
  TrendingDown,
  Database,
  ShieldCheck,
  FilePlus,
  FileBarChart,
  Banknote,
  BarChart2,
  FileDigit,      // New Icon
  Scale,          // New Icon
  ArrowDownUp,    // New Icon
} from "lucide-react";

export const PROJECTFINANCIAL_PAGE = {
  // --- HERO SECTION ---
  heroProps: {
    subtitle: "Protect Your Profit. On Every Project.",
    description:
      "Move beyond reactive accounting. Zedops gives you a live, forward-looking view of your project's financial health, connecting your budget, committed costs, and field data in one powerful command center.",
    buttonLabel: "Take Control of Your Margins",
    imageSrc: "/Solutions/financial/project-financials-hero.webp", // MUST UPDATE!
    imageAlt: "A clean dashboard showing a construction project's budget vs. actuals, cost to complete, and profitability forecast.",
    linkHref: "/book-a-demo",
    
    // --- Floating Cards for the Project Financials Hero Section ---
    floatingCards: [
      {
        icon: TrendingUp,
        title: "Profit Margin: 12.5%",
        subtitle: "Trending up from last month",
        positionClasses: "top-16 -left-20",
      },
      {
        icon: AlertTriangle,
        title: "Cost Overrun Warning",
        subtitle: "Concrete budget at 95%",
        positionClasses: "bottom-1/4 -left-24",
      },
      {
        icon: Receipt,
        title: "New Invoice Approved",
        subtitle: "$25,000 to ABC Suppliers",
        positionClasses: "top-1/2 -right-16",
      },
    ],
  },
  
  // --- SUB-HERO / VALUE PROPOSITION ---
  heroSectionProps: {
    subtitle: "From Bid To Closeout",
    title: "A Single Source of Financial Truth",
    description:
      "Eliminate the risk of surprise overruns and inaccurate reports. Our platform ensures your entire team—from the field to the back office—is working with the same real-time financial data.",
    buttonLabel: "Request a Demo",
    buttonLink: "/book-a-demo",
  },
  
  // --- CORE FEATURES ---
  featuresSectionProps: {
    features: [
      {
        title: "Live Job Costing",
        description:
          "Instantly see the financial impact of every timesheet, purchase order, and daily log. Track your budget vs. actuals in real-time, not weeks later.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Cash Flow & Profit Forecasting",
        description:
          "Look ahead with confidence. Our tools help you forecast cost-to-complete, project future cash flow, and see your projected profit margin at any time.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  
  // --- BENEFITS / OUTCOMES ---
  TestimonalsSectionProps: {
    subtitle: "Why ZedOps Financial?",
    title: "Make Smarter Financial Decisions, Faster",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "An illustration of a rising bar chart with a dollar sign, symbolizing project profitability.",
    features: [
      {
        title: "Protect Profitability",
        description:
          "Identify potential cost overruns early and take corrective action before they erode your profit margin.",
        icon: <DollarSign size={24} />,
      },
      {
        title: "Improve Forecasting Accuracy",
        description:
          "Leverage historical and real-time data to create more accurate cost forecasts and improve future bids.",
        icon: <TrendingUp size={24} />,
      },
      {
        title: "Increase Team Accountability",
        description:
          "Provide project managers with the clear, real-time data they need to take ownership of their budgets and drive performance.",
        icon: <ShieldAlert size={24} />,
      },
    ],
  },

  // --- DETAILED FEATURE SECTIONS ---
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Budget Management",
      subtitle: "The Foundation of Financial Control",
      description:
        "Build, manage, and track your project budgets with precision. Convert your winning bid into a live budget and track every dollar against it.",
      features: [
        {
          icon: <FileDigit size={24} className="text-background" />, // Changed icon
          title: "Detailed Cost Code Tracking",
          description: "Track every expense against specific cost codes to understand exactly where your money is going.",
        },
        {
          icon: <BarChart size={24} className="text-background" />,
          title: "Budget vs. Actuals Reporting",
          description: "Instantly generate reports comparing your budget to actual costs, committed costs, and forecasts.",
        },
        {
          icon: <ArrowDownUp size={24} className="text-background" />, // Changed icon
          title: "Change Order Management",
          description: "Manage the financial impact of scope changes, ensuring all change orders are approved, tracked, and billed.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Cost & Expense Management",
      subtitle: "Capture Every Cost, Instantly",
      description:
        "Streamline how you track and manage all project-related costs, from labor and materials to subcontractor invoices and miscellaneous expenses.",
      features: [
        {
          icon: <TrendingUp size={24} className="text-background" />,
          title: "Real-Time Cost Tracking",
          description: "Capture costs as they happen with data flowing directly from timesheets, procurement, and daily logs.",
        },
        {
          icon: <PieChart size={24} className="text-background" />,
          title: "Committed Cost Management",
          description: "Track costs from purchase orders and subcontracts *before* the invoice arrives for a true picture of your financial exposure.",
        },
        {
          icon: <Scale size={24} className="text-background" />, // Changed icon
          title: "Invoice & Pay Application Processing",
          description: "Simplify the review and approval process for subcontractor invoices and payment applications.",
        },
      ],
    },
  ],
  
  // --- GRID OF ALL FEATURES ---
  featureData: [
    {
      icon: <DollarSign className="text-background" />,
      title: "Real-Time Job Costing",
      description: "Track every cost against your budget as it occurs.",
    },
    {
      icon: <TrendingUp className="text-background" />,
      title: "Cost Forecasting (Cost-to-Complete)",
      description: "Project your final project costs based on real-time progress.",
    },
    {
      icon: <BarChart2 className="text-background" />,
      title: "Budget vs. Actuals Reporting",
      description: "Instantly see where your project is over or under budget.",
    },
    {
      icon: <PieChart className="text-background" />,
      title: "Committed Cost Tracking",
      description: "Track expenses from POs and subcontracts before they are invoiced.",
    },
    {
      icon: <AlertTriangle className="text-background" />,
      title: "Proactive Overrun Alerts",
      description: "Receive notifications when a cost code is approaching its budget limit.",
    },
    {
      icon: <Receipt className="text-background" />,
      title: "Invoice & Payment Management",
      description: "Streamline the approval process for vendor and subcontractor invoices.",
    },
    {
      icon: <Calculator className="text-background" />,
      title: "Change Order Financial Tracking",
      description: "Manage the financial impact of all scope changes.",
    },
    {
      icon: <LineChart className="text-background" />,
      title: "Profitability & Margin Analysis",
      description: "Monitor your project's profitability in real-time.",
    },
    {
      icon: <Layers className="text-background" />,
      title: "Multi-Project Financial Views",
      description: "Get a portfolio-level overview of the financial health of all your projects.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Centralized Financial Data",
      description: "A single source of truth for all project financial information.",
    },
    {
      icon: <FilePlus className="text-background" />,
      title: "Customizable Financial Reports",
      description: "Generate the reports you need for internal reviews or client updates.",
    },
    {
      icon: <ShieldCheck className="text-background" />,
      title: "Accounting Integration",
      description: "Sync your project financial data seamlessly with your main accounting system.",
    },
  ],

  // --- RESOURCES / GUIDES SECTION ---
  featuresData: {
    title: "Resources",
    subtitle: "Master Your Project Financials",
    description: "Explore our expert guides for improving construction cost control and profitability.",
    features: [
      {
        icon: <DollarSign className="text-white" />,
        title: "The Ultimate Guide to Job Costing",
        description: "Access the guide.",
      },
      {
        icon: <ClipboardList className="text-white" />,
        title: "How to Effectively Manage Change Orders",
        description: "Read the article.",
      },
      {
        icon: <AlertTriangle className="text-white" />,
        title: "5 Strategies to Prevent Budget Overruns",
        description: "Read our best practices.",
      },
      {
        icon: <TrendingUp className="text-white" />,
        title: "A Contractor's Guide to Financial Forecasting",
        description: "Learn the fundamentals.",
      },
    ],
  },
  
  // --- FINAL CALL TO ACTION ---
  ctaProps: {
    title: "Take Command of Your Project's Profitability",
    description: "Stop waiting for month-end reports to know where you stand. See how Zedops provides the real-time financial control you need to protect your margins.",
    benefits: [
      "Prevent budget overruns",
      "Improve forecast accuracy",
      "Maximize project profit",
    ],
    button1Label: "Request a Demo",
    button1Link: "/book-a-demo",
    button2Label: "Talk to Sales",
    button2Link: "/contact-sales",
  },
};