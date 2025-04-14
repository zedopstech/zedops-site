import {
  Blocks,
  Kanban,
  BookOpenText,
  Tags,
  ArrowDownNarrowWide,
  TvMinimalPlay,
  Radio,
  FolderSync,
  Usb,
  LayoutDashboard,
  ClipboardMinus,
  ScanBarcode,
  CircleAlert,
  ReplyAll,
  ArrowLeftRight,
  TabletSmartphone,
  CloudUpload,
  Pickaxe,
  ShieldOff,
  BaggageClaim,
  ListCollapse,
  Banknote,
  Shapes,
  AudioLines,
  BookOpenCheck,
  Radiation,
  ScanQrCode,
  SquareArrowLeft,
  ArrowRightToLine,
  Ribbon,
  Loader,
  Warehouse,
  Biohazard,
  Route,
  GitCompare,
} from "lucide-react";

export const INVENTORY_PAGE = {
  heroProps: {
    subtitle: "Inventory",
    description:
      "Control construction costs with our inventory management solution. Track materials in real-time, minimize waste, and eliminate costly delays caused by missing or misplaced items.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/inventory-hero.jpg", // Update this!
    imageAlt: "Construction worker scanning inventory using a mobile device",
    linkHref: "/inventory-management-demo",
  },
  heroSectionProps: {
    subtitle: "STREAMLINE YOUR INVENTORY",
    title: "Track, Manage, and Optimize",
    description:
      "Gain full visibility into your construction materials, tools, and equipment.",
    buttonLabel: "Explore Features",
    buttonLink: "/inventory-features",
  },
  featuresSectionProps: {
    features: [
      {
        title: "Real-time Inventory Tracking",
        description:
          "Monitor stock levels, track material usage, and automate reordering to ensure uninterrupted workflows.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Seamless Asset Management",
        description:
          "Keep track of equipment location, condition, and availability to reduce losses and improve project efficiency.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "EFFICIENT RESOURCE MANAGEMENT",
    title: "Take Full Control of Your Inventory",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing inventory control features",
    features: [
      {
        title: "Automated Stock ",
        description:
          "Prevent material shortages with automated alerts and reorder triggers based on real-time consumption data.",
        icon: <Blocks size={24} />,
      },
      {
        title: "Cost-Efficient Planning",
        description:
          "Reduce excess inventory and avoid costly last-minute purchases by optimizing procurement strategies.",
        icon: <Kanban size={24} />,
      },
      {
        title: "Seamless Integration",
        description:
          "Sync inventory data with your project management tools for improved decision-making and workflow.",
        icon: <BookOpenText size={24} />,
      },
    ],
  },
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Smart Inventory Categorization",
      subtitle: "Organized & Accessible",
      description:
        "Ensure seamless inventory organization by categorizing materials, tools, and equipment with intuitive tagging.",
      features: [
        {
          icon: <Tags size={24} className="text-background" />,
          title: "Custom Inventory Tags",
          description:
            "Label and classify assets for quick retrieval and efficient tracking.",
        },
        {
          icon: <ArrowDownNarrowWide size={24} className="text-background" />,
          title: "Detailed Usage Insights",
          description:
            "Analyze consumption patterns to optimize purchasing decisions.",
        },
        {
          icon: <TvMinimalPlay size={24} className="text-background" />,
          title: "Digital Audit Trails",
          description:
            "Maintain a clear record of inventory movement for compliance and accountability.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Warehouse & Site Synchronization",
      subtitle: "Connected & Efficient",
      description:
        "Ensure real-time synchronization between warehouses and construction sites to minimize downtime.",
      features: [
        {
          icon: <Radio size={24} className="text-background" />,
          title: "Live Inventory Updates",
          description:
            "Keep teams informed with instant stock level changes and availability alerts.",
        },
        {
          icon: <FolderSync size={24} className="text-background" />,
          title: "Automated Transfers",
          description:
            "Streamline material movement between locations with smart logistics.",
        },
        {
          icon: <Usb size={24} className="text-background" />,
          title: "Multi-Site Management",
          description:
            "Oversee inventory across multiple sites with a centralized dashboard.",
        },
      ],
    },
  ],
  featureData: [
    {
      icon: <LayoutDashboard className="text-background" />,
      title: "Intuitive Dashboard",
      description:
        "Manage inventory effortlessly with an easy-to-use interface.",
    },
    {
      icon: <ClipboardMinus className="text-background" />,
      title: "Customizable Reports",
      description:
        "Generate detailed reports to track inventory trends and costs.",
    },
    {
      icon: <ScanBarcode className="text-background" />,
      title: "RFID & Barcode Integration",
      description: "Enhance tracking accuracy with RFID and barcode scanning.",
    },
    {
      icon: <CircleAlert className="text-background" />,
      title: "Automated Alerts",
      description:
        "Receive notifications for low stock, overages, and critical updates.",
    },
    {
      icon: <ReplyAll className="text-background" />,
      title: "Multi-User Access",
      description: "Enable collaboration with role-based permissions.",
    },
    {
      icon: <ArrowLeftRight className="text-background" />,
      title: "Supplier Management",
      description: "Streamline vendor interactions and procurement processes.",
    },
    {
      icon: <TabletSmartphone className="text-background" />,
      title: "Mobile Accessibility",
      description: "Monitor and update inventory from anywhere via mobile.",
    },
    {
      icon: <CloudUpload className="text-background" />,
      title: "Cloud-Based Storage",
      description:
        "Securely store and access inventory data anytime, anywhere.",
    },
    {
      icon: <Pickaxe className="text-background" />,
      title: "Integration with PM Tools",
      description:
        "Connect with leading construction project management software.",
    },
    {
      icon: <ShieldOff className="text-background" />,
      title: "Predictive Analytics",
      description: "Leverage AI-powered insights to forecast inventory needs.",
    },
    {
      icon: <BaggageClaim className="text-background" />,
      title: "Real-Time Stock Monitoring",
      description:
        "Track material levels across multiple sites to prevent shortages.",
    },
    {
      icon: <ListCollapse className="text-background" />,
      title: "Automated Reordering",
      description:
        "Set low-stock thresholds and trigger automatic restocking requests.",
    },
    {
      icon: <Banknote className="text-background" />,
      title: "Cost Analysis & Budgeting",
      description:
        "Monitor inventory expenses and optimize purchasing decisions.",
    },
    {
      icon: <Shapes className="text-background" />,
      title: "Equipment Maintenance",
      description:
        "Schedule and track equipment servicing to extend asset lifespan.",
    },
    {
      icon: <AudioLines className="text-background" />,
      title: "Multi-Project Inventory Sync",
      description:
        "Manage inventory across multiple projects with seamless synchronization.",
    },
    {
      icon: <BookOpenCheck className="text-background" />,
      title: "User Role & Permission",
      description:
        "Grant access levels based on roles to ensure secure inventory management.",
    },
    {
      icon: <Radiation className="text-background" />,
      title: "Material Waste Reduction",
      description:
        "Monitor usage patterns to minimize excess material waste and loss.",
    },
    {
      icon: <ScanQrCode className="text-background" />,
      title: "QR & Barcode Scanning",
      description:
        "Quickly check-in and check-out materials using barcode scanning.",
    },
    {
      icon: <SquareArrowLeft className="text-background" />,
      title: "Custom Inventory Reports",
      description:
        "Generate real-time reports on stock levels, movement, and usage trends.",
    },
    {
      icon: <ArrowRightToLine className="text-background" />,
      title: "Vendor Performance Insights",
      description:
        "Analyze supplier efficiency based on delivery times and material quality.",
    },
  ],
  featuresData: {
    title: "Resources",
    subtitle: "Master Inventory Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        title: "Enhance Your Inventory Strategy",
        description: "Watch the workshop to refine your approach.",
        icon: <Ribbon className="text-white" />,
      },
      {
        icon: <Loader className="text-white" />,
        title: "Best Practices for Inventory Management",
        description: "Access the guide for optimized workflows.",
      },
      {
        icon: <Warehouse className="text-white" />,
        title: "Optimizing Warehouse Layouts",
        description: "Access the guide to maximize space and efficiency.",
      },
      {
        icon: <Biohazard className="text-white" />,
        title: "Reducing Material Waste",
        description:
          "Access the guide to minimize loss and improve sustainability.",
      },
      {
        icon: <Route className="text-white" />,
        title: "Cost-Efficient Procurement",
        description: "Access the guide to lower material expenses.",
      },
      {
        icon: <GitCompare className="text-white" />,
        title: "Effective Inventory Control Techniques",
        description: "Access the guide to maintain optimal stock levels.",
      },
    ],
  },
  ctaProps: {
    title: "Transform Your Construction Inventory",
    description: "",
    benefits: [
      "Real-time tracking",
      "Automated stock control",
      "Cloud-based data storage",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};
