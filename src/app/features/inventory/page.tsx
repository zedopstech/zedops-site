"use client"
import React from 'react'
import HeroSection from './HeroSection'
import Headerfeature from './Headerfeature'
import Mainsection from './Mainsection'
import Ctosection from './Ctosection'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/UI/accordion";


export default function Inventorypage() {
  return (
    <div>
        <HeroSection />
        <Headerfeature />
        <Mainsection />
        <Ctosection />
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
             How can I track inventory in real time?
             </AccordionTrigger>
             <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
             Real-time inventory tracking can be achieved by using inventory management software 
             integrated with barcode scanners, RFID tags, or cloud-based systems. 
             </AccordionContent>
           </AccordionItem>
           <AccordionItem value="item-2">
             <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
             What are the best practices for inventory management?
             </AccordionTrigger>
             <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
             Best practices for inventory management include regularly conducting stock audits, using automated tracking systems,
             and maintaining optimal stock levels to meet demand while minimizing excess.
             </AccordionContent>
           </AccordionItem>
           <AccordionItem value="item-3">
             <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
             How often should inventory audits be conducted?
             </AccordionTrigger>
             <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
             Inventory audits should be conducted regularly, at least quarterly, 
             to ensure accuracy and identify discrepancies.
             For high-value or fast-moving items, monthly or even weekly audits may
             be necessary to maintain optimal stock levels.
             </AccordionContent>
           </AccordionItem>
           <AccordionItem value="item-4">
             <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
             Can I integrate my inventory system with other business tools?
             </AccordionTrigger>
             <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
             Yes, most modern inventory management systems offer integration with 
             other business tools like accounting, ERP, and CRM systems.
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