import {
  Clock,
  Settings,
  Users,
  Briefcase,
  Activity,
  TrendingUp,
  FileText,
  ClipboardCheck,
  Bell,
  RefreshCcw,
  MapPin,
  UserCheck2,
  ShieldCheck,
  HardHat,
  CheckCheckIcon,
  Calendar,
  FilePlus,
  FileBarChart,
  AlertCircle,
  DollarSign,
  ClipboardList,
  Database,
  BarChart,
} from "lucide-react";

export const PROJECTMANAGEMENT_PAGE = {
    heroProps: {
      subtitle: "Project Management",
      description:
        "Deliver projects on time and under budget with our comprehensive construction project management platform. Gain real-time visibility, streamline workflows, and empower your teams for success.",
      buttonLabel: "Get Started",
      imageSrc: "/Solutions/estimation-hero.jpg", // REQUIRED UPDATE!
      imageAlt:
        "Construction project manager reviewing a Gantt chart on a tablet.",
      linkHref: "/project-management-demo",
    },
  
    heroSectionProps: {
      subtitle: "STREAMLINE PROJECT EXECUTION",
      title: "Plan and Deliver Projects Efficiently",
      description:
        "Improve project workflows, track progress in real-time, and enhance communication for seamless project execution.",
      buttonLabel: "Explore Features",
      buttonLink: "/project-management-features",
    },
  
    featuresSectionProps: {
      features: [
        {
          title: "Real-Time Project Tracking",
          description:
            "Monitor project progress in real-time, ensuring tasks stay on schedule and within budget.",
          imageSrc: "/Solutions/estimation-1.jpg",
        },
        {
          title: "Task & Resource Management",
          description:
            "Effectively allocate resources, assign tasks, and track milestones for efficient project execution.",
          imageSrc: "/Solutions/estimation-2.jpg",
        },
      ],
    },
  
    TestimonalsSectionProps: {
      subtitle: "STREAMLINE PROJECT MANAGEMENT",
      title: "Optimize Project Execution & Collaboration",
      imageSrc: "/Solutions/estimation-testimonal.jpg",
      imageAlt: "Illustration showing project management features",
      features: [
        {
          title: "Real-Time Project Tracking",
          description:
            "Monitor project progress in real-time, ensuring tasks stay on schedule and teams stay aligned.",
          icon: <Clock size={24} />,
        },
        {
          title: "Task & Workflow Automation",
          description:
            "Automate task assignments, approvals, and workflows to boost efficiency and reduce delays.",
          icon: <Settings size={24} />,
        },
        {
          title: "Team Collaboration",
          description:
            "Enhance team communication with centralized reporting and real-time updates on project milestones.",
          icon: <Users size={24} />,
        },
      ],
    },
  
    mainSectionData: [
      {
        image: "/Solutions/estimation-section.jpg",
        title: "Projects",
        subtitle: "Seamlessly Manage Projects from Start to Finish",
        description:
          "Track project progress, manage tasks efficiently, and ensure seamless collaboration to deliver projects on time and within budget.",
        features: [
          {
            icon: <Briefcase size={24} className="text-background" />,
            title: "Project Planning & Scheduling",
            description:
              "Plan project timelines, allocate resources, and set milestones to keep everything on track.",
          },
          {
            icon: <Activity size={24} className="text-background" />,
            title: "Live Progress Tracking",
            description:
              "Monitor project updates in real-time and make data-driven decisions to improve efficiency.",
          },
          {
            icon: <TrendingUp size={24} className="text-background" />,
            title: "Performance Analytics",
            description:
              "Analyze project performance with key metrics and insights to optimize future workflows.",
          },
        ],
      },
      {
        image: "/Solutions/estimation section-1.jpg",
        imageOnRight: "true",
        title: "Daily Logs",
        subtitle: "Keep Track of Daily Project Activities",
        description:
          "Maintain detailed daily logs to document work progress, track site activities, and ensure clear communication among teams.",
        features: [
          {
            icon: <FileText size={24} className="text-background" />,
            title: "Automated Daily Reports",
            description:
              "Generate structured daily reports, including work completed, issues encountered, and progress updates.",
          },
          {
            icon: <Users size={24} className="text-background" />,
            title: "Crew & Equipment Tracking",
            description:
              "Log crew attendance, equipment usage, and material deliveries to maintain accurate records.",
          },
          {
            icon: <Bell size={24} className="text-background" />,
            title: "Incident & Issue Logging",
            description:
              "Record site incidents, delays, and safety concerns to ensure prompt resolution and accountability.",
          },
        ],
      },
      {
        image: "/Solutions/estimation-section.jpg",
        title: "Scheduling",
        subtitle: "Optimize Project Timelines with Smart Scheduling",
        description:
          "Enhance efficiency with precise scheduling tools. Plan tasks, allocate resources, and prevent delays to ensure smooth project execution.",
        features: [
          {
            icon: <Calendar size={24} className="text-background" />,
            title: "Advanced Project Scheduling",
            description:
              "Create detailed project schedules with dependencies, milestones, and deadlines for better coordination.",
          },
          {
            icon: <Clock size={24} className="text-background" />,
            title: "Real-Time Timeline Adjustments",
            description:
              "Adjust schedules dynamically based on project changes, ensuring flexibility and efficiency.",
          },
          {
            icon: <AlertCircle size={24} className="text-background" />,
            title: "Conflict & Delay Alerts",
            description:
              "Get instant alerts on potential scheduling conflicts or delays, allowing for proactive problem-solving.",
          },
        ],
      },
    ],
  
    featureData: [
      {
        icon: <Calendar className="text-background" />,
        title: "Project Scheduling",
        description:
          "Plan and manage project timelines efficiently, ensuring tasks are completed on schedule.",
      },
      {
        icon: <ClipboardList className="text-background" />,
        title: "Task Management",
        description:
          "Assign, track, and update project tasks in real-time to keep the team aligned and productive.",
      },
      {
        icon: <Users className="text-background" />,
        title: "Team Collaboration",
        description:
          "Enhance communication and coordination between teams with shared project data and updates.",
      },
      {
        icon: <Clock className="text-background" />,
        title: "Real-Time Progress Tracking",
        description:
          "Monitor project progress in real-time and adjust workflows dynamically to avoid delays.",
      },
      {
        icon: <FileText className="text-background" />,
        title: "Daily Logs & Reports",
        description:
          "Maintain accurate daily logs and reports for documentation and accountability across projects.",
      },
      {
        icon: <TrendingUp className="text-background" />,
        title: "Project Performance",
        description:
          "Analyze key project metrics to identify bottlenecks, optimize resources, and improve efficiency.",
      },
      {
        icon: <FilePlus className="text-background" />,
        title: "Automated Reporting",
        description:
          "Generate detailed project reports automatically for tracking progress and decision-making.",
      },
      {
        icon: <AlertCircle className="text-background" />,
        title: "Risk & Issue Management",
        description:
          "Identify, track, and mitigate potential project risks to ensure smooth execution.",
      },
      {
        icon: <DollarSign className="text-background" />,
        title: "Budget & Cost Tracking",
        description:
          "Monitor budgets, control costs, and track financial data to ensure profitability.",
      },
      {
        icon: <Database className="text-background" />,
        title: "Centralized Project Data",
        description:
          "Store and manage all project-related documents, drawings, and records in one secure platform.",
      },
      {
        icon: <FileBarChart className="text-background" />,
        title: "Project Insights & Forecasting",
        description:
          "Leverage data-driven insights to improve project planning and anticipate future challenges.",
      },
      {
        icon: <Settings className="text-background" />,
        title: "Workflow Automation",
        description:
          "Automate repetitive tasks and approvals to streamline project management processes.",
      },
      {
        icon: <MapPin className="text-background" />,
        title: "Site & Location Tracking",
        description:
          "Track site activities, equipment locations, and material deliveries for better oversight.",
      },
      {
        icon: <UserCheck2 className="text-background" />,
        title: "Resource Allocation",
        description:
          "Efficiently assign workforce and equipment to projects to optimize utilization and productivity.",
      },
      {
        icon: <ShieldCheck className="text-background" />,
        title: "Compliance",
        description:
          "Ensure all project activities meet industry regulations and maintain compliance records.",
      },
      {
        icon: <ClipboardCheck className="text-background" />,
        title: "Quality Control & Inspections",
        description:
          "Conduct quality checks and inspections to maintain high construction standards.",
      },
      {
        icon: <RefreshCcw className="text-background" />,
        title: "Change Order Management",
        description:
          "Track and manage change orders efficiently, ensuring adjustments are documented and approved.",
      },
      {
        icon: <Bell className="text-background" />,
        title: "Instant Notifications & Alerts",
        description:
          "Get real-time alerts for task updates, deadline changes, and critical project events.",
      },
      {
        icon: <HardHat className="text-background" />,
        title: "Safety & Compliance",
        description:
          "Integrate safety protocols within project management to ensure compliance and reduce risks.",
      },
      {
        icon: <CheckCheckIcon className="text-background" />,
        title: "Project Completion",
        description:
          "Ensure smooth project handover with final inspections, documentation, and approvals.",
      },
    ],
  
    featuresData: {
      title: "Resources",
      subtitle: "Master Project Strategies",
      description:
        "Explore best practices and comprehensive guides for effectively qualifying contractors ",
      features: [
        {
          icon: <Calendar className="text-white" />,
          title: "Project Scheduling & Planning",
          description:
            "Create, manage, and adjust project schedules to keep tasks on track and meet deadlines efficiently.",
        },
        {
          icon: <ClipboardList className="text-white" />,
          title: "Task & Workflow Management",
          description:
            "Organize and assign project tasks, ensuring teams stay aligned and workflows run smoothly.",
        },
        {
          icon: <AlertCircle className="text-white" />,
          title: "Risk & Issue Tracking",
          description:
            "Identify potential project risks early, track issues, and implement solutions proactively.",
        },
        {
          icon: <BarChart className="text-white" />,
          title: "Project Performance Analytics",
          description:
            "Analyze key project metrics, identify bottlenecks, and optimize workflows for better efficiency.",
        },
        {
          icon: <FileText className="text-white" />,
          title: "Project Documentation",
          description:
            "Maintain comprehensive project records, daily logs, and reports for transparency.",
        },
        {
          icon: <RefreshCcw className="text-white" />,
          title: "Real-Time Project Updates",
          description:
            "Ensure all stakeholders have up-to-date project information with live progress.",
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
      button1Label: "Book a demo",
      button1Link: "/book-a-demo",
      button2Label: "Start a trial",
      button2Link: "/start-trial",
    },
  };