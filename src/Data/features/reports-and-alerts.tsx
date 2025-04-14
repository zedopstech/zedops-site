import {
  BellRing,
  FileText,
  AlertTriangle,
  Radar,
  PieChart,
  Clock,
  Sliders,
  Truck,
  BarChart,
  ClockAlert,
  Eye,
  Target,
  AlertCircle,
  ClipboardList,
  FilePlus,
  RefreshCcw,
  MapPin,
  Zap,
  Database,
  Bell,
  AlarmCheck,
  Cloud,
  Search,
  BarChart2,
} from "lucide-react";

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
