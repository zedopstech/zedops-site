import {
  DollarSign,
  TrendingUp,
  ShieldAlert,
  BarChart,
  Clock,
  PieChart,
  AlertTriangle,
  Receipt,
  Calculator,
  LineChart,
  ClipboardList,
  Layers,
  Bell,
  ClipboardCheck,
  RefreshCcw,
  Target,
  TrendingDown,
  Database,
  ShieldCheck,
  FilePlus,
  FileBarChart,
  Banknote,
  BarChart2,
} from "lucide-react";

export const PROJECTFINANCIAL_PAGE = {
  heroProps: {
    subtitle: "Project Financials",
    description:
      "Unlock project profitability with real-time financial control. Track budgets, manage costs, and forecast expenses to maximize your margins.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/estimation-hero.jpg", // MUST UPDATE!
    imageAlt:
      "Construction project manager reviewing financial performance dashboard on a laptop.",
    linkHref: "/project-financials-demo",
  },
  heroSectionProps: {
    subtitle: "MANAGE YOUR PROJECTS' BOTTOM LINE",
    title: "Track, Analyze, and Optimize Financials",
    description:
      "Stay on top of your project's finances with real-time tracking of costs, budgets, and profitability.",
    buttonLabel: "Explore Features",
    buttonLink: "/project-financial-features",
  },
  featuresSectionProps: {
    features: [
      {
        title: "Real-Time Budget Tracking",
        description:
          "Monitor your project's financial health by tracking real-time expenses, helping to keep your project within budget and prevent overruns.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Financial Reports",
        description:
          "Generate detailed, customizable financial reports, including cost breakdowns, budget allocations, and projected.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "SMART PROJECT FINANCIALS",
    title: "Optimize Your Project's Financial Health",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing financial tracking and reports",
    features: [
      {
        title: "Real-Time Budget Tracking",
        description:
          "Track project expenses in real-time to stay within budget and make timely financial adjustments.",
        icon: <DollarSign size={24} />,
      },
      {
        title: "Cost Forecasting",
        description:
          "Forecast project costs and adjust budgets dynamically to prevent overspending and optimize resource.",
        icon: <TrendingUp size={24} />,
      },
      {
        title: "Financial Risk Management",
        description:
          "Identify and manage financial risks proactively, with predictive insights and alerts to mitigate potential.",
        icon: <ShieldAlert size={24} />,
      },
    ],
  },
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Real-Time Financial Reporting",
      subtitle: "Instant Budget Insights",
      description:
        "Get real-time financial reports and updates to manage project costs effectively. Stay on track with budgets and make adjustments before costs spiral.",
      features: [
        {
          icon: <DollarSign size={24} className="text-background" />,
          title: "Budget Tracking",
          description:
            "Track project expenditures in real-time and compare them against budget forecasts to prevent overspending.",
        },
        {
          icon: <BarChart size={24} className="text-background" />,
          title: "Cost Analysis & Forecasting",
          description:
            "Analyze project costs and forecast future financial needs, ensuring the project stays within budget constraints.",
        },
        {
          icon: <Clock size={24} className="text-background" />,
          title: "Deadline & Financial Milestones",
          description:
            "Track critical financial milestones and ensure costs align with project timelines, preventing last-minute financial surprises.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Proactive Financial Management",
      subtitle: "Early Alerts & Mitigation",
      description:
        "Use real-time financial alerts and predictive analytics to identify potential cost overruns early and take corrective action.",
      features: [
        {
          icon: <TrendingUp size={24} className="text-background" />,
          title: "Cost Trend Analysis",
          description:
            "Identify cost trends over time and use forecasting models to ensure financial stability throughout the project.",
        },
        {
          icon: <PieChart size={24} className="text-background" />,
          title: "Comprehensive Financial Reporting",
          description:
            "Generate detailed reports on project financials, including expenses, resource costs, and savings opportunities.",
        },
        {
          icon: <AlertTriangle size={24} className="text-background" />,
          title: "Risk Alerts & Mitigation",
          description:
            "Get real-time alerts about potential financial risks, allowing you to act swiftly and keep the project on budget.",
        },
      ],
    },
  ],
  featureData: [
    {
      icon: <DollarSign className="text-background" />,
      title: "Financial Reports & Insights",
      description:
        "Generate detailed financial reports on project expenses, revenue, and cash flow for better decision-making.",
    },
    {
      icon: <TrendingUp className="text-background" />,
      title: "Budget Forecasting",
      description:
        "Analyze and predict future project costs based on historical data and current trends.",
    },
    {
      icon: <BarChart2 className="text-background" />,
      title: "Real-Time Expense Tracking",
      description:
        "Monitor project expenses in real-time and stay within budget with proactive cost control.",
    },
    {
      icon: <PieChart className="text-background" />,
      title: "Financial Data Visualization",
      description:
        "Visualize key financial metrics with charts and graphs for a clearer understanding of project spending.",
    },
    {
      icon: <AlertTriangle className="text-background" />,
      title: "Cost Overrun Alerts",
      description:
        "Receive alerts when expenses exceed budget limits, enabling immediate corrective actions.",
    },
    {
      icon: <Clock className="text-background" />,
      title: "Payment Schedule",
      description:
        "Track and manage payment schedules for vendors, subcontractors, and suppliers efficiently.",
    },
    {
      icon: <Receipt className="text-background" />,
      title: "Invoice & Billing Reports",
      description:
        "Generate accurate and automated reports for invoices, payments, and billing cycles.",
    },
    {
      icon: <Calculator className="text-background" />,
      title: "Cost Estimation",
      description:
        "Compare estimated vs. actual project costs to identify discrepancies and improve future budgeting.",
    },
    {
      icon: <LineChart className="text-background" />,
      title: "Profitability Analysis",
      description:
        "Analyze profitability trends and margins to ensure financial success across projects.",
    },
    {
      icon: <ClipboardList className="text-background" />,
      title: "Financial Compliance",
      description:
        "Ensure compliance with financial regulations by tracking necessary documentation and transactions.",
    },
    {
      icon: <Layers className="text-background" />,
      title: "Multi-Project Financial",
      description:
        "Monitor financial data across multiple projects in a single dashboard for better portfolio management.",
    },
    {
      icon: <Bell className="text-background" />,
      title: "Instant Financial Notifications",
      description:
        "Receive real-time alerts for budget changes, payment deadlines, and financial risks.",
    },
    {
      icon: <ClipboardCheck className="text-background" />,
      title: "Audit & Compliance Reports",
      description:
        "Generate detailed audit reports to maintain financial transparency and accountability.",
    },
    {
      icon: <RefreshCcw className="text-background" />,
      title: "Dynamic Budget Adjustments",
      description:
        "Adjust budgets dynamically based on project progress and changing financial conditions.",
    },
    {
      icon: <Target className="text-background" />,
      title: "Financial Goal Tracking",
      description:
        "Set and track financial goals, ensuring alignment with project profitability targets.",
    },
    {
      icon: <TrendingDown className="text-background" />,
      title: "Risk & Loss Analysis",
      description:
        "Identify financial risks early and mitigate potential losses with predictive analytics.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Centralized Financial Data",
      description:
        "Access all financial records in one centralized system for easy tracking and reporting.",
    },
    {
      icon: <ShieldCheck className="text-background" />,
      title: "Secure Financial Transactions",
      description:
        "Ensure all financial transactions are secure and compliant with industry standards.",
    },
    {
      icon: <FilePlus className="text-background" />,
      title: "Automated Report",
      description:
        "Generate financial reports automatically with up-to-date data for quick decision-making.",
    },
    {
      icon: <FileBarChart className="text-background" />,
      title: "Profit & Loss Analysis",
      description:
        "Analyze project profitability with automated profit and loss reports, ensuring financial health.",
    },
  ],
  featuresData: {
    title: "Resources",
    subtitle: "Master Financial Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        icon: <DollarSign className="text-white" />,
        title: "Real-Time Financial Alerts",
        description:
          "Receive instant notifications for budget overruns, cost fluctuations.",
      },
      {
        icon: <ClipboardList className="text-white" />,
        title: "Automated Financial Reports",
        description:
          "Generate detailed reports on project expenditures, revenue forecasts.",
      },
      {
        icon: <AlertTriangle className="text-white" />,
        title: "Budget Risk Warnings",
        description:
          "Get real-time alerts for financial risks, such as cost overruns.",
      },
      {
        icon: <PieChart className="text-white" />,
        title: "Expense Breakdown Analysis",
        description:
          "Track and categorize project expenses, ensuring transparency and better cost management.",
      },
      {
        icon: <Banknote className="text-white" />,
        title: "Cash Flow Monitoring",
        description:
          "Monitor incoming and outgoing project cash flow in real-time to maintain financial stability.",
      },
      {
        icon: <TrendingUp className="text-white" />,
        title: "Profitability Insights",
        description:
          "Analyze project financial performance to optimize profitability and maximize returns.",
      },
    ],
  },
  ctaProps: {
    title: "Gain Full Control Over Project Finances",
    description: "",
    benefits: [
      "Real-time budget",
      "Automated financial reports",
      "Instant cost overrun alerts",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};
