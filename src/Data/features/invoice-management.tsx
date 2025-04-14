import {
  FileText,
  CreditCard,
  BellRing,
  BarChart2,
  ClipboardList,
  AlertTriangle,
  PieChart,
  Clock,
  Receipt,
  Calculator,
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
  Calendar,
  TrendingUp,
} from "lucide-react";

export const INVOICEMANAGEMENT_PAGE = {
  heroProps: {
    subtitle: "Invoice",
    description:
      "Get paid faster with our automated construction invoicing system. Streamline billing, track invoices in real-time, and simplify payment management for improved cash flow.",
    buttonLabel: "Get Started",
    imageSrc: "/Solutions/estimation-hero.jpg", // MUST UPDATE
    imageAlt: "Construction invoice management software showing payment status",
    linkHref: "/invoice-management-demo",
  },
  heroSectionProps: {
    subtitle: "SIMPLIFY YOUR BILLING PROCESS",
    title: "Automate and Manage Invoices",
    description:
      "Enhance financial transparency with automated invoicing, real-time payment tracking.",
    buttonLabel: "Explore Features",
    buttonLink: "/invoice-management-features",
  },
  featuresSectionProps: {
    features: [
      {
        title: "Automated Invoice Generation",
        description:
          "Create and send invoices automatically, reducing manual work and ensuring accuracy in billing.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Real-Time Payment Tracking",
        description:
          "Monitor invoice statuses and track payments in real-time to improve cash flow and financial planning.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  TestimonalsSectionProps: {
    subtitle: "SMART INVOICE MANAGEMENT",
    title: "Streamline Your Billing Process",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "Illustration showing invoice management features",
    features: [
      {
        title: "Automated Invoice Processing",
        description:
          "Generate and send invoices automatically, reducing manual work and ensuring billing accuracy.",
        icon: <FileText size={24} />,
      },
      {
        title: "Real-Time Payment Tracking",
        description:
          "Monitor invoice statuses and track payments in real-time, improving cash flow and financial planning.",
        icon: <CreditCard size={24} />,
      },
      {
        title: "Late Payment Alerts",
        description:
          "Receive instant alerts for overdue payments, ensuring timely follow-ups and improved revenue management.",
        icon: <BellRing size={24} />,
      },
    ],
  },
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Real-Time Invoice Tracking",
      subtitle: "Stay on Top of Your Billing",
      description:
        "Monitor invoices in real-time, track payment statuses, and streamline billing cycles to improve cash flow management.",
      features: [
        {
          icon: <FileText size={24} className="text-background" />,
          title: "Automated Invoice Generation",
          description:
            "Generate and send invoices automatically, reducing manual work and ensuring accuracy.",
        },
        {
          icon: <CreditCard size={24} className="text-background" />,
          title: "Payment Status Monitoring",
          description:
            "Track payments in real-time, ensuring timely collection and reducing outstanding balances.",
        },
        {
          icon: <Clock size={24} className="text-background" />,
          title: "Due Date & Overdue Alerts",
          description:
            "Get instant alerts for upcoming due dates and overdue invoices to take proactive follow-ups.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Smart Invoice Management",
      subtitle: "Optimize Billing & Collections",
      description:
        "Use predictive insights and automated workflows to ensure invoices are sent, tracked, and settled efficiently.",
      features: [
        {
          icon: <TrendingUp size={24} className="text-background" />,
          title: "Invoice Trend Analysis",
          description:
            "Analyze invoice trends and payment behaviors to improve cash flow forecasting and financial planning.",
        },
        {
          icon: <PieChart size={24} className="text-background" />,
          title: "Comprehensive Invoice Reporting",
          description:
            "Generate detailed financial reports on invoicing, payments, and outstanding balances for better decision-making.",
        },
        {
          icon: <BellRing size={24} className="text-background" />,
          title: "Instant Payment Notifications",
          description:
            "Receive real-time alerts when an invoice is paid, overdue, or disputed, keeping financial processes smooth.",
        },
      ],
    },
  ],
  featureData: [
    {
      icon: <FileText className="text-background" />,
      title: "Automated Invoice",
      description:
        "Create and send invoices automatically, reducing manual effort and ensuring billing accuracy.",
    },
    {
      icon: <CreditCard className="text-background" />,
      title: "Payment Processing",
      description:
        "Track payments and streamline the processing of invoices to ensure timely collections.",
    },
    {
      icon: <BarChart2 className="text-background" />,
      title: "Invoice Analytics & Reporting",
      description:
        "Gain insights into invoice trends, payment delays, and revenue streams with real-time analytics.",
    },
    {
      icon: <ClipboardList className="text-background" />,
      title: "Invoice Status Tracking",
      description:
        "Monitor the status of invoices in real-time, from sent to paid to overdue.",
    },
    {
      icon: <AlertTriangle className="text-background" />,
      title: "Overdue Payment Alerts",
      description:
        "Get notified when invoices are overdue and take action to prevent cash flow disruptions.",
    },
    {
      icon: <Clock className="text-background" />,
      title: "Scheduled Billing",
      description:
        "Automate recurring invoices with scheduled billing to improve consistency and accuracy.",
    },
    {
      icon: <Receipt className="text-background" />,
      title: "Digital Receipts & Records",
      description:
        "Maintain a digital trail of all invoices and payments for easy auditing and record-keeping.",
    },
    {
      icon: <Calculator className="text-background" />,
      title: "Tax & Compliance Integration",
      description:
        "Ensure tax compliance by automating tax calculations and keeping records in line with regulations.",
    },
    {
      icon: <PieChart className="text-background" />,
      title: "Revenue Breakdown",
      description:
        "Analyze revenue streams based on paid, pending, and overdue invoices for better financial planning.",
    },
    {
      icon: <ClipboardCheck className="text-background" />,
      title: "Approval Workflow",
      description:
        "Streamline invoice approvals with automated workflows, reducing delays in processing.",
    },
    {
      icon: <Layers className="text-background" />,
      title: "Multi-Project Invoice",
      description:
        "Manage invoices across multiple construction projects from a single dashboard.",
    },
    {
      icon: <Bell className="text-background" />,
      title: "Instant Invoice Notifications",
      description:
        "Receive alerts when an invoice is generated, viewed, paid, or overdue.",
    },
    {
      icon: <RefreshCcw className="text-background" />,
      title: "Dynamic Payment Updates",
      description:
        "Update invoices dynamically to reflect change orders and additional costs.",
    },
    {
      icon: <Target className="text-background" />,
      title: "Invoice Performance Tracking",
      description:
        "Monitor key invoicing metrics like average payment time and overdue percentage.",
    },
    {
      icon: <TrendingDown className="text-background" />,
      title: "Dispute & Resolution",
      description:
        "Track invoice disputes and manage resolutions efficiently to prevent delays in payments.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Centralized Invoice Data",
      description:
        "Store and manage all invoice records in a secure and accessible system.",
    },
    {
      icon: <ShieldCheck className="text-background" />,
      title: "Secure Transactions",
      description:
        "Ensure all invoices and payments are processed securely with encrypted transactions.",
    },
    {
      icon: <FilePlus className="text-background" />,
      title: "Automated Invoice Reports",
      description:
        "Generate financial reports automatically with real-time invoicing data.",
    },
    {
      icon: <FileBarChart className="text-background" />,
      title: "Cash Flow Insights",
      description:
        "Analyze how invoices impact cash flow, helping you plan and manage project finances effectively.",
    },
    {
      icon: <Calendar className="text-background" />,
      title: "Due Date Management",
      description:
        "Monitor invoice due dates, ensuring timely payments to avoid any project delays caused by cash flow issues.",
    },
  ],
  featuresData: {
    title: "Resources",
    subtitle: "Master Invoice Strategies",
    description:
      "Explore best practices and comprehensive guides for effectively qualifying contractors ",
    features: [
      {
        icon: <FileText className="text-white" />,
        title: "Customizable Invoice",
        description:
          "Create and customize invoice templates with your brand’s logo, payment terms, and project details.",
      },
      {
        icon: <ClipboardList className="text-white" />,
        title: "Invoice History & Records",
        description:
          "Maintain an organized history of all invoices and payments, ensuring easy access to past financial data.",
      },
      {
        icon: <AlertTriangle className="text-white" />,
        title: "Invoice Discrepancy Alerts",
        description:
          "Get notified about any discrepancies or mismatches between invoices and payments for prompt resolution.",
      },
      {
        icon: <PieChart className="text-white" />,
        title: "Expense & Revenue Insights",
        description:
          "Analyze the breakdown of invoices to gain insights into project costs and revenue patterns.",
      },
      {
        icon: <Receipt className="text-white" />,
        title: "Comprehensive Billing Reports",
        description:
          "Generate billing reports to keep track of project invoicing and ensure financial transparency.",
      },
      {
        icon: <RefreshCcw className="text-white" />,
        title: "Invoice Updates",
        description:
          "Easily update or adjust invoices as project costs change, ensuring your records reflect the latest figures.",
      },
    ],
  },
  ctaProps: {
    title: "Streamline Your Invoice Management Process",
    description: "",
    benefits: [
      "Instant invoice",
      "Real-time payment tracking",
      "Automated payment reminders",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
  },
};
