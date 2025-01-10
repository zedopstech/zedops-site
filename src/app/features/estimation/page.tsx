import React from 'react'
import Sectionheader from './Sectionheader'
import Testimonals from './Testimonals'
import Mainsection from './Mainsection'
import Ctosection from './Ctosection'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/Components/UI/accordion";

export default function EstimationPage() {
  return (
    <div>
        <Sectionheader />
        <Testimonals/>
        <Mainsection/>
        <Ctosection/>
          {/* FAQ Section */}
     <div>
     <section id="projects" className="bg-gray-100 py-12">
     <div className="container mx-auto flex justify-center items-center px-4">
       <div className="w-full md:w-2/3 lg:w-1/2">
         <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
           Frequently Asked Questions
         </h2>
         <Accordion type="single" collapsible className="space-y-4">
           <AccordionItem value="item-1">
             <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
             What is construction estimation
             </AccordionTrigger>
             <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
             Construction estimation involves determining the costs, resources, and time 
             needed to complete a project. It is crucial for
             budgeting, planning, and ensuring the project's financial feasibility.
             </AccordionContent>
           </AccordionItem>
           <AccordionItem value="item-2">
             <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
             How do advanced estimation tools improve accuracy?
             </AccordionTrigger>
             <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
             Advanced tools use real-time data, templates, and AI-driven insights to minimize errors, provide detailed breakdowns,
             and optimize resource allocation, leading to more precise estimates.
             </AccordionContent>
           </AccordionItem>
           <AccordionItem value="item-3">
             <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
             What factors influence the cost estimation process?
             </AccordionTrigger>
             <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
            Key factors include material costs, labor rates, project scope, location, equipment, and potential contingencies.
            Accurate estimation requires considering all these variables.
             </AccordionContent>
           </AccordionItem>
           <AccordionItem value="item-4">
             <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
             Can estimation tools integrate with other project management software?
             </AccordionTrigger>
             <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
             Yes, modern estimation tools often integrate seamlessly with project management, procurement, 
             and accounting software, enabling streamlined workflows and better coordination.
             </AccordionContent>
           </AccordionItem>
         </Accordion>
       </div>
     </div>
   </section>

    </div>
    </div>
  )
}
