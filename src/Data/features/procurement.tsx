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
} from "lucide-react";

export const PROCUREMENT_PAGE = {
  heroProps: {
    subtitle: "Procurement",
    description:
      "Control costs and streamline your construction procurement. From smarter sourcing to optimized supplier management, ensure timely deliveries, reduce expenses, and drive project profitability.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/procurement-hero.jpg", // Update this!
    imageAlt: "Construction Procurement Management Software Dashboard",
    linkHref: "/procurement-demo",
  },
  heroSectionProps: {
    subtitle: "SIMPLIFY YOUR PROCUREMENT",
    title: "Source, Purchase, and Optimize",
    description:
      "Manage suppliers, control costs, and ensure the timely delivery of materials and equipment.",
    buttonLabel: "Explore Features",
    buttonLink: "/procurement-features",
  },
  featuresSectionProps: {
    features: [
      {
        title: "Smart Sourcing & Supplier Management",
        description:
          "Identify reliable suppliers, compare pricing, and streamline negotiations to secure the best deals for your projects.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Efficient Purchase Order Processing",
        description:
          "Automate purchase orders, track approvals, and manage procurement workflows to ensure timely material deliveries.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "SMART PROCUREMENT SOLUTIONS",
    title: "Optimize Your Sourcing and Purchasing",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing procurement management features",
    features: [
      {
        title: "Supplier Management",
        description:
          "Build strong supplier relationships, track performance, and ensure quality materials for every project.",
        icon: <Handshake size={24} />,
      },
      {
        title: "Cost Control & Budgeting",
        description:
          "Keep procurement costs in check with detailed expense tracking, forecasting, and cost analysis tools.",
        icon: <DollarSign size={24} />,
      },
      {
        title: "Automated Purchase Orders",
        description:
          "Streamline procurement with auto-generated purchase orders, approval workflows, and real-time tracking.",
        icon: <ClipboardList size={24} />,
      },
    ],
  },
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Streamlined Procurement Workflow",
      subtitle: "Efficient & Cost-Effective",
      description:
        "Optimize your procurement process with seamless supplier management, automated approvals, and cost tracking.",
      features: [
        {
          icon: <Truck size={24} className="text-background" />,
          title: "Reliable Supplier Network",
          description:
            "Connect with trusted vendors and streamline sourcing for quality materials.",
        },
        {
          icon: <FileCheck size={24} className="text-background" />,
          title: "Automated Approval Process",
          description:
            "Reduce delays with digital purchase approvals and tracking.",
        },
        {
          icon: <BarChartBig size={24} className="text-background" />,
          title: "Real-Time Cost Monitoring",
          description:
            "Track expenses and stay within budget with real-time procurement insights.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Optimized Procurement & Logistics",
      subtitle: "Seamless & Reliable",
      description:
        "Ensure timely material deliveries and streamlined procurement workflows for uninterrupted project execution.",
      features: [
        {
          icon: <PackageSearch size={24} className="text-background" />,
          title: "Real-Time Order Tracking",
          description:
            "Monitor purchase orders and deliveries with live status updates.",
        },
        {
          icon: <ArrowLeftRight size={24} className="text-background" />,
          title: "Automated Supplier Coordination",
          description:
            "Improve efficiency with smart supplier communication and order scheduling.",
        },
        {
          icon: <Warehouse size={24} className="text-background" />,
          title: "Centralized Procurement Hub",
          description:
            "Manage all purchasing activities from a single, intuitive dashboard.",
        },
      ],
    },
  ],
  featureData: [
    {
      icon: <ShoppingCart className="text-background" />,
      title: "Centralized Procurement Hub",
      description: "Manage all purchasing activities from a single platform.",
    },
    {
      icon: <FileSpreadsheet className="text-background" />,
      title: "Customizable Procurement",
      description:
        "Generate detailed reports to track purchase orders, costs, and supplier performance.",
    },
    {
      icon: <CheckSquare className="text-background" />,
      title: "Automated Purchase Orders",
      description:
        "Streamline order creation and approval processes for faster procurement.",
    },
    {
      icon: <BellRing className="text-background" />,
      title: "Real-Time Order Alerts",
      description:
        "Receive notifications for purchase approvals, delays, and fulfillment updates.",
    },
    {
      icon: <Users className="text-background" />,
      title: "Multi-User Role Management",
      description:
        "Enable role-based access for procurement teams and stakeholders.",
    },
    {
      icon: <Handshake className="text-background" />,
      title: "Supplier Relationship",
      description:
        "Track vendor performance and streamline communication for reliable sourcing.",
    },
    {
      icon: <Smartphone className="text-background" />,
      title: "Mobile Procurement Access",
      description: "Manage purchase requests and approvals on the go.",
    },
    {
      icon: <Cloud className="text-background" />,
      title: "Cloud-Based Purchase",
      description:
        "Securely store and access procurement data from any device.",
    },
    {
      icon: <BadgeDollarSign className="text-background" />,
      title: "Cost Analysis & Budgeting",
      description:
        "Track spending and optimize procurement budgets with real-time insights.",
    },
    {
      icon: <BarChart4 className="text-background" />,
      title: "Demand Forecasting",
      description:
        "Leverage AI-driven insights to predict material needs and avoid shortages.",
    },
    {
      icon: <ClipboardList className="text-background" />,
      title: "Procurement Workflow",
      description:
        "Automate repetitive tasks like approvals and reorders to improve efficiency.",
    },
    {
      icon: <Truck className="text-background" />,
      title: "Logistics & Delivery Tracking",
      description:
        "Monitor shipment status and ensure on-time material deliveries.",
    },
    {
      icon: <ArrowDownUp className="text-background" />,
      title: "Dynamic Pricing & Cost Comparisons",
      description:
        "Compare vendor pricing in real-time to secure the best deals.",
    },
    {
      icon: <Layers className="text-background" />,
      title: "Integration with ERP ",
      description:
        "Sync procurement data with financial and project management tools.",
    },
    {
      icon: <FileSignature className="text-background" />,
      title: "Digital Contract Management",
      description:
        "Store, review, and manage supplier contracts for transparency and compliance.",
    },
    {
      icon: <PackageCheck className="text-background" />,
      title: "Quality Control & Compliance",
      description:
        "Ensure materials meet industry standards before site delivery.",
    },
    {
      icon: <Recycle className="text-background" />,
      title: "Sustainable Procurement",
      description:
        "Optimize sourcing strategies to minimize waste and promote eco-friendly materials.",
    },
    {
      icon: <ScanQrCode className="text-background" />,
      title: "QR & Barcode Scanning",
      description:
        "Easily track material receipts and usage with quick scan technology.",
    },
    {
      icon: <BarChart3 className="text-background" />,
      title: "Vendor Performance",
      description:
        "Measure supplier efficiency based on delivery times, quality, and reliability.",
    },
    {
      icon: <FolderCog className="text-background" />,
      title: "Custom Procurement",
      description:
        "Adapt procurement processes to fit your project’s unique needs.",
    },
  ],
  featuresData: {
    title: "Resources",
    subtitle: "Master Procurement Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        title: "Master Procurement Strategies",
        description: "Watch the workshop to elevate your skills.",
        icon: <Presentation className="text-white" />,
      },
      {
        icon: <FileText className="text-white" />,
        title: "Best Practices for Construction Procurement",
        description: "Access the guide for streamlined processes.",
      },
      {
        icon: <Truck className="text-white" />,
        title: "Optimizing Supplier & Logistics Coordination",
        description:
          "Access the guide for efficient delivery and reduced delays.",
      },
      {
        icon: <Recycle className="text-white" />,
        title: "Sustainable & Cost-Effective Sourcing",
        description: "Access the guide to lower expenses with green practices.",
      },
      {
        icon: <BadgeDollarSign className="text-white" />,
        title: "Cost-Efficient Procurement Strategies",
        description: "Access the guide to maximize budget control.",
      },
      {
        icon: <ClipboardList className="text-white" />,
        title: "Procurement Compliance & Risk Management",
        description: "Access the guide to safeguard against regulatory issues.",
      },
    ],
  },
  ctaProps: {
    title: "Optimize Your Construction Procurement",
    description: "",
    benefits: [
      "Streamlined purchase",
      "Cost-effective supplier",
      "Real-time order tracking",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};
