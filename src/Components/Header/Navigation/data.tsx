import {
  ClipboardList,
  Building2,
  DollarSign,
  HardHat,
  ShieldCheck,
  PieChart,
  FileText,
  Package,
  ShoppingBasket,
  Brain,
  LayoutDashboard,
  NotepadText,
  Grid,
  Grip,
  Blocks,
  Book,
  Video,
  Briefcase,
  HelpCircle,
  Shield,
} from "lucide-react";

export const featuresMenu = [
  {
    category: "Tendering / Bid management",
    items: [
      {
        title: "Prequalification",
        href: "/features/TenderingManagement/prequalification",
        description: "Manage tenders and streamline bidding processes.",
        icon: ClipboardList,
      },
      {
        title: "BIM",
        href: "/features/TenderingManagement/bim",
        description: "Building Information Modeling for efficient planning.",
        icon: Building2,
      },
      {
        title: "Estimation and Take-off",
        href: "/features/TenderingManagement/estimation",
        description: "Accurate project cost estimation tools.",
        icon: DollarSign,
      },
    ],
  },
  {
    category: "Project Execution",
    items: [
      {
        title: "Project Management",
        href: "/features/ProjectExecution/ProjectManagement",
        description: "Organize and execute projects effectively.",
        icon: HardHat,
      },
      {
        title: "Quality & Safety",
        href: "/features/ProjectExecution/QualityAndSafety",
        description: "Ensure quality and safety standards are met.",
        icon: ShieldCheck,
      },
    ],
  },
  {
    category: "Financial Management",
    items: [
      {
        title: "Project Financial",
        href: "/features/FinancialManagement/ProjectFinancial",
        description: "Track financial and project budgets in real-time.",
        icon: PieChart,
      },
      {
        title: "Invoice Management",
        href: "/features/FinancialManagement/InvoiceManagement",
        description: "Simplify invoicing and payment processes.",
        icon: FileText,
      },
    ],
  },
  {
    category: "Material Management",
    items: [
      {
        title: "Inventory",
        href: "/features/MaterialManagement/Inventory",
        description: "Effortless control, seamless inventory management",
        icon: Package,
      },
      {
        title: "Procurement",
        href: "/features/MaterialManagement/Procurement",
        description: "Streamline procurement processes efficiently.",
        icon: ShoppingBasket,
      },
    ],
  },
  {
    category: "Construction Intelligence",
    items: [
      {
        title: "Predictive Analytics",
        href: "/features/ConstructionIntelligence/PredictiveAnalytics",
        description: "Gain insights with advanced analytics tools.",
        icon: Brain,
      },
      {
        title: "Real-Time Dashboards",
        href: "/features/ConstructionIntelligence/RealTimeDashboards",
        description: "Gain insights with advanced analytics tools.",
        icon: LayoutDashboard,
      },
      {
        title: "Reports and Alerts",
        href: "/features/ConstructionIntelligence/ReportsAndAlerts",
        description: "Gain insights with advanced analytics tools.",
        icon: NotepadText,
      },
    ],
  },
];

export const resourcesMenu = [
  {
    title: "Knowledge Base",
    href: "/features/Knowledge",
    description:
      "Explore articles and guides to understand our services better.",
    icon: Book,
  },
  {
    title: "Webinars",
    href: "/features/Webinars",
    description: "Watch sessions and webinars by industry experts.",
    icon: Video,
  },
  //   {
  //     title: "Blog",
  //     href: "/resources/blog",
  //     description: "Stay updated with trends and insights from our blog.",
  //     icon: FileText,
  //   },
  {
    title: "Case Studies",
    href: "/features/case-studies",
    description: "Learn from success stories and case studies.",
    icon: Briefcase,
  },
  {
    title: "FAQs",
    href: "/features/faq",
    description: "Find answers to common questions in our FAQ section.",
    icon: HelpCircle,
  },
  {
    title: "Security",
    href:  "/features/Security",
    description: "Your data is secured with top-notch security measures.",
    icon: Shield,
  },
];

export const featureNav = [
  {
    title: "Platform Overview",
    href: "/features/Platform",
    description: "Get a high-level overview of ZedOps.",
    icon: Grid,
  },
  {
    title: "All Features",
    href: "/features/all-features ",
    description: "Explore all the features ZedOps has to offer.",
    icon: Grip,
  },
  {
    title: "Integrations",
    href: "/features/integration",
    description: "Discover the integrations ZedOps supports.",
    icon: Blocks,
  },
];
