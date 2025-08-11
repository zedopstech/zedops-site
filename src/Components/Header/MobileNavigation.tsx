import React from "react";
import { 
  HelpCircle, 
  DollarSign, 
  Info, 
  Book, 
  Shield, 
  FileText,
  Megaphone,
  ClipboardList,
  Building2,
  HardHat,
  ShieldCheck,
  PieChart,
  Package,
  ShoppingBasket
} from "lucide-react";
import { Button } from "@/Components/UI/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/UI/accordion"; // Example from ShadCN
import Link from "next/link";

// Define types for menu items
type SolutionItem = {
  title: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type SolutionCategory = {
  category: string;
  items: SolutionItem[];
};

type ResourceItem = {
  title: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const featuresMenu: SolutionCategory[] = [
  {
    category: "Tendering / Bid management",
    items: [
      {
        title: "Prequalification",
        href: "/features/tendering-management/prequalification",
        icon: ClipboardList,
      },
      // {
      //   title: "BIM",
      //   href: "/features/tendering-management/bim",
      //   icon: Building2,
      // },
      {
        title: "Estimation and Take-off",
        href: "/features/tendering-management/estimation",
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
        icon: HardHat,
      },
      {
        title: "Quality & Safety",
        href: "/features/project-execution/quality-and-safety",
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
        icon: PieChart,
      },
      {
        title: "Invoice Management",
        href: "/features/financial-management/invoice-management",
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
        icon: Package,
      },
      {
        title: "Procurement",
        href: "/features/material-management/procurement",
        icon: ShoppingBasket,
      },
    ],
  },
];

const resourcesMenu: ResourceItem[] = [
  {
    title: "Knowledge Base",
    href: "/features/knowledge",
    icon: Book,
  },
  {
    title: "Blog",
    href: "",
    icon: FileText,
  },
  {
    title: "FAQs",
    href: "/features/faq",
    icon: HelpCircle,
  },
  {
    title: "Security",
    href: "/features/security",
    icon: Shield,
  },
];

export default function MobileNavigation({
  setExpanded,
}: {
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // No need for useEffect to handle scroll locking here anymore
  // It's now handled in the Header component

  const navigationOptions = [
    {
      name: "Solutions",
      subMenu: featuresMenu,
      icon: <Building2 className="w-5 h-5 mr-2 text-secondary" />,
      type: "solutions"
    },
    {
      name: "Resources",
      subMenu: resourcesMenu,
      icon: <Book className="w-5 h-5 mr-2 text-secondary" />,
      type: "resources"
    },
    {
      name: "Pricing",
      href: "/pricing",
      icon: <DollarSign className="w-5 h-5 mr-2 text-secondary" />,
    },
    {
      name: "About Us",
      href: "/about-us",
      icon: <Info className="w-5 h-5 mr-2 text-secondary" />,
    },
  ];

  return (
    <div className="fixed inset-0 top-[58px] bg-white z-40 flex flex-col overflow-y-auto">
      {/* Navigation */}
      <div className="flex-grow px-4 py-6">
        <Accordion type="single" collapsible>
          {navigationOptions.map((option, index) =>
            option.subMenu ? (
              <AccordionItem
                key={index}
                value={option.name}
                className="mb-4 border-b border-gray-200"
              >
                <AccordionTrigger className="text-xl font-semibold text-gray-800 py-3">
                  <div className="flex flex-row items-center">
                    {option.icon}
                    {option.name}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-6">
                  <ul className="space-y-2">
                    {option.type === "solutions" ? (
                      // Solutions menu with categories
                      (option.subMenu as SolutionCategory[]).map((category, idx) => (
                        <div key={idx} className="mb-6">
                          <h4 className="text-lg font-bold text-gray-600 mb-3">
                            {category.category}
                          </h4>
                          <ul className="space-y-3">
                            {category.items.map((item, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  href={item.href}
                                  onClick={() => setExpanded(false)}
                                  title={item.title}
                                  className="flex items-center gap-3 text-gray-700 hover:text-secondary"
                                >
                                  <div className="p-2 bg-secondary/10 rounded-full">
                                    {React.createElement(item.icon, {
                                      className: "w-4 h-4 text-secondary",
                                    })}
                                  </div>
                                  <div>
                                    <p className="font-medium">{item.title}</p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      // Resources menu (flat list with icons)
                      (option.subMenu as ResourceItem[]).map((item, idx) => (
                        <li key={idx} className="mb-3">
                          <Link
                            href={item.href}
                            onClick={() => setExpanded(false)}
                            title={item.title}
                            className="flex items-center gap-3 text-gray-700 hover:text-secondary"
                          >
                            <div className="p-2 bg-secondary/10 rounded-full">
                              {React.createElement(item.icon, {
                                className: "w-4 h-4 text-secondary",
                              })}
                            </div>
                            <div>
                              <p className="font-medium">{item.title}</p>
                            </div>
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <div key={index} className="mb-4 border-b border-gray-200 py-3">
                <Link
                  href={option.href}
                  onClick={() => setExpanded(false)}
                  title={option.name}
                  className="flex items-center text-xl font-semibold text-gray-800 hover:text-secondary"
                >
                  {option.icon}
                  {option.name}
                </Link>
              </div>
            )
          )}
        </Accordion>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Megaphone className="w-5 h-5 text-secondary" />
            <p className="text-sm font-semibold text-secondary">What&apos;s New</p>
          </div>
        </div>
        <Link href="/book-a-demo">
          <Button className="block w-full text-lg font-semibold text-white bg-primary hover:bg-secondary transition-colors duration-300">
            Book a Demo
          </Button>
        </Link>
      </div>
    </div>
  );
}
