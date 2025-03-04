import React, { useEffect } from "react";
import { Headset, DollarSign, Info, Layers, Book } from "lucide-react";
import { Button } from "@/Components/UI/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/UI/accordion";
import Link from "next/link";
import {
  featuresMenu,
  featureNav,
  resourcesMenu,
} from "../Header/Navigation/data"; // Import the data

export default function MobileNavigation({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    if (expanded) {
      document.documentElement.style.overflow = "hidden"; // Prevent scrolling on <html>
      document.body.style.overflow = "hidden"; // Prevent scrolling on <body>
    } else {
      document.documentElement.style.overflow = ""; // Restore scrolling
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = ""; // Ensure scrolling is restored on unmount
      document.body.style.overflow = "";
    };
  }, [expanded]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setExpanded(false); // Close mobile menu when screen is resized to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setExpanded]); // Ensure effect runs only when setExpanded changes

  const navigationOptions = [
    {
      name: "Solutions",
      subMenu: [
        ...featuresMenu,
        {
          category: "Take a tour of zedops",
          items: featureNav,
        },
      ],
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
    <div className="fixed inset-0 top-20 bg-white z-50 flex flex-col overflow-y-auto">
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
                                  onClick={() => setExpanded(false)}
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
                            onClick={() => setExpanded(false)}
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

      <div className="border-t border-gray-200 p-4">
        <Button className="block w-full py-3 text-lg font-semibold">
          Get Started
        </Button>
      </div>
    </div>
  );
}
