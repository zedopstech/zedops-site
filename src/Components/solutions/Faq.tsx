import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/Components/UI/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FaqProps {
  title: string; // ✅ FAQ title
  description: string; // ✅ FAQ description
  faqs: FAQ[]; // ✅ FAQs array
  contactTitle: string; // ✅ Contact Us title
  contactDescription: string; // ✅ Contact Us description
}

const Faq: React.FC<FaqProps> = ({
  title,
  description,
  faqs,
  contactTitle,
  contactDescription,
}) => {
  return (
    <div className="bg-[#151414] py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* FAQ Section */}
        <h2 className="text-3xl font-bold text-white text-center sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 mx-auto max-w-[60ch] text-lg text-gray-300 text-center">{description}</p>
        <div className="mt-8 gap-6">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index + 1}`}>
                <div className="rounded-lg transition duration-300 hover:bg-backgroundlight p-3">
                  <AccordionTrigger className="lg:text-xl font-normal text-white text-start">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 lg:text-lg text-white">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Us Section */}
        <div className="mt-20 mb-20 text-center">
          <h3 className="text-3xl font-bold text-white">{contactTitle}</h3>
          <p className="mt-2 text-lg text-gray-300">{contactDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
