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
  ChevronsUp,
  ShieldBan,
  UserPen,
  LaptopMinimalCheck,
  BadgeCheck,
  Asterisk,
  ListChecks,
  MapPinCheck,
  ArrowBigRight,
  Scan,
  Navigation2,
  CircleFadingPlus,
  BellRing,
  Star,
  Radical,
  BookDown,
  Gavel,
  ContactRound,
  TicketCheck,
  Package,
  FileStack,
  Equal,
  ScanSearch,
  UserRound,
  PackageSearch,
  BetweenVerticalStart,
  StepBack,
  Wifi,
  TableOfContents,
  Construction,
  Power,
  Ellipsis,
  Sword,
  Logs,
  Box,
  HardDriveDownload,
  CloudCog,
  Ratio,
  ReceiptText,
  ZapOff,
  FilePlus,
  ShieldHalf,
  SquareCode,
  Cable,
  SquareActivity,
  TabletSmartphone,
  Sun,
  PlaneTakeoff,
  MapPinCheckInside,
  ArrowDownUp,
  SquareDashedMousePointer,
  Drill,
  Braces,
  Megaphone,
  SearchCheck,
  NotebookPen,
  FileBox,
  Handshake,
  ShieldEllipsis,
  FolderUp,
  SpellCheck,
  Layers2,
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
  CloudUpload,
  ShieldOff,
  BaggageClaim,
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
  Kanban,
  Blocks,
  BookOpenText,
  DollarSign,
  ClipboardList,
  Truck,
  FileCheck,
  BarChartBig,
  ShoppingCart,
  FileSpreadsheet,
  CheckSquare,
  Users,
  Smartphone,
  Cloud,
  BadgeDollarSign,
  BarChart4,
  Layers,
  FileSignature,
  PackageCheck,
  Recycle,
  BarChart3,
  FolderCog,
  Presentation,
  BarChart2,
  AlertTriangle,
  Clock,
  Search,
  Monitor,
  CalendarClock,
  TrendingUp,
  Target,
  FileLineChart,
  RefreshCcw,
  Database,
  PieChart,
  UploadCloud,
  Sliders,
  BatteryCharging,
  UserCheck,
  RadarIcon,
  SearchCheckIcon,
  FolderClock,
  Radar,
  Activity,
  Eye,
  ClockAlert,
  Bell,
  MapPin,
  BarChart,
  Zap,
  AlertCircle,
  AlarmCheck,
  ShieldAlert,
  ShieldCheck,
  TrendingDown,
  ClipboardCheck,
  LineChart,
  Calculator,
  Receipt,
  FileBarChart,
  CreditCard,
  Calendar,
  CheckCheck,
  Thermometer,
  Settings,
  Briefcase,
  UserCheck2,
  HardHat,
  CheckCheckIcon,
  MessagesSquare,
  Mail,
  PanelsTopLeft,
  Lock,
  Camera,
  Key,
  BellRingIcon,
  PlayCircle,
  BookOpen,
  MessageCircleQuestion,
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
export const PREQUALIFICATION_PAGE = {
  heroProps: {
    subtitle: "Prequalification",
    description:
      "Ensure project success starts with qualified contractors.  Our platform streamlines the entire prequalification process, saving you time, reducing risk, and giving you confidence in your team.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/estimation-hero.jpg",
    imageAlt: "Construction workers reviewing prequalification forms",
    linkHref: "/book-a-demo",
  },
  heroSectionProps: {
    subtitle: "BUILD WITH CONFIDENCE",
    title: "Prequalify with ease",
    description:
      "Simplify contractor prequalification by using an efficient, reliable, and automated approach to selecting the best-fit partners for your projects.",
    buttonLabel: "Start Prequalifying",
    buttonLink: "/start-prequalifying",
  },
  featuresSectionProps: {
    features: [
      {
        title: "Automated Prequalification",
        description:
          "Effortlessly collect and evaluate contractor data through automated prequalification forms tailored to your project's needs.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Risk Assessment Tools",
        description:
          "Leverage built-in risk assessment tools to evaluate contractors' financial health, compliance, and past project performance.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "PREQUALIFY WITH CONFIDENCE",
    title: "Trust through Prequalification",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing contractor evaluations",
    features: [
      {
        title: "Faster Contractor Selection",
        description:
          "Prequalify contractors more quickly, reducing delays and ensuring you’re always on track to start your projects.",
        icon: <ChevronsUp size={24} />,
      },
      {
        title: "Minimize Risk",
        description:
          "By using data-driven prequalification, you’ll minimize the risks associated with hiring unqualified contractors.",
        icon: <ShieldBan size={24} />,
      },
      {
        title: "Maximize Efficiency",
        description:
          "Prequalify contractors effortlessly, freeing up more time to focus on project management and execution.",
        icon: <Sparkles size={24} />,
      },
    ],
  },
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg", // Path to your left-side image
      title: "Contractor Profiles",
      subtitle: "Detailed Information",
      description:
        "Gain insight into the qualifications, experience, and past performance of contractors, ensuring you make informed decisions.",
      features: [
        {
          icon: <UserPen size={24} className="text-background" />,
          title: "Contractor Profile Management",
          description:
            "Manage detailed profiles of each contractor, including certifications, insurance, and other essential data.",
        },
        {
          icon: <LaptopMinimalCheck size={24} className="text-background" />,
          title: "Review Past Project Success",
          description:
            "Analyze the history of completed projects to assess the contractor's ability to handle similar work.",
        },
        {
          icon: <BadgeCheck size={24} className="text-background" />,
          title: "Financial Stability Checks",
          description:
            "Conduct financial evaluations to ensure contractors have the resources to complete the project successfully.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg", // Path to your left-side image
      imageOnRight: "true",
      title: "Contractor Assessment",
      subtitle: "Comprehensive Evaluation",
      description:
        "Use comprehensive evaluation tools to analyze contractor suitability based on your specific project requirements.",
      features: [
        {
          icon: <Asterisk size={24} className="text-background" />,
          title: "Risk Assessments",
          description:
            "Identify and mitigate potential risks with advanced risk assessment tools tailored to construction projects.",
        },
        {
          icon: <ListChecks size={24} className="text-background" />,
          title: "Compliance Checks",
          description:
            "Ensure all contractors meet necessary regulatory and industry compliance standards before selection.",
        },
        {
          icon: <MapPinCheck size={24} className="text-background" />,
          title: "Qualification Tracking",
          description:
            "Keep track of contractor qualifications over time to ensure they remain eligible for future projects.",
        },
      ],
    },
  ],
  featureData: [
    {
      icon: <ArrowBigRight className="text-background" />,
      title: "Easy Form Management",
      description:
        "Simplify contractor qualification forms with an intuitive interface",
    },
    {
      icon: <Scan className="text-background" />,
      title: "Customizable Prequalification",
      description:
        "Create tailored prequalification forms specific to your projects",
    },
    {
      icon: <MonitorSmartphone className="text-background" />,
      title: "Real-Time Monitoring",
      description: "Monitor the status of contractor applications in real time",
    },
    {
      icon: <Navigation2 className="text-background" />,
      title: "Prequalification Tracking",
      description: "Track contractor prequalification status and history",
    },
    {
      icon: <CircleFadingPlus className="text-background" />,
      title: "Instant Contractor Access",
      description:
        "Quickly access and evaluate contractor profiles without delays",
    },
    {
      icon: <BellRing className="text-background" />,
      title: "Automated Notifications",
      description:
        "Receive automated updates when contractors complete or update their prequalification forms",
    },
    {
      icon: <Star className="text-background" />,
      title: "Contractor Rating System",
      description:
        "Rate contractors based on their performance to ensure the best match for future projects",
    },
    {
      icon: <Radical className="text-background" />,
      title: "Historical Performance",
      description:
        "Review contractors’ past project performances to assess future project success",
    },
    {
      icon: <BookDown className="text-background" />,
      title: "Prequalification Reporting",
      description:
        "Generate detailed reports on contractor qualifications, performance, and risk assessments",
    },
    {
      icon: <Gavel className="text-background" />,
      title: "Risk Management Tools",
      description:
        "Evaluate contractors using built-in risk management tools to minimize project risks",
    },
    {
      icon: <ContactRound className="text-background" />,
      title: "Detailed Contractor",
      description:
        "Keep all essential contractor documentation organized, from certifications to financial reports",
    },
    {
      icon: <TicketCheck className="text-background" />,
      title: "Compliance Verification",
      description:
        "Ensure that contractors meet regulatory and compliance standards for safety, insurance, and bonding",
    },
    {
      icon: <Package className="text-background" />,
      title: "Seamless Integration",
      description:
        "Easily integrate prequalification data into your existing project management systems",
    },
    {
      icon: <FileStack className="text-background" />,
      title: "Multi-Project Prequalification",
      description:
        "Handle prequalification for multiple projects simultaneously with our scalable solution",
    },
    {
      icon: <Equal className="text-background" />,
      title: "Instant Contract Matching",
      description:
        "Match contractors to projects based on their qualifications, experience, and past project performance",
    },
    {
      icon: <ScanSearch className="text-background" />,
      title: "Customizable Fields",
      description:
        "Design your prequalification forms with fields that meet the specific requirements of each project",
    },
    {
      icon: <UserRound className="text-background" />,
      title: "User-Friendly Dashboard",
      description:
        "Manage your prequalification process efficiently with a user-friendly dashboard that offers a clear overview",
    },
    {
      icon: <PackageSearch className="text-background" />,
      title: "Collaborative Review Process",
      description:
        "Enable team members to collaborate on contractor evaluations and share feedback within the platform",
    },
    {
      icon: <FileText className="text-background" />,
      title: "Automated Document",
      description:
        "Automatically verify submitted contractor documents for authenticity and compliance",
    },
    {
      icon: <BetweenVerticalStart className="text-background" />,
      title: "Detailed Contractor Insights",
      description:
        "Gain deeper insights into contractor capabilities and history with in-depth contractor profiles",
    },
  ],
  featuresData: {
    title: "Resources",
    subtitle: "Prequalification Features",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors",
    features: [
      {
        title: "Want to streamline your contractor evaluation?",
        description: "Watch the tutorial",
        icon: <StepBack className="text-white" />,
      },
      {
        icon: <Wifi className="text-white" />,
        title: "Best practices for contractor prequalification",
        description: "Access the guide",
      },
      {
        icon: <TableOfContents className="text-white" />,
        title: "How to evaluate contractor financial stability",
        description: "Access the guide",
      },
      {
        icon: <Construction className="text-white" />,
        title: "Ensuring compliance in construction projects",
        description: "Access the guide",
      },
      {
        icon: <Power className="text-white" />,
        title: "Streamlining contractor onboarding",
        description: "Access the guide",
      },
      {
        icon: <Ellipsis className="text-white" />,
        title: "Optimizing contractor evaluation processes",
        description: "Access the guide",
      },
    ],
  },
  ctaProps: {
    title: "Get started with contractor prequalification",
    description: "",
    benefits: [
      "14-day free trial",
      "No credit card required",
      "Cancel anytime",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};
export const BIM_PAGE = {
  heroProps: {
    subtitle: "BIM",
    description:
      "Revolutionize your construction workflow with BIM. From enhanced visualization to streamlined collaboration, build smarter, faster, and with greater accuracy.",
    buttonLabel: "Get started",
    imageSrc: "/Solutions/bim-hero.jpg", //Update this!
    imageAlt: "Interactive BIM model on a large display",
    linkHref: "/bim-solutions",
  },
  heroSectionProps: {
    subtitle: "REVOLUTIONIZE YOUR PROJECTS",
    title: "BIM that empowers your team",
    description:
      "Power of Building Information Modeling (BIM) to enhance collaboration, streamline workflows, and bring innovative solutions.",
    buttonLabel: "Start your journey",
    buttonLink: "/start-bim",
  },
  featuresSectionProps: {
    features: [
      {
        title: "Collaborative platform",
        description:
          "Ensure all project stakeholders, from architects to contractors, stay aligned with a centralized BIM platform that facilitates real-time collaboration.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "3D modeling and visualization",
        description:
          "Create detailed 3D models of your projects, visualize designs, and detect potential issues before construction begins.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "TEAMWORK AND ACCURACY",
    title: "Efficiency with BIM at the core",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Professionals using BIM for a collaborative project",
    features: [
      {
        title: "Accurate modeling for fewer",
        description:
          "Minimize costly mistakes and rework with BIM's ability to provide precise, detailed models of your construction projects.",
        icon: <SpellCheck size={24} />,
      },
      {
        title: "Streamlined workflows",
        description:
          "Boost efficiency and reduce project timelines by automating repetitive tasks and leveraging BIM to simplify project management.",
        icon: <Layers2 size={24} />,
      },
      {
        title: "Enhanced project visualization",
        description:
          "Improve project understanding and decision-making with detailed 3D models and virtual walkthroughs that bring your design to life.",
        icon: <Sparkles size={24} />,
      },
    ],
  },
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg", // Path to your left-side image
      title: "Seamless collaboration",
      subtitle: "Bringing teams together",
      description:
        "Collaborate effectively across all stages of construction with tools that foster communication and teamwork, making every project a success.",
      features: [
        {
          icon: <TrendingUpDown size={24} className="text-background" />,
          title: "Real-time collaboration",
          description:
            "Work together on the same model, at the same time, from any location.",
        },
        {
          icon: <Box size={24} className="text-background" />,
          title: "3D modeling",
          description:
            "Visualize every aspect of your design with powerful, interactive 3D models.",
        },
        {
          icon: <Drill size={24} className="text-background" />,
          title: "BIM integration",
          description:
            "Integrate BIM with other software for smooth project execution.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg", // Path to your right-side image
      imageOnRight: "true",
      title: "Accurate data management",
      subtitle: "Data at your fingertips",
      description:
        "Ensure the accuracy of all project data with BIM’s database, allowing you to track changes and keep every aspect of your construction project organized.",
      features: [
        {
          icon: <Braces size={24} className="text-background" />,
          title: "Track project data",
          description:
            "Monitor and update all aspects of your project data in real time.",
        },
        {
          icon: <Megaphone size={24} className="text-background" />,
          title: "Advanced reporting",
          description:
            "Generate detailed reports that provide insight into project progress, costs, and more.",
        },
        {
          icon: <SearchCheck size={24} className="text-background" />,
          title: "Accurate project forecasting",
          description:
            "Make informed decisions with reliable, up-to-date data.",
        },
      ],
    },
  ],
  featureData: [
    {
      icon: <Sword className="text-background" />,
      title: "BIM collaboration tools",
      description: "Streamline teamwork with powerful BIM tools",
    },
    {
      icon: <Logs className="text-background" />,
      title: "Customization options",
      description: "Customize BIM templates to fit your project needs",
    },
    {
      icon: <Box className="text-background" />,
      title: "3D visualization",
      description: "Experience your project in realistic 3D models",
    },
    {
      icon: <HardDriveDownload className="text-background" />,
      title: "Data integration",
      description: "Integrate BIM with your existing project management tools",
    },
    {
      icon: <CloudCog className="text-background" />,
      title: "Cloud-based BIM",
      description:
        "Access and collaborate on BIM models from anywhere, anytime.",
    },
    {
      icon: <Ratio className="text-background" />,
      title: "4D Scheduling",
      description:
        "Link time-related data with 3D models for efficient project planning.",
    },
    {
      icon: <ReceiptText className="text-background" />,
      title: "5D Cost Estimation",
      description:
        "Integrate cost data into BIM to improve budgeting and forecasting.",
    },
    {
      icon: <ZapOff className="text-background" />,
      title: "Clash Detection",
      description:
        "Identify and resolve design conflicts before construction begins.",
    },
    {
      icon: <FilePlus className="text-background" />,
      title: "Automated Documentation",
      description:
        "Generate detailed project documentation directly from BIM models.",
    },
    {
      icon: <ShieldHalf className="text-background" />,
      title: "BIM for Facility Management",
      description:
        "Leverage BIM data for efficient building maintenance post-construction.",
    },
    {
      icon: <SquareCode className="text-background" />,
      title: "GIS Integration",
      description:
        "Combine BIM with Geographic Information Systems for site analysis.",
    },
    {
      icon: <ChartSpline className="text-background" />,
      title: "Sustainability Analysis",
      description:
        "Evaluate energy performance and environmental impact using BIM.",
    },
    {
      icon: <Cable className="text-background" />,
      title: "Virtual Reality (VR)",
      description:
        "Experience BIM models in immersive virtual reality environments.",
    },
    {
      icon: <SquareActivity className="text-background" />,
      title: "Augmented Reality (AR)",
      description:
        "Overlay BIM data onto physical construction sites using AR technology.",
    },
    {
      icon: <TabletSmartphone className="text-background" />,
      title: "Mobile Access",
      description:
        "View and edit BIM models on mobile devices for on-site collaboration.",
    },
    {
      icon: <Sun className="text-background" />,
      title: "AI-driven BIM Insights",
      description:
        "Utilize AI for predictive analytics and smarter decision-making in BIM.",
    },
    {
      icon: <PlaneTakeoff className="text-background" />,
      title: "Automated Quantity Takeoff",
      description:
        "Extract material quantities directly from BIM models for accurate estimation.",
    },
    {
      icon: <MapPinCheckInside className="text-background" />,
      title: "Historical Data Tracking",
      description:
        "Track changes and maintain a detailed project history within BIM.",
    },
    {
      icon: <ArrowDownUp className="text-background" />,
      title: "Interoperability",
      description:
        "Seamlessly integrate BIM data with various construction software tools.",
    },
    {
      icon: <SquareDashedMousePointer className="text-background" />,
      title: "Custom BIM Templates",
      description:
        "Create and use pre-defined BIM templates tailored for specific projects.",
    },
  ],
  featuresData: {
    title: "Resources",
    subtitle: "Master BIM Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        title: "Want to learn BIM best practices?",
        description: "Watch the BIM tutorial",
        icon: <NotebookPen className="text-white" />,
      },
      {
        icon: <GraduationCap className="text-white" />,
        title: "Master BIM for construction management",
        description: "Access the guide",
      },
      {
        icon: <FileBox className="text-white" />,
        title: "Explore BIM modeling techniques",
        description: "Access the guide",
      },
      {
        icon: <Handshake className="text-white" />,
        title: "Master BIM coordination",
        description: "Learn best practices for seamless project collaboration.",
      },
      {
        icon: <ShieldEllipsis className="text-white" />,
        title: "Optimize clash detection",
        description:
          "Enhance project accuracy with advanced clash resolution strategies.",
      },
      {
        icon: <FolderUp className="text-white" />,
        title: "Implement BIM for facility management",
        description:
          "Leverage BIM data to improve long-term building maintenance and operations.",
      },
    ],
  },
  ctaProps: {
    title: "Optimize your projects with BIM",
    description: "",
    benefits: [
      "14-day free trial",
      "No credit card required",
      "Cancel anytime",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};
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
export const PREDICTIVEANLYTICS_PAGE = {
  heroProps: {
    subtitle: "Predictive Analytics",
    description:
      "Stop project overruns and maximize ROI with AI-powered predictive analytics. Forecast potential delays, optimize resource allocation, and proactively mitigate risks for more profitable projects.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/estimation-hero.jpg", // MUST UPDATE
    imageAlt:
      "Construction project timeline with AI-predicted risks highlighted",
    linkHref: "/predictive-analytics-demo",
  },
  heroSectionProps: {
    subtitle: "HARNESS THE POWER OF DATA",
    title: "Analyze, Predict, and Optimize",
    description:
      "Utilize advanced analytics to improve project planning, reduce delays, and enhance efficiency with data-driven decisions.",
    buttonLabel: "Explore Features",
    buttonLink: "/predictive-analytics-features",
  },
  featuresSectionProps: {
    features: [
      {
        title: "AI-Driven Demand Forecasting",
        description:
          "Predict material and labor requirements with AI-powered analytics to prevent shortages and reduce waste.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Real-Time Risk Assessment",
        description:
          "Identify potential project risks using predictive models, enabling proactive decision-making and risk mitigation.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "SMART PREDICTIVE ANALYTICS",
    title: "Enhance Your Project Forecasting",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing predictive analytics features",
    features: [
      {
        title: "Demand Forecasting",
        description:
          "Leverage AI to predict material and resource needs, ensuring projects stay on track and within budget.",
        icon: <BarChart2 size={24} />,
      },
      {
        title: "Risk Prediction & Mitigation",
        description:
          "Identify and mitigate potential risks early on with real-time data analysis and predictive models.",
        icon: <AlertTriangle size={24} />,
      },
      {
        title: "Project Timeline Optimization",
        description:
          "Optimize project schedules by predicting delays, resource shortages, and task completion times.",
        icon: <Clock size={24} />,
      },
    ],
  },
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Enhanced Project Forecasting",
      subtitle: "Data-Driven & Insightful",
      description:
        "Leverage predictive analytics to forecast project demands, optimize resource allocation, and minimize risks.",
      features: [
        {
          icon: <TrendingUp size={24} className="text-background" />,
          title: "AI-Powered Demand Prediction",
          description:
            "Forecast material and labor needs accurately, reducing the risk of shortages or excess.",
        },
        {
          icon: <CalendarClock size={24} className="text-background" />,
          title: "Optimized Project Timelines",
          description:
            "Predict project delays and optimize schedules to ensure timely completions.",
        },
        {
          icon: <Monitor size={24} className="text-background" />,
          title: "Real-Time Risk Monitoring",
          description:
            "Identify and mitigate project risks with real-time data analysis and predictive models.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Predictive Resource Optimization",
      subtitle: "Intelligent & Scalable",
      description:
        "Ensure efficient resource allocation by predicting project requirements and adjusting plans accordingly.",
      features: [
        {
          icon: <Clock size={24} className="text-background" />,
          title: "Timeline & Resource Forecasting",
          description:
            "Anticipate the resource requirements and timeline challenges for smoother project execution.",
        },
        {
          icon: <Layers size={24} className="text-background" />,
          title: "Predictive Asset Management",
          description:
            "Optimize equipment and material usage with AI-driven insights into future demand.",
        },
        {
          icon: <Search size={24} className="text-background" />,
          title: "Data-Driven Decision Making",
          description:
            "Make proactive decisions with actionable insights based on predictive data models.",
        },
      ],
    },
  ],
  featureData: [
    {
      icon: <BarChart2 className="text-background" />,
      title: "Predictive Demand",
      description:
        "Leverage AI to predict material and resource needs, reducing shortages and excess inventory.",
    },
    {
      icon: <FolderClock className="text-background" />,
      title: "Project Timeline Predictions",
      description:
        "Use historical data and trends to forecast project timelines, identifying potential delays early.",
    },
    {
      icon: <Layers className="text-background" />,
      title: "Resource Allocation",
      description:
        "Optimize resource distribution across projects using predictive analytics to enhance efficiency.",
    },
    {
      icon: <SearchCheckIcon className="text-background" />,
      title: "Risk & Issue Prediction",
      description:
        "Anticipate potential project risks and issues with data-driven predictions to mitigate disruptions.",
    },
    {
      icon: <Target className="text-background" />,
      title: "Demand Planning",
      description:
        "Predict inventory demands accurately and optimize stock levels to prevent waste and shortages.",
    },
    {
      icon: <FileLineChart className="text-background" />,
      title: "Performance Metrics",
      description:
        "Generate detailed reports based on predictive data to monitor project performance and adjust strategies.",
    },
    {
      icon: <RefreshCcw className="text-background" />,
      title: "Dynamic Adjustment",
      description:
        "Get real-time recommendations for adjusting project timelines, budgets, and resources based on predictive insights.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Data-Driven Decision Making",
      description:
        "Use predictive models to make proactive, data-backed decisions across all project phases.",
    },
    {
      icon: <PieChart className="text-background" />,
      title: "Cost & Budget Forecasting",
      description:
        "Forecast project costs with precision, optimizing your budgeting and spending strategies.",
    },
    {
      icon: <BarChartBig className="text-background" />,
      title: "Market Trend Analysis",
      description:
        "Analyze market trends and make predictions for resource price fluctuations to make informed.",
    },
    {
      icon: <RadarIcon className="text-background" />,
      title: "Supplier Performance",
      description:
        "Forecast supplier performance and delivery reliability to ensure timely and quality material sourcing.",
    },
    {
      icon: <Clock className="text-background" />,
      title: "Project Duration Prediction",
      description:
        "Predict project durations based on historical data, allowing for proactive project planning.",
    },
    {
      icon: <TrendingUp className="text-background" />,
      title: "Revenue & Profit Forecasting",
      description:
        "Predict revenue and profit margins based on current project data to guide business decisions.",
    },
    {
      icon: <UploadCloud className="text-background" />,
      title: "Cloud-Based Predictive Tools",
      description:
        "Access predictive analytics tools anytime, anywhere, via secure cloud storage.",
    },
    {
      icon: <Sliders className="text-background" />,
      title: "Customizable Analytics",
      description:
        "Create tailored analytics dashboards to visualize key predictive data and track project health.",
    },
    {
      icon: <BatteryCharging className="text-background" />,
      title: "Energy Consumption",
      description:
        "Predict energy consumption patterns and optimize resource usage to reduce costs and environmental impact.",
    },
    {
      icon: <UserCheck className="text-background" />,
      title: "Workforce Performance",
      description:
        "Use predictive analytics to assess workforce productivity and optimize labor allocation for better results.",
    },
    {
      icon: <TrendingUp className="text-background" />,
      title: "Trend Analysis",
      description:
        "Analyze procurement trends and market fluctuations to make informed purchasing decisions.",
    },
    {
      icon: <DollarSign className="text-background" />,
      title: "Predictive Cost Estimation",
      description:
        "Forecast material costs based on historical data and market conditions to stay within budget.",
    },
    {
      icon: <AlertTriangle className="text-background" />,
      title: "Supply Chain Disruption",
      description:
        "Identify potential disruptions in the supply chain using predictive models to mitigate delays.",
    },
  ],
  featuresData: {
    title: "Resources",
    subtitle: "Master Predictive Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        title: "Predictive Supply Chain Insights",
        description: "Access the report for optimized procurement strategies.",
        icon: <Search className="text-white" />,
      },
      {
        icon: <Radar className="text-white" />,
        title: "Material Demand Forecasting",
        description: "Access the guide for proactive inventory planning.",
      },
      {
        icon: <BarChart4 className="text-white" />,
        title: "Cost Prediction & Budget Optimization",
        description: "Access the report for enhanced financial control.",
      },
      {
        icon: <Clock className="text-white" />,
        title: "Project Timeline Forecasting",
        description: "Access the guide for on-time project delivery.",
      },
      {
        icon: <BatteryCharging className="text-white" />,
        title: "Energy Consumption Forecasting",
        description:
          "Access the guide for sustainable and cost-effective operations.",
      },
      {
        icon: <Users className="text-white" />,
        title: "Labor Demand Prediction",
        description: "Access the report for efficient workforce management.",
      },
    ],
  },
  ctaProps: {
    title: "Unlock the Power of Predictive Analytics",
    description: "",
    benefits: [
      "Accurate demand",
      "Data-driven decision",
      "Optimized cost predictions",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};
export const REALTIMEDASHBOARD_PAGE = {
  heroProps: {
    subtitle: "Real-Time Dashboard",
    description:
      "Stop Reacting, Start Leading. Gain instant insights and take immediate action with our real-time construction dashboard. Track performance, identify problems, and stay in control.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/estimation-hero.jpg", // MUST UPDATE
    imageAlt: "Interactive construction project dashboard on a large screen",
    linkHref: "/real-time-dashboard-demo",
  },
  heroSectionProps: {
    subtitle: "STAY ON TOP OF EVERY DETAIL",
    title: "Monitor, Analyze, and Act in Real-Time",
    description:
      "Efficiently track your project’s progress, resources, and performance with real-time data.",
    buttonLabel: "Explore Features",
    buttonLink: "/real-time-dashboard-features",
  },
  featuresSectionProps: {
    features: [
      {
        title: "Live Project Tracking",
        description:
          "Monitor real-time progress of your construction projects with up-to-date performance metrics, including time, costs, and quality control.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Instant Data Visualization",
        description:
          "Transform raw project data into clear visualizations to make quick, informed decisions with interactive charts, graphs, and dashboards.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "SMART REAL-TIME DASHBOARD",
    title: "Enhance Your Project Monitoring",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing real-time dashboard features",
    features: [
      {
        title: "Live Project Tracking",
        description:
          "Monitor real-time project progress with metrics on time, cost, and quality, ensuring every detail is accounted for.",
        icon: <Monitor size={24} />,
      },
      {
        title: "Instant Data Visualization",
        description:
          "Transform raw data into interactive charts, graphs, and dashboards, giving you an immediate view of project.",
        icon: <PieChart size={24} />,
      },
      {
        title: "Resource Allocation",
        description:
          "Manage and track resources in real-time, ensuring that your team, equipment, and materials are efficiently.",
        icon: <Layers size={24} />,
      },
    ],
  },
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Real-Time Project Monitoring",
      subtitle: "Immediate Insights & Control",
      description:
        "Access live data to monitor project progress, track key metrics, and make quick decisions for optimal project execution.",
      features: [
        {
          icon: <Monitor size={24} className="text-background" />,
          title: "Live Project Tracking",
          description:
            "Track key performance indicators in real-time to ensure every aspect of the project is on schedule.",
        },
        {
          icon: <Activity size={24} className="text-background" />,
          title: "Dynamic Data Visualization",
          description:
            "Visualize real-time data with customizable dashboards, charts, and graphs for easy decision-making.",
        },
        {
          icon: <Clock size={24} className="text-background" />,
          title: "Real-Time Alerts & Notifications",
          description:
            "Get instant updates on project milestones, delays, or issues, allowing you to act proactively.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Optimized Resource Allocation",
      subtitle: "Efficient & Adaptive",
      description:
        "Make data-driven decisions to allocate resources effectively with real-time insights into project demands.",
      features: [
        {
          icon: <Layers size={24} className="text-background" />,
          title: "Resource Usage Monitoring",
          description:
            "Track the real-time status of resources—equipment, labor, and materials—to ensure optimal utilization.",
        },
        {
          icon: <BarChart2 size={24} className="text-background" />,
          title: "Real-Time Cost Tracking",
          description:
            "Monitor ongoing expenses and compare them with forecasts to stay within budget.",
        },
        {
          icon: <Search size={24} className="text-background" />,
          title: "Proactive Risk Management",
          description:
            "Quickly identify potential risks or bottlenecks and adjust plans based on real-time data insights.",
        },
      ],
    },
  ],
  featureData: [
    {
      icon: <Monitor className="text-background" />,
      title: "Live Project Tracking",
      description:
        "Monitor ongoing projects in real-time, visualizing key metrics to ensure timely progress and efficient execution.",
    },
    {
      icon: <Activity className="text-background" />,
      title: "Dynamic Data Visualization",
      description:
        "Visualize real-time data with customizable dashboards and charts, helping you make immediate.",
    },
    {
      icon: <Clock className="text-background" />,
      title: "Real-Time Alerts",
      description:
        "Receive immediate updates on project milestones, delays, or changes, ensuring you act proactively.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Centralized Data Hub",
      description:
        "Access real-time data from various sources in one place, helping you keep track of key performance indicators.",
    },
    {
      icon: <Layers className="text-background" />,
      title: "Resource Utilization",
      description:
        "Track resource usage in real-time, ensuring optimal allocation and reducing waste or bottlenecks.",
    },
    {
      icon: <PieChart className="text-background" />,
      title: "Budget & Cost Tracking",
      description:
        "Monitor costs and budgets in real-time, with instant updates on project expenditures and financial forecasts.",
    },
    {
      icon: <Search className="text-background" />,
      title: "Risk Detection",
      description:
        "Identify potential risks and issues in real-time, with predictive alerts and insights to help mitigate delays.",
    },
    {
      icon: <TrendingUp className="text-background" />,
      title: "Progress Analytics",
      description:
        "Track project progress in real-time, with actionable insights into timelines, work completed, and remaining tasks.",
    },
    {
      icon: <Bell className="text-background" />,
      title: "Instant Notifications",
      description:
        "Get immediate notifications for any critical updates, including delays, resource needs, and budget changes.",
    },
    {
      icon: <Cloud className="text-background" />,
      title: "Cloud-Based Access",
      description:
        "Access real-time dashboard data anytime, anywhere, with cloud-based solutions for better flexibility.",
    },
    {
      icon: <Target className="text-background" />,
      title: "Goal Tracking & Monitoring",
      description:
        "Track project milestones and goals in real-time, ensuring all targets are met on time and within scope.",
    },
    {
      icon: <ClockAlert className="text-background" />,
      title: "Deadline Monitoring",
      description:
        "Monitor approaching deadlines and adjust project schedules in real-time to avoid potential delays.",
    },
    {
      icon: <Eye className="text-background" />,
      title: "Live Performance Monitoring",
      description:
        "Analyze team and resource performance in real-time to ensure everything is running at peak.",
    },
    {
      icon: <Sliders className="text-background" />,
      title: "Customizable Dashboards",
      description:
        "Create personalized dashboards to track the most important metrics in real-time for your specific project.",
    },
    {
      icon: <MapPin className="text-background" />,
      title: "Location Tracking",
      description:
        "Track project locations and equipment in real-time, ensuring that teams are always aligned and on track.",
    },
    {
      icon: <FileText className="text-background" />,
      title: "Live Reporting",
      description:
        "Generate live reports from your dashboard data, keeping stakeholders informed and making real-time.",
    },
    {
      icon: <RefreshCcw className="text-background" />,
      title: "Real-Time Project",
      description:
        "Adjust project plans and timelines dynamically based on real-time data, ensuring projects stay on track.",
    },
    {
      icon: <BarChart className="text-background" />,
      title: "Project Trend Analysis",
      description:
        "Analyze project trends and patterns in real-time to forecast potential issues and optimize decision-making.",
    },
    {
      icon: <Truck className="text-background" />,
      title: "Real-Time Logistics Tracking",
      description:
        "Track material deliveries and shipments in real-time, ensuring timely arrivals and smooth project execution.",
    },
    {
      icon: <Zap className="text-background" />,
      title: "Instant Data Insights",
      description:
        "Receive instant insights and analytics as data is updated in real-time, allowing for quick decision-making.",
    },
  ],
  featuresData: {
    title: "Resources",
    subtitle: "Master Dashboard Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        title: "Real-Time Performance",
        description:
          "Monitor project metrics and performance in real-time for instant insights.",
        icon: <Monitor className="text-white" />,
      },
      {
        icon: <Clock className="text-white" />,
        title: "Live Project Timeline Updates",
        description:
          "Get immediate updates on project timelines and any delays or changes.",
      },
      {
        icon: <Activity className="text-white" />,
        title: "Dynamic Resource Allocation",
        description:
          "Adjust resource allocation instantly based on real-time data.",
      },
      {
        icon: <BatteryCharging className="text-white" />,
        title: "Real-Time Energy Monitoring",
        description:
          "Track and manage energy consumption as it happens, ensuring sustainable practices.",
      },
      {
        icon: <TrendingUp className="text-white" />,
        title: "Live Cost Tracking",
        description:
          "Monitor project expenses in real-time and adjust budgets on the fly to stay within financial limits.",
      },
      {
        icon: <Search className="text-white" />,
        title: "Instant Risk Detection",
        description:
          "Identify potential risks and issues in real-time using predictive analytics and data-driven models.",
      },
    ],
  },
  ctaProps: {
    title: "Unlock the Potential of Real-Time Dashboard",
    description: "",
    benefits: [
      "Instant performance",
      "Data-driven decision",
      "Real-time project monitoring",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};
export const REPORTSANDALERTS_PAGE = {
  heroProps: {
    subtitle: "Reports & Alerts",
    description:
      "Don't wait for problems, get ahead of them. Our construction reports and alerts system provides real-time insights and instant notifications, so you can take action *before* issues escalate.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/estimation-hero.jpg", // MUST UPDATE
    imageAlt:
      "Example of a real-time construction alert notification on a mobile device",
    linkHref: "/reports-alerts-demo",
  },
  heroSectionProps: {
    subtitle: "NEVER MISS A KEY UPDATE",
    title: "Report, and Respond Instantly",
    description:
      "Generate insightful reports and receive alerts on critical project metrics, so you can manage risks and make timely adjustments.",
    buttonLabel: "Explore Features",
    buttonLink: "/reports-and-alerts-features",
  },
  featuresSectionProps: {
    features: [
      {
        title: "Real-Time Alerts & Notifications",
        description:
          "Receive instant notifications for project risks, delays, and performance deviations to take immediate action and prevent disruptions.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Comprehensive Project Reports",
        description:
          "Generate detailed, customizable reports on key project metrics, including costs, timelines, and resource usage, to keep all stakeholders informed.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "SMART REPORTS & ALERTS",
    title: "Enhance Your Project Reporting",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing reports and alerts features",
    features: [
      {
        title: "Real-Time Alerts",
        description:
          "Get instant alerts for project deviations, risks, and critical updates to take immediate action and stay on track.",
        icon: <BellRing size={24} />,
      },
      {
        title: "Customizable Reports",
        description:
          "Generate tailored reports with key project metrics, including timelines, costs, and resource usage.",
        icon: <FileText size={24} />,
      },
      {
        title: "Risk & Issue Management",
        description:
          "Identify potential risks and issues early, using real-time alerts and predictive models to mitigate project disruptions.",
        icon: <AlertTriangle size={24} />,
      },
    ],
  },
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Real-Time Reporting",
      subtitle: "Instant Insights & Actionable Data",
      description:
        "Receive real-time reports and alerts to stay ahead of project challenges. Make informed decisions instantly and address issues before they escalate.",
      features: [
        {
          icon: <FileText size={24} className="text-background" />,
          title: "Customizable Reports",
          description:
            "Generate detailed, customizable reports that provide insights into project status, costs, timelines, and more.",
        },
        {
          icon: <AlertTriangle size={24} className="text-background" />,
          title: "Instant Risk Alerts",
          description:
            "Get immediate alerts about project risks, delays, or quality concerns, allowing for swift action to avoid issues.",
        },
        {
          icon: <Clock size={24} className="text-background" />,
          title: "Real-Time Milestone Tracking",
          description:
            "Track project milestones and deadlines in real-time to ensure that every phase stays on schedule and within scope.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Proactive Risk Management",
      subtitle: "Early Detection & Mitigation",
      description:
        "Use predictive insights and automated alerts to identify risks early, allowing you to adjust plans before problems arise.",
      features: [
        {
          icon: <Radar size={24} className="text-background" />,
          title: "Predictive Risk Reports",
          description:
            "Get reports powered by predictive analytics, identifying potential risks and issues before they impact your project.",
        },
        {
          icon: <PieChart size={24} className="text-background" />,
          title: "Comprehensive Data Visualization",
          description:
            "Visualize key project metrics and risks in easy-to-understand charts and graphs, making reports actionable.",
        },
        {
          icon: <BellRing size={24} className="text-background" />,
          title: "Real-Time Alerts & Notifications",
          description:
            "Stay on top of project changes with real-time alerts, notifying you of critical updates or anomalies that require attention.",
        },
      ],
    },
  ],
  featureData: [
    {
      icon: <FileText className="text-background" />,
      title: "Customizable Reports",
      description:
        "Generate detailed, customized reports on project status, costs, timelines, and performance metrics.",
    },
    {
      icon: <AlertTriangle className="text-background" />,
      title: "Real-Time Alerts",
      description:
        "Get immediate alerts about potential risks, delays, or issues, allowing you to make quick decisions.",
    },
    {
      icon: <Bell className="text-background" />,
      title: "Instant Notifications",
      description:
        "Receive immediate notifications on key project milestones, progress updates, and any critical changes.",
    },
    {
      icon: <Search className="text-background" />,
      title: "Risk & Issue Detection",
      description:
        "Identify potential risks early with data-driven reports and predictive alerts to mitigate delays and disruptions.",
    },
    {
      icon: <BarChart2 className="text-background" />,
      title: "Budget & Cost Reports",
      description:
        "Generate real-time reports to track project costs and ensure adherence to budget forecasts.",
    },
    {
      icon: <PieChart className="text-background" />,
      title: "Real-Time Progress Tracking",
      description:
        "Visualize project progress with actionable insights on work completed, remaining tasks, and project timelines.",
    },
    {
      icon: <Clock className="text-background" />,
      title: "Project Timeline Alerts",
      description:
        "Receive alerts for upcoming deadlines, potential delays, or shifts in project schedules.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Centralized Data Hub",
      description:
        "Access a centralized repository of all project data, ensuring that reports are based on real-time.",
    },
    {
      icon: <Zap className="text-background" />,
      title: "Instant Data Insights",
      description:
        "Instantly gain insights into critical data points with real-time analytics, ensuring timely decision-making.",
    },
    {
      icon: <MapPin className="text-background" />,
      title: "Location-Based Alerts",
      description:
        "Track project locations and equipment in real-time, receiving alerts for delays or issues tied to specific sites.",
    },
    {
      icon: <RefreshCcw className="text-background" />,
      title: "Dynamic Report Adjustments",
      description:
        "Quickly adjust reports and notifications based on real-time data updates, ensuring your reports reflect.",
    },
    {
      icon: <Sliders className="text-background" />,
      title: "Customizable Dashboards",
      description:
        "Build and modify dashboards tailored to track critical metrics and generate relevant reports for your project.",
    },
    {
      icon: <Truck className="text-background" />,
      title: "Logistics & Delivery",
      description:
        "Monitor material deliveries and shipments in real-time, ensuring on-time arrivals.",
    },
    {
      icon: <BarChart className="text-background" />,
      title: "Project Trend Analysis",
      description:
        "Analyze trends and data patterns in real-time to understand project progress and make informed decisions.",
    },
    {
      icon: <ClockAlert className="text-background" />,
      title: "Deadline Tracking & Alerts",
      description:
        "Monitor approaching deadlines and receive alerts to prevent any project delays that could impact completion.",
    },
    {
      icon: <Eye className="text-background" />,
      title: "Live Performance Monitoring",
      description:
        "Track team performance and productivity in real-time, identifying areas for improvement.",
    },
    {
      icon: <Target className="text-background" />,
      title: "Goal Tracking",
      description:
        "Track project goals and milestones in real-time, ensuring that all targets are met on time and within scope.",
    },
    {
      icon: <AlertCircle className="text-background" />,
      title: "Critical Event Alerts",
      description:
        "Receive real-time alerts for critical events that could impact project timelines.",
    },
    {
      icon: <ClipboardList className="text-background" />,
      title: "Task Completion Monitoring",
      description:
        "Track the completion status of tasks and milestones, receiving alerts when key activities are completed or delayed.",
    },
    {
      icon: <FilePlus className="text-background" />,
      title: "Report Generation",
      description:
        "Generate detailed project reports automatically with up-to-date data, keeping stakeholders.",
    },
  ],
  featuresData: {
    title: "Resources",
    subtitle: "Master Reports Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        icon: <Bell className="text-white" />,
        title: "Instant Alert Notifications",
        description:
          "Receive instant notifications for any critical updates, such as delays.",
      },
      {
        icon: <ClipboardList className="text-white" />,
        title: "Progress Report Generation",
        description:
          "Automatically generate detailed progress reports, summarizing project status.",
      },
      {
        icon: <AlertTriangle className="text-white" />,
        title: "Critical Risk Alerts",
        description:
          "Get real-time alerts for potential risks and issues, allowing you to address them.",
      },
      {
        icon: <FileText className="text-white" />,
        title: "Automated Status Reporting",
        description:
          "Set up automated reports to monitor ongoing project status.",
      },
      {
        icon: <Cloud className="text-white" />,
        title: "Cloud-Based Report Access",
        description:
          "Access all reports and alerts from anywhere, anytime, with cloud-based integration.",
      },
      {
        icon: <AlarmCheck className="text-white" />,
        title: "Urgent Issue Alerts",
        description:
          "Receive notifications for urgent project issues that require immediate attention.",
      },
    ],
  },
  ctaProps: {
    title: "Stay Ahead with Real-Time Reports & Alerts",
    description: "",
    benefits: [
      "Instant notifications on",
      "Automated status reports",
      "Proactive risk detection",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};
export const PROJECTFINANCIAL_PAGE = {
  heroProps: {
    subtitle: "Project Financials",
    description:
      "Unlock project profitability with real-time financial control. Track budgets, manage costs, and forecast expenses to maximize your margins.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/estimation-hero.jpg", // MUST UPDATE!
    imageAlt:
      "Construction project manager reviewing financial performance dashboard on a laptop.",
    linkHref: "/project-financials-demo",
  },
  heroSectionProps: {
    subtitle: "MANAGE YOUR PROJECTS' BOTTOM LINE",
    title: "Track, Analyze, and Optimize Financials",
    description:
      "Stay on top of your project's finances with real-time tracking of costs, budgets, and profitability.",
    buttonLabel: "Explore Features",
    buttonLink: "/project-financial-features",
  },
  featuresSectionProps: {
    features: [
      {
        title: "Real-Time Budget Tracking",
        description:
          "Monitor your project's financial health by tracking real-time expenses, helping to keep your project within budget and prevent overruns.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Financial Reports",
        description:
          "Generate detailed, customizable financial reports, including cost breakdowns, budget allocations, and projected.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "SMART PROJECT FINANCIALS",
    title: "Optimize Your Project's Financial Health",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing financial tracking and reports",
    features: [
      {
        title: "Real-Time Budget Tracking",
        description:
          "Track project expenses in real-time to stay within budget and make timely financial adjustments.",
        icon: <DollarSign size={24} />,
      },
      {
        title: "Cost Forecasting",
        description:
          "Forecast project costs and adjust budgets dynamically to prevent overspending and optimize resource.",
        icon: <TrendingUp size={24} />,
      },
      {
        title: "Financial Risk Management",
        description:
          "Identify and manage financial risks proactively, with predictive insights and alerts to mitigate potential.",
        icon: <ShieldAlert size={24} />,
      },
    ],
  },
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Real-Time Financial Reporting",
      subtitle: "Instant Budget Insights",
      description:
        "Get real-time financial reports and updates to manage project costs effectively. Stay on track with budgets and make adjustments before costs spiral.",
      features: [
        {
          icon: <DollarSign size={24} className="text-background" />,
          title: "Budget Tracking",
          description:
            "Track project expenditures in real-time and compare them against budget forecasts to prevent overspending.",
        },
        {
          icon: <BarChart size={24} className="text-background" />,
          title: "Cost Analysis & Forecasting",
          description:
            "Analyze project costs and forecast future financial needs, ensuring the project stays within budget constraints.",
        },
        {
          icon: <Clock size={24} className="text-background" />,
          title: "Deadline & Financial Milestones",
          description:
            "Track critical financial milestones and ensure costs align with project timelines, preventing last-minute financial surprises.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Proactive Financial Management",
      subtitle: "Early Alerts & Mitigation",
      description:
        "Use real-time financial alerts and predictive analytics to identify potential cost overruns early and take corrective action.",
      features: [
        {
          icon: <TrendingUp size={24} className="text-background" />,
          title: "Cost Trend Analysis",
          description:
            "Identify cost trends over time and use forecasting models to ensure financial stability throughout the project.",
        },
        {
          icon: <PieChart size={24} className="text-background" />,
          title: "Comprehensive Financial Reporting",
          description:
            "Generate detailed reports on project financials, including expenses, resource costs, and savings opportunities.",
        },
        {
          icon: <AlertTriangle size={24} className="text-background" />,
          title: "Risk Alerts & Mitigation",
          description:
            "Get real-time alerts about potential financial risks, allowing you to act swiftly and keep the project on budget.",
        },
      ],
    },
  ],
  featureData: [
    {
      icon: <DollarSign className="text-background" />,
      title: "Financial Reports & Insights",
      description:
        "Generate detailed financial reports on project expenses, revenue, and cash flow for better decision-making.",
    },
    {
      icon: <TrendingUp className="text-background" />,
      title: "Budget Forecasting",
      description:
        "Analyze and predict future project costs based on historical data and current trends.",
    },
    {
      icon: <BarChart2 className="text-background" />,
      title: "Real-Time Expense Tracking",
      description:
        "Monitor project expenses in real-time and stay within budget with proactive cost control.",
    },
    {
      icon: <PieChart className="text-background" />,
      title: "Financial Data Visualization",
      description:
        "Visualize key financial metrics with charts and graphs for a clearer understanding of project spending.",
    },
    {
      icon: <AlertTriangle className="text-background" />,
      title: "Cost Overrun Alerts",
      description:
        "Receive alerts when expenses exceed budget limits, enabling immediate corrective actions.",
    },
    {
      icon: <Clock className="text-background" />,
      title: "Payment Schedule",
      description:
        "Track and manage payment schedules for vendors, subcontractors, and suppliers efficiently.",
    },
    {
      icon: <Receipt className="text-background" />,
      title: "Invoice & Billing Reports",
      description:
        "Generate accurate and automated reports for invoices, payments, and billing cycles.",
    },
    {
      icon: <Calculator className="text-background" />,
      title: "Cost Estimation",
      description:
        "Compare estimated vs. actual project costs to identify discrepancies and improve future budgeting.",
    },
    {
      icon: <LineChart className="text-background" />,
      title: "Profitability Analysis",
      description:
        "Analyze profitability trends and margins to ensure financial success across projects.",
    },
    {
      icon: <ClipboardList className="text-background" />,
      title: "Financial Compliance",
      description:
        "Ensure compliance with financial regulations by tracking necessary documentation and transactions.",
    },
    {
      icon: <Layers className="text-background" />,
      title: "Multi-Project Financial",
      description:
        "Monitor financial data across multiple projects in a single dashboard for better portfolio management.",
    },
    {
      icon: <Bell className="text-background" />,
      title: "Instant Financial Notifications",
      description:
        "Receive real-time alerts for budget changes, payment deadlines, and financial risks.",
    },
    {
      icon: <ClipboardCheck className="text-background" />,
      title: "Audit & Compliance Reports",
      description:
        "Generate detailed audit reports to maintain financial transparency and accountability.",
    },
    {
      icon: <RefreshCcw className="text-background" />,
      title: "Dynamic Budget Adjustments",
      description:
        "Adjust budgets dynamically based on project progress and changing financial conditions.",
    },
    {
      icon: <Target className="text-background" />,
      title: "Financial Goal Tracking",
      description:
        "Set and track financial goals, ensuring alignment with project profitability targets.",
    },
    {
      icon: <TrendingDown className="text-background" />,
      title: "Risk & Loss Analysis",
      description:
        "Identify financial risks early and mitigate potential losses with predictive analytics.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Centralized Financial Data",
      description:
        "Access all financial records in one centralized system for easy tracking and reporting.",
    },
    {
      icon: <ShieldCheck className="text-background" />,
      title: "Secure Financial Transactions",
      description:
        "Ensure all financial transactions are secure and compliant with industry standards.",
    },
    {
      icon: <FilePlus className="text-background" />,
      title: "Automated Report",
      description:
        "Generate financial reports automatically with up-to-date data for quick decision-making.",
    },
    {
      icon: <FileBarChart className="text-background" />,
      title: "Profit & Loss Analysis",
      description:
        "Analyze project profitability with automated profit and loss reports, ensuring financial health.",
    },
  ],
  featuresData: {
    title: "Resources",
    subtitle: "Master Financial Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        icon: <DollarSign className="text-white" />,
        title: "Real-Time Financial Alerts",
        description:
          "Receive instant notifications for budget overruns, cost fluctuations.",
      },
      {
        icon: <ClipboardList className="text-white" />,
        title: "Automated Financial Reports",
        description:
          "Generate detailed reports on project expenditures, revenue forecasts.",
      },
      {
        icon: <AlertTriangle className="text-white" />,
        title: "Budget Risk Warnings",
        description:
          "Get real-time alerts for financial risks, such as cost overruns.",
      },
      {
        icon: <PieChart className="text-white" />,
        title: "Expense Breakdown Analysis",
        description:
          "Track and categorize project expenses, ensuring transparency and better cost management.",
      },
      {
        icon: <Banknote className="text-white" />,
        title: "Cash Flow Monitoring",
        description:
          "Monitor incoming and outgoing project cash flow in real-time to maintain financial stability.",
      },
      {
        icon: <TrendingUp className="text-white" />,
        title: "Profitability Insights",
        description:
          "Analyze project financial performance to optimize profitability and maximize returns.",
      },
    ],
  },
  ctaProps: {
    title: "Gain Full Control Over Project Finances",
    description: "",
    benefits: [
      "Real-time budget",
      "Automated financial reports",
      "Instant cost overrun alerts",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};
export const INVOICEMANAGEMENT_PAGE = {
  heroProps: {
    subtitle: "Invoice",
    description:
      "Get paid faster with our automated construction invoicing system. Streamline billing, track invoices in real-time, and simplify payment management for improved cash flow.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/estimation-hero.jpg", // MUST UPDATE
    imageAlt: "Construction invoice management software showing payment status",
    linkHref: "/invoice-management-demo",
  },
  heroSectionProps: {
    subtitle: "SIMPLIFY YOUR BILLING PROCESS",
    title: "Automate and Manage Invoices",
    description:
      "Enhance financial transparency with automated invoicing, real-time payment tracking.",
    buttonLabel: "Explore Features",
    buttonLink: "/invoice-management-features",
  },
  featuresSectionProps: {
    features: [
      {
        title: "Automated Invoice Generation",
        description:
          "Create and send invoices automatically, reducing manual work and ensuring accuracy in billing.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Real-Time Payment Tracking",
        description:
          "Monitor invoice statuses and track payments in real-time to improve cash flow and financial planning.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "SMART INVOICE MANAGEMENT",
    title: "Streamline Your Billing Process",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing invoice management features",
    features: [
      {
        title: "Automated Invoice Processing",
        description:
          "Generate and send invoices automatically, reducing manual work and ensuring billing accuracy.",
        icon: <FileText size={24} />,
      },
      {
        title: "Real-Time Payment Tracking",
        description:
          "Monitor invoice statuses and track payments in real-time, improving cash flow and financial planning.",
        icon: <CreditCard size={24} />,
      },
      {
        title: "Late Payment Alerts",
        description:
          "Receive instant alerts for overdue payments, ensuring timely follow-ups and improved revenue management.",
        icon: <BellRing size={24} />,
      },
    ],
  },
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Real-Time Invoice Tracking",
      subtitle: "Stay on Top of Your Billing",
      description:
        "Monitor invoices in real-time, track payment statuses, and streamline billing cycles to improve cash flow management.",
      features: [
        {
          icon: <FileText size={24} className="text-background" />,
          title: "Automated Invoice Generation",
          description:
            "Generate and send invoices automatically, reducing manual work and ensuring accuracy.",
        },
        {
          icon: <CreditCard size={24} className="text-background" />,
          title: "Payment Status Monitoring",
          description:
            "Track payments in real-time, ensuring timely collection and reducing outstanding balances.",
        },
        {
          icon: <Clock size={24} className="text-background" />,
          title: "Due Date & Overdue Alerts",
          description:
            "Get instant alerts for upcoming due dates and overdue invoices to take proactive follow-ups.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Smart Invoice Management",
      subtitle: "Optimize Billing & Collections",
      description:
        "Use predictive insights and automated workflows to ensure invoices are sent, tracked, and settled efficiently.",
      features: [
        {
          icon: <TrendingUp size={24} className="text-background" />,
          title: "Invoice Trend Analysis",
          description:
            "Analyze invoice trends and payment behaviors to improve cash flow forecasting and financial planning.",
        },
        {
          icon: <PieChart size={24} className="text-background" />,
          title: "Comprehensive Invoice Reporting",
          description:
            "Generate detailed financial reports on invoicing, payments, and outstanding balances for better decision-making.",
        },
        {
          icon: <BellRing size={24} className="text-background" />,
          title: "Instant Payment Notifications",
          description:
            "Receive real-time alerts when an invoice is paid, overdue, or disputed, keeping financial processes smooth.",
        },
      ],
    },
  ],
  featureData: [
    {
      icon: <FileText className="text-background" />,
      title: "Automated Invoice",
      description:
        "Create and send invoices automatically, reducing manual effort and ensuring billing accuracy.",
    },
    {
      icon: <CreditCard className="text-background" />,
      title: "Payment Processing",
      description:
        "Track payments and streamline the processing of invoices to ensure timely collections.",
    },
    {
      icon: <BarChart2 className="text-background" />,
      title: "Invoice Analytics & Reporting",
      description:
        "Gain insights into invoice trends, payment delays, and revenue streams with real-time analytics.",
    },
    {
      icon: <ClipboardList className="text-background" />,
      title: "Invoice Status Tracking",
      description:
        "Monitor the status of invoices in real-time, from sent to paid to overdue.",
    },
    {
      icon: <AlertTriangle className="text-background" />,
      title: "Overdue Payment Alerts",
      description:
        "Get notified when invoices are overdue and take action to prevent cash flow disruptions.",
    },
    {
      icon: <Clock className="text-background" />,
      title: "Scheduled Billing",
      description:
        "Automate recurring invoices with scheduled billing to improve consistency and accuracy.",
    },
    {
      icon: <Receipt className="text-background" />,
      title: "Digital Receipts & Records",
      description:
        "Maintain a digital trail of all invoices and payments for easy auditing and record-keeping.",
    },
    {
      icon: <Calculator className="text-background" />,
      title: "Tax & Compliance Integration",
      description:
        "Ensure tax compliance by automating tax calculations and keeping records in line with regulations.",
    },
    {
      icon: <PieChart className="text-background" />,
      title: "Revenue Breakdown",
      description:
        "Analyze revenue streams based on paid, pending, and overdue invoices for better financial planning.",
    },
    {
      icon: <ClipboardCheck className="text-background" />,
      title: "Approval Workflow",
      description:
        "Streamline invoice approvals with automated workflows, reducing delays in processing.",
    },
    {
      icon: <Layers className="text-background" />,
      title: "Multi-Project Invoice",
      description:
        "Manage invoices across multiple construction projects from a single dashboard.",
    },
    {
      icon: <Bell className="text-background" />,
      title: "Instant Invoice Notifications",
      description:
        "Receive alerts when an invoice is generated, viewed, paid, or overdue.",
    },
    {
      icon: <RefreshCcw className="text-background" />,
      title: "Dynamic Payment Updates",
      description:
        "Update invoices dynamically to reflect change orders and additional costs.",
    },
    {
      icon: <Target className="text-background" />,
      title: "Invoice Performance Tracking",
      description:
        "Monitor key invoicing metrics like average payment time and overdue percentage.",
    },
    {
      icon: <TrendingDown className="text-background" />,
      title: "Dispute & Resolution",
      description:
        "Track invoice disputes and manage resolutions efficiently to prevent delays in payments.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Centralized Invoice Data",
      description:
        "Store and manage all invoice records in a secure and accessible system.",
    },
    {
      icon: <ShieldCheck className="text-background" />,
      title: "Secure Transactions",
      description:
        "Ensure all invoices and payments are processed securely with encrypted transactions.",
    },
    {
      icon: <FilePlus className="text-background" />,
      title: "Automated Invoice Reports",
      description:
        "Generate financial reports automatically with real-time invoicing data.",
    },
    {
      icon: <FileBarChart className="text-background" />,
      title: "Cash Flow Insights",
      description:
        "Analyze how invoices impact cash flow, helping you plan and manage project finances effectively.",
    },
    {
      icon: <Calendar className="text-background" />,
      title: "Due Date Management",
      description:
        "Monitor invoice due dates, ensuring timely payments to avoid any project delays caused by cash flow issues.",
    },
  ],
  featuresData: {
    title: "Resources",
    subtitle: "Master Invoice Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        icon: <FileText className="text-white" />,
        title: "Customizable Invoice",
        description:
          "Create and customize invoice templates with your brand’s logo, payment terms, and project details.",
      },
      {
        icon: <ClipboardList className="text-white" />,
        title: "Invoice History & Records",
        description:
          "Maintain an organized history of all invoices and payments, ensuring easy access to past financial data.",
      },
      {
        icon: <AlertTriangle className="text-white" />,
        title: "Invoice Discrepancy Alerts",
        description:
          "Get notified about any discrepancies or mismatches between invoices and payments for prompt resolution.",
      },
      {
        icon: <PieChart className="text-white" />,
        title: "Expense & Revenue Insights",
        description:
          "Analyze the breakdown of invoices to gain insights into project costs and revenue patterns.",
      },
      {
        icon: <Receipt className="text-white" />,
        title: "Comprehensive Billing Reports",
        description:
          "Generate billing reports to keep track of project invoicing and ensure financial transparency.",
      },
      {
        icon: <RefreshCcw className="text-white" />,
        title: "Invoice Updates",
        description:
          "Easily update or adjust invoices as project costs change, ensuring your records reflect the latest figures.",
      },
    ],
  },
  ctaProps: {
    title: "Streamline Your Invoice Management Process",
    description: "",
    benefits: [
      "Instant invoice",
      "Real-time payment tracking",
      "Automated payment reminders",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};
export const QUALITYANDSAFETY_PAGE = {
  heroProps: {
    subtitle: "Quality & Safety",
    description:
      "Protect your team, projects, and reputation with our comprehensive quality and safety management solution. Proactively identify risks, streamline inspections, and ensure a safe and compliant work environment.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/estimation-hero.jpg", // MUST UPDATE
    imageAlt: "Construction site safety inspection using a mobile app",
    linkHref: "/quality-safety-demo",
  },

  heroSectionProps: {
    subtitle: "ENSURE TOP-TIER SAFETY & QUALITY",
    title: "Monitor,and Improve Construction Safety",
    description:
      "Enhance safety measures and maintain quality standards with real-time tracking, risk alerts, and compliance monitoring.",
    buttonLabel: "Explore Features",
    buttonLink: "/quality-and-safety-features",
  },

  featuresSectionProps: {
    features: [
      {
        title: "Real-Time Safety Monitoring",
        description:
          "Track safety metrics in real-time to ensure a safe working environment and prevent accidents.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Quality Control Tracking",
        description:
          "Monitor quality standards throughout the project with detailed inspections and performance tracking.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },

  TestimonalsSectionProps: {
    subtitle: "ENSURE TOP-QUALITY AND SAFE PROJECTS",
    title: "Enhance Quality & Safety Standards",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing quality and safety features",
    features: [
      {
        title: "Real-Time Safety Monitoring",
        description:
          "Track safety performance in real-time, ensuring immediate action on any safety hazards or risks.",
        icon: <ShieldCheck size={24} />,
      },
      {
        title: "Quality Inspections & Reports",
        description:
          "Generate detailed quality reports and track inspections to maintain construction standards.",
        icon: <ClipboardList size={24} />,
      },
      {
        title: "Compliance & Risk Alerts",
        description:
          "Receive instant alerts for potential safety violations or non-compliance issues to take corrective actions.",
        icon: <AlertTriangle size={24} />,
      },
    ],
  },

  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Real-Time Safety Monitoring",
      subtitle: "Stay Ahead of Potential Hazards",
      description:
        "Monitor safety conditions in real-time, identify risks, and ensure a safe working environment across the project.",
      features: [
        {
          icon: <ShieldAlert size={24} className="text-background" />,
          title: "Safety Hazard Detection",
          description:
            "Identify safety hazards in real-time, allowing for immediate action to prevent accidents.",
        },
        {
          icon: <Thermometer size={24} className="text-background" />,
          title: "Environmental Condition Monitoring",
          description:
            "Track environmental factors such as temperature, humidity, and air quality to ensure a safe working environment.",
        },
        {
          icon: <CheckCheck size={24} className="text-background" />,
          title: "Safety Compliance Monitoring",
          description:
            "Ensure compliance with all safety standards and regulations with real-time monitoring and alerts.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Quality Assurance & Control",
      subtitle: "Maintain High Standards of Construction",
      description:
        "Monitor quality standards throughout the construction process to deliver the best results on every project.",
      features: [
        {
          icon: <ClipboardCheck size={24} className="text-background" />,
          title: "Quality Inspections",
          description:
            "Conduct regular quality checks and inspections to ensure the project meets all predefined quality standards.",
        },
        {
          icon: <Layers size={24} className="text-background" />,
          title: "Quality Reporting & Analytics",
          description:
            "Generate detailed quality reports and analyze data to continuously improve processes and outcomes.",
        },
        {
          icon: <AlertCircle size={24} className="text-background" />,
          title: "Non-Compliance Alerts",
          description:
            "Receive alerts about any quality-related non-compliance issues, enabling immediate corrective actions.",
        },
      ],
    },
  ],

  featureData: [
    {
      icon: <ShieldAlert className="text-background" />,
      title: "Safety Hazard Detection",
      description:
        "Identify potential safety hazards on the construction site in real-time, ensuring proactive risk management.",
    },
    {
      icon: <Thermometer className="text-background" />,
      title: "Environmental Condition",
      description:
        "Track environmental conditions like temperature, humidity, and air quality to ensure a safe working environment.",
    },
    {
      icon: <CheckCheck className="text-background" />,
      title: "Safety Compliance Tracking",
      description:
        "Ensure that safety standards and regulations are met with real-time compliance monitoring and alerts.",
    },
    {
      icon: <ClipboardCheck className="text-background" />,
      title: "Quality Inspections",
      description:
        "Conduct regular quality checks and inspections to ensure the project adheres to defined quality standards.",
    },
    {
      icon: <AlertTriangle className="text-background" />,
      title: "Risk Alerts",
      description:
        "Get instant alerts for potential safety risks, allowing timely action to prevent accidents.",
    },
    {
      icon: <Clock className="text-background" />,
      title: "Scheduled Safety Audits",
      description:
        "Automate recurring safety audits and inspections, ensuring consistency and thoroughness in safety practices.",
    },
    {
      icon: <Receipt className="text-background" />,
      title: "Digital Safety Records",
      description:
        "Maintain a digital trail of all safety inspections, audits, and incident reports for easy access.",
    },
    {
      icon: <BarChart className="text-background" />,
      title: "Safety Performance Analytics",
      description:
        "Analyze safety trends and incident reports to continuously improve safety protocols and prevent future risks.",
    },
    {
      icon: <ClipboardList className="text-background" />,
      title: "Incident Tracking",
      description:
        "Track safety incidents and near misses to identify patterns and mitigate future risks on-site.",
    },
    {
      icon: <ShieldCheck className="text-background" />,
      title: "Personal Protective",
      description:
        "Ensure compliance with PPE requirements, tracking usage and availability across the project site.",
    },
    {
      icon: <Layers className="text-background" />,
      title: "Multi-Project Safety",
      description:
        "Manage safety protocols and incidents across multiple construction projects from a centralized system.",
    },
    {
      icon: <Bell className="text-background" />,
      title: "Instant Safety Alerts",
      description:
        "Receive real-time alerts for safety violations, non-compliance, or potential hazards on-site.",
    },
    {
      icon: <RefreshCcw className="text-background" />,
      title: "Dynamic Safety Protocol",
      description:
        "Update safety protocols dynamically in response to new risks, project changes, or regulatory updates.",
    },
    {
      icon: <Target className="text-background" />,
      title: "Safety Goal Tracking",
      description:
        "Set and track safety goals, ensuring alignment with project safety targets and objectives.",
    },
    {
      icon: <TrendingDown className="text-background" />,
      title: "Incident Reduction Strategy",
      description:
        "Track safety incidents and implement strategies to reduce occurrences and improve overall safety performance.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Centralized Safety Data",
      description:
        "Store and access all safety records and incident reports in one secure, easy-to-manage system.",
    },
    {
      icon: <ShieldCheck className="text-background" />,
      title: "Secure Safety Transactions",
      description:
        "Ensure all safety data and incident reports are securely stored and processed in compliance with industry.",
    },
    {
      icon: <FilePlus className="text-background" />,
      title: "Automated Safety Reports",
      description:
        "Generate comprehensive safety reports automatically with real-time safety data for quick analysis and decision-making.",
    },
    {
      icon: <FileBarChart className="text-background" />,
      title: "Safety & Compliance Insights",
      description:
        "Analyze safety data and compliance reports to improve safety planning and execution across all projects.",
    },
    {
      icon: <Calendar className="text-background" />,
      title: "Safety Training Scheduling",
      description:
        "Schedule and track safety training sessions to ensure all team members are up-to-date on safety protocols.",
    },
  ],

  featuresData: {
    title: "Resources",
    subtitle: "Master Quality Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        title: "Safety Hazard Identification",
        description:
          "Automatically identify and flag potential hazards on-site to prevent accidents.",
        icon: <ShieldAlert className="text-white" />,
      },
      {
        icon: <ClipboardList className="text-white" />,
        title: "Safety Compliance Records",
        description:
          "Maintain an organized history of safety inspections, audits, and compliance.",
      },
      {
        icon: <AlertTriangle className="text-white" />,
        title: "Safety Violation Alerts",
        description:
          "Receive instant alerts when safety violations or risks are detected.",
      },
      {
        icon: <BarChart className="text-white" />,
        title: "Incident & Risk Analytics",
        description:
          "Analyze safety incident data to identify trends, improve risk management strategies, and enhance site safety.",
      },
      {
        icon: <FileText className="text-white" />,
        title: "Safety Training Records",
        description:
          "Track and manage safety training programs for all workers to ensure compliance with site safety standards.",
      },
      {
        icon: <RefreshCcw className="text-white" />,
        title: "Dynamic Safety Protocol",
        description:
          "Easily update safety protocols in real-time as new risks or regulations emerge to keep your team safe and compliant.",
      },
    ],
  },

  ctaProps: {
    title: "Enhance Construction Site Safety and Quality",
    description: "",
    benefits: [
      "Instant hazard",
      "Real-time safety violation",
      "Comprehensive compliance tracking",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};
export const PROJECTMANAGEMENT_PAGE = {
  heroProps: {
    subtitle: "Project Management",
    description:
      "Deliver projects on time and under budget with our comprehensive construction project management platform. Gain real-time visibility, streamline workflows, and empower your teams for success.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/estimation-hero.jpg", // REQUIRED UPDATE!
    imageAlt:
      "Construction project manager reviewing a Gantt chart on a tablet.",
    linkHref: "/project-management-demo",
  },

  heroSectionProps: {
    subtitle: "STREAMLINE PROJECT EXECUTION",
    title: "Plan and Deliver Projects Efficiently",
    description:
      "Improve project workflows, track progress in real-time, and enhance communication for seamless project execution.",
    buttonLabel: "Explore Features",
    buttonLink: "/project-management-features",
  },

  featuresSectionProps: {
    features: [
      {
        title: "Real-Time Project Tracking",
        description:
          "Monitor project progress in real-time, ensuring tasks stay on schedule and within budget.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Task & Resource Management",
        description:
          "Effectively allocate resources, assign tasks, and track milestones for efficient project execution.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },

  TestimonalsSectionProps: {
    subtitle: "STREAMLINE PROJECT MANAGEMENT",
    title: "Optimize Project Execution & Collaboration",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing project management features",
    features: [
      {
        title: "Real-Time Project Tracking",
        description:
          "Monitor project progress in real-time, ensuring tasks stay on schedule and teams stay aligned.",
        icon: <Clock size={24} />,
      },
      {
        title: "Task & Workflow Automation",
        description:
          "Automate task assignments, approvals, and workflows to boost efficiency and reduce delays.",
        icon: <Settings size={24} />,
      },
      {
        title: "Team Collaboration",
        description:
          "Enhance team communication with centralized reporting and real-time updates on project milestones.",
        icon: <Users size={24} />,
      },
    ],
  },

  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Projects",
      subtitle: "Seamlessly Manage Projects from Start to Finish",
      description:
        "Track project progress, manage tasks efficiently, and ensure seamless collaboration to deliver projects on time and within budget.",
      features: [
        {
          icon: <Briefcase size={24} className="text-background" />,
          title: "Project Planning & Scheduling",
          description:
            "Plan project timelines, allocate resources, and set milestones to keep everything on track.",
        },
        {
          icon: <Activity size={24} className="text-background" />,
          title: "Live Progress Tracking",
          description:
            "Monitor project updates in real-time and make data-driven decisions to improve efficiency.",
        },
        {
          icon: <TrendingUp size={24} className="text-background" />,
          title: "Performance Analytics",
          description:
            "Analyze project performance with key metrics and insights to optimize future workflows.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Daily Logs",
      subtitle: "Keep Track of Daily Project Activities",
      description:
        "Maintain detailed daily logs to document work progress, track site activities, and ensure clear communication among teams.",
      features: [
        {
          icon: <FileText size={24} className="text-background" />,
          title: "Automated Daily Reports",
          description:
            "Generate structured daily reports, including work completed, issues encountered, and progress updates.",
        },
        {
          icon: <Users size={24} className="text-background" />,
          title: "Crew & Equipment Tracking",
          description:
            "Log crew attendance, equipment usage, and material deliveries to maintain accurate records.",
        },
        {
          icon: <Bell size={24} className="text-background" />,
          title: "Incident & Issue Logging",
          description:
            "Record site incidents, delays, and safety concerns to ensure prompt resolution and accountability.",
        },
      ],
    },
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Scheduling",
      subtitle: "Optimize Project Timelines with Smart Scheduling",
      description:
        "Enhance efficiency with precise scheduling tools. Plan tasks, allocate resources, and prevent delays to ensure smooth project execution.",
      features: [
        {
          icon: <Calendar size={24} className="text-background" />,
          title: "Advanced Project Scheduling",
          description:
            "Create detailed project schedules with dependencies, milestones, and deadlines for better coordination.",
        },
        {
          icon: <Clock size={24} className="text-background" />,
          title: "Real-Time Timeline Adjustments",
          description:
            "Adjust schedules dynamically based on project changes, ensuring flexibility and efficiency.",
        },
        {
          icon: <AlertCircle size={24} className="text-background" />,
          title: "Conflict & Delay Alerts",
          description:
            "Get instant alerts on potential scheduling conflicts or delays, allowing for proactive problem-solving.",
        },
      ],
    },
  ],

  featureData: [
    {
      icon: <Calendar className="text-background" />,
      title: "Project Scheduling",
      description:
        "Plan and manage project timelines efficiently, ensuring tasks are completed on schedule.",
    },
    {
      icon: <ClipboardList className="text-background" />,
      title: "Task Management",
      description:
        "Assign, track, and update project tasks in real-time to keep the team aligned and productive.",
    },
    {
      icon: <Users className="text-background" />,
      title: "Team Collaboration",
      description:
        "Enhance communication and coordination between teams with shared project data and updates.",
    },
    {
      icon: <Clock className="text-background" />,
      title: "Real-Time Progress Tracking",
      description:
        "Monitor project progress in real-time and adjust workflows dynamically to avoid delays.",
    },
    {
      icon: <FileText className="text-background" />,
      title: "Daily Logs & Reports",
      description:
        "Maintain accurate daily logs and reports for documentation and accountability across projects.",
    },
    {
      icon: <TrendingUp className="text-background" />,
      title: "Project Performance",
      description:
        "Analyze key project metrics to identify bottlenecks, optimize resources, and improve efficiency.",
    },
    {
      icon: <FilePlus className="text-background" />,
      title: "Automated Reporting",
      description:
        "Generate detailed project reports automatically for tracking progress and decision-making.",
    },
    {
      icon: <AlertCircle className="text-background" />,
      title: "Risk & Issue Management",
      description:
        "Identify, track, and mitigate potential project risks to ensure smooth execution.",
    },
    {
      icon: <DollarSign className="text-background" />,
      title: "Budget & Cost Tracking",
      description:
        "Monitor budgets, control costs, and track financial data to ensure profitability.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Centralized Project Data",
      description:
        "Store and manage all project-related documents, drawings, and records in one secure platform.",
    },
    {
      icon: <FileBarChart className="text-background" />,
      title: "Project Insights & Forecasting",
      description:
        "Leverage data-driven insights to improve project planning and anticipate future challenges.",
    },
    {
      icon: <Settings className="text-background" />,
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks and approvals to streamline project management processes.",
    },
    {
      icon: <MapPin className="text-background" />,
      title: "Site & Location Tracking",
      description:
        "Track site activities, equipment locations, and material deliveries for better oversight.",
    },
    {
      icon: <UserCheck2 className="text-background" />,
      title: "Resource Allocation",
      description:
        "Efficiently assign workforce and equipment to projects to optimize utilization and productivity.",
    },
    {
      icon: <ShieldCheck className="text-background" />,
      title: "Compliance",
      description:
        "Ensure all project activities meet industry regulations and maintain compliance records.",
    },
    {
      icon: <ClipboardCheck className="text-background" />,
      title: "Quality Control & Inspections",
      description:
        "Conduct quality checks and inspections to maintain high construction standards.",
    },
    {
      icon: <RefreshCcw className="text-background" />,
      title: "Change Order Management",
      description:
        "Track and manage change orders efficiently, ensuring adjustments are documented and approved.",
    },
    {
      icon: <Bell className="text-background" />,
      title: "Instant Notifications & Alerts",
      description:
        "Get real-time alerts for task updates, deadline changes, and critical project events.",
    },
    {
      icon: <HardHat className="text-background" />,
      title: "Safety & Compliance",
      description:
        "Integrate safety protocols within project management to ensure compliance and reduce risks.",
    },
    {
      icon: <CheckCheckIcon className="text-background" />,
      title: "Project Completion",
      description:
        "Ensure smooth project handover with final inspections, documentation, and approvals.",
    },
  ],

  featuresData: {
    title: "Resources",
    subtitle: "Master Project Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        icon: <Calendar className="text-white" />,
        title: "Project Scheduling & Planning",
        description:
          "Create, manage, and adjust project schedules to keep tasks on track and meet deadlines efficiently.",
      },
      {
        icon: <ClipboardList className="text-white" />,
        title: "Task & Workflow Management",
        description:
          "Organize and assign project tasks, ensuring teams stay aligned and workflows run smoothly.",
      },
      {
        icon: <AlertCircle className="text-white" />,
        title: "Risk & Issue Tracking",
        description:
          "Identify potential project risks early, track issues, and implement solutions proactively.",
      },
      {
        icon: <BarChart className="text-white" />,
        title: "Project Performance Analytics",
        description:
          "Analyze key project metrics, identify bottlenecks, and optimize workflows for better efficiency.",
      },
      {
        icon: <FileText className="text-white" />,
        title: "Project Documentation",
        description:
          "Maintain comprehensive project records, daily logs, and reports for transparency.",
      },
      {
        icon: <RefreshCcw className="text-white" />,
        title: "Real-Time Project Updates",
        description:
          "Ensure all stakeholders have up-to-date project information with live progress.",
      },
    ],
  },

  ctaProps: {
    title: "Streamline Project Management for Efficiency",
    description: "",
    benefits: [
      "Seamless project",
      "Real-time task tracking",
      "Data-driven project insights",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};

export const PLATFORM_PAGE = {
  heroprops: {
    title: "Planning + Building",
    subtitle: "All-in-One Construction Solutions Platform",
    description:
      "Streamline project planning, execution, and tracking with advanced management tools. Stay on schedule, control costs, and enhance team collaboration for seamless project success.",
    buttonLabel: "Get Started",
    imageAlt: "Construction project management overview",
    linkHref: "/book-a-demo",
  },
  campaignChannels: {
    sectionTitle: "Connect on preferred channels",
    subtitle: "CAMPAIGN CHANNELS",
    description:
      "Create unique customer interactions across mobile and web through channels like email, push, in-app, and SMS.",
    features: [
      {
        icon: <Mail size={24} className="text-background" />,
        title: "Email marketing",
        description:
          "Automated journeys, one-time sends, and transactional messages.",
      },
      {
        icon: <Smartphone size={24} className="text-background" />,
        title: "In-app messages",
        description: "Embedded experiences in your website and app.",
      },
      {
        icon: <Bell size={24} className="text-background" />,
        title: "Push notifications",
        description:
          "Rich informational messages with deep linking capability.",
      },
      {
        icon: <MessagesSquare size={24} className="text-background" />,
        title: "SMS",
        description: "Deliver text, multimedia (MMS), and WhatsApp messages.",
      },
    ],
  },
  featuresData: {
    title: "Resources",
    subtitle: "Master Invoice Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    tagColor: "text-accent",
    bgColor: "bg-custombg",
    titleColor: "text-black",
    descriptionColor: "text-foreground-muted",
    cardBgColor: "bg-gray-100",
    hoverColor: "#3A3A3A",
    iconBgColor: "bg-white",
    features: [
      {
        icon: <FileText />,
        title: "Customizable Invoice",
        description:
          "Create and customize invoice templates with your brand’s logo, payment terms, and project details.",
      },
      {
        icon: <ClipboardList />,
        title: "Invoice History & Records",
        description:
          "Maintain an organized history of all invoices and payments, ensuring easy access to past financial data.",
      },
      {
        icon: <AlertTriangle />,
        title: "Invoice Discrepancy Alerts",
        description:
          "Get notified about any discrepancies or mismatches between invoices and payments for prompt resolution.",
      },
      {
        icon: <PieChart />,
        title: "Expense & Revenue Insights",
        description:
          "Analyze the breakdown of invoices to gain insights into project costs and revenue patterns.",
      },
      {
        icon: <Receipt />,
        title: "Comprehensive Billing Reports",
        description:
          "Generate billing reports to keep track of project invoicing and ensure financial transparency.",
      },
      {
        icon: <RefreshCcw />,
        title: "Invoice Updates",
        description:
          "Easily update or adjust invoices as project costs change, ensuring your records reflect the latest figures.",
      },
    ],
  },
  mainSection: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Scheduling",
      subtitle: "Optimize Project Timelines with Smart Scheduling",
      description:
        "Enhance efficiency with precise scheduling tools. Plan tasks, allocate resources, and prevent delays to ensure smooth project execution.",
      features: [
        {
          icon: <Calendar className="text-background" />,
          title: "Advanced Project Scheduling",
          description:
            "Create detailed project schedules with dependencies, milestones, and deadlines for better coordination.",
        },
        {
          icon: <ClipboardList className="text-background" />,
          title: "Task Management",
          description:
            "Assign, track, and update project tasks in real-time to keep the team aligned and productive.",
        },
        {
          icon: <AlertCircle className="text-background" />,
          title: "Conflict & Delay Alerts",
          description:
            "Get instant alerts on potential scheduling conflicts or delays, allowing for proactive problem-solving.",
        },
      ],
    },
  ],
  ctaProps: {
    title: "Streamline Project Management for Efficiency",
    description: "",
    benefits: [
      "Seamless project",
      "Real-time task tracking",
      "Data-driven project insights",
    ],
    button1Label: "Get Started",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },

  stickySection: {
    title: "Designed for your entire team",
    subtitle: "Platform features",
    description:
      "Tailored for universal usability, our platform minimizes operational overhead, guaranteeing maximum ROI for brands of all sizes.",
    features: [
      {
        title: "Workspaces",
        description:
          "Workspaces enable seamless management across multiple products...",
        icon: <PanelsTopLeft className="size-6 text-background" />,
      },
      {
        title: "User permissions",
        description:
          "Admin-level users can control who on your team can create...",
        icon: <Lock className="size-6 text-background" />,
      },
      {
        title: "Compliance",
        description:
          "As a data company, we understand the importance of keeping...",
        icon: <ShieldCheck className="size-6 text-background" />,
      },
      {
        title: "Integrations",
        description: "Flexible integrations your developers will love...",
        icon: <Layers className="size-6 text-background" />,
      },
    ],
  },
};

export const ALL_FEATURES = {
  heroprops: {
    title: "Comprehensive Construction Management Features",
    subtitle: "Complete Feature Suite",
    description:
      "Discover our full range of construction management tools designed to streamline your projects. From estimation and scheduling to resource management and compliance tracking, our platform provides everything you need to deliver successful construction projects.",
    buttonLabel: "Explore Features",
    imageAlt:
      "Overview of construction management software features including project scheduling, cost tracking, and resource management",
    linkHref: "/book-a-demo",
  },
  features: [
    {
      icon: <Calendar className="text-background" />,
      title: "Project Scheduling",
      description:
        "Plan and manage project timelines efficiently, ensuring tasks are completed on schedule.",
    },
    {
      icon: <ClipboardList className="text-background" />,
      title: "Task Management",
      description:
        "Assign, track, and update project tasks in real-time to keep the team aligned and productive.",
    },
    {
      icon: <Users className="text-background" />,
      title: "Team Collaboration",
      description:
        "Enhance communication and coordination between teams with shared project data and updates.",
    },
    {
      icon: <Clock className="text-background" />,
      title: "Real-Time Progress Tracking",
      description:
        "Monitor project progress in real-time and adjust workflows dynamically to avoid delays.",
    },
    {
      icon: <FileText className="text-background" />,
      title: "Daily Logs & Reports",
      description:
        "Maintain accurate daily logs and reports for documentation and accountability across projects.",
    },
    {
      icon: <TrendingUp className="text-background" />,
      title: "Project Performance",
      description:
        "Analyze key project metrics to identify bottlenecks, optimize resources, and improve efficiency.",
    },
    {
      icon: <FilePlus className="text-background" />,
      title: "Automated Reporting",
      description:
        "Generate detailed project reports automatically for tracking progress and decision-making.",
    },
    {
      icon: <AlertCircle className="text-background" />,
      title: "Risk & Issue Management",
      description:
        "Identify, track, and mitigate potential project risks to ensure smooth execution.",
    },
    {
      icon: <DollarSign className="text-background" />,
      title: "Budget & Cost Tracking",
      description:
        "Monitor budgets, control costs, and track financial data to ensure profitability.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Centralized Project Data",
      description:
        "Store and manage all project-related documents, drawings, and records in one secure platform.",
    },
    {
      icon: <FileBarChart className="text-background" />,
      title: "Project Insights & Forecasting",
      description:
        "Leverage data-driven insights to improve project planning and anticipate future challenges.",
    },
    {
      icon: <Settings className="text-background" />,
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks and approvals to streamline project management processes.",
    },
    {
      icon: <MapPin className="text-background" />,
      title: "Site & Location Tracking",
      description:
        "Track site activities, equipment locations, and material deliveries for better oversight.",
    },
    {
      icon: <UserCheck2 className="text-background" />,
      title: "Resource Allocation",
      description:
        "Efficiently assign workforce and equipment to projects to optimize utilization and productivity.",
    },
    {
      icon: <ShieldCheck className="text-background" />,
      title: "Compliance",
      description:
        "Ensure all project activities meet industry regulations and maintain compliance records.",
    },
    {
      icon: <ClipboardCheck className="text-background" />,
      title: "Quality Control & Inspections",
      description:
        "Conduct quality checks and inspections to maintain high construction standards.",
    },
    {
      icon: <RefreshCcw className="text-background" />,
      title: "Change Order Management",
      description:
        "Track and manage change orders efficiently, ensuring adjustments are documented and approved.",
    },
    {
      icon: <Bell className="text-background" />,
      title: "Instant Notifications & Alerts",
      description:
        "Get real-time alerts for task updates, deadline changes, and critical project events.",
    },
    {
      icon: <HardHat className="text-background" />,
      title: "Safety & Compliance",
      description:
        "Integrate safety protocols within project management to ensure compliance and reduce risks.",
    },
    {
      icon: <CheckCheckIcon className="text-background" />,
      title: "Project Completion",
      description:
        "Ensure smooth project handover with final inspections, documentation, and approvals.",
    },
  ],
  ctaProps: {
    title: "Streamline Project Management for Efficiency",
    description: "",
    benefits: [
      "Seamless project",
      "Real-time task tracking",
      "Data-driven project insights",
    ],
    button1Label: "Get Started",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};

export const INTEGRATION = {
  heroprops: {
    title: "Comprehensive Construction Management Features",
    subtitle: "Complete Feature Suite",
    description:
      "Discover our full range of construction management tools designed to streamline your projects. From estimation and scheduling to resource management and compliance tracking, our platform provides everything you need to deliver successful construction projects.",
    buttonLabel: "Explore Features",
    imageAlt:
      "Overview of construction management software features including project scheduling, cost tracking, and resource management",
    linkHref: "/book-a-demo",
  },
  featureIntegration: {
    title: "Customer top picks",
    subtitle: "Featured integrations",
    apps: [
      {
        href: "https://customer.io/docs/journeys/amazon-s3-data-out",
        image: "/Solutions/amazon-s3.png",

        name: "Amazon S3",
        description:
          "Streamline data transfer from Customer.io to Amazon S3 storage, including messages, people, metrics, and more.",
      },
      {
        href: "https://customer.io/docs/journeys/amazon-s3-data-out",
        image: "/Solutions/amplitude.png",
        name: "Amplitude",
        description:
          "Streamline data transfer from Customer.io to Amazon S3 storage, including messages, people, metrics, and more.",
      },

      {
        href: "https://customer.io/docs/journeys/amazon-s3-data-out",
        image: "/Solutions/amplitude.png",
        name: "Amplitude",
        description:
          "Streamline data transfer from Customer.io to Amazon S3 storage, including messages, people, metrics, and more.",
      },

      {
        href: "https://customer.io/docs/journeys/amazon-s3-data-out",
        image: "/Solutions/amplitude.png",
        name: "Amplitude",
        description:
          "Streamline data transfer from Customer.io to Amazon S3 storage, including messages, people, metrics, and more.",
      },

      {
        href: "https://customer.io/docs/journeys/amazon-s3-data-out",
        image: "/Solutions/amplitude.png",
        name: "Amplitude",
        description:
          "Streamline data transfer from Customer.io to Amazon S3 storage, including messages, people, metrics, and more.",
      },

      {
        href: "https://customer.io/docs/journeys/amazon-s3-data-out",
        image: "/Solutions/amplitude.png",
        name: "Amplitude",
        description:
          "Streamline data transfer from Customer.io to Amazon S3 storage, including messages, people, metrics, and more.",
      },
      {
        href: "https://customer.io/docs/journeys/amazon-s3-data-out",
        image: "/Solutions/amplitude.png",
        name: "Amplitude",
        description:
          "Streamline data transfer from Customer.io to Amazon S3 storage, including messages, people, metrics, and more.",
      },
      {
        href: "https://customer.io/docs/journeys/amazon-s3-data-out",
        image: "/Solutions/amplitude.png",
        name: "Amplitude",
        description:
          "Streamline data transfer from Customer.io to Amazon S3 storage, including messages, people, metrics, and more.",
      },
      {
        href: "https://customer.io/docs/journeys/amazon-s3-data-out",
        image: "/Solutions/amplitude.png",
        name: "Amplitude",
        description:
          "Streamline data transfer from Customer.io to Amazon S3 storage, including messages, people, metrics, and more.",
      },
    ],
  },
  featuresData: {
    title: "Resources",
    subtitle: "Master Project Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        icon: <Calendar className="text-white" />,
        title: "Project Scheduling & Planning",
        description:
          "Create, manage, and adjust project schedules to keep tasks on track and meet deadlines efficiently.",
      },
      {
        icon: <ClipboardList className="text-white" />,
        title: "Task & Workflow Management",
        description:
          "Organize and assign project tasks, ensuring teams stay aligned and workflows run smoothly.",
      },
      {
        icon: <AlertCircle className="text-white" />,
        title: "Risk & Issue Tracking",
        description:
          "Identify potential project risks early, track issues, and implement solutions proactively.",
      },
      {
        icon: <BarChart className="text-white" />,
        title: "Project Performance Analytics",
        description:
          "Analyze key project metrics, identify bottlenecks, and optimize workflows for better efficiency.",
      },
      {
        icon: <FileText className="text-white" />,
        title: "Project Documentation",
        description:
          "Maintain comprehensive project records, daily logs, and reports for transparency.",
      },
      {
        icon: <RefreshCcw className="text-white" />,
        title: "Real-Time Project Updates",
        description:
          "Ensure all stakeholders have up-to-date project information with live progress.",
      },
    ],
  },
  ctaProps: {
    title: "Streamline Project Management for Efficiency",
    description: "",
    benefits: [
      "Seamless project",
      "Real-time task tracking",
      "Data-driven project insights",
    ],
    button1Label: "Get Started",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};

export const SECURITY_PAGE = {
  heroProps: {
    subtitle: "Security",
    description:
      "Ensure safety and security on your construction sites with advanced surveillance, access control, and real-time monitoring solutions.",
    imageSrc: "/Solutions/security.png", // Update this!
    imageAlt: "Construction site with advanced security systems",
    linkHref: "/security-solutions",
  },

  TestimonalsSectionProps: {
    subtitle: "SAFETY AND PROTECTION",
    title: "Securing Construction Sites",
    description:
      "Ensure construction site safety with advanced security solutions, including real-time surveillance, access control.",
    features: [
      {
        title: "Advanced Surveillance",
        description:
          "Monitor your construction site 24/7 with high-definition cameras and AI-powered threat detection, ensuring safety at all times.",
        icon: <Camera size={24} />,
      },
      {
        title: "Access Control Systems",
        description:
          "Prevent unauthorized access with biometric authentication, smart badges, and remote monitoring to keep your site secure.",
        icon: <Lock size={24} />,
      },
      {
        title: "Real-time Incident Alerts",
        description:
          "Stay ahead of potential threats with automated alerts and instant notifications for any security breaches or unusual activity.",
        icon: <BellRing size={24} />,
      },
    ],
  },

  stickySection: {
    title: "Comprehensive Security for Your Site",
    subtitle: "Security Features",
    description:
      "Our security solutions are designed to safeguard construction sites, minimize risks, and ensure a safe working environment for everyone.",
    features: [
      {
        title: "24/7 Site Monitoring",
        description:
          "Keep an eye on your construction site around the clock with AI-powered surveillance and remote monitoring capabilities.",
        icon: <Camera className="size-6 text-background" />,
      },
      {
        title: "Secure Access Control",
        description:
          "Control site entry with advanced authentication methods like biometrics, smart badges, and mobile verification.",
        icon: <Key className="size-6 text-background" />,
      },
      {
        title: "Incident Detection & Alerts",
        description:
          "Receive real-time alerts for unauthorized access, equipment tampering, and other security threats to act swiftly.",
        icon: <BellRingIcon className="size-6 text-background" />,
      },
      {
        title: "Emergency Response Integration",
        description:
          "Ensure rapid response to incidents with integrated emergency protocols and automated escalation procedures.",
        icon: <ShieldAlert className="size-6 text-background" />,
      },
    ],
  },

  faqSection: {
    title: "Security FAQs",
    description:
      "Have questions about securing your construction site? We've got answers to help you ensure safety and compliance.",
    faqs: [
      {
        question: "How can I improve security on my construction site?",
        answer:
          "Enhancing security involves using surveillance systems, controlled access, real-time monitoring, and ensuring all personnel follow strict security protocols.",
      },
      {
        question: "What are the benefits of a 24/7 monitoring system?",
        answer:
          "A 24/7 monitoring system reduces theft, prevents unauthorized access, and ensures quick response times in case of emergencies.",
      },
      {
        question: "How does access control help in site security?",
        answer:
          "Access control systems restrict entry to authorized personnel only, reducing the risk of trespassing and equipment theft.",
      },
      {
        question: "Can security solutions integrate with my existing systems?",
        answer:
          "Yes, most modern security solutions can integrate with your current project management tools and surveillance systems for seamless operation.",
      },
      {
        question: "What should I do in case of a security breach?",
        answer:
          "Have a clear emergency response plan, alert security personnel immediately, and ensure that incidents are recorded and reported for further action.",
      },
      {
        question: "How do real-time alerts improve security?",
        answer:
          "Real-time alerts notify you instantly about suspicious activity, unauthorized access, or safety hazards, allowing quick action to prevent issues.",
      },
      {
        question:
          "What security measures should I take for high-value equipment?",
        answer:
          "Implement asset tracking, restrict equipment access to authorized users, and use GPS-enabled security systems for real-time location monitoring.",
      },
      {
        question:
          "How can I ensure compliance with construction security regulations?",
        answer:
          "Stay updated with industry security standards, conduct regular audits, and implement the latest security technologies to meet compliance requirements.",
      },
      {
        question: "What role does cybersecurity play in construction security?",
        answer:
          "Cybersecurity is essential for protecting digital blueprints, project data, and surveillance systems from hacking attempts and data breaches.",
      },
      {
        question: "How can I train my team to follow security protocols?",
        answer:
          "Regular security training sessions, clear communication of protocols, and enforcing strict access control measures can ensure compliance and safety on-site.",
      },
    ],
    contactTitle: "Need Help with Site Security?", // ✅ Contact Us title
    contactDescription:
      "Get in touch with our security experts for tailored solutions that keep your construction site safe and secure.",
  },

  ctaProps: {
    title: "Enhance Security on Your Construction",
    description: "",
    benefits: [
      "24/7 monitoring",
      "Seamless integration",
      "Customizable security",
    ],
    button1Label: "Get Started",
    button1Link: "/schedule-consultation",
    button2Label: "Start a trail",
    button2Link: "/free-security-audit",
  },
};

export const KNOWLEDGE_PAGE = {
  searchSectionProps: {
    title: "What can we help you find?",
    placeholder: "Search",
    icons: {
      search: <Search size={20} />,
    },
  },
  cardSectionProps: {
    sectionTitle: "Knowledge",
    cards: [
      {
        imageSrc: "/Solutions/card1.png",
        title:
          "Introducing ZedAI: The Smart Agent from ZedOps kjksjkjdklsjsfnd,mfnsmdjdsfhdfkj",
      },
      {
        imageSrc: "/Solutions/card2.png",
        title:
          "Reimagining Construction Management with AI: A Game-Changer for SMBs",
      },
      {
        imageSrc: "/Solutions/card3.png",
        title:
          "10 Essential Features Every Construction Management System Should Have",
      },
    ],
  },
  getStartedProps: {
    title: "Get Started",
    items: [
      {
        title: "Subscriptions",
        description:
          "Manage your subscription details and billing information.",
      },
      {
        title: "Account & Projects",
        description:
          "Manage your account settings and access all your construction projects.",
      },
      {
        title: "Plans",
        description:
          "View, share, and manage your construction plans and blueprints.",
      },
      {
        title: "Tasks",
        description:
          "Create, assign, and track individual tasks related to your projects.",
      },
      {
        title: "Reports",
        description:
          "Generate and access detailed reports on project progress, costs, and performance.",
      },
      {
        title: "Photos",
        description:
          "Upload, organize, and share photos documenting project progress and site conditions.",
      },
      {
        title: "Forms",
        description:
          "Access and manage digital forms for inspections, safety checklists, and other site documentation.",
      },
      {
        title: "Files",
        description:
          "Store, organize, and share all project-related documents, including contracts, permits, and specifications.",
      },
      {
        title: "3D Models (BIM)",
        description:
          "Visualize and interact with Building Information Models (BIM) for enhanced project understanding.",
      },
      {
        title: "Submittals",
        description:
          "Manage and track the submittal process, ensuring timely approval of materials and equipment.",
      },
      {
        title: "Change Order",
        description:
          "Create, track, and manage change orders to effectively address project modifications and their impact.",
      },
      {
        title: "Budget",
        description:
          "Track project costs against the budget, identify variances, and manage financial performance.",
      },
    ],
  },
};

export const WEBINARS_PAGE = {
  searchSectionProps: {
    title: "What can we help you find?",
    placeholder: "Search",
    videoUrl: "videos",
    videoName: "Videos",
    description: "Searching for more videos? Check out our video library.",
    icons: {
      search: <Search size={20} />,
      video: <PlayCircle size={40} className="text-black fill-white" />,
    },
  },

  cardSectionProps: {
    sectionTitle: "Webinars",
    cards: [
      {
        imageSrc: "/Solutions/card1.png",
        title: "Streamline Labor & Equipment Management: One Powerful Platform",
      },
      {
        imageSrc: "/Solutions/card2.png",
        title: "Optimize Workforce & Equipment: Simplify Operations",
      },
      {
        imageSrc: "/Solutions/card3.png",
        title: "Boost Efficiency: Unified Labor & Equipment Oversight",
      },
      {
        imageSrc: "/Solutions/card3.png",
        title: "Seamless Jobsite Coordination: Labor & Equipment Synced",
      },
      {
        imageSrc: "/Solutions/card3.png",
        title: "Smart Construction Management: One Integrated Solution",
      },
      {
        imageSrc: "/Solutions/card3.png",
        title: "All-in-One Construction Control: Labor & Equipment Simplified",
      },
    ],
  },
};

export const CASESTUDIES_PAGE = {
  searchSectionProps: {
    subtitle: "Featured Story",
    title: "Oxford streamlines global projects with Zedops",
    placeholder: "Search",
    videoUrl: "video",
    videoName: "case",
    description:
      "Looking for more case studies? Explore our case study library",
    icons: {
      search: <Search size={20} />,
      video: <BookOpen size={30} />,
    },
  },

  cardSectionProps: {
    sectionTitle: "Case Studies",
    cards: [
      {
        imageSrc: "/Solutions/case1.jpg",
        title: "Streamline Labor & Equipment Management: One Powerful Platform",
      },
      {
        imageSrc: "/Solutions/case2.jpg",
        title: "Optimize Workforce & Equipment: Simplify Operations",
      },
      {
        imageSrc: "/Solutions/case3.jpg",
        title: "Boost Efficiency: Unified Labor & Equipment Oversight",
      },
      {
        imageSrc: "/Solutions/case4.jpg",
        title: "Seamless Jobsite Coordination: Labor & Equipment Synced",
      },
      {
        imageSrc: "/Solutions/case5.jpg",
        title: "Smart Construction Management: One Integrated Solution",
      },
      {
        imageSrc: "/Solutions/case6.jpg",
        title: "All-in-One Construction Control: Labor & Equipment Simplified",
      },
    ],
  },
};
export const FAQ_PAGE = {
  searchSectionProps: {
    subtitle: "Have Questions? We’ve Got Answers",
    title: "Your Guide to Oxford’s Zedops Integration – FAQs",
    placeholder: "Search",
    videoUrl: "video",
    videoName: "Faq's",
    description: "Have more questions? Browse our comprehensive FAQ library.",
    icons: {
      search: <Search size={20} />,
      video: <MessageCircleQuestion size={30} />,
    },
  },
};
