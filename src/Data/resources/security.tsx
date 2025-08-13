import { Lock, Users, KeyRound, ShieldCheck, Server, UserCheck } from "lucide-react"; // Added new icons

export const SECURITY_PAGE = {
  // --- HERO SECTION ---
  heroProps: {
    subtitle: "Security at Our Core",
    description:
      "Your data is the foundation of your business. Discover how Zedops builds a comprehensive, defense-in-depth security program into every layer of our platform to protect your projects, your team, and your reputation.",
    imageSrc: "/Solutions/security/security.svg", 
    imageAlt: "A digital shield icon protecting construction project data in the cloud.",
    linkHref: "/book-a-demo",
    floatingCards: [
      {
        icon: ShieldCheck,
        title: "Vulnerability Scan Complete",
        subtitle: "0 critical issues found",
        positionClasses: "top-1/3 -left-24 hidden lg:block",
      },
      {
        icon: Server,
        title: "Data Backup Successful",
        subtitle: "Geo-redundant storage",
        positionClasses: "top-10 -right-16 hidden lg:block",
      },
      {
        icon: UserCheck,
        title: "New User Authenticated",
        subtitle: "Multi-factor authentication (MFA)",
        positionClasses: "bottom-1/4 -right-16 hidden lg:block",
      },
    ],
  },
  
  // --- CORE PILLARS SECTION ---
  TestimonalsSectionProps: {
    subtitle: "OUR COMMITMENT TO YOUR DATA",
    title: "A Multi-Layered Defense for Your Information",
    description:
      "We believe security is not a feature, but a promise. Zedops employs a comprehensive strategy to safeguard your project information from unauthorized access, data loss, and emerging cyber threats.",
    features: [
      {
        title: "Data Encryption in Transit & at Rest",
        description:
          "From the moment your data leaves your device (in transit) to when it's stored in our databases (at rest), it's protected with industry-leading TLS 1.2+ and AES-256 encryption.",
        icon: <Lock size={24} />,
      },
      {
        title: "Granular Access Control (RBAC)",
        description:
          "You decide who sees what. Our Role-Based Access Control ensures that team members, subcontractors, and clients only access the specific information and features they need to do their jobs.",
        icon: <Users size={24} />,
      },
      {
        title: "Secure & Modern Authentication",
        description:
          "Protect your accounts with robust login mechanisms. We enforce strong password policies and offer multi-factor authentication (MFA) and Single Sign-On (SSO) to integrate with your corporate security standards.",
        icon: <KeyRound size={24} />,
      },
    ],
  },
  
  // --- INFRASTRUCTURE & COMPLIANCE SECTION ---
  stickySection: {
    title: "Built on a Foundation of Trust",
    subtitle: "PLATFORM & INFRASTRUCTURE SECURITY",
    description:
      "Our platform is engineered with security best practices at every stage, from the code we write to the world-class, compliant infrastructure we use.",
    features: [
      {
        title: "Secure Cloud Infrastructure",
        description:
          "We partner with leading cloud providers like AWS and Google Cloud, who are compliant with a vast array of global standards. This leverages their extensive physical, network, and operational security controls.",
        Icon: "CloudCog",
      },
      {
        title: "Continuous Monitoring & Auditing",
        description:
          "Our systems are monitored 24/7 for suspicious activity using advanced threat detection. We conduct regular internal code reviews and third-party penetration tests to proactively identify and address vulnerabilities.",
        Icon: "ShieldCheck",
      },
      {
        title: "Secure Software Development Lifecycle",
        description:
          "Security is integrated into our development process (DevSecOps). We follow secure coding practices, conduct static and dynamic code analysis, and have a rigorous process for managing dependencies.",
        Icon: "Bug",
      },
      {
        title: "Resilience & Business Continuity",
        description:
          "Your work never stops, and neither do we. We maintain automated, redundant backups across multiple geographic regions and have a robust disaster recovery plan to ensure your data is safe and accessible.",
        Icon: "Server",
      },
      // Added two new features to this section for more depth
      {
        title: "Data Isolation & Privacy",
        description:
          "Your company's data is logically isolated in our multi-tenant architecture. We are committed to data privacy and have implemented technical and organizational measures to comply with regulations like GDPR.",
        Icon: "DatabaseZap",
      },
      {
        title: "Incident Response Plan",
        description:
          "In the unlikely event of a security incident, we have a well-defined incident response plan to promptly contain the threat, mitigate impact, and communicate transparently with affected customers.",
        Icon: "ShieldQuestion",
      }
    ],
  },

  // --- FAQ SECTION ---
  faqSection: {
    title: "Your Security Questions, Answered",
    description:
      "Transparency is a key part of our security promise. Find answers to common questions about our data protection and compliance practices.",
    faqs: [
      {
        question: "Who has access to my project data?",
        answer:
          "Only you and the users you authorize. You retain full ownership of your data. Zedops personnel do not access your project data unless required for support, and only with your explicit permission recorded in an audit log.",
      },
      {
        question: "What compliance standards do you follow?",
        answer:
          "We are built on infrastructure that meets major international standards like SOC 2 Type II, ISO 27001, and CSA STAR. We are actively pursuing our own organizational certifications to provide formal assurance. Please contact our team for the most current compliance report.",
      },
      {
        question: "How do you ensure data privacy?",
        answer:
          "We are committed to data privacy by design. We adhere to regulations like GDPR and have a clear privacy policy outlining data processing. We do not sell your data, and we provide tools for data management and deletion.",
      },
      {
        question: "Where is my data physically stored?",
        answer:
          "Your data is stored in secure, top-tier data centers. For our Enterprise plan clients, we can offer regional data residency (e.g., within the EU or Middle East) to help meet specific compliance or data sovereignty requirements.",
      },
      {
        question: "How does Zedops handle security vulnerabilities?",
        answer:
          "We have a dedicated security team and a responsible disclosure program. Upon discovery, vulnerabilities are prioritized based on CVSS scoring and patched based on severity, with a commitment to rapid resolution and transparent communication.",
      },
      {
        question: "Do you offer Single Sign-On (SSO)?",
        answer:
          "Yes, we support SSO integration via SAML 2.0 and OpenID Connect with major identity providers like Azure AD, Okta, and Google Workspace to streamline user access and enforce your company's authentication policies (available on our Enterprise plan).",
      },
    ],
    contactTitle: "Have More Security Questions?", 
    contactDescription:
      "Our security team is ready to provide the detailed information and documentation you need to feel confident. Reach out to discuss your specific requirements.",
  },
  
  // --- FINAL CALL TO ACTION ---
  ctaProps: {
    title: "Build with the Confidence of World-Class Security",
    description: "Focus on your projects, knowing your data is protected by a robust, proactive security program designed for the modern construction industry.",
    benefits: [
      "Protect sensitive project",
      "Ensure business continuity",
      "Meet client & regulatory needs",
      "Build stakeholder trust", 
    ],
    button1Label: "Request Security Whitepaper", 
    button1Link: "/contact-sales", 
    button2Label: "See the Platform in Action", 
    button2Link: "/book-a-demo", 
  },
};