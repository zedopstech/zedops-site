import { Search } from "lucide-react";

export const KNOWLEDGE_PAGE = {
    searchSectionProps: {
      title: "What can we help you find?",
      placeholder: "Search",
      icons: {
        search: <Search size={20} />,
      },
    },
    cardSectionProps: {
      sectionTitle: "Knowledge",
      cards: [
        {
          imageSrc: "/Solutions/card1.png",
          title:
            "Introducing ZedAI: The Smart Agent from ZedOps kjksjkjdklsjsfnd,mfnsmdjdsfhdfkj",
        },
        {
          imageSrc: "/Solutions/card2.png",
          title:
            "Reimagining Construction Management with AI: A Game-Changer for SMBs",
        },
        {
          imageSrc: "/Solutions/card3.png",
          title:
            "10 Essential Features Every Construction Management System Should Have",
        },
      ],
    },
    getStartedProps: {
      title: "Get Started",
      items: [
        {
          title: "Subscriptions",
          description:
            "Manage your subscription details and billing information.",
        },
        {
          title: "Account & Projects",
          description:
            "Manage your account settings and access all your construction projects.",
        },
        {
          title: "Plans",
          description:
            "View, share, and manage your construction plans and blueprints.",
        },
        {
          title: "Tasks",
          description:
            "Create, assign, and track individual tasks related to your projects.",
        },
        {
          title: "Reports",
          description:
            "Generate and access detailed reports on project progress, costs, and performance.",
        },
        {
          title: "Photos",
          description:
            "Upload, organize, and share photos documenting project progress and site conditions.",
        },
        {
          title: "Forms",
          description:
            "Access and manage digital forms for inspections, safety checklists, and other site documentation.",
        },
        {
          title: "Files",
          description:
            "Store, organize, and share all project-related documents, including contracts, permits, and specifications.",
        },
        {
          title: "3D Models (BIM)",
          description:
            "Visualize and interact with Building Information Models (BIM) for enhanced project understanding.",
        },
        {
          title: "Submittals",
          description:
            "Manage and track the submittal process, ensuring timely approval of materials and equipment.",
        },
        {
          title: "Change Order",
          description:
            "Create, track, and manage change orders to effectively address project modifications and their impact.",
        },
        {
          title: "Budget",
          description:
            "Track project costs against the budget, identify variances, and manage financial performance.",
        },
      ],
    },
  };