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
  Clock,
  FilePlus,
  Info,
  ClipboardList,
  Package,
  Tractor,
  AlertTriangle,
  Bug,
  Ruler,
  Users,
  Briefcase,
  Building2,
  UserCog,
} from "lucide-react";

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
    articles: [
      // Onboarding
      {
        title: "New User",
        slug: "onboarding/newuser/how-new-user-can-be-logged-in",
      },
      // People Management
      // Employees
      {
        title: "Converting an Employee to a User",
        slug: "people-management/directory/employees/Converting-an-employee-to-a-user",
      },
      {
        title: "How to Create an Employee at the Company Level",
        slug: "people-management/directory/employees/how-to-create-an-employee-at-the-company-level",
      },
      {
        title: "How to Delete an Employee at the Company Level",
        slug: "people-management/directory/employees/how-to-delete-an-employee-at-the-company-level",
      },
      {
        title: "How to Edit an Employee at the Company Level",
        slug: "people-management/directory/employees/how-to-edit-an-employee-at-the-company-level",
      },
      // Contractors
      {
        title: "How to Create a Contractor at the company level",
        slug: "people-management/directory/contractors/how-to-create-a-contractor-at-the-company-level",
      },
      {
        title: "How to Delete a Contractor at the company level",
        slug: "people-management/directory/contractors/how-to-delete-a-contractor-at-the-company-level",
      },
      {
        title: "How to Edit a Contractor at the company level",
        slug: "people-management/directory/contractors/how-to-edit-a-contractor-at-the-company-level",
      },
      // Vendors
      {
        title: "How to create a vendor at the company level",
        slug: "people-management/directory/vendors/how-to-create-a-vendor-at-the-company-level",
      },
      {
        title: "How to delete a vendor at the company level",
        slug: "people-management/directory/vendors/how-to-delete-a-vendor-at-the-company-level",
      },
      {
        title: "How to edit a vendor at the company level",
        slug: "people-management/directory/vendors/how-to-edit-a-vendor-at-the-company-level",
      },
      // Clients
      {
        title: "How to create a client at the company level",
        slug: "people-management/directory/clients/how-to-create-a-client-at-the-company-level",
      },
      {
        title: "How to delete a client at the company level",
        slug: "people-management/directory/clients/how-to-delete-a-client-at-the-company-level",
      },
      {
        title: "How to Edit a client at the company level",
        slug: "people-management/directory/clients/how-to-edit-a-client-at-the-company-level",
      },
      // Users
      {
        title: "How to revert user access at the company level",
        slug: "people-management/directory/users/how-to-revert-user-access-at-the-company-level",
      },
      // Roles & Permissions
      {
        title: "Converting an employee to a user",
        slug: "people-management/roles-and-permissions/converting-an-employee-to-a-user",
      },
      {
        title: "How to create a role with permissions",
        slug: "people-management/roles-and-permissions/how-to-create-a-role-with-permissions",
      },
      {
        title: "How to edit a role and its permissions",
        slug: "people-management/roles-and-permissions/how-to-edit-a-role-and-its-permissions",
      },
      {
        title: "How to delete a role",
        slug: "people-management/roles-and-permissions/how-to-delete-a-role",
      },
      // Time Cards
      {
        title: "How to start a time card",
        slug: "people-management/time-cards/how-to-start-a-time-card",
      },
      {
        title: "How to pause or resume a time card",
        slug: "people-management/time-cards/how-to-pause-or-resume-a-time-card",
      },
      {
        title: "how to stop a time card",
        slug: "people-management/time-cards/how-to-stop-a-time-card",
      },
      // Project Management
      // Manage Project
      {
        title: "Create New Project",
        slug: "project-management/manage-project/create-new-project",
      },
      {
        title: "Edit new Project",
        slug: "project-management/manage-project/edit-new-project",
      },
      {
        title: "Manage Team",
        slug: "project-management/manage-project/manage-team",
      },
      {
        title: "Manage Document",
        slug: "project-management/manage-project/manage-document",
      },
      // Inspection & Observation
      {
        title: "Template",
        slug: "project-management/inspection-observation/template",
      },
      {
        title: "Create inspection",
        slug: "project-management/inspection-observation/create-inspection",
      },
      {
        title: "Edit inspection",
        slug: "project-management/inspection-observation/edit-inspection",
      },
      // Incidents
      {
        title: "Create incident",
        slug: "project-management/incidents/create-incident",
      },
      {
        title: "Edit incident",
        slug: "project-management/incidents/edit-incident",
      },
      //Daily Log
      {
        title: "How to create a new daily log",
        slug: "daily-log/create-new-daily-log/how-to-create-a-new-daily-log",
      },
      {
        title: "How to add general details to a daily log",
        slug: "daily-log/general-details/how-to-add-general-details-to-a-daily-log",
      },
      {
        title: "How to create and manage work logs in a daily log",
        slug: "daily-log/create-and-manage-work-logs/how-to-create-and-manage-work-logs-in-a-daily-log",
      },
      {
        title: "How to manage employee time cards in a daily log",
        slug: "daily-log/manage-employee-time-cards/how-to-manage-employee-time-cards-in-a-daily-log",
      },
      {
        title: "How to manage materials in a daily log",
        slug: "daily-log/manage-materials/how-to-manage-materials-in-a-daily-log",
      },
      {
        title: "How to manage equipment in a daily log",
        slug: "daily-log/manage-equipment/how-to-manage-equipment-in-a-daily-log",
      },
      {
        title: "How to check inspection and observation in a daily log",
        slug: "daily-log/check-inspection-and-observation/how-to-check-inspection-and-observation-in-a-daily-log",
      },
      {
        title: "How to check incidents in a daily log",
        slug: "daily-log/check-incidents/how-to-check-incidents-in-a-daily-log",
      },
      {
        title: "How to manage issues and concerns in a daily log",
        slug: "daily-log/manage-issues-and-concerns/how-to-manage-issues-and-concerns-in-a-daily-log",
      },
      {
        title: "How to manage surveys in a daily log",
        slug: "daily-log/manage-surveys/how-to-manage-surveys-in-a-daily-log",
      },
    ],
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
    items: [
      {
        title: "Onboarding",
        description: "Manage your details and billing information.",
        slug: "onboarding",
        icon: Rocket,
      },
      {
        title: "People Management",
        description: "Handle your teams efficiently.",
        slug: "people-management",
        icons: FileText,
      },
      {
        title: "Project Management",
        description: "Manage all your projects in one place.",
        slug: "project-management",
        icon: User,
      },
      {
        title: "Daily log",
        description: "Manage your daily details and information.",
        slug: "daily-log",
        icon: Rocket,
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

//projectManagementGroups
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

//peopleManagementGroups
export const peopleManagementSection = {
  sectionTitle: "People Management",
  sectionDescription:
    "Manage employees, vendors, roles and permissions effectively",
  groups: [
    {
      title: "Directory Management",
      icon: <Folder size={16} />,
      subGroups: [
        {
          title: "Employees",
          description: "Manage internal employees.",
          updatedAt: "1 week ago",
          icon: <Users size={16} />,
          articles: [
            {
              title: "Convert Employee to User",
              description: "Convert an employee to a user profile.",
              slug: "people-management/directory/employees/Converting-an-employee-to-a-user",
              tag: "Employee Management",
              readTime: "7 min read",
              updatedAt: "1 week ago",
            },
            {
              title: "How to Create an Employee",
              description: "Add new employees with correct roles.",
              slug: "people-management/directory/employees/how-to-create-an-employee-at-the-company-level",
              tag: "Employee Management",
              readTime: "7 min read",
              updatedAt: "1 week ago",
            },
            {
              title: "How to Delete an Employee",
              description: "Remove employee from the system.",
              slug: "people-management/directory/employees/how-to-delete-an-employee-at-the-company-level",
              tag: "Employee Management",
              readTime: "5 min read",
              updatedAt: "3 days ago",
            },
            {
              title: "How to Edit an Employee",
              description: "Update employee information.",
              slug: "people-management/directory/employees/how-to-edit-an-employee-at-the-company-level",
              tag: "Employee Management",
              readTime: "6 min read",
              updatedAt: "1 week ago",
            },
          ],
        },
        {
          title: "Contractors",
          description: "Manage contractors in your organization.",
          updatedAt: "1 week ago",
          icon: <Briefcase size={16} />,
          articles: [
            {
              title: "How to Create a Contractor",
              description: "Add new contractors to your directory.",
              slug: "people-management/directory/contractors/how-to-create-a-contractor-at-the-company-level",
              tag: "Contractor Management",
              readTime: "7 min read",
              updatedAt: "1 week ago",
            },
            {
              title: "How to Delete a Contractor",
              description: "Delete a contractor's record.",
              slug: "people-management/directory/contractors/how-to-delete-a-contractor-at-the-company-level",
              tag: "Contractor Management",
              readTime: "5 min read",
              updatedAt: "3 days ago",
            },
            {
              title: "How to Edit a Contractor",
              description: "Edit contractor info and permissions.",
              slug: "people-management/directory/contractors/how-to-edit-a-contractor-at-the-company-level",
              tag: "Contractor Management",
              readTime: "6 min read",
              updatedAt: "1 week ago",
            },
          ],
        },
        {
          title: "Vendors",
          description: "Manage vendor relationships.",
          updatedAt: "1 week ago",
          icon: <Folder size={16} />,
          articles: [
            {
              title: "How to Create a Vendor",
              description: "Add vendors to your directory.",
              slug: "people-management/directory/vendors/how-to-create-a-vendor-at-the-company-level",
              tag: "Vendor Management",
              readTime: "7 min read",
              updatedAt: "1 week ago",
            },
            {
              title: "How to Delete a Vendor",
              description: "Remove a vendor.",
              slug: "people-management/directory/vendors/how-to-delete-a-vendor-at-the-company-level",
              tag: "Vendor Management",
              readTime: "5 min read",
              updatedAt: "3 days ago",
            },
            {
              title: "How to Edit a Vendor",
              description: "Update vendor info.",
              slug: "people-management/directory/vendors/how-to-edit-a-vendor-at-the-company-level",
              tag: "Vendor Management",
              readTime: "6 min read",
              updatedAt: "1 week ago",
            },
          ],
        },
        {
          title: "Clients",
          description: "Manage your clients in the directory.",
          updatedAt: "1 week ago",
          icon: <Building2 size={16} />,
          articles: [
            {
              title: "How to Create a Client",
              description: "Learn how to create a client at the company level.",
              slug: "people-management/directory/clients/how-to-create-a-client-at-the-company-level",
              tag: "Client Management",
              readTime: "7 min read",
              updatedAt: "1 week ago",
            },
            {
              title: "How to Delete a Client",
              description: "Delete a client from your directory.",
              slug: "people-management/directory/clients/how-to-delete-a-client-at-the-company-level",
              tag: "Client Management",
              readTime: "5 min read",
              updatedAt: "3 days ago",
            },
            {
              title: "How to Edit a Client",
              description: "Edit client details and info.",
              slug: "people-management/directory/clients/how-to-edit-a-client-at-the-company-level",
              tag: "Client Management",
              readTime: "6 min read",
              updatedAt: "1 week ago",
            },
          ],
        },
        {
          title: "Users",
          description: "Manage users and access levels.",
          updatedAt: "1 week ago",
          icon: <UserCog size={16} />,
          articles: [
            {
              title: "How to Revert User Access at the Company",
              description: "Revert or change access of a user.",
              slug: "people-management/directory/users/how-to-revert-user-access-at-the-company-level",
              tag: "User Management",
              readTime: "7 min read",
              updatedAt: "1 week ago",
            },
          ],
        },
      ],
    },
    {
      title: "Roles & Permissions",
      icon: <Shield size={16} />,
      articles: [
        {
          title: "Convert Employee to User",
          description:
            "Set up custom roles and permissions for your team members.",
          slug: "people-management/roles-and-permissions/converting-an-employee-to-a-user",
          tag: "Roles & Permissions",
          readTime: "5 min read",
          updatedAt: "3 days ago",
        },
        {
          title: "Create New Role",
          description:
            "Set up custom roles and permissions for your team members.",
          slug: "people-management/roles-and-permissions/how-to-create-a-role-with-permissions",
          tag: "Roles & Permissions",
          readTime: "5 min read",
          updatedAt: "3 days ago",
        },
        {
          title: "Edit Role",
          description:
            "Modify existing roles, update permissions, and adjust access levels as needed.",
          slug: "people-management/roles-and-permissions/how-to-edit-a-role-and-its-permissions",
          tag: "Roles & Permissions",
          readTime: "4 min read",
          updatedAt: "1 week ago",
        },
        {
          title: "Delete Role",
          description:
            "Safely remove roles from your system while preserving user access and data integrity.",
          slug: "people-management/roles-and-permissions/how-to-delete-a-role",
          tag: "Roles & Permissions",
          readTime: "3 min read",
          updatedAt: "2 weeks ago",
        },
      ],
    },
    {
      title: "Time Cards",
      icon: <Clock size={16} />,
      articles: [
        {
          title: "How to Start a Time Card",
          description: "Begin tracking work time for employees.",
          slug: "people-management/time-cards/how-to-start-a-time-card",
          tag: "Time Tracking",
          readTime: "5 min read",
          updatedAt: "3 days ago",
        },
        {
          title: "How to Pause or Resume a Time Card",
          description: "Manage ongoing time card activities.",
          slug: "people-management/time-cards/how-to-pause-or-resume-a-time-card",
          tag: "Time Tracking",
          readTime: "4 min read",
          updatedAt: "1 week ago",
        },
        {
          title: "How to Stop a Time Card",
          description: "End time card tracking and save data.",
          slug: "people-management/time-cards/how-to-stop-a-time-card",
          tag: "Time Tracking",
          readTime: "3 min read",
          updatedAt: "2 weeks ago",
        },
      ],
    },
  ],
};

// NewUser
export const newuser = {
  sectionTitle: "New User",
  sectionDescription: "Manage new user",
  icon: <User className="w-5 h-5" />,
  groups: [
    {
      title: "How new User can be Logged",
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

// daily log
export const dailylog = {
  sectionTitle: "Daily Log",
  sectionDescription: "Manage employees, Daily Logs",
  groups: [
    {
      title: "How Create new Daily Log",
      icon: <FilePlus size={16} />,
      articles: [
        {
          title: "How to Create a New Daily Log",
          description:
            "Learn how to initiate and fill out a new daily log entry for your organization.",
          slug: "daily-log/create-new-daily-log/how-to-create-a-new-daily-log",
          tag: "Daily Log Management",
          readTime: "7 min read",
          updatedAt: "1 week ago",
        },
      ],
    },
    {
      title: "Add General Details",
      icon: <Info size={16} />,
      articles: [
        {
          title: "How to Add General Details to a Daily Log",
          description:
            "Understand the process of inputting general project information into the daily log.",
          slug: "daily-log/general-details/how-to-add-general-details-to-a-daily-log",
          tag: "Daily Log Management",
          readTime: "6 min read",
          updatedAt: "1 week ago",
        },
      ],
    },
    {
      title: "Create and Manage Work",
      icon: <ClipboardList size={16} />,
      articles: [
        {
          title: "How to Create and Manage Work Logs in a Daily Log",
          description:
            "Document work activities and tasks completed on-site within the daily log.",
          slug: "daily-log/create-and-manage-work-logs/how-to-create-and-manage-work-logs-in-a-daily-log",
          tag: "Work Log",
          readTime: "8 min read",
          updatedAt: "1 week ago",
        },
      ],
    },
    {
      title: "Manage Employee Time Cards",
      icon: <Clock size={16} />,
      articles: [
        {
          title: "How to Manage Employee Time Cards in a Daily Log",
          description:
            "Track and log employee hours efficiently using the daily log system.",
          slug: "daily-log/manage-employee-time-cards/how-to-manage-employee-time-cards-in-a-daily-log",
          tag: "Time Management",
          readTime: "7 min read",
          updatedAt: "1 week ago",
        },
      ],
    },
    {
      title: "Manage Materials",
      icon: <Package size={16} />,
      articles: [
        {
          title: "How to Manage Materials in a Daily Log",
          description:
            "Record material usage, deliveries, and inventory levels in your daily log.",
          slug: "daily-log/manage-materials/how-to-manage-materials-in-a-daily-log",
          tag: "Material Tracking",
          readTime: "6 min read",
          updatedAt: "1 week ago",
        },
      ],
    },
    {
      title: "Manage Equipment",
      icon: <Tractor size={16} />,
      articles: [
        {
          title: "How to Manage Equipment in a Daily Log",
          description:
            "Monitor equipment use, status, and performance in your daily records.",
          slug: "daily-log/manage-equipment/how-to-manage-equipment-in-a-daily-log",
          tag: "Equipment Management",
          readTime: "6 min read",
          updatedAt: "1 week ago",
        },
      ],
    },
    {
      title: "Check Inspection and Observation",
      icon: <ShieldCheck size={16} />,
      articles: [
        {
          title: "How to Check Inspection and Observation in a Daily Log",
          description:
            "Log and review safety inspections and site observations as part of your daily reporting.",
          slug: "daily-log/check-inspection-and-observation/how-to-check-inspection-and-observation-in-a-daily-log",
          tag: "Safety & Compliance",
          readTime: "5 min read",
          updatedAt: "1 week ago",
        },
      ],
    },
    {
      title: "Check Incidents",
      icon: <AlertTriangle size={16} />,
      articles: [
        {
          title: "How to Check Incidents in a Daily Log",
          description:
            "Record and manage incidents to ensure safety and compliance on site.",
          slug: "daily-log/check-incidents/how-to-check-incidents-in-a-daily-log",
          tag: "Incident Reporting",
          readTime: "5 min read",
          updatedAt: "1 week ago",
        },
      ],
    },
    {
      title: "Manage Issues and Concerns",
      icon: <Bug size={16} />,
      articles: [
        {
          title: "How to Manage Issues and Concerns in a Daily Log",
          description:
            "Track and resolve on-site issues and concerns through daily reporting.",
          slug: "daily-log/manage-issues-and-concerns/how-to-manage-issues-and-concerns-in-a-daily-log",
          tag: "Issue Tracking",
          readTime: "6 min read",
          updatedAt: "1 week ago",
        },
      ],
    },
    {
      title: "Manage Surveys",
      icon: <Ruler size={16} />,
      articles: [
        {
          title: "How to Manage Surveys in a Daily Log",
          description:
            "Log field survey details, results, and notes within the daily log.",
          slug: "daily-log/manage-surveys/how-to-manage-surveys-in-a-daily-log",
          tag: "Field Survey",
          readTime: "5 min read",
          updatedAt: "1 week ago",
        },
      ],
    },
  ],
};
