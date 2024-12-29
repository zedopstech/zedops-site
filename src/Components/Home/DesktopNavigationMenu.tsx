"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../UI/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ClipboardList,
  BookOpen,
  MoveUpRightIcon,
  BarChart2,
  Building2,
  DollarSign,
  HardHat,
  ShieldCheck,
  Package,
  PieChart,
  LineChart,
  FileText,
} from "lucide-react";

const featuresMenu = [
  {
    category: "Preconstruction",
    items: [
      {
        title: "Tender Management",
        href: "/features/tender-management",
        description: "Manage tenders and streamline bidding processes.",
        icon: ClipboardList, // Icon for list-related actions
      },
      {
        title: "BIM",
        href: "/features/bim",
        description: "Building Information Modeling for efficient planning.",
        icon: Building2, // Icon for construction or building
      },
      {
        title: "Estimating",
        href: "/features/estimating",
        description: "Accurate project cost estimation tools.",
        icon: DollarSign, // Icon for financial estimation
      },
    ],
  },
  {
    category: "Project Execution",
    items: [
      {
        title: "Project Management",
        href: "/features/project-management",
        description: "Organize and execute projects effectively.",
        icon: HardHat, // Icon representing management in construction
      },
      {
        title: "Quality & Safety",
        href: "/features/quality-safety",
        description: "Ensure quality and safety standards are met.",
        icon: ShieldCheck, // Icon for safety and assurance
      },
    ],
  },
  {
    category: "Financial Management",
    items: [
      {
        title: "Project Financial",
        href: "/features/project-financial",
        description: "Track financial and project budgets in real-time.",
        icon: PieChart, // Icon for financial visualization
      },
      {
        title: "Accounting Integrations",
        href: "/features/accounting-integrations",
        description: "Seamlessly integrate with accounting software.",
        icon: LineChart, // Icon for data and accounting integration
      },
      {
        title: "Invoice Management",
        href: "/features/invoice-management",
        description: "Simplify invoicing and payment processes.",
        icon: FileText, // Icon for managing documents like invoices
      },
    ],
  },
  {
    category: "Resource Management",
    items: [
      {
        title: "Resource Tracking",
        href: "/features/resource-tracking",
        description: "Track and allocate resources efficiently.",
        icon: Package, // Icon for logistics or resources
      },
    ],
  },

  {
    category: "Construction Intelligence",
    items: [
      {
        title: "Analytics",
        href: "/features/analytics",
        description: "Gain insights with advanced analytics tools.",
        icon: BarChart2, // Icon representing analytics
      },
    ],
  },
];

export default function DesktopNavigation() {
  return (
    <div className="hidden lg:flex lg:items-center lg:space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Features Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white text-base hover:text-primary bg-transparent">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid bg-white gap-6 p-4 mx-auto md:max-w-[500px] lg:max-w-[1200px] w-[95vw] xl:grid-cols-3 grid-cols-2">
                {featuresMenu.map((category, index) => (
                  <div key={index}>
                    <h3 className="mb-2 text-lg font-bold text-gray-700">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            title={item.title}
                            className={cn(
                              "flex flex-row items-center space-x-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <item.icon className="w-8 h-8 text-primary" />
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="mt-1 text-sm ">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex justify-end p-4 bg-slate-100">
                <Link
                  href="/"
                  className="flex items-center font-semibold text-primary hover:underline"
                >
                  Explore More <MoveUpRightIcon size={14} className="ml-2" />
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Resources Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white text-base hover:text-primary bg-transparent">
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 bg-white p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                <ListItem
                  title="Blog"
                  href="/resources/blog"
                  icon={<BookOpen />}
                >
                  Stay updated with industry trends and insights.
                </ListItem>
                <ListItem
                  title="Guides"
                  href="/resources/guides"
                  icon={<ClipboardList />}
                >
                  Comprehensive guides for construction professionals
                </ListItem>
                <ListItem
                  title="Case Studies"
                  href="/resources/case-studies"
                  icon={<FileText />}
                >
                  Learn from successful projects and workflows
                </ListItem>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Pricing and About Us */}
          <NavigationMenuItem>
            <Link
              href="/pricing"
              title="Pricing"
              className="text-white text-base hover:text-primary ml-2"
            >
              Pricing
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/about-us"
              title="About Us"
              className="text-white hover:text-primary ml-6"
            >
              About Us
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

// Reusable ListItem Component
const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string; icon?: React.ReactNode }
>(({ className, title, icon, children, href, ...props }, ref) => {
  return (
    <div>
      <Link
        ref={ref}
        href={href}
        title={title}
        className={cn(
          "flex items-center space-x-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        {icon && <div className="w-6 h-6 text-primary">{icon}</div>}
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug">{children}</p>
        </div>
      </Link>
    </div>
  );
});
ListItem.displayName = "ListItem";
