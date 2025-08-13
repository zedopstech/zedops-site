import {
  CircleArrowOutDownLeft,
  Sparkles,
  Hammer,
  KeyRound,
  TrendingUpDown,
  CircleDollarSign,
  User,
  LucideMousePointerClick,
  LucideCode,
  LucideEye,
  LucideLink2,
  ChartNoAxesGantt,
  MonitorCog,
  BookCopy,
  Brain,
  BrickWall,
  CloudLightning,
  Wrench,
  Shuffle,
  GraduationCap,
  Filter,
  HandCoins,
  Pickaxe,
  Calculator,
  Database,
  Target,      // New Icon for Takeoff
  CheckCircle, // New Icon for Bid Won
} from "lucide-react";

export const ESTIMATION_PAGE = {
  // --- HERO SECTION ---
  heroProps: {
    subtitle: "Estimate with Speed and Precision. Win More Profitable Bids.",
    description:
      "Transform your bidding process from a manual chore into a competitive advantage. Zedops's estimation software helps you create fast, accurate, and professional bids that protect your margins and impress your clients.",
    buttonLabel: "Start Building Your Bid",
    imageSrc: "/Solutions/Estimation/estimation_hero.jpg",
    imageAlt:
      "An estimator confidently using Zedops software on a laptop, with construction blueprints in the background.",
    linkHref: "/book-a-demo",
    
    // --- ADDED FLOATING CARDS FOR THIS PAGE ---
    floatingCards: [
      {
        icon: Target,
        title: "Digital Takeoff Complete",
        subtitle: "1,250 sq meters calculated",
        positionClasses: "top-1/3 -left-24 hidden lg:block",
      },
      {
        icon: Calculator,
        title: "Total Bid Price",
        subtitle: "$1,245,500.00",
        positionClasses: "top-10 -right-16 hidden lg:block",
      },
      {
        icon: CheckCircle,
        title: "Status: Bid Won",
        subtitle: "Project Alpha",
        positionClasses: "bottom-1/4 -right-16 hidden lg:block",
      },
    ],
  },

  // --- SUB-HERO / VALUE PROPOSITION ---
  heroSectionProps: {
    subtitle: "FROM GUESSWORK TO GUARANTEE",
    title: "Build Bids You Can Trust",
    description:
      "Our powerful estimation tools eliminate the costly errors of manual spreadsheets. Leverage digital takeoffs, a centralized cost database, and intelligent analytics to ensure every estimate is both competitive and profitable.",
    buttonLabel: "Request a Demo",
    buttonLink: "/book-a-demo",
  },

  // --- CORE FEATURES ---
  featuresSectionProps: {
    features: [
      {
        title: "Digital Takeoffs from Plans",
        description:
          "Upload your PDF plans and perform takeoffs directly on screen. Measure counts, lengths, and areas in minutes, not hours, with complete accuracy.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Centralized Cost Database",
        description:
          "Build and maintain a live database of your material, labor, and equipment costs. Ensure consistency across all bids and update prices in one place.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },

  // --- BENEFITS / OUTCOMES ---
  TestimonalsSectionProps: {
    subtitle: "WHY ZEDOPS ESTIMATION?",
    title: "The Smarter Way to Price Your Work",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt:
      "An illustration of a calculator and a rising chart, symbolizing profitability.",
    features: [
      {
        title: "Increase Bid-Win Rate",
        description:
          "Produce more accurate and professional bids faster than your competition, allowing you to bid on more projects and win more work.",
        icon: <CircleArrowOutDownLeft size={24} />,
      },
      {
        title: "Protect Your Profit Margins",
        description:
          "Eliminate costly miscalculations and overlooked expenses. Ensure every project you win is priced for profitability from day one.",
        icon: <Calculator size={24} />,
      },
      {
        title: "Build Client Trust",
        description:
          "Present clients with detailed, transparent, and professional bid proposals that build confidence and justify your costs.",
        icon: <Sparkles size={24} />,
      },
    ],
  },

  // --- DETAILED FEATURE SECTIONS ---
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Granular Cost Control",
      subtitle: "Detailed Line-Item Assembly",
      description:
        "Go beyond simple line items. Build detailed cost assemblies that group together all the material, labor, and equipment required for a specific task, ensuring nothing is missed.",
      features: [
        {
          icon: <Hammer size={24} className="text-background" />,
          title: "Build Custom Assemblies",
          description:
            "Create reusable assemblies for common tasks (e.g., a square meter of drywall) for rapid estimating.",
        },
        {
          icon: <KeyRound size={24} className="text-background" />,
          title: "Link to Your Cost Database",
          description:
            "Automatically pull the latest pricing for materials and labor rates directly into your assemblies.",
        },
        {
          icon: <TrendingUpDown size={24} className="text-background" />,
          title: "Factor in Margins & Overheads",
          description:
            "Apply markups, taxes, contingencies, and company overheads with precision across the entire bid.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Data-Driven Insights",
      subtitle: "Learn from Every Project",
      description:
        "Your past projects are your most valuable asset. Zedops turns your historical bid data into powerful insights, helping you refine your pricing and improve accuracy over time.",
      features: [
        {
          icon: <CircleDollarSign size={24} className="text-background" />,
          title: "Bid vs. Actuals Analysis",
          description:
            "Compare your original estimate against actual project costs to understand where you were accurate and where you can improve.",
        },
        {
          icon: <Database size={24} className="text-background" />,
          title: "Historical Cost Library",
          description:
            "Automatically build a library of your real-world costs to create more accurate benchmarks for future bids.",
        },
        {
          icon: <User size={24} className="text-background" />,
          title: "Seamless Integration",
          description:
            "Connect your estimates to project management and accounting to close the loop from bid to budget.",
        },
      ],
    },
  ],

  // --- GRID OF ALL FEATURES ---
  featureData: [
    {
      icon: <LucideMousePointerClick className="text-background" />,
      title: "On-Screen Takeoff",
      description:
        "Measure directly from your digital plans—no printing required.",
    },
    {
      icon: <LucideCode className="text-background" />,
      title: "Customizable Cost Catalogs",
      description:
        "Build a database of your items, labor rates, and equipment.",
    },
    {
      icon: <LucideEye className="text-background" />,
      title: "Real-Time Cost Totals",
      description:
        "See your total bid price update instantly as you build your estimate.",
    },
    {
      icon: <LucideLink2 className="text-background" />,
      title: "Reusable Estimate Templates",
      description:
        "Use pre-built templates for common project types to ensure consistency.",
    },
    {
      icon: <ChartNoAxesGantt className="text-background" />,
      title: "Bid Management Dashboard",
      description:
        "Track the status of all your bids—submitted, won, lost—in one place.",
    },
    {
      icon: <MonitorCog className="text-background" />,
      title: "Accounting Integration",
      description:
        "Push winning bids into your accounting software to create project budgets.",
    },
    {
      icon: <BookCopy className="text-background" />,
      title: "Professional Proposal Generation",
      description:
        "Create polished, client-ready bid proposals with customizable branding.",
    },
    {
      icon: <Brain className="text-background" />,
      title: "AI-Powered Cost Suggestions",
      description:
        "Get smart suggestions based on historical data for similar project types.",
    },
    {
      icon: <BrickWall className="text-background" />,
      title: "Material Quantity Calculation",
      description:
        "Automatically calculate required material quantities from your takeoffs.",
    },
    {
      icon: <CloudLightning className="text-background" />,
      title: "Cloud-Based Platform",
      description:
        "Access and work on your estimates from anywhere, on any device.",
    },
    {
      icon: <Wrench className="text-background" />,
      title: "Subcontractor Quoting",
      description:
        "Send out bid packages to subcontractors and compare their quotes side-by-side.",
    },
    {
      icon: <Shuffle className="text-background" />,
      title: "Change Order Management",
      description:
        "Quickly price and document change orders to protect your scope and profit.",
    },
  ],

  // --- RESOURCES / GUIDES SECTION ---
  featuresData: {
    title: "Resources",
    subtitle: "Master Your Bidding Strategy",
    description:
      "Explore our expert guides to create more accurate and competitive construction estimates.",
    features: [
      {
        icon: <GraduationCap className="text-white" />,
        title: "Tutorial: Building Your First Estimate",
        description: "Watch our step-by-step guide.",
      },
      {
        icon: <Filter className="text-white" />,
        title: "The Complete Guide to Digital Takeoffs",
        description: "Access the guide.",
      },
      {
        icon: <HandCoins className="text-white" />,
        title: "How to Build a Powerful Cost Database",
        description: "Read our best practices.",
      },
      {
        icon: <Pickaxe className="text-white" />,
        title: "5 Common Estimating Mistakes and How to Avoid Them",
        description: "Read the article.",
      },
    ],
  },

  // --- FINAL CALL TO ACTION ---
  ctaProps: {
    title: "Start Building More Profitable Bids Today",
    description:
      "See for yourself how Zedops can speed up your estimating process and increase your bid-win rate. ",
    benefits: ["Win more bids", "Protect your profit", "Build client trust"],
    button1Label: "Request a Demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a Free Trial",
    button2Link: "/start-trial",
  },
};