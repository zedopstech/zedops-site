import {
  SpellCheck,
  Layers2,
  Sparkles,
  TrendingUpDown,
  Box,
  Drill,
  Braces,
  Megaphone,
  SearchCheck,
  Sword,
  Logs,
  HardDriveDownload,
  CloudCog,
  Ratio,
  ReceiptText,
  ZapOff,
  FilePlus,
  ShieldHalf,
  SquareCode,
  ChartSpline,
  Cable,
  SquareActivity,
  TabletSmartphone,
  Sun,
  PlaneTakeoff,
  MapPinCheckInside,
  ArrowDownUp,
  SquareDashedMousePointer,
  NotebookPen,
  GraduationCap,
  FileBox,
  Handshake,
  ShieldEllipsis,
  FolderUp,
} from "lucide-react";

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
