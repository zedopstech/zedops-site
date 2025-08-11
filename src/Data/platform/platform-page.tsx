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
  // New icons for updated content
  Calculator,
  GanttChartSquare,
  HardHat,
  DollarSign,
  Users,
} from "lucide-react";

export const PLATFORM_PAGE = {
  // --- HERO SECTION ---
  heroprops: {
    title: "The All-in-One Command Center for Construction",
    subtitle: "One Platform. Total Control.", // Using title as headline and subtitle as pre-headline
    description:
      "Stop juggling disconnected apps and spreadsheets. Zedops brings your entire project lifecycle—from pre-construction planning and on-site execution to financial tracking and team management—into a single, integrated platform.",
    buttonLabel: "Request a Demo",
    imageAlt: "A dynamic dashboard view of the Zedops platform showing multiple project modules.",
    linkHref: "/book-a-demo",
  },

  // --- COLLABORATION SECTION ---
  campaignChannels: {
    sectionTitle: "Connect Your Field and Office",
    subtitle: "UNIFIED TEAM COLLABORATION",
    description:
      "Break down communication silos and ensure every team member, from the site to the office, is working with the same real-time information.",
    features: [
      {
        icon: <MessagesSquare size={24} className="text-background" />,
        title: "Centralized Communication",
        description:
          "Keep all project-related conversations, updates, and decisions in one place, creating a clear audit trail.",
      },
      {
        icon: <Share2 size={24} className="text-background" />,
        title: "Controlled Document Sharing",
        description: "Share the latest plans, contracts, and submittals with version control and granular permissions.",
      },
      {
        icon: <BellRing size={24} className="text-background" />,
        title: "Automated Notifications",
        description:
          "Keep everyone in the loop with instant alerts for new tasks, overdue items, and critical project updates.",
      },
      {
        icon: <ClipboardList size={24} className="text-background" />,
        title: "Actionable Task Management",
        description: "Assign tasks, track progress, and ensure accountability across your entire project team.",
      },
    ],
  },
  
  // --- RESOURCES / MODULES SECTION ---
  // Repurposing this section to showcase key modules
  featuresData: {
    title: "Explore the Integrated Modules", // Repurposed title
    subtitle: "A Tool For Every Task", // Repurposed subtitle
    description:
      "Each module is powerful on its own, but they work together to create a seamless flow of information across your projects.",
    tagColor: "text-accent",
    bgColor: "bg-custombg",
    titleColor: "text-black",
    descriptionColor: "text-foreground-muted",
    cardBgColor: "bg-gray-100",
    hoverColor: "#3A3A3A",
    iconBgColor: "bg-white",
    features: [
      {
        icon: <Calculator />,
        title: "Estimation & Bidding",
        description:
          "Create fast, accurate bids with digital takeoffs and a centralized cost database to win more profitable work.",
      },
      {
        icon: <GanttChartSquare />,
        title: "Project Scheduling",
        description:
          "Build and manage detailed project schedules with task dependencies and critical path tracking.",
      },
      {
        icon: <HardHat />,
        title: "Field Reporting & Safety",
        description:
          "Empower site teams to capture daily logs, conduct inspections, and report hazards from their mobile devices.",
      },
      {
        icon: <DollarSign />,
        title: "Financial Management",
        description:
          "Connect field data to your budget in real-time for accurate job costing and financial forecasting.",
      },
      {
        icon: <Users />,
        title: "Resource Management",
        description:
          "Allocate and track your crew, equipment, and materials to ensure they are in the right place at the right time.",
      },
      {
        icon: <ClipboardList />,
        title: "Procurement & Inventory",
        description:
          "Manage purchase orders, supplier relationships, and material deliveries to keep your project supplied and on track.",
      },
    ],
  },
  
  // --- MAIN DETAILED SECTION ---
  // Using this to focus on the core "Project Controls" aspect
  mainSection: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Project Controls",
      subtitle: "Gain Real-Time Visibility & Control",
      description:
        "Move from reactive problem-solving to proactive project management. Our platform gives you the live data you need to make informed decisions that protect your schedule and budget.",
      features: [
        {
          icon: <Calendar className="text-background" />,
          title: "Schedule Adherence",
          description:
            "Track real-time progress against your baseline schedule and instantly identify potential delays.",
        },
        {
          icon: <DollarSign className="text-background" />,
          title: "Cost Management",
          description:
            "Monitor committed costs, track expenses, and forecast your final project costs with greater accuracy.",
        },
        {
          icon: <AlertCircle className="text-background" />,
          title: "Risk & Issue Mitigation",
          description:
            "Identify, assign, and track project risks and issues to resolution before they impact your bottom line.",
        },
      ],
    },
  ],

  // --- CORE PLATFORM FEATURES ---
  stickySection: {
    title: "The Platform That Powers It All",
    subtitle: "CORE ARCHITECTURE",
    description:
      "Our platform is built on a foundation of security, flexibility, and collaboration, designed to fit the needs of your entire organization and scale as you grow.",
    features: [
      {
        title: "Centralized Workspace",
        description:
          "Break down information silos. Our unified workspace brings all your projects, teams, documents, and data into a single source of truth, ensuring everyone is working from the most current information.",
        iconName: "PanelsTopLeft", 
      },
      {
        title: "Role-Based Permissions",
        description:
          "Maintain complete control over your data. With granular, role-based permissions, you can confidently grant specific access to team members, subcontractors, clients, and other stakeholders, ensuring they only see what they need to.",
        iconName: "Lock",
      },
      {
        title: "Enterprise-Grade Security",
        description:
          "Your data is your most critical asset. We protect it with best-in-class security protocols, including end-to-end encryption, regular backups, and infrastructure that meets global compliance standards.",
        iconName: "ShieldCheck",
      },
      {
        title: "Seamless Integrations",
        description: 
          "Zedops works with the tools you already use. Our flexible API allows for seamless integration with your existing accounting, ERP, BIM, and other essential business software, creating a truly connected digital ecosystem.",
        iconName: "Layers",
      },
    ],
  },

  // --- FINAL CALL TO ACTION ---
  ctaProps: {
    title: "See the All-in-One Platform in Action",
    description: "Schedule a personalized demo to see how Zedops can unify your teams, streamline your workflows, and increase your profitability.",
    benefits: [
      "Improve project visibility",
      "Enhance team productivity",
      "Increase profit margins",
    ],
    button1Label: "Request a Demo",
    button1Link: "/book-a-demo",
    button2Label: "Talk to Sales",
    button2Link: "/start-trial",
  },
};