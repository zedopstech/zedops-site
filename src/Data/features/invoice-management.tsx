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
  MailCheck,    // New Icon
  Wallet,       // New Icon
} from "lucide-react";

export const INVOICEMANAGEMENT_PAGE = {
  // --- HERO SECTION ---
  heroProps: {
    subtitle: "Get Paid Faster. Manage Cash Flow with Confidence.",
    description:
      "Transform your billing cycle from a source of stress into a streamlined, predictable process. Zedops automates invoice creation, simplifies payment tracking, and helps you maintain a healthy cash flow for your business.",
    buttonLabel: "Streamline Your Invoicing",
    imageSrc: "/Solutions/financial/invoice-management-hero.webp", // MUST UPDATE
    imageAlt: "A clean dashboard showing a list of construction invoices with their status (Paid, Due, Overdue).",
    linkHref: "/book-a-demo",
    
    // --- Floating Cards for the Invoice Management Hero Section ---
    floatingCards: [
      {
        icon: FilePlus,
        title: "New Invoice Generated",
        subtitle: "$50,000 to Project Alpha",
        positionClasses: "top-16 -left-20",
      },
      {
        icon: MailCheck,
        title: "Invoice Viewed by Client",
        subtitle: "Invoice #INV-007",
        positionClasses: "bottom-1/4 -left-24",
      },
      {
        icon: CreditCard,
        title: "Payment Received",
        subtitle: "$25,000 from ABC Contracting",
        positionClasses: "top-1/2 -right-12",
      },
    ],
  },
  
  // --- SUB-HERO / VALUE PROPOSITION ---
  heroSectionProps: {
    subtitle: "From Application To Payment",
    title: "A Seamless Billing and Collections Cycle",
    description:
      "Eliminate manual data entry, incorrect billing, and the friction of chasing payments. Our platform connects your project data directly to your invoices for unparalleled accuracy and efficiency.",
    buttonLabel: "Request a Demo",
    buttonLink: "/book-a-demo",
  },
  
  // --- CORE FEATURES ---
  featuresSectionProps: {
    features: [
      {
        title: "Automated Pay Applications",
        description:
          "Generate industry-standard payment applications (like AIA G702/G703) automatically from your project data, including schedule of values and stored materials.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Real-Time Invoice Tracking",
        description:
          "Never lose track of a payment. Monitor the status of every invoice in real-time, from 'Sent' and 'Viewed' to 'Paid' or 'Overdue'.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },
  
  // --- BENEFITS / OUTCOMES ---
  TestimonalsSectionProps: {
    subtitle: "Why ZedOps Invoicing?",
    title: "Improve Your Financial Health",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "An illustration of a wallet with a rising chart, symbolizing healthy cash flow.",
    features: [
      {
        title: "Improve Cash Flow",
        description:
          "Get paid faster by submitting accurate invoices on time and using automated reminders for overdue payments.",
        icon: <FileText size={24} />,
      },
      {
        title: "Reduce Administrative Workload",
        description:
          "Drastically cut down the time your team spends creating, sending, and tracking invoices, freeing them for higher-value tasks.",
        icon: <CreditCard size={24} />,
      },
      {
        title: "Enhance Client Transparency",
        description:
          "Build trust with clear, professional, and detailed invoices that are easy for your clients to understand and approve.",
        icon: <BellRing size={24} />,
      },
    ],
  },

  // --- DETAILED FEATURE SECTIONS ---
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Streamlined Invoice Creation",
      subtitle: "Accuracy and Speed, Built-In",
      description:
        "Generate professional, error-free invoices and pay applications in a fraction of the time it takes with spreadsheets.",
      features: [
        {
          icon: <FileText size={24} className="text-background" />,
          title: "Pay Application Generation",
          description: "Automatically populate payment applications with your schedule of values and work-completed data.",
        },
        {
          icon: <CreditCard size={24} className="text-background" />,
          title: "Change Order Integration",
          description: "Ensure all approved change orders are automatically included in your billing, so nothing gets missed.",
        },
        {
          icon: <Clock size={24} className="text-background" />,
          title: "Customizable Templates",
          description: "Create professional invoice and pay app templates with your company branding and specific terms.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Intelligent Collections",
      subtitle: "Proactive Payment Management",
      description:
        "Go beyond simple tracking. Our tools help you proactively manage your accounts receivable to maintain a healthy cash flow.",
      features: [
        {
          icon: <TrendingUp size={24} className="text-background" />,
          title: "Invoice Status Tracking",
          description: "Get real-time updates when an invoice is sent, viewed by the client, and paid.",
        },
        {
          icon: <Wallet size={24} className="text-background" />, // Changed icon
          title: "Cash Flow Forecasting",
          description: "Project future cash inflows based on invoice due dates and historical payment behavior.",
        },
        {
          icon: <BellRing size={24} className="text-background" />,
          title: "Automated Payment Reminders",
          description: "Set up automated, professional email reminders for upcoming or overdue invoices to prompt timely payment.",
        },
      ],
    },
  ],
  
  // --- GRID OF ALL FEATURES ---
  featureData: [
    {
      icon: <FileText className="text-background" />,
      title: "Automated Pay Applications",
      description: "Generate AIA G702/G703 style pay apps from project data.",
    },
    {
      icon: <CreditCard className="text-background" />,
      title: "Online Payment Integration",
      description: "Allow clients to pay invoices directly via integrated payment gateways.",
    },
    {
      icon: <BarChart2 className="text-background" />,
      title: "A/R Aging Reports",
      description: "Instantly see which invoices are current, 30, 60, or 90+ days overdue.",
    },
    {
      icon: <ClipboardList className="text-background" />,
      title: "Invoice Status Dashboard",
      description: "Track the status of all invoices—draft, sent, viewed, paid, overdue.",
    },
    {
      icon: <AlertTriangle className="text-background" />,
      title: "Automated Overdue Reminders",
      description: "Reduce manual follow-up with automated email reminders for late payments.",
    },
    {
      icon: <Receipt className="text-background" />,
      title: "Digital Invoice Records",
      description: "Maintain a secure, searchable history of all billing documents.",
    },
    {
      icon: <Calculator className="text-background" />,
      title: "Tax & Retention Calculation",
      description: "Automatically calculate sales tax and manage retention amounts on invoices.",
    },
    {
      icon: <ClipboardCheck className="text-background" />,
      title: "Lien Waiver Management",
      description: "Generate and track lien waivers alongside your payment applications.",
    },
    {
      icon: <Layers className="text-background" />,
      title: "Multi-Project Billing",
      description: "Manage invoicing across your entire project portfolio from one place.",
    },
    {
      icon: <RefreshCcw className="text-background" />,
      title: "Change Order Integration",
      description: "Ensure all approved change orders are accurately billed.",
    },
    {
      icon: <ShieldCheck className="text-background" />,
      title: "Accounting System Sync",
      description: "Sync all invoice and payment data with your main accounting software.",
    },
    {
      icon: <FileBarChart className="text-background" />,
      title: "Cash Flow Reporting",
      description: "Analyze your incoming and outgoing cash flow for better financial planning.",
    },
  ],

  // --- RESOURCES / GUIDES SECTION ---
  featuresData: {
    title: "Resources",
    subtitle: "Master Your Billing Cycle",
    description: "Explore our expert guides to improve your construction billing and cash flow management.",
    features: [
      {
        icon: <FileText className="text-white" />,
        title: "A Contractor's Guide to Payment Applications",
        description: "Access the guide.",
      },
      {
        icon: <ClipboardList className="text-white" />,
        title: "Best Practices for Lien Waiver Management",
        description: "Read the article.",
      },
      {
        icon: <AlertTriangle className="text-white" />,
        title: "5 Strategies to Drastically Reduce Overdue Invoices",
        description: "Read our best practices.",
      },
      {
        icon: <TrendingUp className="text-white" />,
        title: "How to Improve Your Construction Cash Flow",
        description: "Learn key strategies.",
      },
    ],
  },
  
  // --- FINAL CALL TO ACTION ---
  ctaProps: {
    title: "Take Control of Your Company's Cash Flow",
    description: "Stop waiting on payments and start managing your finances proactively. See how Zedops can streamline your entire billing process.",
    benefits: [
      "Get paid faster",
      "Reduce administrative work",
      "Improve financial visibility",
    ],
    button1Label: "Request a Demo",
    button1Link: "/book-a-demo",
    button2Label: "Talk to Sales",
    button2Link: "/contact-sales",
  },
};