import {
  FileText,
  DollarSign,
  Briefcase,
  MessagesSquare,
  Building,
  FolderOpen,
} from "lucide-react";

export const INTEGRATION = {
  // --- HERO SECTION ---
  heroprops: {
    title: "Connect Your Entire Construction Ecosystem",
    subtitle: "Powerful Integrations",
    description:
      "Zedops works seamlessly with the tools you already use. Connect your accounting, CRM, design, and communication platforms to create a single, unified workflow and eliminate duplicate data entry.",
    buttonLabel: "Explore Integrations",
    imageAlt: "A graphic showing the Zedops logo connected to logos of other software like accounting and CRM systems.",
    linkHref: "#integrations", // Link to the section on the same page
  },
  
  // --- FEATURED INTEGRATIONS ---
  // The 'apps' array now includes a 'category' and a placeholder 'image'
  featureIntegration: {
    title: "Popular Connections",
    subtitle: "Featured Integrations",
    apps: [
      // Category: Accounting & Financials
      {
        href: "#",
        image: "https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg",
        name: "QuickBooks Online",
        description: "Sync invoices, bills, and payments to keep your project financials and company accounting perfectly aligned.",
        category: "Accounting",
      },
      {
        href: "#",
        image: "https://cdn.worldvectorlogo.com/logos/sage-3.svg",
        name: "Sage 300 CRE",
        description: "Connect job costing, commitments, and vendor data between Zedops and your core construction accounting system.",
        category: "Accounting",
      },
      {
        href: "#",
        image: "https://cdn.worldvectorlogo.com/logos/xero-1.svg",
        name: "Xero",
        description: "Automate the flow of financial data, from invoices to payments, for simplified bookkeeping.",
        category: "Accounting",
      },
      // Category: Project Management & Design
      {
        href: "#",
        image: "https://1000logos.net/wp-content/uploads/2024/09/Procore-Emblem.png",
        name: "Procore",
        description: "Complement your existing Procore setup by syncing key project data, ensuring consistency across platforms.",
        category: "Project Management",
      },
      {
        href: "#",
        image: "https://cdn.worldvectorlogo.com/logos/autodesk-construction-cloud.svg",
        name: "Autodesk Construction Cloud",
        description: "Integrate with BIM 360 and other Autodesk tools for a seamless flow of design and construction data.",
        category: "Design & BIM",
      },
      {
        href: "#",
        image: "https://cdn.worldvectorlogo.com/logos/bluebeam.svg",
        name: "Bluebeam Revu",
        description: "Link your Bluebeam documents, markups, and RFIs directly to your Zedops project for improved collaboration.",
        category: "Design & BIM",
      },
      // Category: Communication & CRM
      {
        href: "#",
        image: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
        name: "Slack",
        description: "Receive critical project notifications for RFIs, submittals, and daily logs directly in your Slack channels.",
        category: "Communication",
      },
      {
        href: "#",
        image: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
        name: "Salesforce",
        description: "Connect your pre-construction and bidding process with your CRM for a seamless sales-to-project workflow.",
        category: "CRM",
      },
       {
        href: "#",
        image: "https://cdn.worldvectorlogo.com/logos/microsoft-project-2019.svg",
        name: "Microsoft Project",
        description: "Keep your high-level project schedules in sync, ensuring alignment between the office and the field.",
        category: "Project Management",
      },
    ],
  },
  
  // --- INTEGRATION CATEGORIES / BENEFITS ---
  // Repurposed this section to explain the BENEFITS of integration
  featuresData: {
    title: "Benefits of a Connected Platform",
    subtitle: "Why Integrate?",
    description:
      "Connecting your software tools does more than just save time; it transforms your business operations.",
    features: [
      {
        icon: <DollarSign className="text-white" />,
        title: "Eliminate Duplicate Entry",
        description: "Stop wasting hours manually re-entering data between systems. Let automation handle the flow of information.",
      },
      {
        icon: <Briefcase className="text-white" />,
        title: "Create a Single Source of Truth",
        description: "Ensure everyone on your team is working with the same, consistent data, from your accounting to your PM tools.",
      },
      {
        icon: <MessagesSquare className="text-white" />,
        title: "Improve Cross-Team Collaboration",
        description: "Break down silos between departments like finance, operations, and pre-construction.",
      },
      {
        icon: <Building className="text-white" />,
        title: "Enhance Decision Making",
        description: "Make better, faster decisions with comprehensive reports that pull data from all your connected systems.",
      },
      {
        icon: <FileText className="text-white" />,
        title: "Streamline Workflows",
        description: "Automate processes that span multiple applications, like converting a won bid in your CRM into a new project.",
      },
      {
        icon: <FolderOpen className="text-white" />,
        title: "Build Your Own Solutions",
        description: "Use our open API to build custom integrations tailored to your company's unique needs.",
      },
    ],
  },
  
  // --- FINAL CALL TO ACTION ---
  ctaProps: {
    title: "Ready to Build Your Connected Construction Platform?",
    description: "Our team can help you understand how Zedops can integrate with your existing tech stack to create a more efficient and profitable business.",
    benefits: [
      "Open API access",
      "Expert integration support",
      "Continuously growing library",
    ],
    button1Label: "Talk to an Integration Specialist",
    button1Link: "/contact-sales",
    button2Label: "View API Documentation",
    button2Link: "/api-docs",
  },
};