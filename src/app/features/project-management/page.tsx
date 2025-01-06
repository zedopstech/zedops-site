"use client"
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/UI/accordion";
import { Button } from "@/Components/UI/button";
import {FilePlus, LogOut, Calendar} from "lucide-react";
import React, { useState } from "react";
import Hero from "./Hero";

export default function ProjectManagementPage() {
  const [showContent1, setShowContent1] = React.useState(false);
  const [showContent2, setShowContent2] = React.useState(false);
  const [showContent3, setShowContent3] = React.useState(false);
  
  
  return (
    <div className=" bg-gray-50">
      <div className="">
        <Hero />
        {/* Hero Section */}
        {/* <section
          className="bg-blue-50 py-20 flex justify-center items-center"
          style={{ 
            backgroundImage: "url('/bg project.jpg')", 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          <div className="container mx-auto text-center px-4">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Project Management
            </h1>
            <p className="text-lg text-gray-900 mb-6">
              Empower your teams to plan, execute, and deliver successful
              projects with cutting-edge tools and seamless collaboration.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant={"secondary"}
                size="lg"
                className="bg-black text-white hover:bg-orange-500"
              >
                Learn More
              </Button>
              <Button
                variant={"secondary"}
                size="lg"
                className="bg-white text-black hover:bg-orange-500"
              >
                Get Started
              </Button>
            </div>
          </div>
        </section> */}

        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md h-screen sticky top-0">
            <nav className="py-8">
              <ul className="space-y-4">
                <li className="flex items-center px-6 py-3 hover:bg-gray-200 rounded-lg">
                  <FilePlus className="h-5 w-5 text-gray-700" />
                  <a href="#projects" className="block text-lg font-semibold text-gray-700 px-6 py-3 hover:bg-gray-200 rounded-lg">
                    Projects
                  </a>
                </li>
                <li className="flex items-center px-6 py-3 hover:bg-gray-200 rounded-lg">
                  <LogOut className="h-5 w-5 text-gray-700" />
                  <a href="#daily-logs" className="block text-lg font-semibold text-gray-700 px-6 py-3 hover:bg-gray-200 rounded-lg">
                    Daily Logs
                  </a>
                </li>
                <li className="flex items-center px-6 py-3 hover:bg-gray-200 rounded-lg">
                  <Calendar className="h-5 w-5 text-gray-700" />
                  <a href="#scheduling" className="block text-lg font-semibold text-gray-700 px-6 py-3 hover:bg-gray-200 rounded-lg">
                    Scheduling
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Projects Section */}
            <section id="projects" className="container mx-auto py-12 flex flex-col md:flex-row-reverse items-center px-4">
              <div className="md:w-1/2">
                <Image
                  src="/project hero.jpg"
                  alt="Project Overview"
                  width={500}
                  height={400}
                  className="mx-auto rounded-lg"
                />
              </div>
              <div className="md:w-1/2 md:mr-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Take Charge of Your Projects, Don't Let Them Take Charge of You
                </h3>
                <p>
                  Organize your projects with customizable workflows and boards. Set
                  clear goals and track milestones with interactive Gantt charts. Assign
                  tasks, manage resources, and ensure timely delivery. Collaborate with
                  your team in a centralized workspace.
                </p>
                
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
                  {/* Real-time Collaboration */}
                  <div className="w-full md:w-1/3 max-w-[500px] mx-auto">
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => setShowContent1(!showContent1)}
                        className="w-full text-left py-2 px-2 hover:bg-gray-300 transition-all duration-200"
                      >
                        <span className="text-lg font-semibold">
                          Real-time Collaboration
                        </span>
                      </button>
                    </div>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        showContent1 
                          ? 'opacity-100 max-h-[300px]'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="border border-gray-300 bg-white rounded-lg shadow-md w-full px-4 py-2">
                        Always updated – never outdated. Changes made in the field or in the office are made in real time. You are always working with the latest data. Need the "latest" plans – go in and grab 'em.
                      </div>
                    </div>
                  </div>

                  {/* Financial Tracking */}
                  <div className="w-full md:w-1/3 max-w-[500px] mx-auto">
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => setShowContent2(!showContent2)}
                        className="w-full text-left py-2 px-2 hover:bg-gray-300 transition-all duration-200"
                      >
                        <span className="text-lg font-semibold">
                          Financial <br />
                          Tracking
                        </span>
                      </button>
                    </div>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        showContent2 
                          ? 'opacity-100 max-h-[300px]'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="border border-gray-300 bg-white rounded-lg shadow-md w-full px-4 py-2">
                        Financials from anywhere. You no longer need to be in the office or wade through a lot of reports to get a grasp on your project financials. It's all in one place making it easy to stay on track of your income and expenses.
                      </div>
                    </div>
                  </div>

                  {/* Project Tracking */}
                  <div className="w-full md:w-1/3 max-w-[500px] mx-auto">
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => setShowContent3(!showContent3)}
                        className="w-full text-left py-2 px-2 hover:bg-gray-300 transition-all duration-200"
                      >
                        <span className="text-lg font-semibold">
                          Project <br />
                          Tracking
                        </span>
                      </button>
                    </div>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        showContent3 
                          ? 'opacity-100 max-h-[300px]'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="border border-gray-300 bg-white rounded-lg shadow-md w-full px-4 py-2">
                        Project tracking made easy. Track your projects from start to finish, advancing them from one status to the next. No more guessing about the status of the project or asking "what else is left". Using the Schedule, you'll know the percent complete for the project as a whole as well as the individual tasks.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Daily Logs Section */}
            <section id="daily-logs" className="container mx-auto py-12 flex flex-col md:flex-row items-center px-4">
              <div className="md:w-1/2">
                <Image
                  src="/project dailylog.png"
                  alt="Daily Logs"
                  width={400}
                  height={400}
                  className="mx-auto rounded-lg"
                />
              </div>
              <div className="md:w-1/2 md:ml-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Daily Logs</h2>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Stay On Top of Daily Activities
                </h3>
                <ul className="text-lg list-disc pl-5 text-gray-700 space-y-2 list-orange">
                  <li>Track daily tasks and updates to ensure smooth project progress.</li>
                  <li>Record team activities and accomplishments in real-time.</li>
                  <li>Maintain transparency and accountability with detailed logs.</li>
                  <li>Generate reports for analysis and continuous improvement.</li>
                </ul>
              </div>
            </section>

            {/* Scheduling Section */}
            <section id="scheduling" className="container mx-auto py-12 flex flex-col md:flex-row-reverse items-center px-4">
              <div className="md:w-1/2">
                <Image
                  src="/project schedule.jpg"
                  alt="Project Overview"
                  width={600}
                  height={400}
                  className="mx-auto rounded-lg"
                />
              </div>
              <div className="md:w-1/2 md:mr-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scheduling</h2>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Manage Your Projects Effectively
                </h3>
                <ul className="text-lg list-disc pl-5 text-gray-700 space-y-2 list-orange">
                  <li>Organize your projects with customizable workflows and boards.</li>
                  <li>Set clear goals and track milestones with interactive Gantt charts.</li>
                  <li>Assign tasks, manage resources, and ensure timely delivery.</li>
                  <li>Collaborate with your team in a centralized workspace.</li>
                </ul>
              </div>
            </section>
          </main>
        </div>

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