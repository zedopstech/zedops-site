import {
  BarChart2,
  AlertTriangle,
  Clock,
  TrendingUp,
  CalendarClock,
  Monitor,
  Layers,
  Search,
  FolderClock,
  SearchCheckIcon,
  Target,
  FileLineChart,
  RefreshCcw,
  Database,
  PieChart,
  UploadCloud,
  Sliders,
  BatteryCharging,
  UserCheck,
  RadarIcon,
  Users,
  BarChartBig,
  DollarSign,
  BarChart4,
} from "lucide-react";

export const PREDICTIVEANLYTICS_PAGE = {
  heroProps: {
    subtitle: "Predictive Analytics",
    description:
      "Stop project overruns and maximize ROI with AI-powered predictive analytics. Forecast potential delays, optimize resource allocation, and proactively mitigate risks for more profitable projects.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/estimation-hero.jpg", // MUST UPDATE
    imageAlt:
      "Construction project timeline with AI-predicted risks highlighted",
    linkHref: "/predictive-analytics-demo",
  },
  heroSectionProps: {
    subtitle: "HARNESS THE POWER OF DATA",
    title: "Analyze, Predict, and Optimize",
    description:
      "Utilize advanced analytics to improve project planning, reduce delays, and enhance efficiency with data-driven decisions.",
    buttonLabel: "Explore Features",
    buttonLink: "/predictive-analytics-features",
  },
  featuresSectionProps: {
    features: [
      {
        title: "AI-Driven Demand Forecasting",
        description:
          "Predict material and labor requirements with AI-powered analytics to prevent shortages and reduce waste.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Real-Time Risk Assessment",
        description:
          "Identify potential project risks using predictive models, enabling proactive decision-making and risk mitigation.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "SMART PREDICTIVE ANALYTICS",
    title: "Enhance Your Project Forecasting",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing predictive analytics features",
    features: [
      {
        title: "Demand Forecasting",
        description:
          "Leverage AI to predict material and resource needs, ensuring projects stay on track and within budget.",
        icon: <BarChart2 size={24} />,
      },
      {
        title: "Risk Prediction & Mitigation",
        description:
          "Identify and mitigate potential risks early on with real-time data analysis and predictive models.",
        icon: <AlertTriangle size={24} />,
      },
      {
        title: "Project Timeline Optimization",
        description:
          "Optimize project schedules by predicting delays, resource shortages, and task completion times.",
        icon: <Clock size={24} />,
      },
    ],
  },
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Enhanced Project Forecasting",
      subtitle: "Data-Driven & Insightful",
      description:
        "Leverage predictive analytics to forecast project demands, optimize resource allocation, and minimize risks.",
      features: [
        {
          icon: <TrendingUp size={24} className="text-background" />,
          title: "AI-Powered Demand Prediction",
          description:
            "Forecast material and labor needs accurately, reducing the risk of shortages or excess.",
        },
        {
          icon: <CalendarClock size={24} className="text-background" />,
          title: "Optimized Project Timelines",
          description:
            "Predict project delays and optimize schedules to ensure timely completions.",
        },
        {
          icon: <Monitor size={24} className="text-background" />,
          title: "Real-Time Risk Monitoring",
          description:
            "Identify and mitigate project risks with real-time data analysis and predictive models.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Predictive Resource Optimization",
      subtitle: "Intelligent & Scalable",
      description:
        "Ensure efficient resource allocation by predicting project requirements and adjusting plans accordingly.",
      features: [
        {
          icon: <Clock size={24} className="text-background" />,
          title: "Timeline & Resource Forecasting",
          description:
            "Anticipate the resource requirements and timeline challenges for smoother project execution.",
        },
        {
          icon: <Layers size={24} className="text-background" />,
          title: "Predictive Asset Management",
          description:
            "Optimize equipment and material usage with AI-driven insights into future demand.",
        },
        {
          icon: <Search size={24} className="text-background" />,
          title: "Data-Driven Decision Making",
          description:
            "Make proactive decisions with actionable insights based on predictive data models.",
        },
      ],
    },
  ],
  featureData: [
    {
      icon: <BarChart2 className="text-background" />,
      title: "Predictive Demand",
      description:
        "Leverage AI to predict material and resource needs, reducing shortages and excess inventory.",
    },
    {
      icon: <FolderClock className="text-background" />,
      title: "Project Timeline Predictions",
      description:
        "Use historical data and trends to forecast project timelines, identifying potential delays early.",
    },
    {
      icon: <Layers className="text-background" />,
      title: "Resource Allocation",
      description:
        "Optimize resource distribution across projects using predictive analytics to enhance efficiency.",
    },
    {
      icon: <SearchCheckIcon className="text-background" />,
      title: "Risk & Issue Prediction",
      description:
        "Anticipate potential project risks and issues with data-driven predictions to mitigate disruptions.",
    },
    {
      icon: <Target className="text-background" />,
      title: "Demand Planning",
      description:
        "Predict inventory demands accurately and optimize stock levels to prevent waste and shortages.",
    },
    {
      icon: <FileLineChart className="text-background" />,
      title: "Performance Metrics",
      description:
        "Generate detailed reports based on predictive data to monitor project performance and adjust strategies.",
    },
    {
      icon: <RefreshCcw className="text-background" />,
      title: "Dynamic Adjustment",
      description:
        "Get real-time recommendations for adjusting project timelines, budgets, and resources based on predictive insights.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Data-Driven Decision Making",
      description:
        "Use predictive models to make proactive, data-backed decisions across all project phases.",
    },
    {
      icon: <PieChart className="text-background" />,
      title: "Cost & Budget Forecasting",
      description:
        "Forecast project costs with precision, optimizing your budgeting and spending strategies.",
    },
    {
      icon: <BarChartBig className="text-background" />,
      title: "Market Trend Analysis",
      description:
        "Analyze market trends and make predictions for resource price fluctuations to make informed.",
    },
    {
      icon: <RadarIcon className="text-background" />,
      title: "Supplier Performance",
      description:
        "Forecast supplier performance and delivery reliability to ensure timely and quality material sourcing.",
    },
    {
      icon: <Clock className="text-background" />,
      title: "Project Duration Prediction",
      description:
        "Predict project durations based on historical data, allowing for proactive project planning.",
    },
    {
      icon: <TrendingUp className="text-background" />,
      title: "Revenue & Profit Forecasting",
      description:
        "Predict revenue and profit margins based on current project data to guide business decisions.",
    },
    {
      icon: <UploadCloud className="text-background" />,
      title: "Cloud-Based Predictive Tools",
      description:
        "Access predictive analytics tools anytime, anywhere, via secure cloud storage.",
    },
    {
      icon: <Sliders className="text-background" />,
      title: "Customizable Analytics",
      description:
        "Create tailored analytics dashboards to visualize key predictive data and track project health.",
    },
    {
      icon: <BatteryCharging className="text-background" />,
      title: "Energy Consumption",
      description:
        "Predict energy consumption patterns and optimize resource usage to reduce costs and environmental impact.",
    },
    {
      icon: <UserCheck className="text-background" />,
      title: "Workforce Performance",
      description:
        "Use predictive analytics to assess workforce productivity and optimize labor allocation for better results.",
    },
    {
      icon: <TrendingUp className="text-background" />,
      title: "Trend Analysis",
      description:
        "Analyze procurement trends and market fluctuations to make informed purchasing decisions.",
    },
    {
      icon: <DollarSign className="text-background" />,
      title: "Predictive Cost Estimation",
      description:
        "Forecast material costs based on historical data and market conditions to stay within budget.",
    },
    {
      icon: <AlertTriangle className="text-background" />,
      title: "Supply Chain Disruption",
      description:
        "Identify potential disruptions in the supply chain using predictive models to mitigate delays.",
    },
  ],
  featuresData: {
    title: "Resources",
    subtitle: "Master Predictive Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        title: "Predictive Supply Chain Insights",
        description: "Access the report for optimized procurement strategies.",
        icon: <Search className="text-white" />,
      },
      {
        icon: <RadarIcon className="text-white" />,
        title: "Material Demand Forecasting",
        description: "Access the guide for proactive inventory planning.",
      },
      {
        icon: <BarChart4 className="text-white" />,
        title: "Cost Prediction & Budget Optimization",
        description: "Access the report for enhanced financial control.",
      },
      {
        icon: <Clock className="text-white" />,
        title: "Project Timeline Forecasting",
        description: "Access the guide for on-time project delivery.",
      },
      {
        icon: <BatteryCharging className="text-white" />,
        title: "Energy Consumption Forecasting",
        description:
          "Access the guide for sustainable and cost-effective operations.",
      },
      {
        icon: <Users className="text-white" />,
        title: "Labor Demand Prediction",
        description: "Access the report for efficient workforce management.",
      },
    ],
  },
  ctaProps: {
    title: "Unlock the Power of Predictive Analytics",
    description: "",
    benefits: [
      "Accurate demand",
      "Data-driven decision",
      "Optimized cost predictions",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};
