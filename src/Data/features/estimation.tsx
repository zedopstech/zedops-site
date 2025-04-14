import {
  CircleArrowOutDownLeft,
  Volume,
  Sparkles,
  LucideMousePointerClick,
  LucideCode,
  LucideEye,
  LucideLink2,
  Hammer,
  KeyRound,
  TrendingUpDown,
  CircleDollarSign,
  CloudDownload,
  User,
  ChartNoAxesGantt,
  MonitorCog,
  BookCopy,
  Brain,
  BrickWall,
  CloudLightning,
  Wrench,
  Boxes,
  Shuffle,
  FileText,
  Container,
  ChartSpline,
  Dna,
  Combine,
  CarTaxiFront,
  MonitorSmartphone,
  GraduationCap,
  Filter,
  HandCoins,
  Pickaxe,
  ListCollapse,
  Timer,
} from "lucide-react";

export const ESTIMATION_PAGE = {
  heroProps: {
    subtitle: "Estimation",
    description:
      "Win more bids and boost your bottom line with our construction estimating software. Generate precise and reliable estimates in a fraction of the time, minimizing errors and maximizing profitability.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/estimation-hero.jpg",
    imageAlt:
      "Construction estimator using software with detailed cost breakdown",
    linkHref: "/estimation-demo",
  },
  heroSectionProps: {
    subtitle: "ACCURATE COST PREDICTIONS",
    title: "Accurate Project Estimations",
    description:
      "Generate detailed, reliable cost estimates to prevent overruns and keep your projects on budget and on schedule.",
    buttonLabel: "Start Estimating",
    buttonLink: "/start-estimating",
  },
  featuresSectionProps: {
    features: [
      {
        title: "Drag-and-Drop Estimation",
        description:
          "Easily create detailed project estimates with our intuitive, user-friendly interface no technical expertise required.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Advanced Cost Breakdown",
        description:
          "Break down materials, labor, and equipment costs with granular control, ensuring precise budget planning.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "BUDGET WITH CONFIDENCE",
    title: "Control Your Project Costs",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing cost control in construction projects",
    features: [
      {
        title: "Real-Time Estimates",
        description:
          "Generate precise cost estimates instantly and adjust them dynamically as project conditions change.",
        icon: <CircleArrowOutDownLeft size={24} />,
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Use historical data and predictive analytics to enhance your cost forecasting and planning strategies.",
        icon: <Volume size={24} />,
      },
      {
        title: "Seamless Budget Adjustments",
        description:
          "Adapt to changing project scopes with flexible, automated budget recalculations and real-time updates.",
        icon: <Sparkles size={24} />,
      },
    ],
  },
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",

      title: "Smart Cost",
      subtitle: "Detailed Budgeting",
      description:
        "Organize your estimates with structured categories for materials, labor, and overhead to improve cost tracking.",
      features: [
        {
          icon: <Hammer size={24} className="text-background" />,
          title: "Categorize Costs Effectively",
          description:
            "Segment costs based on trade, project phase, or material type for better financial insights.",
        },
        {
          icon: <KeyRound size={24} className="text-background" />,
          title: "Leverage Key Cost Data",
          description:
            "Utilize industry benchmarks and historical data to improve estimate accuracy.",
        },
        {
          icon: <TrendingUpDown size={24} className="text-background" />,
          title: "Dynamic Estimate Adjustments",
          description:
            "Modify estimates in real time as project variables change.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",

      imageOnRight: "true",
      title: "Estimation Software",
      subtitle: "Real-Time Calculations",
      description:
        "Enhance accuracy with automated calculations, live pricing updates, and AI-driven cost projections.",
      features: [
        {
          icon: <CircleDollarSign size={24} className="text-background" />,
          title: "Live Market Pricing",
          description:
            "Stay updated with the latest material and labor cost fluctuations.",
        },
        {
          icon: <CloudDownload size={24} className="text-background" />,
          title: "Cloud-Based Collaboration",
          description:
            "Enable real-time collaboration across teams for seamless project estimation.",
        },
        {
          icon: <User size={24} className="text-background" />,
          title: "Integrate with Accounting Systems",
          description:
            "Sync estimates with accounting and project management software for smoother workflows.",
        },
      ],
    },
  ],
  featureData: [
    {
      icon: <LucideMousePointerClick className="text-background" />,
      title: "Drag-and-Drop Estimation",
      description: "Quickly build project estimates in a familiar interface.",
    },
    {
      icon: <LucideCode className="text-background" />,
      title: "Custom Estimation Rules",
      description: "Define cost parameters to fit your specific project needs.",
    },
    {
      icon: <LucideEye className="text-background" />,
      title: "Real-Time Cost Analysis",
      description: "Monitor project costs and make data-driven adjustments.",
    },
    {
      icon: <LucideLink2 className="text-background" />,
      title: "Pre-Designed Templates",
      description:
        "Use pre-built templates for faster, more consistent estimates.",
    },
    {
      icon: <ChartNoAxesGantt className="text-background" />,
      title: "Multi-Project Management",
      description:
        "Handle multiple project estimates within a single dashboard.",
    },
    {
      icon: <MonitorCog className="text-background" />,
      title: "Accounting System ",
      description: "Easily sync estimates with your financial reporting tools.",
    },
    {
      icon: <BookCopy className="text-background" />,
      title: "Automated Report",
      description: "Create professional estimate reports instantly.",
    },
    {
      icon: <Brain className="text-background" />,
      title: "AI-Powered Cost Forecasting",
      description:
        "Utilize predictive analytics to estimate future project costs.",
    },
    {
      icon: <BrickWall className="text-background" />,
      title: "Automated Quantity Takeoff",
      description:
        "Instantly calculate material quantities from blueprints and designs.",
    },
    {
      icon: <CloudLightning className="text-background" />,
      title: "Cloud-Based Access",
      description:
        "Work on your estimates from anywhere with secure cloud storage.",
    },
    {
      icon: <Wrench className="text-background" />,
      title: "Cost Comparison Tools",
      description:
        "Compare vendor pricing and material costs for the best value.",
    },
    {
      icon: <Boxes className="text-background" />,
      title: "Unit Cost Estimation",
      description:
        "Break down project estimates by unit pricing for better accuracy.",
    },
    {
      icon: <Shuffle className="text-background" />,
      title: "Change Order Management",
      description:
        "Easily adjust estimates based on project scope changes in real time.",
    },
    {
      icon: <FileText className="text-background" />,
      title: "Historical Data Insights",
      description: "Use past project data to refine future cost estimations.",
    },
    {
      icon: <Container className="text-background" />,
      title: "Vendor & Supplier ",
      description:
        "Connect directly with suppliers for real-time pricing and availability.",
    },
    {
      icon: <ChartSpline className="text-background" />,
      title: "Cost Breakdown Reports",
      description:
        "Generate detailed reports to analyze costs at every project phase.",
    },
    {
      icon: <Dna className="text-background" />,
      title: "Bid Proposal Generation",
      description:
        "Create professional bid proposals based on your estimates in minutes.",
    },
    {
      icon: <Combine className="text-background" />,
      title: "Multi-User Collaboration",
      description:
        "Allow teams to work together on estimates with role-based access.",
    },
    {
      icon: <CarTaxiFront className="text-background" />,
      title: "Tax & Compliance",
      description:
        "Automatically factor in taxes, fees, and regulations for accurate pricing.",
    },
    {
      icon: <MonitorSmartphone className="text-background" />,
      title: "Mobile-Friendly Estimation",
      description:
        "Create and update project estimates directly from your mobile device.",
    },
  ],
  featuresData: {
    title: "Resources",
    subtitle: "Master Estimation Strategies",
    description:
      "Explore best practices and comprehensive guides for creating accurate and efficient construction project estimates.",
    features: [
      {
        title: "Want to master estimation?",
        description: "Join our expert-led workshop.",
        icon: <GraduationCap className="text-white" />,
      },
      {
        icon: <Filter className="text-white" />,
        title: "Fundamentals of Cost Estimation",
        description: "Access the complete guide.",
      },
      {
        icon: <HandCoins className="text-white" />,
        title: "Advanced Cost Analysis",
        description: "Learn how to refine your project estimates.",
      },
      {
        icon: <Pickaxe className="text-white" />,
        title: "Optimizing Material & Labor Estimations",
        description: "Improve your cost efficiency strategies.",
      },
      {
        icon: <ListCollapse className="text-white" />,
        title: "Best Practices for Accurate Costing",
        description: "Enhance your budgeting precision.",
      },
      {
        icon: <Timer className="text-white" />,
        title: "Time-Efficient Estimation Workflows",
        description: "Speed up your estimation process.",
      },
    ],
  },
  ctaProps: {
    title: "Start Estimating with Confidence",
    description: "",
    benefits: [
      "14-day free trial",
      "No credit card required",
      "Cancel anytime",
    ],
    button1Label: "Book a Demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a Trial",
    button2Link: "/start-trial",
  },
};
