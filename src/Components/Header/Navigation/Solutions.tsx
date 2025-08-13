import { Button } from "@/Components/UI/button";
import { cn } from "@/lib/utils";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRightIcon,
  Play,
  Blocks,
  ClipboardList,
  DollarSign,
  FileText,
  Grid,
  Grip,
  HardHat,
  Package,
  PieChart,
  ShieldCheck,
  ShoppingBasket,
} from "lucide-react";
import React from "react";

const featuresMenu = [
  {
    category: "Tendering / Bid management",
    items: [
      {
        title: "Prequalification",
        href: "/features/tendering-management/prequalification",
        description: "Manage tenders and streamline bidding processes.",
        icon: ClipboardList,
      },
      // {
      //   title: "BIM",
      //   href: "/features/tendering-management/bim",
      //   description: "Building Information Modeling for efficient planning.",
      //   icon: Building2,
      // },
      {
        title: "Estimation and Take-off",
        href: "/features/tendering-management/estimation",
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
        href: "/features/project-execution/project-management",
        description: "Organize and execute projects effectively.",
        icon: HardHat,
      },
      {
        title: "Quality & Safety",
        href: "/features/project-execution/quality-and-safety",
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
        href: "/features/financial-management/project-financial",
        description: "Track financial and project budgets in real-time.",
        icon: PieChart,
      },

      {
        title: "Invoice Management",
        href: "/features/financial-management/invoice-management",
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
        href: "/features/material-management/inventory",
        description: "Effortless control, seamless inventory management",
        icon: Package,
      },
      {
        title: "Procurement",
        href: "/features/material-management/procurement",
        description: "Streamline procurement processes efficiently.",
        icon: ShoppingBasket,
      },
    ],
  },
  // {
  //   category: "Construction Intelligence",
  //   items: [
  //     {
  //       title: "Predictive Analytics",
  //       href: "/features/construction-intelligence/predictive-analytics",
  //       description: "Gain insights with advanced analytics tools.",
  //       icon: Brain,
  //     },
  //     {
  //       title: "Real-Time Dashboards",
  //       href: "/features/construction-intelligence/real-time-dashboards",
  //       description: "Gain insights with advanced analytics tools.",
  //       icon: LayoutDashboard,
  //     },
  //     {
  //       title: "Reports and Alerts",
  //       href: "/features/construction-intelligence/reports-and-alerts",
  //       description: "Gain insights with advanced analytics tools.",
  //       icon: NotepadText,
  //     },
  //   ],
  // },
];

const featureNav = [
  {
    title: "Platform Overview",
    href: "/features/platform",
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

const SolutionsList = () => {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 px-3 py-2 leading-none text-secondary">
        Solutions
        <ChevronDown
          className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="border absolute left-0 top-0 data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft shadow-2xl">
        <div className="flex w-screen">
          <div className="flex flex-col w-3/4">
            <div className="grid gap-6 p-10 xl:grid-cols-3 grid-cols-2">
              {featuresMenu.map((category, index) => (
                <div key={index}>
                  <h3 className="mb-2 text-sm font-bold uppercase text-secondary">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          title={item.title}
                          className={cn(
                            "flex items-center space-x-3 select-none rounded-xl leading-none no-underline outline-none transition-colors hover:bg-orange-100 p-2 group"
                          )}
                        >
                          {/* <div className="p-2 bg-orange-200 rounded-full"> */}
                            {item.icon &&
                              React.createElement(item.icon, {
                                className: "w-8 h-8 text-primary",
                              })}
                          {/* </div> */}
                          <div className="flex items-center justify-between w-full">
                            <div className="font-medium text-sm flex items-center gap-2 text-secondary">
                              <span>{item.title}</span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className=" p-6 w-1/4 flex flex-col items-start gap-4 justify-evenly">
            <div className="h-full w-full flex flex-col">
              <Button className="bg-orange-200 hover:bg-orange-100 hover:animate-pulse rounded w-full h-[200px] mb-4 relative group">
                <div className="absolute bottom-0 left-0 m-4 p-2 bg-background text-primary rounded-full">
                  <Play className="w-5 h-5  fill-current" />
                </div>
              </Button>
              <span className="text-primary font-bold">
                Take a tour of ZedOps
              </span>
              <p className="text-sm opacity-80">
                See how ZedOps enhances construction projects with powerful
                insights, streamlined management, and automated decision-making.
              </p>
            </div>
            <div className="w-full">
              {featureNav.map((item, idx) => (
                <Link
                  href={item.href}
                  key={idx}
                  className="rounded-xl flex p-3 items-center gap-2"
                >
                  {item.icon &&
                    React.createElement(item.icon, {
                      className: "w-6 h-6",
                    })}
                  <span>{item.title}</span>
                  <ArrowRightIcon className="w-4 h-4 flex items-end ml-auto" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
};

export default SolutionsList;
