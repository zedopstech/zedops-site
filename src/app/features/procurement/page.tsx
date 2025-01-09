import React from 'react'
import HeroHeader from './HeroHeader'
import HeaderSection from './HeaderSection'
import Sectionmain from './Sectionmain'
import Sectioncto from './Sectioncto'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/Components/UI/accordion";

export default function ProcurementPage() {
  return (
    <div>
        <HeroHeader />
        <HeaderSection />
        <Sectionmain />
        <Sectioncto />
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
             What is procurement?
             </AccordionTrigger>
             <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
             Procurement is the process of sourcing and acquiring goods, services, and materials necessary for 
             a project.In construction, efficient procurement ensures timely delivery, cost control, 
             and the use of quality resources, which are critical for successful project completion.
             </AccordionContent>
           </AccordionItem>
           <AccordionItem value="item-2">
             <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
             What are the key steps in the procurement process?
             </AccordionTrigger>
             <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
             The key steps include identifying project requirements, selecting vendors, negotiating contracts, issuing purchase orders, 
             tracking deliveries, and evaluating supplier performance.
             </AccordionContent>
           </AccordionItem>
           <AccordionItem value="item-3">
             <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
             How can procurement software benefit my business?
             </AccordionTrigger>
             <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
            Procurement software streamlines vendor management, automates purchase tracking, ensures compliance,
            and provides real-time insights, reducing costs and improving efficiency.
             </AccordionContent>
           </AccordionItem>
           <AccordionItem value="item-4">
             <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
             How do you ensure compliance with procurement policies?
             </AccordionTrigger>
             <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
             Compliance is maintained by adhering to standardized procurement 
             processes, using approved vendors, tracking all transactions, 
             and ensuring alignment with local regulations and contractual obligations.
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
