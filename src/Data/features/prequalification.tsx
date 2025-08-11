import {
  ChevronsUp,
  ShieldBan,
  Sparkles,
  UserPen,
  LaptopMinimalCheck,
  BadgeCheck,
  Asterisk,
  ListChecks,
  MapPinCheck,
  ArrowBigRight,
  Scan,
  MonitorSmartphone,
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
  FileText,
  BetweenVerticalStart,
  StepBack,
  Wifi,
  TableOfContents,
  Construction,
  Power,
  Ellipsis,
  ShieldCheck,
  BarChart3,
  CheckCircle,
} from "lucide-react"; // Assume these icons are imported

export const PREQUALIFICATION_PAGE = {
  // --- HERO SECTION ---
  heroProps: {
    subtitle: "Build With Confidence. Prequalify The Best Partners, Every Time.",
    description:
      "Move beyond manual vetting and endless paperwork. Zedops provides a streamlined, data-driven prequalification process to help you select reliable and qualified contractors for your projects.",
    buttonLabel: "See How It Works",
    imageSrc: "/Solutions/Prequalification/prequalification_hero.jpeg",
    imageAlt: "A project manager confidently reviewing contractor qualifications on a tablet.",
    linkHref: "/book-a-demo",
    floatingCards: [
      {
        icon: ShieldCheck,
        title: "Compliance Verified",
        subtitle: "ABC Contracting",
        positionClasses: "top-1/3 -left-24 hidden lg:block",
      },
      {
        icon: BarChart3,
        title: "Risk Score: Low",
        subtitle: "Financial & Safety Analysis",
        positionClasses: "top-10 -right-16 hidden lg:block",
      },
      {
        icon: CheckCircle,
        title: "Status: Approved",
        subtitle: "Ready for Project Onboarding",
        positionClasses: "bottom-1/4 -right-16 hidden lg:block",
      },
    ],
  },
  
  // --- SUB-HERO / VALUE PROPOSITION ---
  // (Note: The original structure had two hero sections, I've repurposed the second one)
  heroSectionProps: {
    subtitle: "The Foundation of a Successful Project",
    title: "Eliminate Guesswork, Minimize Risk.",
    description:
      "Our prequalification module transforms a complex, high-risk process into a simple, transparent, and automated workflow. Ensure every partner on your project has been vetted for quality, safety, and financial stability.",
    buttonLabel: "Request a Demo",
    buttonLink: "/book-a-demo",
  },

  // --- CORE FEATURES ---
  featuresSectionProps: {
    features: [
      {
        title: "Automated Data Collection",
        description:
          "Replace manual forms and chasing emails. Invite contractors to a secure portal where they submit all required documentation and data through standardized, easy-to-use forms.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Data-Driven Risk Analysis",
        description:
          "Instantly assess contractor health with dashboards that analyze financial stability, safety records (like EMR), and compliance data, giving you a clear risk score for every applicant.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  
  // --- BENEFITS / OUTCOMES ---
  TestimonalsSectionProps: { // Renamed conceptually to "Benefits"
    subtitle: "Why Zedops Prequalification?",
    title: "Build Your A-Team with Confidence",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "An illustration showing a checklist and a shield, symbolizing risk mitigation.",
    features: [
      {
        title: "Accelerate Project Kick-off",
        description:
          "Drastically reduce the time it takes to vet and select partners, moving your projects from planning to groundbreaking faster.",
        icon: <ChevronsUp size={24} />,
      },
      {
        title: "Protect Your Projects & Reputation",
        description:
          "Minimize the risk of project delays, budget overruns, and safety incidents by ensuring every partner on site is thoroughly qualified.",
        icon: <ShieldBan size={24} />,
      },
      {
        title: "Free Up Your Team",
        description:
          "Automate the repetitive administrative tasks of prequalification, allowing your team to focus on high-value project management activities.",
        icon: <Sparkles size={24} />,
      },
    ],
  },

  // --- DETAILED FEATURE SECTIONS ---
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "360-Degree Contractor Profiles",
      subtitle: "A Single Source of Truth",
      description:
        "Aggregate all critical contractor information into a unified, easy-to-review profile. Compare applicants apples-to-apples and make decisions based on data, not just gut feeling.",
      features: [
        {
          icon: <UserPen size={24} className="text-background" />,
          title: "Comprehensive Data Management",
          description:
            "Manage everything in one place: trade licenses, insurance certificates, compliance documents, and key personnel.",
        },
        {
          icon: <LaptopMinimalCheck size={24} className="text-background" />,
          title: "Verified Project History",
          description:
            "Analyze a contractor's track record with verified details on past projects, including scope, value, and client references.",
        },
        {
          icon: <BadgeCheck size={24} className="text-background" />,
          title: "Financial Health Dashboard",
          description:
            "Evaluate financial stability with tools that help analyze submitted financial statements and creditworthiness.",
        },
      ],
    },
    {
      image: "/Solutions/estimation-section-1.jpg",
      imageOnRight: "true",
      title: "Customizable Evaluation",
      subtitle: "Your Standards, Your Workflow",
      description:
        "Every project is unique. Our platform allows you to tailor the prequalification process to your specific needs, ensuring you evaluate contractors against the criteria that matter most to you.",
      features: [
        {
          icon: <Asterisk size={24} className="text-background" />,
          title: "Custom Scoring & Weighting",
          description:
            "Create your own scoring criteria. Assign more weight to safety performance, financial health, or past experience as needed.",
        },
        {
          icon: <ListChecks size={24} className="text-background" />,
          title: "Automated Compliance Checks",
          description:
            "Set rules to automatically flag contractors who don't meet mandatory compliance standards for safety, insurance, or bonding.",
        },
        {
          icon: <MapPinCheck size={24} className="text-background" />,
          title: "Continuous Qualification Tracking",
          description:
            "Don't just prequalify once. Our system tracks expiring licenses and insurance, ensuring your partners remain qualified throughout the project.",
        },
      ],
    },
  ],

  // --- GRID OF ALL FEATURES ---
  featureData: [
    {
      icon: <ArrowBigRight className="text-background" />,
      title: "Digital Submission Portal",
      description: "An easy-to-use portal for contractors to submit their information and documents.",
    },
    {
      icon: <Scan className="text-background" />,
      title: "Customizable Questionnaires",
      description: "Build tailored prequalification forms with questions specific to your project's risk profile.",
    },
    {
      icon: <MonitorSmartphone className="text-background" />,
      title: "Real-Time Application Tracking",
      description: "Monitor the submission status of all invited contractors from a single dashboard.",
    },
    {
      icon: <BellRing className="text-background" />,
      title: "Automated Reminders",
      description: "Automatically notify contractors about incomplete applications or upcoming deadlines.",
    },
    {
      icon: <Star className="text-background" />,
      title: "Performance Scoring System",
      description: "Rate and rank contractors based on your custom criteria to easily identify top candidates.",
    },
    {
      icon: <Radical className="text-background" />,
      title: "Historical Performance Review",
      description: "Access a complete history of a contractor's performance on your past projects.",
    },
    {
      icon: <BookDown className="text-background" />,
      title: "Comprehensive Reporting",
      description: "Generate detailed reports on contractor qualifications, risk assessments, and final selections.",
    },
    {
      icon: <Gavel className="text-background" />,
      title: "Built-in Risk Management",
      description: "Evaluate contractors using integrated tools to mitigate financial, safety, and compliance risks.",
    },
    {
      icon: <TicketCheck className="text-background" />,
      title: "Automated Compliance Verification",
      description: "Flag expired licenses, missing insurance, or non-compliant safety records automatically.",
    },
    {
      icon: <Package className="text-background" />,
      title: "Seamless ERP/PM Integration",
      description: "Push approved contractor data directly into your existing project management or ERP systems.",
    },
    {
      icon: <FileStack className="text-background" />,
      title: "Multi-Project Management",
      description: "Manage prequalification across your entire portfolio of projects from one centralized platform.",
    },
    {
      icon: <PackageSearch className="text-background" />,
      title: "Collaborative Review",
      description: "Enable team members to review, score, and comment on contractor applications collaboratively.",
    },
  ],
  
  // --- RESOURCES / GUIDES SECTION ---
  featuresData: {
    title: "Become a Prequalification Expert",
    subtitle: "Helpful Resources",
    description:
      "Explore our guides and best practices to build a world-class contractor vetting process.",
    features: [
      {
        icon: <StepBack className="text-white" />,
        title: "Tutorial: Setting Up Your First Workflow",
        description: "Watch the video guide",
      },
      {
        icon: <Wifi className="text-white" />,
        title: "The Ultimate Guide to Contractor Prequalification",
        description: "Read the article",
      },
      {
        icon: <TableOfContents className="text-white" />,
        title: "How to Effectively Evaluate Contractor Financials",
        description: "Access the guide",
      },
      {
        icon: <Construction className="text-white" />,
        title: "Top 5 Compliance Risks to Avoid in Construction",
        description: "Read the article",
      },
    ],
  },
  
  // --- FINAL CALL TO ACTION ---
  ctaProps: {
    title: "Ready to Build Your Trusted Team of Partners?",
    description: "Take the first step towards minimizing project risk and ensuring quality from day one. See how our prequalification module can transform your process.",
    benefits: [
      "Reduce risk of project failure",
      "Save administrative hours",
      "Accelerate project timelines",
    ],
    button1Label: "Request Your Free Demo",
    button1Link: "/book-a-demo",
    button2Label: "Talk to Sales",
    button2Link: "/contact-sales",
  },
};