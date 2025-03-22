import SearchSection from "@/Components/solutions/SearchSection";
import { FAQ_PAGE } from "@/Data/data";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/Components/UI/accordion";


export default function Page() {
  return (
    <>
      <SearchSection {...FAQ_PAGE.searchSectionProps} />
      <main className="bg-custombg px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Categories Section */}
          <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Getting Started",
                description:
                  "Learn the basics of our platform to get started quickly.",
                link: "#",
              },
              {
                title: "Account Management",
                description:
                  "Manage your account, settings, and privacy preferences.",
                link: "#",
              },
              {
                title: "Troubleshooting",
                description:
                  "Resolve common issues with step-by-step solutions.",
                link: "#",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-xl font-semibold text-[#006A4E] mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-700 ">{category.description}</p>
                <a
                  href={category.link}
                  className="text-[#006A4E] mt-4 inline-block"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </section>

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question:
                    "What is the difference between renovation and remodeling?",
                  answer:
                    "Renovation typically involves restoring or updating an existing space without changing its structure, while remodeling involves significant alterations, such as changing layouts or adding new features.",
                },
                {
                  question:
                    "How long does a typical construction project take?",
                  answer:
                    "The duration depends on the project's scope. Small renovations may take weeks, while larger commercial or residential projects can take months or even years.",
                },
                {
                  question: "Do I need a permit for my construction project?",
                  answer:
                    "Yes, most construction projects require permits. The specific permits needed vary based on location and project type. Consult your local building authority for details.",
                },
                {
                  question: "What factors affect construction costs?",
                  answer:
                    "Costs depend on materials, labor, project complexity, location, permits, and unforeseen conditions like weather or site issues.",
                },
                {
                  question:
                    "How do I choose the right contractor for my project?",
                  answer:
                    "Look for licensed and insured contractors with a strong portfolio, positive client reviews, and experience in projects similar to yours.",
                },
                {
                  question:
                    "What is the importance of a construction schedule?",
                  answer:
                    "A construction schedule ensures that tasks are completed in sequence, helps manage resources efficiently, and keeps the project on track.",
                },
                {
                  question: "What should I do if my project goes over budget?",
                  answer:
                    "Regularly monitor expenses, discuss cost-saving options with your contractor, and be prepared for unexpected expenses with a contingency fund.",
                },
                {
                  question:
                    "How can I ensure my construction project is sustainable?",
                  answer:
                    "Use eco-friendly materials, implement energy-efficient designs, and follow green building practices to minimize environmental impact.",
                },
                {
                  question:
                    "What safety measures should be in place on a construction site?",
                  answer:
                    "Proper protective gear, regular safety training, adherence to OSHA regulations, and hazard identification are crucial for a safe worksite.",
                },
                {
                  question:
                    "How can I prevent delays in my construction project?",
                  answer:
                    "Plan thoroughly, ensure timely material delivery, address potential issues early, and maintain clear communication with your construction team.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger className="text-lg font-semibold text-gray-800 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base p-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </main>
    </>
  );
}