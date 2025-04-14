import {
  ShieldCheck,
  ClipboardList,
  AlertTriangle,
  ShieldAlert,
  Thermometer,
  CheckCheck,
  ClipboardCheck,
  Layers,
  Bell,
  RefreshCcw,
  Target,
  TrendingDown,
  Database,
  FilePlus,
  FileBarChart,
  Calendar,
  Receipt,
  BarChart,
  AlertCircle,
  Clock,
  FileText,
} from "lucide-react";

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
            "Conduct regular quality checks and inspections to ensure the project adheres to defined quality standards.",
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
