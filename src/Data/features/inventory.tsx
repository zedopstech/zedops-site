import {
  Blocks,
  Kanban,
  BookOpenText,
  Tags,
  ArrowDownNarrowWide,
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
  Box,        // New Icon
  Wrench,     // New Icon
  Truck,      // New Icon
} from "lucide-react";

export const INVENTORY_PAGE = {
  // --- HERO SECTION ---
  heroProps: {
    subtitle: "Stop Searching for Materials. Start Building.",
    description:
      "Take complete control of your site inventory. Zedops provides real-time tracking for materials, tools, and equipment, eliminating costly delays, minimizing waste, and protecting your project's bottom line.",
    buttonLabel: "Gain Control of Your Inventory",
    imageSrc: "/Solutions/Inventory/inventory_hero.avif", // Update this!
    imageAlt: "A construction manager using a tablet to scan a QR code on materials in a well-organized warehouse.",
    linkHref: "/book-a-demo",
    floatingCards: [
      {
        icon: ScanQrCode,
        title: "Item Scanned: Concrete Bags",
        subtitle: "20 units checked out to Project Alpha",
        positionClasses: "top-1/3 -left-24 hidden lg:block",
      },
      {
        icon: Wrench,
        title: "Tool Assigned: Jackhammer #042",
        subtitle: "Checked out to Foreman John D.",
        positionClasses: "top-10 -right-16 hidden lg:block",
      },
      {
        icon: CircleAlert,
        title: "Low Stock Alert",
        subtitle: "Rebar (12mm) - 15 units remaining",
        positionClasses: "bottom-1/4 -right-16 hidden lg:block",
      },
    ],
  },
  
  // --- SUB-HERO / VALUE PROPOSITION ---
  heroSectionProps: {
    subtitle: "From Warehouse To Worksite",
    title: "Total Visibility Over Your Assets",
    description:
      "Know exactly what you have, where it is, and who is using it. Our inventory module connects your warehouse, laydown yards, and active job sites into one synchronized system.",
    buttonLabel: "Request a Demo",
    buttonLink: "/book-a-demo",
  },
  
  // --- CORE FEATURES ---
  featuresSectionProps: {
    features: [
      {
        title: "Real-Time Site & Warehouse Tracking",
        description:
          "Use QR codes or barcodes on your mobile device to check materials in, check them out to projects, and track consumption as it happens.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Tool & Equipment Management",
        description:
          "Assign tools and equipment to specific projects or personnel. Track location, maintenance schedules, and availability to reduce loss and downtime.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  
  // --- BENEFITS / OUTCOMES ---
  TestimonalsSectionProps: {
    subtitle: "Why ZedOps Inventory?",
    title: "Turn Your Inventory into a Competitive Advantage",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "An illustration of a warehouse with organized shelves and tracking icons.",
    features: [
      {
        title: "Eliminate Project Delays",
        description:
          "Prevent material shortages and frantic last-minute orders with automated low-stock alerts and smart reordering.",
        icon: <Blocks size={24} />,
      },
      {
        title: "Reduce Waste & Loss",
        description:
          "Gain full visibility into material consumption and tool locations to minimize waste, prevent theft, and reduce carrying costs.",
        icon: <Kanban size={24} />,
      },
      {
        title: "Improve Financial Accuracy",
        description:
          "Connect inventory data directly to your project budgets for more accurate job costing and financial reporting.",
        icon: <BookOpenText size={24} />,
      },
    ],
  },

  // --- DETAILED FEATURE SECTIONS ---
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Material Management Made Simple",
      subtitle: "Full Lifecycle Tracking",
      description:
        "From purchase order to installation, track every piece of material. Ensure the right items are in the right place at the right time, every time.",
      features: [
        {
          icon: <Truck size={24} className="text-background" />, // Changed icon
          title: "Purchase Order & Receiving",
          description: "Log deliveries against purchase orders and automatically update stock levels with a quick scan.",
        },
        {
          icon: <Box size={24} className="text-background" />, // Changed icon
          title: "Consumption Tracking",
          description: "Track material usage against specific cost codes and project phases for granular cost analysis.",
        },
        {
          icon: <ArrowDownNarrowWide size={24} className="text-background" />,
          title: "Low-Stock Alerts",
          description: "Set custom thresholds to receive automatic notifications before you run out of critical materials.",
        },
      ],
    },
    {
      image: "/Solutions/estimation-section-1.jpg",
      imageOnRight: "true",
      title: "Tool & Equipment Control",
      subtitle: "Maximize Asset Utilization",
      description:
        "Your tools and equipment are valuable assets. Know where they are, who has them, and when they need maintenance to maximize their lifespan and productivity.",
      features: [
        {
          icon: <Radio size={24} className="text-background" />,
          title: "GPS & Location Tracking",
          description: "Assign assets to sites, vehicles, or team members to maintain a real-time location directory.",
        },
        {
          icon: <Wrench size={24} className="text-background" />, // Changed icon
          title: "Maintenance Scheduling",
          description: "Track service history and receive alerts for upcoming maintenance to prevent unexpected downtime.",
        },
        {
          icon: <Usb size={24} className="text-background" />,
          title: "Check-in / Check-out System",
          description: "Create a clear audit trail of asset custody, reducing loss and increasing accountability.",
        },
      ],
    },
  ],
  
  // --- GRID OF ALL FEATURES ---
  featureData: [
    {
      icon: <ScanBarcode className="text-background" />,
      title: "Barcode & QR Code Scanning",
      description: "Quickly update inventory levels using your mobile device's camera.",
    },
    {
      icon: <LayoutDashboard className="text-background" />,
      title: "Centralized Dashboard",
      description: "Get a complete overview of all inventory across all projects and locations.",
    },
    {
      icon: <ListCollapse className="text-background" />,
      title: "Automated Reordering",
      description: "Set reorder points to automatically trigger purchase requests.",
    },
    {
      icon: <CircleAlert className="text-background" />,
      title: "Customizable Alerts",
      description: "Receive notifications for low stock, expiring items, or overdue tool returns.",
    },
    {
      icon: <ArrowLeftRight className="text-background" />,
      title: "Supplier & Vendor Database",
      description: "Manage supplier information and procurement history in one place.",
    },
    {
      icon: <TabletSmartphone className="text-background" />,
      title: "Full Mobile Access",
      description: "Your entire inventory system, accessible from the office or the job site.",
    },
    {
      icon: <Pickaxe className="text-background" />,
      title: "Integration with PM Tools",
      description: "Sync material data with your project schedules and budgets.",
    },
    {
      icon: <Banknote className="text-background" />,
      title: "Inventory Costing",
      description: "Track the value of your inventory and allocate costs directly to projects.",
    },
    {
      icon: <Shapes className="text-background" />,
      title: "Tool & Equipment Tracking",
      description: "Manage your high-value assets, from assignment to maintenance scheduling.",
    },
    {
      icon: <Warehouse className="text-background" />,
      title: "Multi-Location Management",
      description: "Track stock across multiple warehouses, laydown yards, and active sites.",
    },
    {
      icon: <ClipboardMinus className="text-background" />,
      title: "Customizable Reports",
      description: "Generate detailed reports on consumption, costs, and inventory turnover.",
    },
    {
      icon: <GitCompare className="text-background" />,
      title: "Inventory Audits",
      description: "Simplify stocktaking and cycle counts with mobile scanning and variance reporting.",
    },
  ],

  // --- RESOURCES / GUIDES SECTION ---
  featuresData: {
    title: "Resources",
    subtitle: "Master Your Inventory Control",
    description: "Explore our expert guides for building an efficient construction inventory management system.",
    features: [
      {
        icon: <Ribbon className="text-white" />,
        title: "Tutorial: Setting Up Your Inventory",
        description: "Watch the step-by-step guide.",
      },
      {
        icon: <Loader className="text-white" />,
        title: "The Ultimate Guide to Construction Inventory",
        description: "Access the guide.",
      },
      {
        icon: <Biohazard className="text-white" />,
        title: "Best Practices for Reducing Material Waste",
        description: "Read the article.",
      },
      {
        icon: <Route className="text-white" />,
        title: "Optimizing Your Procurement Workflow",
        description: "Read our best practices.",
      },
    ],
  },
  
  // --- FINAL CALL TO ACTION ---
  ctaProps: {
    title: "Stop Losing Money on Mismanaged Inventory",
    description: "See how Zedops can give you the visibility and control needed to protect your bottom line and keep your projects running smoothly.",
    benefits: [
      "Reduce material waste",
      "Prevent project delays",
      "Maximize asset utilization",
    ],
    button1Label: "Request a Demo",
    button1Link: "/book-a-demo",
    button2Label: "Talk to Sales",
    button2Link: "/contact-sales",
  },
};