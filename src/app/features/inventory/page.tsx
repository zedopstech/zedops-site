import React from 'react'
import Headerfeature from './Headerfeature'
import Mainsection from './Mainsection'
import Ctosection from './Ctosection'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/UI/accordion";
import Hero from '../components/solutions/Hero'


export default function Inventorypage() {
  return (
    <div>
        <Hero 
        title="Material Management"
        subtitle='Inventory'
        description=" Inventory management streamlines stock tracking, ensuring optimal levels
        to reduce costs and prevent shortages. It boosts efficiency, supports demand,
        and enhances overall operational control. "
        buttonLabel="Get Started"
        imageSrc="/solutions/inventory-hero.jpg"
        imageAlt="Construction workers using ZedOps"
        linkHref="/book-a-demo"
        />
        <Headerfeature />
        <Mainsection />
        <Ctosection />
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
                    How can I track inventory in real time?
                    </AccordionTrigger>
                    <AccordionContent className="mt-2 lg:text-lg text-background">
                    Real-time inventory tracking can be achieved by using inventory management software 
                    integrated with barcode scanners, RFID tags, or cloud-based systems. 
                  </AccordionContent>
                  </AccordionItem>
    
                  {/* FAQ Item 2 */}
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-start lg:text-2xl hover:no-underline font-semibold text-background">
                    What are the best practices for inventory management?
                  </AccordionTrigger>
                    <AccordionContent className="mt-2 lg:text-lg hover:no-underline text-background">
                    Best practices for inventory management include regularly conducting stock audits, 
                    using automated tracking systems,and maintaining optimal stock levels to
                    meet demand while minimizing excess.
                  </AccordionContent>
                  </AccordionItem>
    
                  {/* FAQ Item 3 */}
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="lg:text-2xl font-semibold hover:no-underline text-background text-center lg:text-left">
                    How often should inventory audits be conducted?
                     </AccordionTrigger>
                    <AccordionContent className="mt-2 lg:text-lg text-background">
                    Inventory audits should be conducted regularly, at least quarterly, 
                    to ensure accuracy and identify discrepancies.
                    For high-value or fast-moving items, monthly or even weekly audits may
                    be necessary to maintain optimal stock level
                 </AccordionContent>
                  </AccordionItem>

                 {/* FAQ Item 4 */}
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="lg:text-2xl font-semibold hover:no-underline text-background text-center lg:text-left">
                    Can I integrate my inventory system with other business tools?
                  </AccordionTrigger>
                    <AccordionContent className="mt-2 lg:text-lg text-background">
                    Yes, most modern inventory management systems offer integration with 
                   other business tools like accounting, ERP, and CRM systems.
                 </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
   </section>
 </div>
    

  );
}