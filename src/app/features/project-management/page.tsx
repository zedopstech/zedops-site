"use client"
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/UI/accordion";
import {FilePlus, LogOut, Calendar} from "lucide-react";
import Hero from "./Hero";
import Section from "./Section";
import Cto from "./Cto";


export default function ProjectManagementPage() {
  return (
    <div className=" bg-gray-50">
      <div className="">
        <Hero />
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md h-screen sticky top-0">
            <nav className="py-8">
              <ul className="space-y-4">
                <li className="flex items-center px-6 py-3 hover:bg-black rounded-lg">
                  <FilePlus className="h-5 w-5 text-orange-500" />
                  <a href="#projects" className="block text-lg font-semibold text-gray-700 px-6 py-3 hover:bg-black rounded-lg">
                    Projects
                  </a>
                </li>
                <li className="flex items-center px-6 py-3 hover:bg-black rounded-lg">
                  <LogOut className="h-5 w-5 text-orange-500" />
                  <a href="#daily-logs" className="block text-lg font-semibold text-gray-700 px-6 py-3 hover:bg-black rounded-lg">
                    Daily Logs
                  </a>
                </li>
                <li className="flex items-center px-6 py-3 hover:bg-black rounded-lg">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  <a href="#scheduling" className="block text-lg font-semibold text-gray-700 px-6 py-3 hover:bg-black rounded-lg">
                    Scheduling
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        <Section />
          </div>
           <Cto />
        {/* FAQ Section */}
        <section className="bg-gray-100 py-12">
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
                    Project Management software is a tool used to plan,
                    execute, and monitor project progress, helping teams
                    meet deadlines and achieve goals efficiently.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                    Can it integrate with existing tools?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                    Yes, most Project Management platforms offer
                    integrations with tools like Slack, Google Workspace,
                    and Microsoft Teams.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                    Is it suitable for small teams?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                    Yes, Project Management tools are designed to scale and
                    are suitable for small teams to manage their tasks,
                    collaborate, and achieve goals efficiently.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                    Does it support remote team collaboration?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                    Absolutely! Most Project Management tools come with
                    features like real-time collaboration, file sharing,
                    and communication tools to support remote teams.
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