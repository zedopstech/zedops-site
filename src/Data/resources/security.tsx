import { Camera, BellRing, Key, BellRingIcon, ShieldAlert, Lock } from "lucide-react";

export const SECURITY_PAGE = {
    heroProps: {
      subtitle: "Security",
      description:
        "Ensure safety and security on your construction sites with advanced surveillance, access control, and real-time monitoring solutions.",
      imageSrc: "/Solutions/security.png", // Update this!
      imageAlt: "Construction site with advanced security systems",
      linkHref: "/security-solutions",
    },
  
    TestimonalsSectionProps: {
      subtitle: "SAFETY AND PROTECTION",
      title: "Securing Construction Sites",
      description:
        "Ensure construction site safety with advanced security solutions, including real-time surveillance, access control.",
      features: [
        {
          title: "Advanced Surveillance",
          description:
            "Monitor your construction site 24/7 with high-definition cameras and AI-powered threat detection, ensuring safety at all times.",
          icon: <Camera size={24} />,
        },
        {
          title: "Access Control Systems",
          description:
            "Prevent unauthorized access with biometric authentication, smart badges, and remote monitoring to keep your site secure.",
          icon: <Lock size={24} />,
        },
        {
          title: "Real-time Incident Alerts",
          description:
            "Stay ahead of potential threats with automated alerts and instant notifications for any security breaches or unusual activity.",
          icon: <BellRing size={24} />,
        },
      ],
    },
  
    stickySection: {
      title: "Comprehensive Security for Your Site",
      subtitle: "Security Features",
      description:
        "Our security solutions are designed to safeguard construction sites, minimize risks, and ensure a safe working environment for everyone.",
      features: [
        {
          title: "24/7 Site Monitoring",
          description:
            "Keep an eye on your construction site around the clock with AI-powered surveillance and remote monitoring capabilities.",
          icon: <Camera className="size-6 text-background" />,
        },
        {
          title: "Secure Access Control",
          description:
            "Control site entry with advanced authentication methods like biometrics, smart badges, and mobile verification.",
          icon: <Key className="size-6 text-background" />,
        },
        {
          title: "Incident Detection & Alerts",
          description:
            "Receive real-time alerts for unauthorized access, equipment tampering, and other security threats to act swiftly.",
          icon: <BellRingIcon className="size-6 text-background" />,
        },
        {
          title: "Emergency Response Integration",
          description:
            "Ensure rapid response to incidents with integrated emergency protocols and automated escalation procedures.",
          icon: <ShieldAlert className="size-6 text-background" />,
        },
      ],
    },
  
    faqSection: {
      title: "Security FAQs",
      description:
        "Have questions about securing your construction site? We've got answers to help you ensure safety and compliance.",
      faqs: [
        {
          question: "How can I improve security on my construction site?",
          answer:
            "Enhancing security involves using surveillance systems, controlled access, real-time monitoring, and ensuring all personnel follow strict security protocols.",
        },
        {
          question: "What are the benefits of a 24/7 monitoring system?",
          answer:
            "A 24/7 monitoring system reduces theft, prevents unauthorized access, and ensures quick response times in case of emergencies.",
        },
        {
          question: "How does access control help in site security?",
          answer:
            "Access control systems restrict entry to authorized personnel only, reducing the risk of trespassing and equipment theft.",
        },
        {
          question: "Can security solutions integrate with my existing systems?",
          answer:
            "Yes, most modern security solutions can integrate with your current project management tools and surveillance systems for seamless operation.",
        },
        {
          question: "What should I do in case of a security breach?",
          answer:
            "Have a clear emergency response plan, alert security personnel immediately, and ensure that incidents are recorded and reported for further action.",
        },
        {
          question: "How do real-time alerts improve security?",
          answer:
            "Real-time alerts notify you instantly about suspicious activity, unauthorized access, or safety hazards, allowing quick action to prevent issues.",
        },
        {
          question:
            "What security measures should I take for high-value equipment?",
          answer:
            "Implement asset tracking, restrict equipment access to authorized users, and use GPS-enabled security systems for real-time location monitoring.",
        },
        {
          question:
            "How can I ensure compliance with construction security regulations?",
          answer:
            "Stay updated with industry security standards, conduct regular audits, and implement the latest security technologies to meet compliance requirements.",
        },
        {
          question: "What role does cybersecurity play in construction security?",
          answer:
            "Cybersecurity is essential for protecting digital blueprints, project data, and surveillance systems from hacking attempts and data breaches.",
        },
        {
          question: "How can I train my team to follow security protocols?",
          answer:
            "Regular security training sessions, clear communication of protocols, and enforcing strict access control measures can ensure compliance and safety on-site.",
        },
      ],
      contactTitle: "Need Help with Site Security?", // ✅ Contact Us title
      contactDescription:
        "Get in touch with our security experts for tailored solutions that keep your construction site safe and secure.",
    },
  
    ctaProps: {
      title: "Enhance Security on Your Construction",
      description: "",
      benefits: [
        "24/7 monitoring",
        "Seamless integration",
        "Customizable security",
      ],
      button1Label: "Get Started",
      button1Link: "/schedule-consultation",
      button2Label: "Start a trail",
      button2Link: "/free-security-audit",
    },
  };