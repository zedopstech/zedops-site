import {
  Clock,
  Users,
//   Briefcase,
  Activity,
  TrendingUp,
  FileText,
  ClipboardCheck,
  Bell,
  RefreshCcw,
  UserCheck2,
  HardHat,
  Calendar,
  FilePlus,
  FileBarChart,
  AlertCircle,
  DollarSign,
  ClipboardList,
  Database,
  BarChart,
  GanttChartSquare, // New Icon
  MessageSquare,   // New Icon
  FileClock,     // New Icon
} from "lucide-react";

export const PROJECTMANAGEMENT_PAGE = {
  // --- HERO SECTION ---
  heroProps: {
    subtitle: "From Blueprint to Bottom Line, All in One Place.",
    description:
      "Take command of your projects with a single source of truth. Zedops connects your schedule, tasks, documents, and teams, giving you the real-time visibility needed to deliver on time and on budget.",
    buttonLabel: "Take Control of Your Projects",
    imageSrc: "/Solutions/projectManagement/projectManagement_hero.jpg", // Update this image
    imageAlt: "A construction project manager reviewing a dynamic project dashboard on a large screen.",
    linkHref: "/book-a-demo",

    // --- Floating Cards for the Project Management Hero Section ---
    floatingCards: [
        {
            icon: GanttChartSquare,
            title: "Project Schedule: 95% On Track",
            subtitle: "3 tasks due this week",
            positionClasses: "top-1/3 -left-24 hidden lg:block",
        },
        {
            icon: ClipboardCheck,
            title: "2 New RFIs to Review",
            subtitle: "Assigned to the Structural Team",
            positionClasses: "top-10 -right-16 hidden lg:block",
        },
        {
            icon: MessageSquare,
            title: "Daily Log Submitted",
            subtitle: "From Site Foreman, John D.",
            positionClasses: "bottom-1/4 -right-16 hidden lg:block",
        },
    ],
  },
  
  // --- SUB-HERO / VALUE PROPOSITION ---
  heroSectionProps: {
    subtitle: "Plan, Execute, And Track With Precision",
    title: "The Command Center for Your Projects",
    description:
      "Stop juggling spreadsheets, emails, and outdated information. Our project management module centralizes every aspect of your project, providing clarity and empowering your team to perform at their best.",
    buttonLabel: "Request a Demo",
    buttonLink: "/book-a-demo",
  },
  
  // --- CORE FEATURES ---
  featuresSectionProps: {
    features: [
      {
        title: "Integrated Project Scheduling",
        description:
          "Build, manage, and track detailed project schedules. Link tasks, set dependencies, and visualize your critical path to stay ahead of delays.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Centralized Task Management",
        description:
          "Assign tasks, track progress, and manage responsibilities across your entire team. Ensure everyone knows what needs to be done, by when.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  
  // --- BENEFITS / OUTCOMES ---
  TestimonalsSectionProps: {
    subtitle: "Why ZedOps Project Management?",
    title: "Deliver Every Project Successfully",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "An illustration of a successful project timeline with key milestones checked off.",
    features: [
      {
        title: "Gain Real-Time Visibility",
        description:
          "Instantly understand the health of any project with live dashboards that track progress against schedule and budget.",
        icon: <Clock size={24} />,
      },
      {
        title: "Improve Team Productivity",
        description:
          "Eliminate communication bottlenecks and empower your team with clear tasks, centralized documents, and mobile access.",
        icon: <Users size={24} />,
      },
      {
        title: "Make Data-Driven Decisions",
        description:
          "Use powerful analytics and reporting to identify potential issues early, optimize resource allocation, and improve profitability.",
        icon: <TrendingUp size={24} />,
      },
    ],
  },

  // --- DETAILED FEATURE SECTIONS ---
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Task & Schedule Management",
      subtitle: "Your Project's Master Plan",
      description:
        "Create and manage dynamic project schedules that connect every task, dependency, and milestone from start to finish.",
      features: [
        {
          icon: <GanttChartSquare size={24} className="text-background" />, // Changed icon
          title: "Interactive Gantt Charts",
          description: "Visualize your entire project timeline, adjust dependencies with drag-and-drop, and track your critical path.",
        },
        {
          icon: <ClipboardList size={24} className="text-background" />,
          title: "Personalized Task Lists",
          description: "Every team member gets a clear, prioritized list of their responsibilities and deadlines.",
        },
        {
          icon: <Activity size={24} className="text-background" />,
          title: "Real-Time Progress Updates",
          description: "Track task completion percentages and get instant updates from the field, so your schedule is always current.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Field & Office Collaboration",
      subtitle: "Connect Your Entire Team",
      description:
        "Break down the silos between the job site and the office. Ensure seamless information flow with tools designed for construction teams.",
      features: [
        {
          icon: <FileText size={24} className="text-background" />,
          title: "Daily Logs & Site Diaries",
          description: "Capture crucial site information—labor, equipment, weather, and photos—in structured, shareable reports.",
        },
        {
          icon: <FileClock size={24} className="text-background" />, // Changed icon
          title: "RFI & Submittal Management",
          description: "Streamline formal communication with a clear, trackable workflow for RFIs and submittals.",
        },
        {
          icon: <Bell size={24} className="text-background" />,
          title: "Automated Notifications",
          description: "Keep everyone informed with automated alerts for new task assignments, overdue items, and status changes.",
        },
      ],
    },
  ],
  
  // --- GRID OF ALL FEATURES ---
  featureData: [
    {
      icon: <Calendar className="text-background" />,
      title: "Project Scheduling (Gantt)",
      description: "Create and manage detailed project timelines with dependencies.",
    },
    {
      icon: <ClipboardList className="text-background" />,
      title: "Task Management",
      description: "Assign, track, and manage all project tasks and to-dos.",
    },
    {
      icon: <Users className="text-background" />,
      title: "Team Collaboration",
      description: "Centralized communication, file sharing, and team updates.",
    },
    {
      icon: <FileText className="text-background" />,
      title: "Daily Logs & Field Reports",
      description: "Capture daily site activities, labor, and equipment usage.",
    },
    {
      icon: <FileBarChart className="text-background" />,
      title: "Customizable Dashboards",
      description: "Get a high-level overview of project health, tasks, and financials.",
    },
    {
      icon: <FilePlus className="text-background" />,
      title: "RFI & Submittal Tracking",
      description: "Manage formal project communications with a clear audit trail.",
    },
    {
      icon: <AlertCircle className="text-background" />,
      title: "Issue & Risk Management",
      description: "Identify, assign, and track project issues to resolution.",
    },
    {
      icon: <DollarSign className="text-background" />,
      title: "Budget & Cost Integration",
      description: "Track project progress against your financial budgets.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Centralized Document Control",
      description: "Store all project documents, plans, and photos in one place.",
    },
    {
      icon: <UserCheck2 className="text-background" />,
      title: "Resource Allocation",
      description: "Plan and manage the allocation of your crew and equipment.",
    },
    {
      icon: <RefreshCcw className="text-background" />,
      title: "Change Order Management",
      description: "Document and track scope changes and their impact on budget and schedule.",
    },
    {
      icon: <HardHat className="text-background" />,
      title: "Safety & Compliance Tracking",
      description: "Manage safety meetings, incident reports, and compliance documentation.",
    },
  ],

  // --- RESOURCES / GUIDES SECTION ---
  featuresData: {
    title: "Resources",
    subtitle: "Master Your Project Execution",
    description: "Explore our expert guides to improve your construction project management skills.",
    features: [
      {
        icon: <Calendar className="text-white" />,
        title: "Tutorial: Building Your First Project Schedule",
        description: "Watch the step-by-step guide.",
      },
      {
        icon: <ClipboardList className="text-white" />,
        title: "Best Practices for Effective Task Management",
        description: "Read the article.",
      },
      {
        icon: <AlertCircle className="text-white" />,
        title: "A Guide to Proactive Risk Management in Construction",
        description: "Access the guide.",
      },
      {
        icon: <BarChart className="text-white" />,
        title: "The Key Metrics Every Project Manager Should Track",
        description: "Read the article.",
      },
    ],
  },
  
  // --- FINAL CALL TO ACTION ---
  ctaProps: {
    title: "Ready to Deliver Every Project On Time & On Budget?",
    description: "See how Zedops can provide the clarity and control you need to drive successful project outcomes.",
    benefits: [
      "Improve schedule accuracy",
      "Enhance team productivity",
      "Increase project profitability",
    ],
    button1Label: "Request a Demo",
    button1Link: "/book-a-demo",
    button2Label: "Talk to Sales",
    button2Link: "/contact-sales",
  },
};