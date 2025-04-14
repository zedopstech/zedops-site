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
  BetweenVerticalStart,
  StepBack,
  Wifi,
  TableOfContents,
  Construction,
  Power,
  Ellipsis,
  FileText,
} from "lucide-react";

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
      image: "/Solutions/estimation-section.jpg",
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
      image: "/Solutions/estimation section-1.jpg",
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
