import {
  MessagesSquare,
  FileText,
  ClipboardList,
  AlertTriangle,
  PieChart,
  Receipt,
  Calendar,
  AlertCircle,
  PanelsTopLeft,
  Lock,
  ShieldCheck,
  Layers,
  Share2,
  BellRing,
  RefreshCcw,
} from "lucide-react";

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
    sectionTitle: "Seamless Team Collaboration",
    subtitle: "COMMUNICATION & COLLABORATION",
    description:
      "Keep everyone connected and informed with integrated communication tools designed for construction teams.",
    features: [
      {
        icon: <MessagesSquare size={24} className="text-background" />,
        title: "Team Messaging",
        description:
          "Centralized communication channels for project teams, subcontractors, and stakeholders.",
      },
      {
        icon: <Share2 size={24} className="text-background" />,
        title: "Document Sharing & Control",
        description: "Share plans, specs, and reports with version control and access management.",
      },
      {
        icon: <BellRing size={24} className="text-background" />,
        title: "Real-time Notifications",
        description:
          "Stay updated on task assignments, schedule changes, and critical alerts instantly.",
      },
      {
        icon: <ClipboardList size={24} className="text-background" />,
        title: "Task Updates & Progress",
        description: "Track and communicate task progress directly within the platform.",
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
