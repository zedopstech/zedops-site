import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/Components/UI/accordion";
import { Button } from "@/Components/UI/button";

import { Headset } from "lucide-react";
import Link from "next/link";
import React from "react";

const Pricing: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-16 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:text-center text-start">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Pricing That Works for Your Business
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Whether you&#39;re a small contractor or a large construction
            enterprise, we have plans tailored to meet your unique needs. Choose
            the right solution to unlock efficiency and collaboration in your
            projects.
          </p>
        </div>

        {/* Pricing Coming Soon Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-xl p-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-between">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white">
                Pricing Information Coming Soon
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                {
                  "We're working on creating the best pricing plans to suit your needs. Stay tuned for updates, or reach out to us for custom solutions!"
                }
              </p>
            </div>
            <Link href="/contact-sales">
              <Button
                size={"lg"}
                className="bg-white font-semibold text-indigo-600 hover:bg-gray-100"
                icon={Headset}
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="mt-16 bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
            {" Have questions? We've got answers. Here's what you need to know"}
          </p>
          <div className="mt-8">
            <Accordion type="single" collapsible>
              {/* FAQ Item 1 */}
              <AccordionItem value="faq-1">
                <AccordionTrigger className="lg:text-2xl font-semibold text-gray-900 text-start">
                  When will the pricing plans be available?
                </AccordionTrigger>
                <AccordionContent className="mt-2 lg:text-lg text-gray-600">
                  We are currently finalizing our pricing options and will
                  update this page soon. Contact our sales team for early access
                  details.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 2 */}
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-start lg:text-2xl font-semibold text-gray-900">
                  Can I start using Zedops before the pricing is announced?
                </AccordionTrigger>
                <AccordionContent className="mt-2 lg:text-lg text-gray-600">
                  Yes! Our platform is available for pilot projects. Contact our
                  sales team to discuss how Zedops can help your construction
                  management today.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 3 */}
              <AccordionItem value="faq-3">
                <AccordionTrigger className="lg:text-2xl font-semibold text-gray-900 text-center lg:text-left">
                  Is there a free trial available?
                </AccordionTrigger>
                <AccordionContent className="mt-2 lg:text-lg text-gray-600">
                  We are working on offering a free trial for new users. Stay
                  tuned for updates or reach out to our team for more
                  information.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="bg-orange-50 py-12 ">
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center ">
          <h2 className="text-3xl font-bold text-orange-900 sm:text-4xl">
            Ready to Transform Your Construction Management?
          </h2>
          <p className="mt-4 text-lg text-orange-800">
            {
              "Our team is here to help you every step of the way. Let's get started"
            }
          </p>
          <Button size={"lg"} className="mt-8 px-14">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
