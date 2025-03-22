import React from "react";
import { Headset, DollarSign, Info, Layers, Book } from "lucide-react";
import { Button } from "@/Components/UI/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/UI/accordion"; // Example from ShadCN
import Link from "next/link";

const featuresMenu = [
  {
    category: "Preconstruction",
    items: [
      { title: "Tender Management", href: "/features/tender-management" },
      { title: "BIM", href: "/features/bim" },
      { title: "Estimating", href: "/features/estimating" },
    ],
  },
  {
    category: "Project Execution",
    items: [
      { title: "Project Management", href: "/features/project-management" },
      { title: "Quality & Safety", href: "/features/quality-safety" },
    ],
  },
  {
    category: "Financial Management",
    items: [
      { title: "Project Financial", href: "/features/project-financial" },
      {
        title: "Accounting Integrations",
        href: "/features/accounting-integrations",
      },
      { title: "Invoice Management", href: "/features/invoice-management" },
    ],
  },
  {
    category: "Resource Management",
    items: [
      { title: "Resource Tracking", href: "/features/resource-tracking" },
    ],
  },
  {
    category: "Construction Intelligence",
    items: [{ title: "Analytics", href: "/features/analytics" }],
  },
];

const resourcesMenu = [
  { title: "Blog", href: "/resources/blog" },
  { title: "Case Study", href: "/resources/case-study" },
  { title: "Guides", href: "/resources/guides" },
];

export default function MobileNavigation({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // No need for useEffect to handle scroll locking here anymore
  // It's now handled in the Header component

  const navigationOptions = [
    {
      name: "Features",
      subMenu: featuresMenu,
      icon: <Layers className="w-5 h-5 mr-2 text-gray-700" />,
    },
    {
      name: "Resources",
      subMenu: resourcesMenu,
      icon: <Book className="w-5 h-5 mr-2 text-gray-700" />,
    },
    {
      name: "Pricing",
      href: "/pricing",
      icon: <DollarSign className="w-5 h-5 mr-2" />,
    },
    {
      name: "About",
      href: "/about-us",
      icon: <Info className="w-5 h-5 mr-2" />,
    },
    {
      name: "Contact Us",
      href: "/contact-sales",
      icon: <Headset className="w-5 h-5 mr-2" />,
    },
  ];

  return (
    <div className="fixed inset-0 top-[72px] bg-white z-40 flex flex-col overflow-y-auto">
      {/* Navigation */}
      <div className="flex-grow px-4 py-6">
        <Accordion type="single" collapsible>
          {navigationOptions.map((option, index) =>
            option.subMenu ? (
              <AccordionItem
                key={index}
                value={option.name}
                className="mb-4 border-b border-gray-300"
              >
                <AccordionTrigger className="text-xl font-semibold text-gray-800 py-3">
                  <div className="flex flex-row items-center">
                    {option.icon}
                    {option.name}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-6">
                  <ul className="space-y-2">
                    {option.subMenu.map((itemOrCategory, idx) =>
                      "items" in itemOrCategory ? (
                        <div key={idx} className="mb-4">
                          <h4 className="text-lg font-bold text-gray-600 mb-2">
                            {itemOrCategory.category}
                          </h4>
                          <ul className="space-y-2">
                            {itemOrCategory.items.map((item, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  href={item.href}
                                  title={item.title}
                                  className="text-lg text-gray-700 hover:text-orange-500"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <li key={idx}>
                          <Link
                            href={itemOrCategory.href}
                            title={itemOrCategory.title}
                            className="text-lg text-gray-700 hover:text-orange-500"
                          >
                            {itemOrCategory.title}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <div key={index}>
                <Link
                  href={option.href}
                  onClick={() => setExpanded(false)}
                  title={option.name}
                  className="flex items-center text-xl font-semibold text-gray-800 py-3 hover:text-orange-500"
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
      <div className="border-t border-gray-200 p-4">
        <Button className="block w-full py-3 text-lg font-semibold">
          Get Started
        </Button>
      </div>
    </div>
  );
}
