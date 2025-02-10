import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  FileText,
  Shield,
  HelpCircle,
  Briefcase,
  Book,
  ChevronDown,
  Video,
  ArrowRightIcon,
  Megaphone,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const resource = [
  {
    title: "Knowledge Base",
    content: "Explore articles and guides to understand our services better.",
    href: "",
    icon: Book,
  },
  {
    title: "Webinars",
    content: "Watch sessions and webinars by industry experts.",
    href: "",
    icon: Video,
  },
  {
    title: "Blog",
    content: "Stay updated with trends and insights from our blog.",
    href: "",
    icon: FileText,
  },
  {
    title: "Case Studies",
    content: "Learn from success stories and case studies.",
    href: "",
    icon: Briefcase,
  },
  {
    title: "FAQs",
    content: "Find answers to common questions in our FAQ section.",
    href: "",
    icon: HelpCircle,
  },
  {
    title: "Security",
    content: "Your data is secured with top-notch security measures.",
    href: "/features/Security",
    icon: Shield,
  },
];

const ResourcesList = () => {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 px-3 py-2 text-base font-medium leading-none outline-none hover:text-white">
        Resources
        <ChevronDown
          className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="absolute left-0  top-0 w-full sm:w-auto shadow-md ">
        <div className="flex justify-between w-full bg-background">
          <ul className="bg-white grid grid-cols-3 p-10 gap-4 w-3/4 text-background">
            {resource.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                title={item.title}
                className="flex items-center p-4 gap-4 group hover:text-primary hover:bg-background rounded-xl"
              >
                <div className="p-3 bg-primary text-background rounded-full">
                  {item.icon &&
                    React.createElement(item.icon, {
                      className: "w-6 h-6",
                    })}
                </div>
                <div className="">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs mt-1">{item.content}</p>
                </div>
              </Link>
            ))}
          </ul>
          <div className="p-6 w-1/4 flex flex-col items-start gap-4 justify-evenly">
            <div className="flex flex-row items-center gap-2">
              <Megaphone className="w-6 h-6 text-primary" />
              <p className="text-sm font-semibold text-primary">
                {"What's New"}
              </p>
            </div>
            <div className="bg-primary rounded w-full h-[200px] mb-2 relative group"></div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-primary">
                Experience the power of ZedOps firsthand
              </span>
              <Link
                href=""
                className="underline text-white flex flex-row items-center gap-1 hover:text-primary"
              >
                Register Now <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
};

export default ResourcesList;
