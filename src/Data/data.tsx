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
  BookOpenText
} from "lucide-react";

export const ESTIMATION_PAGE = {
  heroProps: {
    subtitle: "Estimation",
    description:
      "Streamline your construction project estimation with precision. Use accurate tools to forecast costs, manage resources, and optimize planning effortlessly.",
    buttonLabel: "Get Started",
    imageSrc: "/solutions/estimation-hero.jpg",

    imageAlt: "Construction professionals using estimation software",
    linkHref: "/book-a-demo",
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
        imageSrc: "/solutions/estimation-1.jpg",
      },
      {
        title: "Advanced Cost Breakdown",
        description:
          "Break down materials, labor, and equipment costs with granular control, ensuring precise budget planning.",
        imageSrc: "/solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "BUDGET WITH CONFIDENCE",
    title: "Control Your Project Costs",
    imageSrc: "/solutions/estimation-testimonal.jpg",
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
      image: "/solutions/estimation section.jpg",

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
      image: "/solutions/estimation section-1.jpg",

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
      "Streamline your construction project prequalification process. Gain insights and ensure that you're working with the right contractors for every project.",
    buttonLabel: "Get Started",
    imageSrc: "/solutions/estimation-hero.jpg",
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
        imageSrc: "/solutions/estimation-1.jpg",
      },
      {
        title: "Risk Assessment Tools",
        description:
          "Leverage built-in risk assessment tools to evaluate contractors' financial health, compliance, and past project performance.",
        imageSrc: "/solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "PREQUALIFY WITH CONFIDENCE",
    title: "Trust through Prequalification",
    imageSrc: "/solutions/estimation-testimonal.jpg",
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
      image: "/solutions/estimation section.jpg", // Path to your left-side image
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
      image: "/solutions/estimation section-1.jpg", // Path to your left-side image
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
      "Transform your construction projects with cutting-edge BIM technology. Effortlessly manage, visualize, and collaborate on your building designs with precision and efficiency.",
    buttonLabel: "Get Started",
    imageSrc: "/solutions/estimation-hero.jpg",
    imageAlt: "Construction professionals working with BIM technology",
    linkHref: "/book-a-demo",
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
        imageSrc: "/solutions/estimation-1.jpg",
      },
      {
        title: "3D modeling and visualization",
        description:
          "Create detailed 3D models of your projects, visualize designs, and detect potential issues before construction begins.",
        imageSrc: "/solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "TEAMWORK AND ACCURACY",
    title: "Efficiency with BIM at the core",
    imageSrc: "/solutions/estimation-testimonal.jpg",
    imageAlt: "Professionals using BIM for a collaborative project",
    features: [
      {
        title: "Accurate modeling for fewer errors",
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
      image: "/solutions/estimation section.jpg", // Path to your left-side image
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
      image: "/solutions/estimation section-1.jpg", // Path to your right-side image
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
    subtitle: "Inventory Management",
    description:
      "Optimize your construction inventory with real-time tracking and smart resource allocation. Reduce waste, improve efficiency, and keep projects on schedule with accurate inventory insights.",
    buttonLabel: "Get Started",
    imageSrc: "/solutions/estimation-hero.jpg",
    imageAlt: "Construction site inventory management",
    linkHref: "/book-a-demo",
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
        imageSrc: "/solutions/estimation-1.jpg",
      },
      {
        title: "Seamless Asset Management",
        description:
          "Keep track of equipment location, condition, and availability to reduce losses and improve project efficiency.",
        imageSrc: "/solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "EFFICIENT RESOURCE MANAGEMENT",
    title: "Take Full Control of Your Inventory",
    imageSrc: "/solutions/estimation-testimonal.jpg",
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
      image: "/solutions/estimation section.jpg",
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
      image: "/solutions/estimation section-1.jpg",
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
      icon: <ClipboardMinus  className="text-background" />,
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
  features: [
    {
      title: "Enhance Your Inventory Strategy",
      description: "Watch the workshop",
      icon: <Ribbon className="text-white" />,
    },
    {
      icon: <Loader className="text-white" />,
      title: "Best Practices for Inventory Management",
      description: "Access the guide",
    },
    {
      icon: <Warehouse className="text-white" />,
      title: "Optimizing Warehouse Layouts",
      description: "Access the guide",
    },
    {
      icon: <Biohazard className="text-white" />,
      title: "Reducing Material Waste",
      description: "Access the guide",
    },
    {
      icon: <Route className="text-white" />,
      title: "Cost-Efficient Procurement Strategies",
      description: "Access the guide",
    },
    {
      icon: <GitCompare className="text-white" />,
      title: "Effective Inventory Control Techniques",
      description: "Access the guide",
    },
  ],
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
