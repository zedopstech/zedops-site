import { Lock, ShieldCheck, Users, CloudCog, KeyRound, Server, Bug, } from "lucide-react";

export const SECURITY_PAGE = {
    heroProps: {
      subtitle: "Platform Security",
      description:
        "Protecting your sensitive project data is our top priority. Learn how ZedOps ensures the confidentiality, integrity, and availability of your information.",
      imageSrc: "/solutions/security.png", 
      imageAlt: "Abstract graphic representing software security and data protection",
      linkHref: "/security-features", 
    },
  
    TestimonalsSectionProps: { 
      subtitle: "DATA PROTECTION & ACCESS",
      title: "Securing Your Construction Data",
      description:
        "ZedOps employs multi-layered security measures to safeguard your project information from unauthorized access and cyber threats.",
      features: [
        {
          title: "End-to-End Encryption",
          description:
            "All data, both in transit and at rest, is encrypted using industry-standard protocols like TLS and AES-256 to ensure confidentiality.",
          icon: <Lock size={24} />,
        },
        {
          title: "Role-Based Access Control",
          description:
            "Granular permission settings allow you to control exactly who can view, edit, or manage specific project data within the platform.",
          icon: <Users size={24} />,
        },
        {
          title: "Secure Authentication",
          description:
            "Robust login mechanisms, including options for multi-factor authentication (MFA), protect user accounts from unauthorized access.",
          icon: <KeyRound size={24} />,
        },
      ],
    },
  
    stickySection: {
      title: "Robust Platform & Infrastructure Security",
      subtitle: "Core Security Measures",
      description:
        "Our platform is built on secure infrastructure with continuous monitoring and adherence to best practices to mitigate risks.",
      features: [
        {
          title: "Secure Cloud Infrastructure",
          description:
            "Hosted on leading cloud providers (e.g., AWS, Azure, GCP) leveraging their extensive physical and network security controls.",
          icon: <CloudCog className="size-6 text-background" />,
        },
        {
          title: "Regular Security Audits",
          description:
            "We conduct frequent internal and third-party security audits and penetration testing to identify and address potential vulnerabilities.",
          icon: <ShieldCheck className="size-6 text-background" />,
        },
        {
          title: "Vulnerability Management",
          description:
            "Continuous monitoring and proactive patching processes ensure that our platform is protected against emerging threats.",
          icon: <Bug className="size-6 text-background" />,
        },
        {
          title: "Data Backup & Recovery",
          description:
            "Automated backups and robust disaster recovery plans ensure data availability and business continuity in case of unforeseen events.",
          icon: <Server className="size-6 text-background" />,
        },
      ],
    },
  
    faqSection: {
      title: "Software Security FAQs",
      description:
        "Your questions about ZedOps platform security, data privacy, and compliance answered.",
      faqs: [
        {
          question: "How is my project data protected within ZedOps?",
          answer:
            "We use multiple layers of security, including end-to-end encryption, strict access controls, secure infrastructure, regular audits, and proactive threat monitoring.",
        },
        {
          question: "Who owns the data I upload to ZedOps?",
          answer:
            "You retain full ownership of your data. We act as custodians and process your data according to our terms of service and privacy policy.",
        },
        {
          question: "What compliance standards does ZedOps adhere to?",
          answer:
            "We adhere to industry best practices and are working towards certifications like SOC 2 and ISO 27001. Please contact us for the latest compliance details.",
        },
        {
          question: "How do you handle user permissions and access levels?",
          answer:
            "ZedOps features robust Role-Based Access Control (RBAC). Administrators can define specific roles and assign granular permissions for different users and teams.",
        },
        {
          question: "Where is my data stored?",
          answer:
            "Your data is stored securely in top-tier data centers provided by our cloud partners (e.g., AWS, Azure, GCP), typically within your specified region.",
        },
        {
          question: "What measures are in place for data privacy?",
          answer:
            "We are committed to data privacy and comply with regulations like GDPR where applicable. Our privacy policy details how we collect, use, and protect personal information.",
        },
        {
          question:
            "How does ZedOps protect against common web vulnerabilities?",
          answer:
            "We follow secure coding practices, implement measures against OWASP Top 10 vulnerabilities, and use web application firewalls (WAFs) for added protection.",
        },
        {
          question:
            "What is the process for reporting a security vulnerability?",
          answer:
            "We encourage responsible disclosure. Please contact our security team directly via security@zedops.tech with any findings. We appreciate your help in keeping our platform secure.",
        },
        {
          question: "How often is the software updated for security?",
          answer:
            "We release security patches and updates proactively as vulnerabilities are identified and addressed, alongside regular platform enhancements.",
        },
        {
          question: "Do you offer Single Sign-On (SSO) integration?",
          answer:
            "Yes, ZedOps supports SSO integration with common identity providers (like Okta, Azure AD, Google Workspace) for streamlined and secure user authentication (available on specific plans).",
        },
      ],
      contactTitle: "Questions About Platform Security?", 
      contactDescription:
        "Reach out to our team for more detailed information about our security practices and compliance standards.",
    },
  
    ctaProps: {
      title: "Secure Your Project Data with ZedOps",
      description: "Trust our robust platform security to protect your valuable construction information.",
      benefits: [
        "Industry-standard encryption",
        "Granular access control",
        "Proactive threat monitoring",
        "Compliance focused", 
      ],
      button1Label: "Request Details", 
      button1Link: "/contact-sales", 
      button2Label: "Book a Demo", 
      button2Link: "/book-a-demo", 
    },
  };