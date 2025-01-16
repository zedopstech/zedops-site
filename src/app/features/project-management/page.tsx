"use client";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/UI/accordion";
import { FilePlus, LogOut, Calendar } from "lucide-react";
import Hero from "./Hero";
import Section from "./Section";
import Cto from "./Cto";

export default function ProjectManagementPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight * 0.5 &&
          rect.bottom >= window.innerHeight * 0.5
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50">
      <div>
        <Hero />
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 bg-white shadow-md h-screen sticky top-0">
            <nav className="h-full flex flex-col justify-center">
              <ul className="space-y-4">
                <li
                  className={`flex items-center px-6 py-3 hover:bg-gray-200 rounded-lg ${
                    activeSection === "projects" ? "bg-gray-200 font-bold text-gray-900" : "text-gray-400"
                  }`}
                >
                  <FilePlus className="h-6 w-6 text-orange-500" />
                  <a
                    href="#projects"
                    className="block text-lg font-semibold  ml-4"
                  >
                    Projects
                  </a>
                </li>
                <li
                  className={`flex items-center px-6 py-3 hover:bg-gray-200 rounded-lg ${
                    activeSection === "daily-logs"
                      ? "bg-gray-200 font-bold"
                      : ""
                  }`}
                >
                  <LogOut className="h-6 w-6 text-orange-500" />
                  <a
                    href="#daily-logs"
                    className="block text-lg font-semibold ml-4"
                  >
                    Daily Logs
                  </a>
                </li>
                <li
                  className={`flex items-center px-6 py-3 hover:bg-gray-200 rounded-lg ${
                    activeSection === "scheduling"
                      ? "bg-gray-200 font-bold"
                      : ""
                  }`}
                >
                  <Calendar className="h-6 w-6 text-orange-500" />
                  <a
                    href="#scheduling"
                    className="block text-lg font-semibold  ml-4"
                  >
                    Scheduling
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <Section />
        </div>

        <Cto />

        {/* FAQ Section */}
        <section id="projects" className="bg-gray-100 py-12">
          <div className="container mx-auto flex justify-center items-center px-4">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                    What is Project Management software?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                    Project Management software is a tool used to plan, execute,
                    and monitor project progress, helping teams meet deadlines
                    and achieve goals efficiently.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                    Can it integrate with existing tools?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                    Yes, most Project Management platforms offer integrations
                    with tools like Slack, Google Workspace, and Microsoft
                    Teams.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                    Is it suitable for small teams?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                    Yes, Project Management tools are designed to scale and are
                    suitable for small teams to manage their tasks, collaborate,
                    and achieve goals efficiently.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                    Does it support remote team collaboration?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                    Absolutely! Most Project Management tools come with features
                    like real-time collaboration, file sharing, and
                    communication tools to support remote teams.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
