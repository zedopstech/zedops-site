"use client";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/UI/accordion";
import { HandPlatter, BookUser} from "lucide-react";
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
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
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
          <aside className="hidden lg:block w-64 bg-gray-50 shadow-md h-screen sticky top-0">
            <nav className="h-full flex flex-col justify-center">
              <ul className="space-y-4">
                <li
                  className={`flex items-center px-6 py-3 hover:bg-gray-200 rounded-lg ${
                    activeSection === "supplier-relations" ? "bg-gray-200 font-bold text-gray-900" : "text-gray-400"
                  }`}
                >
                  <HandPlatter className="h-6 w-6 text-orange-500" />
                  <a
                    href="#supplier-relations"
                    className="block text-lg font-semibold ml-4"
                  >
                    Supplier Relations
                  </a>
                </li>
                <li
                  className={`flex items-center px-6 py-3 hover:bg-gray-200 rounded-lg ${
                    activeSection === "employee-operations" ? "bg-gray-200 font-bold text-gray-900" : "text-gray-400"
                  }`}
                >
                  <BookUser className="h-6 w-6 text-orange-500" />
                  <a
                    href="#employee-operations"
                    className="block text-lg font-semibold ml-4"
                  >
                    Employee Operations
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
                  What is directory management?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                  Directory management organizes and stores project files in a structured system,
                  making them easy to access, update, and share with the team.
              </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                  How does directory management improve efficiency?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                  It helps team members quickly locate files, reducing time spent searching and
                  ensuring everyone works with the latest documents.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                  Can I customize my directory structure?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                  Yes, directory structures can be tailored to fit the specific needs
                  of your project, making file organization more effective.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                  How is directory security handled?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                  Access controls allow you to restrict file visibility and editing rights, ensuring sensitive 
                  information is protected and only accessible to authorized users.
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
