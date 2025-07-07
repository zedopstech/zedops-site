import {
  Rocket,
  FileText,
  User,
  Search,
  PlayCircle,
  Compass,
  ShieldCheck,
  Folder,
  Shield,
} from "lucide-react"; // Add your preferred icon here

export const KNOWLEDGE_PAGE = {
  searchSectionProps: {
    title: "Welcome to our Knowledge Base",
    subtitle:
      "Find comprehensive guides, tutorials, and documentation to help you make the most of your application.",
    placeholder: "Search articles...",
    highlights: [
      { label: "Articles", value: "4+" },
      { label: "Categories", value: "3" },
      { label: "Available", value: "24/7" },
    ],
    videoUrl: "https://your-video-link.com",
    videoName: "Watch Getting Started",
    description: "Learn how to use the Knowledge Base effectively.",
    icons: {
      search: <Search className="w-5 h-5" />,
      video: <PlayCircle className="w-5 h-5" />,
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
    title: "Browse by Category",
    description:
      "Explore our organized collection of guids and tutorials, structure to help you find exactly what you need.",
    // items: [
    //   {
    //     title: "Subscriptions",
    //     description:
    //       "Manage your subscription details and billing information.",
    //   },
    //   {
    //     title: "Account & Projects",
    //     description:
    //       "Manage your account settings and access all your construction projects.",
    //   },
    //   {
    //     title: "Plans",
    //     description:
    //       "View, share, and manage your construction plans and blueprints.",
    //   },
    //   {
    //     title: "Tasks",
    //     description:
    //       "Create, assign, and track individual tasks related to your projects.",
    //   },
    //   {
    //     title: "Reports",
    //     description:
    //       "Generate and access detailed reports on project progress, costs, and performance.",
    //   },
    //   {
    //     title: "Photos",
    //     description:
    //       "Upload, organize, and share photos documenting project progress and site conditions.",
    //   },
    //   {
    //     title: "Forms",
    //     description:
    //       "Access and manage digital forms for inspections, safety checklists, and other site documentation.",
    //   },
    //   {
    //     title: "Files",
    //     description:
    //       "Store, organize, and share all project-related documents, including contracts, permits, and specifications.",
    //   },
    //   {
    //     title: "3D Models (BIM)",
    //     description:
    //       "Visualize and interact with Building Information Models (BIM) for enhanced project understanding.",
    //   },
    //   {
    //     title: "Submittals",
    //     description:
    //       "Manage and track the submittal process, ensuring timely approval of materials and equipment.",
    //   },
    //   {
    //     title: "Change Order",
    //     description:
    //       "Create, track, and manage change orders to effectively address project modifications and their impact.",
    //   },
    //   {
    //     title: "Budget",
    //     description:
    //       "Track project costs against the budget, identify variances, and manage financial performance.",
    //   },
    // ],
    items: [
      {
        title: "Onboarding",
        description: "Manage your details and billing information.",
        slug: "onboarding",
        icon: Rocket,
      },
      {
        title: "Project Management",
        description: "Manage all your projects in one place.",
        slug: "project-management",
        icon: User,
      },
      {
        title: "People Management",
        description: "Handle your teams efficiently.",
        slug: "people-management",
        icons: FileText,
      },
    ],
  },
};

// Featured Articles
export const featuredArticles = [
  {
    title: "How to sign Up",
    description:
      "Step-by-step guide to create your account and get started with the application.",
    tag: "Onboarding",
    tagColor: "bg-blue-100 text-blue-700",
    readTime: "3 min read",
    updatedAt: "2 days ago",
    icon: Compass,
  },
  {
    title: "Create new Employee",
    description:
      "Learn how to add new employees to your organization directory with proper role assignments.",
    tag: "People Management",
    tagColor: "bg-blue-100 text-blue-700",
    readTime: "7 min read",
    updatedAt: "1 week ago",
    icon: User,
  },
  {
    title: "Create new Role",
    description:
      "Set up custom roles and permissions for your team members with specific access levels.",
    tag: "Roles & Permissions",
    tagColor: "bg-yellow-100 text-yellow-700",
    readTime: "5 min read",
    updatedAt: "3 days ago",
    icon: ShieldCheck,
  },
  {
    title: "Add team members to project",
    description:
      "Assign team members to projects and manage project access permissions effectively.",
    tag: "Project Management",
    tagColor: "bg-indigo-100 text-indigo-700",
    readTime: "6 min read",
    updatedAt: "5 days ago",
    icon: Folder,
  },
];

// Quick Start Guide
export const quickStartSteps = [
  {
    step: 1,
    title: "Sign Up",
    description: "Create your account and set up your profile",
    color: "bg-blue-500",
  },
  {
    step: 2,
    title: "Set Up People Management",
    description: "Add employees, vendors, and configure roles",
    color: "bg-green-500",
  },
  {
    step: 3,
    title: "Create Your First Project",
    description: "Set up project management and start collaborating",
    color: "bg-orange-500",
  },
];

// You can optionally move this to a separate file like `projectManagementGroups.ts`

export const projectManagementSection = {
  sectionTitle: "Project Management",
  sectionDescription:
    "Manage employees, vendors, roles and permissions effectively",
  groups: [
    {
      title: "Manage Project",
      icon: <Folder size={16} />,
      articles: [
        {
          title: "create new project",
          description:
            "Learn how to add new employees to your organization directory with proper role assignments.",
          slug: "project-management/manage-project/create-new-project",
          tag: "Employee Management",
          readTime: "7 min read",
          updatedAt: "1 week ago",
        },
        {
          title: "Edit a New Project",
          description:
            "Manage existing employee records, update information, and handle employee departures.",
          slug: "project-management/manage-project/edit-new-project",
          tag: "Employee Management",
          readTime: "5 min read",
          updatedAt: "3 days ago",
        },
        {
          title: "Manage Team Members in Project Level",
          description:
            "Add external vendors to your organization directory and manage vendor relationships.",
          slug: "project-management/manage-project/manage-team",
          tag: "Vendor Management",
          readTime: "6 min read",
          updatedAt: "1 week ago",
        },
        {
          title: "Manage Documents in Project Level",
          description:
            "Update vendor information, manage contracts, and remove vendors when needed.",
          slug: "project-management/manage-project/manage-document",
          tag: "Vendor Management",
          readTime: "4 min read",
          updatedAt: "5 days ago",
        },
      ],
    },
    {
      title: "Inspection & Observation",
      icon: <Shield size={16} />,
      articles: [
        {
          title: "Project Level Inspection Template Configuration",
          description:
            "Set up custom roles and permissions for your team members with specific access levels.",
          slug: "project-management/inspection-observation/template",
          tag: "Roles & Permissions",
          readTime: "5 min read",
          updatedAt: "3 days ago",
        },
        {
          title: "Create Inspection in Project Level",
          description:
            "Modify existing roles, update permissions, and adjust access levels as needed.",
          slug: "project-management/inspection-observation/create-inspection",
          tag: "Roles & Permissions",
          readTime: "4 min read",
          updatedAt: "1 week ago",
        },
        {
          title: "Edit insepection in Project Level",
          description:
            "Safely remove roles from your system while preserving user access and data integrity.",
          slug: "project-management/inspection-observation/edit-inspection",
          tag: "Roles & Permissions",
          readTime: "3 min read",
          updatedAt: "2 weeks ago",
        },
      ],
    },
    {
      title: "Incidents",
      icon: <Shield size={16} />,
      articles: [
        {
          title: "Create a New Incident",
          description:
            "Set up custom roles and permissions for your team members with specific access levels.",
          slug: "project-management/incidents/create-incident",
          tag: "Roles & Permissions",
          readTime: "5 min read",
          updatedAt: "3 days ago",
        },
        {
          title: "Edit a New Incident",
          description:
            "Modify existing roles, update permissions, and adjust access levels as needed.",
          slug: "project-management/incidents/edit-incident",
          tag: "Roles & Permissions",
          readTime: "4 min read",
          updatedAt: "1 week ago",
        },
      ],
    },
  ],
};

// src/Data/resources/peopleManagementGroups.ts

export const peopleManagementSection = {
  sectionTitle: "People Management",
  sectionDescription:
    "Manage employees, vendors, roles and permissions effectively",
  groups: [
    {
      title: "Directory Management",
      icon: <Folder size={16} />,
      articles: [
        {
          title: "How to create new Employee",
          description:
            "Learn how to add new employees to your organization directory with proper role assignments.",
          slug: "people-management/create-new-employee",
          tag: "Employee Management",
          readTime: "7 min read",
          updatedAt: "1 week ago",
        },
        {
          title: "How to edit / delete Employee",
          description:
            "Manage existing employee records, update information, and handle employee departures.",
          slug: "people-management/edit-employee",
          tag: "Employee Management",
          readTime: "5 min read",
          updatedAt: "3 days ago",
        },
        {
          title: "How to create new Vendor",
          description:
            "Add external vendors to your organization directory and manage vendor relationships.",
          slug: "people-management/create-new-vendor",
          tag: "Vendor Management",
          readTime: "6 min read",
          updatedAt: "1 week ago",
        },
        {
          title: "How to edit / delete Vendor",
          description:
            "Update vendor information, manage contracts, and remove vendors when needed.",
          slug: "people-management/edit-vendor",
          tag: "Vendor Management",
          readTime: "4 min read",
          updatedAt: "5 days ago",
        },
      ],
    },
    {
      title: "Roles & Permissions",
      icon: <Shield size={16} />,
      articles: [
        {
          title: "Create new Role",
          description:
            "Set up custom roles and permissions for your team members with specific access levels.",
          slug: "people-management/create-role",
          tag: "Roles & Permissions",
          readTime: "5 min read",
          updatedAt: "3 days ago",
        },
        {
          title: "Edit new Role",
          description:
            "Modify existing roles, update permissions, and adjust access levels as needed.",
          slug: "people-management/edit-role",
          tag: "Roles & Permissions",
          readTime: "4 min read",
          updatedAt: "1 week ago",
        },
        {
          title: "Delete Role",
          description:
            "Safely remove roles from your system while preserving user access and data integrity.",
          slug: "people-management/delete-role",
          tag: "Roles & Permissions",
          readTime: "3 min read",
          updatedAt: "2 weeks ago",
        },
      ],
    },
  ],
};

//////////////////////////////!SECTION

export const newuser = {
  sectionTitle: "New User",
  sectionDescription: "Manage new user",
  icon: <User className="w-5 h-5" />,
  groups: [
    {
      title: "How new user can be Logged",
      icon: <Folder size={16} />,
      articles: [
        {
          title: "How to create new Employee",
          description: "Learn how to add new employees to your organization...",
          slug: "onboarding/newuser/how-new-user-can-be-logged-in",
          tag: "Employee Management",
          readTime: "7 min read",
          updatedAt: "1 week ago",
        },
      ],
    },
  ],
};
