import React from 'react'
import HeaderSection from './HeaderSection'
import Sectionmain from './Sectionmain'
import Sectioncto from './Sectioncto'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/Components/UI/accordion";
import Hero from '../components/solutions/Hero'

export default function ProcurementPage() {
  return (
    <div>
      <Hero 
       title="Material Management"
       subtitle='Procurement'
       description="Procurement is the strategic process of sourcing and acquiring the materials, services, and resources needed to ensure project success. "
       buttonLabel="Get Started"
       imageSrc="/solutions/procurement-hero.jpg"
       imageAlt="Construction workers using ZedOps"
       linkHref="/book-a-demo"
     />
       <HeaderSection />
        <Sectionmain />
        <Sectioncto />
         {/* FAQ Section */}
     
     <section id="projects" className="bg-gray-200 ">
         <div className="mt-18 bg-gray-50 py-16">
                 <div className="max-w-5xl mx-auto px-6">
                   <h2 className="text-3xl font-bold text-background text-center sm:text-4xl">
                     Frequently Asked Questions
                   </h2>
                   <p className="mt-4 text-lg text-background text-center">
                     {" Have questions? We've got answers. Here's what you need to know"}
                   </p>
                   <div className="mt-8">
                     <Accordion type="single" collapsible>
                       {/* FAQ Item 1 */}
                       <AccordionItem value="faq-1">
                         <AccordionTrigger className="lg:text-2xl font-semibold hover:no-underline text-background text-start">
                         What is procurement
                         </AccordionTrigger>
                         <AccordionContent className="mt-2 lg:text-lg text-background">
                         Procurement is the process of sourcing and acquiring goods, services, and materials necessary for 
                         a project.In construction, efficient procurement ensures timely delivery, cost control, 
                         and the use of quality resources, which are critical for successful project completion.
                       </AccordionContent>
                       </AccordionItem>
         
                       {/* FAQ Item 2 */}
                       <AccordionItem value="faq-2">
                         <AccordionTrigger className="text-start lg:text-2xl hover:no-underline font-semibold text-background">
                         What are the key steps in the procurement process?
                       </AccordionTrigger>
                         <AccordionContent className="mt-2 lg:text-lg hover:no-underline text-background">
                         The key steps include identifying project requirements, selecting vendors, negotiating contracts, 
                         issuing purchase orders, 
                         tracking deliveries, and evaluating supplier performance.
                       </AccordionContent>
                       </AccordionItem>
         
                       {/* FAQ Item 3 */}
                       <AccordionItem value="faq-3">
                         <AccordionTrigger className="lg:text-2xl font-semibold hover:no-underline text-background text-center lg:text-left">
                         How can procurement software benefit my business?
                         </AccordionTrigger>
                         <AccordionContent className="mt-2 lg:text-lg text-background">
                         Procurement software streamlines vendor management, automates purchase tracking, ensures compliance,
                         and provides real-time insights, reducing costs and improving efficiency.
                         How do you ensure compliance with procurement policies?
                        </AccordionContent>
                       </AccordionItem>
     
                      {/* FAQ Item 4 */}
                       <AccordionItem value="faq-4">
                         <AccordionTrigger className="lg:text-2xl font-semibold hover:no-underline text-background text-center lg:text-left">
                         How do you ensure compliance with procurement policies?
                       </AccordionTrigger>
                         <AccordionContent className="mt-2 lg:text-lg text-background">
                         Compliance is maintained by adhering to standardized procurement 
                         processes, using approved vendors, tracking all transactions, 
                         and ensuring alignment with local regulations and contractual obligations.
                      </AccordionContent>
                       </AccordionItem>
                     </Accordion>
                   </div>
                 </div>
               </div>
        </section>

    </div>
    
  )
}
