import {
  Monitor,
  PieChart,
  Layers,
  Activity,
  Clock,
  Database,
  TrendingUp,
  Bell,
  Cloud,
  Target,
  ClockAlert,
  Eye,
  Sliders,
  MapPin,
  FileText,
  RefreshCcw,
  BarChart,
  Truck,
  Zap,
  BarChart2,
  Search,
  BatteryCharging,
} from "lucide-react";

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