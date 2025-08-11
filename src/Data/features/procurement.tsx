import {
  Handshake,
  DollarSign,
  ClipboardList,
  Truck,
  FileCheck,
  BarChartBig,
  PackageSearch,
  ArrowLeftRight,
  Warehouse,
  ShoppingCart,
  FileSpreadsheet,
  CheckSquare,
  BellRing,
  Users,
  Smartphone,
  Cloud,
  BadgeDollarSign,
  BarChart4,
  Layers,
  FileSignature,
  PackageCheck,
  Recycle,
  ScanQrCode,
  BarChart3,
  FolderCog,
  Presentation,
  FileText,
  ArrowDownUp,
  GanttChartSquare, // New Icon
  BookCheck,
  Send,        // New Icon
} from "lucide-react";

export const PROCUREMENT_PAGE = {
  // --- HERO SECTION ---
  heroProps: {
    subtitle: "Buy Smarter. Build Faster.",
    description:
      "Transform your procurement from a cost center into a strategic advantage. Zedops streamlines everything from supplier sourcing to final delivery, giving you the control to reduce costs, mitigate risks, and keep your projects on schedule.",
    buttonLabel: "Optimize Your Procurement",
    imageSrc: "/Solutions/procurement/procurement_hero.jpg", // Update this!
    imageAlt: "A procurement manager analyzing supplier bids on a clean software dashboard.",
    linkHref: "/book-a-demo",
    floatingCards: [
      {
        icon: Send,
        title: "RFQ Sent to 5 Suppliers",
        subtitle: "Project Alpha - Concrete Package",
        positionClasses: "top-1/3 -left-24 hidden lg:block",
      },
      {
        icon: FileCheck,
        title: "PO #1024 Approved",
        subtitle: "Approved by Project Director",
        positionClasses: "top-10 -right-16 hidden lg:block",
      },
      {
        icon: Truck,
        title: "Delivery En Route",
        subtitle: "ETA: Tomorrow, 10:00 AM",
        positionClasses: "bottom-1/4 -right-16 hidden lg:block",
      },
    ],
  },
  
  // --- SUB-HERO / VALUE PROPOSITION ---
  heroSectionProps: {
    subtitle: "From Request To Receipt",
    title: "A Seamless Procurement Workflow",
    description:
      "Connect your teams, data, and suppliers on a single platform. Eliminate the chaos of manual purchase orders, endless email chains, and uncertain delivery schedules.",
    buttonLabel: "Request a Demo",
    buttonLink: "/book-a-demo",
  },
  
  // --- CORE FEATURES ---
  featuresSectionProps: {
    features: [
      {
        title: "Strategic Supplier Management",
        description:
          "Create a centralized database of your trusted suppliers. Track performance, manage contracts, and easily send out Requests for Quotes (RFQs) to get the best price every time.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Automated Purchase Order Lifecycle",
        description:
          "Create, approve, and track purchase orders in minutes. Automate approval workflows and gain real-time visibility into the status of every order, from sent to delivered.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  
  // --- BENEFITS / OUTCOMES ---
  TestimonalsSectionProps: {
    subtitle: "Why ZedOps Procurement?",
    title: "The Power to Protect Your Bottom Line",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "An illustration showing a dollar sign shielded, symbolizing cost control.",
    features: [
      {
        title: "Drive Down Material Costs",
        description:
          "Leverage competitive bidding and performance data to negotiate better rates with suppliers and reduce procurement spend.",
        icon: <Handshake size={24} />,
      },
      {
        title: "Eliminate Budget Surprises",
        description:
          "Gain real-time visibility into committed costs. Track every purchase order against your project budget to prevent overruns before they happen.",
        icon: <DollarSign size={24} />,
      },
      {
        title: "Ensure On-Time Deliveries",
        description:
          "Proactively track order statuses and delivery schedules to prevent material shortages that can bring a job site to a halt.",
        icon: <ClipboardList size={24} />,
      },
    ],
  },

  // --- DETAILED FEATURE SECTIONS ---
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Intelligent Sourcing",
      subtitle: "Find the Best Partners",
      description:
        "Build a robust, competitive, and reliable supply chain. Our tools help you vet suppliers, compare quotes fairly, and make data-driven sourcing decisions.",
      features: [
        {
          icon: <Truck size={24} className="text-background" />,
          title: "Supplier Database & Scorecards",
          description: "Maintain detailed profiles and performance scorecards for all your vendors and subcontractors.",
        },
        {
          icon: <FileCheck size={24} className="text-background" />,
          title: "RFQ & Bid Leveling",
          description: "Issue RFQs to multiple vendors and easily compare their quotes side-by-side in a standardized format.",
        },
        {
          icon: <BarChartBig size={24} className="text-background" />,
          title: "Historical Performance Analytics",
          description: "Analyze past delivery times, material quality, and pricing to select the most reliable partners.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Purchase Order Automation",
      subtitle: "Execute with Speed & Control",
      description:
        "Automate your entire purchase order lifecycle. Reduce manual data entry, streamline approvals, and maintain a perfect audit trail of every purchase.",
      features: [
        {
          icon: <PackageSearch size={24} className="text-background" />,
          title: "From Requisition to PO in Clicks",
          description: "Convert material requisitions from the field or estimates into professional purchase orders instantly.",
        },
        {
          icon: <ArrowLeftRight size={24} className="text-background" />,
          title: "Customizable Approval Workflows",
          description: "Set up multi-step approval chains based on PO value or project type to ensure proper oversight.",
        },
        {
          icon: <Warehouse size={24} className="text-background" />,
          title: "Three-Way Matching",
          description: "Automatically match purchase orders, goods receipt notes, and invoices to prevent payment errors.",
        },
      ],
    },
  ],
  
  // --- GRID OF ALL FEATURES ---
  featureData: [
    {
      icon: <ShoppingCart className="text-background" />,
      title: "Centralized Procurement Dashboard",
      description: "Manage all requisitions, RFQs, and purchase orders from a single view.",
    },
    {
      icon: <FileSpreadsheet className="text-background" />,
      title: "Customizable Reporting",
      description: "Generate reports on spend, supplier performance, and procurement cycles.",
    },
    {
      icon: <CheckSquare className="text-background" />,
      title: "Automated Purchase Orders",
      description: "Reduce manual entry and speed up your buying process.",
    },
    {
      icon: <BellRing className="text-background" />,
      title: "Real-Time Status Alerts",
      description: "Receive notifications for approvals, shipments, and deliveries.",
    },
    {
      icon: <Handshake className="text-background" />,
      title: "Supplier Relationship Management",
      description: "Track contracts, compliance documents, and communication history.",
    },
    {
      icon: <Smartphone className="text-background" />,
      title: "Mobile Approvals",
      description: "Review and approve purchase orders from anywhere on your mobile device.",
    },
    {
      icon: <BadgeDollarSign className="text-background" />,
      title: "Budget & Cost Tracking",
      description: "Link procurement costs directly to your project budgets in real-time.",
    },
    {
      icon: <GanttChartSquare className="text-background" />, // Changed icon
      title: "Project Schedule Integration",
      description: "Align material delivery dates with your project construction schedule.",
    },
    {
      icon: <FileSignature className="text-background" />,
      title: "Digital Contract Management",
      description: "Store and manage all supplier contracts and agreements securely.",
    },
    {
      icon: <PackageCheck className="text-background" />,
      title: "Goods Receipt & Quality Control",
      description: "Log deliveries on-site and document material quality upon arrival.",
    },
    {
      icon: <ScanQrCode className="text-background" />,
      title: "Inventory Integration",
      description: "Automatically update your inventory stock levels upon material receipt.",
},
    {
      icon: <FolderCog className="text-background" />,
      title: "Customizable Workflows",
      description: "Adapt the procurement process to fit your company’s unique approval needs.",
    },
  ],

  // --- RESOURCES / GUIDES SECTION ---
  featuresData: {
    title: "Resources",
    subtitle: "Master Your Procurement Process",
    description: "Explore our expert guides for building a world-class construction procurement strategy.",
    features: [
      {
        icon: <Presentation className="text-white" />,
        title: "Tutorial: Your First Purchase Order",
        description: "Watch our step-by-step guide.",
      },
      {
        icon: <FileText className="text-white" />,
        title: "The Ultimate Guide to Construction Procurement",
        description: "Access the guide.",
      },
      {
        icon: <Truck className="text-white" />,
        title: "Best Practices for Supplier Negotiation",
        description: "Read the article.",
      },
      {
        icon: <BookCheck className="text-white" />, // Changed icon
        title: "A Guide to Three-Way Matching in Construction",
        description: "Learn how to prevent payment errors.",
      },
    ],
  },
  
  // --- FINAL CALL TO ACTION ---
  ctaProps: {
    title: "Take Control of Your Project Spend",
    description: "See how Zedops can help you build a more efficient, transparent, and profitable procurement process.",
    benefits: [
      "Lower material costs",
      "Reduce project risks",
      "Ensure on-time delivery",
    ],
    button1Label: "Request a Demo",
    button1Link: "/book-a-demo",
    button2Label: "Talk to Sales",
    button2Link: "/contact-sales",
  },
};