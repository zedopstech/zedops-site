import {
  ShieldCheck,
  ClipboardList,
  AlertTriangle,
  ShieldAlert,
  // Thermometer, // Often too specific, can be removed
  CheckCheck,
  ClipboardCheck,
  Layers,
  Bell,
  Database,
  FilePlus,
  Calendar,
  Receipt,
  BarChart,
  AlertCircle,
  Clock,
  FileText,
  HardHat,      // New Icon
  Camera,       // New Icon
  ListChecks,   // New Icon
} from "lucide-react";

export const QUALITYANDSAFETY_PAGE = {
  // --- HERO SECTION ---
  heroProps: {
    subtitle: "Build with Certainty. Protect Your People and Your Projects.",
    description:
      "Transform your site safety and quality assurance from a reactive chore into a proactive advantage. Zedops empowers your team to identify risks before they become incidents and ensure every aspect of your project meets the highest standards.",
    buttonLabel: "Enhance Your Site Safety",
    imageSrc: "/Solutions/Quality/quality.webp", // MUST UPDATE
    imageAlt: "A safety manager on a construction site using a tablet to conduct a digital safety inspection.",
    linkHref: "/book-a-demo",
    
    // --- Floating Cards for the Quality & Safety Hero Section ---
    floatingCards: [
      {
        icon: HardHat,
        title: "Toolbox Talk Complete",
        subtitle: "15 team members signed off",
        positionClasses: "top-16 -left-20",
      },
      {
        icon: AlertTriangle,
        title: "New Observation Logged",
        subtitle: "Corrective action assigned",
        positionClasses: "bottom-1/4 -left-24",
      },
      {
        icon: Camera,
        title: "Inspection Photos Uploaded",
        subtitle: "Quality check for concrete pour",
        positionClasses: "top-1/3 -right-16",
      },
    ],
  },

  // --- SUB-HERO / VALUE PROPOSITION ---
  heroSectionProps: {
    subtitle: "Proactive Risk & Quality Management",
    title: "From Compliance to Excellence",
    description:
      "Move beyond simple checklists. Our platform provides a connected, real-time view of your site's safety and quality performance, enabling you to build a world-class culture of accountability.",
    buttonLabel: "Request a Demo",
    buttonLink: "/book-a-demo",
  },

  // --- CORE FEATURES ---
  featuresSectionProps: {
    features: [
      {
        title: "Digital Inspections & Checklists",
        description:
          "Conduct safety audits, quality checks, and site inspections from any mobile device. Use pre-built templates or create your own custom forms in minutes.",
        imageSrc: "/Solutions/estimation-1.jpg",
      },
      {
        title: "Actionable Issue Tracking",
        description:
          "Capture issues, observations, and non-conformances instantly with photos. Assign corrective actions and track them to resolution with a clear audit trail.",
        imageSrc: "/Solutions/estimation-2.jpg",
      },
    ],
  },

  // --- BENEFITS / OUTCOMES ---
  TestimonalsSectionProps: {
    subtitle: "Why ZedOps Quality & Safety?",
    title: "A Safer, Higher-Quality Project is a More Profitable Project",
    imageSrc: "/Solutions/estimation-testimonal.jpg",
    imageAlt: "An illustration of a shield protecting a construction project, symbolizing risk mitigation.",
    features: [
      {
        title: "Prevent Costly Incidents",
        description:
          "Proactively identify and mitigate hazards before they lead to accidents, reducing downtime, insurance costs, and project delays.",
        icon: <ShieldCheck size={24} />,
      },
      {
        title: "Eliminate Rework",
        description:
          "Catch quality issues early with standardized inspections and real-time tracking, ensuring work is done right the first time.",
        icon: <ClipboardList size={24} />,
      },
      {
        title: "Build a Stronger Reputation",
        description:
          "Demonstrate your commitment to excellence. A strong safety and quality record helps you win more bids and attract top talent.",
        icon: <AlertTriangle size={24} />,
      },
    ],
  },

  // --- DETAILED FEATURE SECTIONS ---
  mainSectionData: [
    {
      image: "/Solutions/estimation-section.jpg",
      title: "Proactive Safety Management",
      subtitle: "Empower Your Entire Team",
      description:
        "Foster a culture of safety where every team member is empowered to identify and report hazards, contributing to a safer work environment for everyone.",
      features: [
        {
          icon: <ShieldAlert size={24} className="text-background" />,
          title: "Mobile-First Hazard Reporting",
          description: "Enable anyone on site to instantly report a hazard with a photo and location from their phone.",
        },
        {
          icon: <HardHat size={24} className="text-background" />, // Changed icon
          title: "Toolbox Talks & Safety Meetings",
          description: "Schedule, document, and track attendance for all safety meetings, ensuring compliance and record-keeping.",
        },
        {
          icon: <CheckCheck size={24} className="text-background" />,
          title: "Compliance & Training Records",
          description: "Maintain a centralized record of all safety certifications and training for your workforce.",
        },
      ],
    },
    {
      image: "/Solutions/estimation section-1.jpg",
      imageOnRight: "true",
      title: "Comprehensive Quality Assurance",
      subtitle: "Deliver Excellence, Consistently",
      description:
        "Implement a standardized quality control program to ensure your projects meet and exceed client expectations and contractual requirements.",
      features: [
        {
          icon: <ClipboardCheck size={24} className="text-background" />,
          title: "Customizable Inspection Checklists",
          description: "Build checklists tailored to specific trades or project phases, ensuring no detail is overlooked.",
        },
        {
          icon: <Layers size={24} className="text-background" />,
          title: "Non-Conformance Reporting (NCR)",
          description: "Formally document any work that doesn't meet quality standards and manage the remediation process.",
        },
        {
          icon: <AlertCircle size={24} className="text-background" />,
          title: "Deficiency & Punch Lists",
          description: "Streamline project closeout by creating, assigning, and tracking punch list items with photos and deadlines.",
        },
      ],
    },
  ],

  // --- GRID OF ALL FEATURES ---
  featureData: [
    {
      icon: <ShieldAlert className="text-background" />,
      title: "Hazard Identification & Reporting",
      description: "Empower your team to report hazards in real-time from mobile devices.",
    },
    {
      icon: <ClipboardCheck className="text-background" />,
      title: "Digital Inspection Forms",
      description: "Conduct quality, safety, and environmental inspections with custom checklists.",
    },
    {
      icon: <ListChecks className="text-background" />, // Changed icon
      title: "Corrective Action Tracking",
      description: "Assign responsibility and track the resolution of all identified issues.",
    },
    {
      icon: <Clock className="text-background" />,
      title: "Scheduled Audits & Inspections",
      description: "Automate recurring safety walks and quality checks for consistency.",
    },
    {
      icon: <Receipt className="text-background" />,
      title: "Digital Safety Records",
      description: "Maintain a secure, searchable history of all safety-related documentation.",
    },
    {
      icon: <BarChart className="text-background" />,
      title: "Performance Analytics",
      description: "Analyze trends in safety incidents and quality issues to drive continuous improvement.",
    },
    {
      icon: <ClipboardList className="text-background" />,
      title: "Incident & Near-Miss Reporting",
      description: "Formally document incidents to understand root causes and prevent recurrence.",
    },
    {
      icon: <ShieldCheck className="text-background" />,
      title: "PPE Compliance Tracking",
      description: "Ensure PPE requirements are being met through regular checks and reporting.",
    },
    {
      icon: <Bell className="text-background" />,
      title: "Instant Notifications",
      description: "Receive real-time alerts for high-priority incidents or overdue corrective actions.",
    },
    {
      icon: <Database className="text-background" />,
      title: "Centralized Compliance Data",
      description: "Store all training records, certifications, and compliance documents in one place.",
    },
    {
      icon: <FilePlus className="text-background" />,
      title: "Automated Report Generation",
      description: "Instantly generate professional safety and quality reports for clients or stakeholders.",
    },
    {
      icon: <Calendar className="text-background" />,
      title: "Safety Training Management",
      description: "Schedule and track completion of all required safety training courses.",
    },
  ],

  // --- RESOURCES / GUIDES SECTION ---
  featuresData: {
    title: "Resources",
    subtitle: "Build a World-Class Q&S Program",
    description: "Explore our expert guides to enhance your site safety and quality assurance processes.",
    features: [
      {
        icon: <HardHat className="text-white" />,
        title: "How to Conduct an Effective Toolbox Talk",
        description: "Watch the video guide.",
      },
      {
        icon: <ClipboardList className="text-white" />,
        title: "The Ultimate Guide to Construction Quality Control",
        description: "Access the guide.",
      },
      {
        icon: <AlertTriangle className="text-white" />,
        title: "Leading vs. Lagging Indicators in Safety",
        description: "Read the article.",
      },
      {
        icon: <FileText className="text-white" />,
        title: "A Contractor's Guide to ISO 9001",
        description: "Learn about quality management systems.",
      },
    ],
  },

  // --- FINAL CALL TO ACTION ---
  ctaProps: {
    title: "Build Safer, Build Better, Build Smarter.",
    description: "Take the first step towards a zero-incident culture and a reputation for excellence. See how Zedops can help.",
    benefits: [
      "Reduce workplace incidents",
      "Eliminate costly rework",
      "Enhance project reputation",
    ],
    button1Label: "Request a Demo",
    button1Link: "/book-a-demo",
    button2Label: "Talk to Sales",
    button2Link: "/contact-sales",
  },
};