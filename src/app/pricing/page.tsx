import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/Components/UI/accordion";
import { Button } from "@/Components/UI/button";
import { Check, Headset, Shield, Zap, Building, Users, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  highlighted = false, 
  comingSoon = false 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  highlighted?: boolean;
  comingSoon?: boolean;
}) => {
  return (
    <div 
      className={`relative rounded-2xl overflow-hidden ${
        highlighted 
          ? 'bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-2 border-primary shadow-xl' 
          : 'bg-white border border-gray-200 shadow-lg'
      }`}
    >
      {highlighted && (
        <div className="absolute -right-12 top-6 bg-primary text-secondary text-xs font-bold px-14 py-1.5 rotate-45 shadow-md">
          BEST VALUE
        </div>
      )}
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-2xl font-bold ${highlighted ? 'text-primary' : 'text-secondary'}`}>{title}</h3>
          {highlighted && (
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-primary" fill="currentColor" />
            </div>
          )}
        </div>
        
        {comingSoon ? (
          <div className={`text-lg font-semibold ${highlighted ? 'text-primary' : 'text-secondary'} mb-4`}>Coming Soon</div>
        ) : (
          <div className="mb-6">
            <span className="text-5xl font-extrabold">{price}</span>
            {price !== "Custom" && <span className={`${highlighted ? 'text-primary' : 'text-secondary'} ml-1`}>/month</span>}
          </div>
        )}
        
        <div className={`${highlighted ? 'bg-primary/10' : 'bg-gray-50'} rounded-xl p-4 mb-6`}>
          <p className={`${highlighted ? 'text-primary' : 'text-secondary'}`}>{description}</p>
        </div>
        
        <div className="mb-8">
          <div className={`text-sm uppercase font-semibold ${highlighted ? 'text-primary' : 'text-secondary'} mb-3`}>Features include:</div>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className={`p-1 rounded-full ${highlighted ? 'bg-primary/20' : 'bg-secondary/20'} mr-2 flex-shrink-0`}>
                  <Check className={`w-4 h-4 ${highlighted ? 'text-primary' : 'text-secondary'}`} />
                </div>
                <span className={`${highlighted ? 'text-primary/90' : 'text-gray-700'}`}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Link href="/contact-sales">
          <Button 
            className={`w-full py-6 ${
              highlighted 
                ? 'bg-primary shadow-lg' 
                : 'bg-secondary shadow-md text-primary hover:bg-primary hover:text-secondary'
            }`}
          >
            Contact Sales
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$99",
      description: "Perfect for small contractors and startups",
      features: [
        "Up to 5 active projects",
        "Basic project management tools",
        "Document storage & sharing",
        "Mobile app access",
        "Email support"
      ],
      comingSoon: true
    },
    {
      title: "Professional",
      price: "$299",
      description: "Ideal for growing construction businesses",
      features: [
        "Up to 20 active projects",
        "Advanced project tracking",
        "Financial management tools",
        "Bid management system",
        "AI-powered insights",
        "Priority support"
      ],
      highlighted: true,
      comingSoon: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large construction companies with complex needs",
      features: [
        "Unlimited projects",
        "Full platform access",
        "Custom integrations",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "24/7 premium support"
      ],
      comingSoon: true
    }
  ];

  return (
    <section className="text-primary">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-16">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-6">
              <span className="text-secondary">Pricing That Works for</span>{" "}
              <span className="text-primary">Your Business</span>
            </h1>
            <p className="mt-6 text-xl text-secondary max-w-3xl mx-auto">
              Whether you’re a small contractor or a large construction
              enterprise, we have plans tailored to meet your unique needs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 mb-20 border border-white/10 shadow-xl">
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">All Plans Include</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Enterprise Security", description: "Bank-level security and data protection" },
                { icon: Zap, title: "AI-Powered Tools", description: "Smart automation to boost productivity" },
                { icon: Building, title: "Project Templates", description: "Pre-built templates for faster setup" },
                { icon: Users, title: "Team Collaboration", description: "Real-time communication tools" },
                { icon: Headset, title: "Dedicated Support", description: "Expert help when you need it" }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-6 rounded-xl "
                >
                  <div className="p-3 rounded-md bg-orange-200 mr-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">{feature.title}</h3>
                    <p >{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="bg-gradient-to-b from-white/95 to-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-secondary text-center sm:text-4xl mb-3">
            Frequently Asked Questions
          </h2>
          <p className="mb-12 text-lg text-secondary text-center max-w-2xl mx-auto">
            Have questions? We’ve got answers. Here’s what you need to know
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <Accordion type="single" collapsible className="space-y-5">
              {/* FAQ Item 1 */}
              <AccordionItem value="faq-1" className="border rounded-xl overflow-hidden border-gray-200 shadow-sm">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline text-secondary text-start px-6 py-5">
                  When will the pricing plans be available?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-lg text-secondary bg-gray-50/50">
                  We are currently finalizing our pricing options and will
                  update this page soon. Contact our sales team for early access
                  details and special launch pricing.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 2 */}
              <AccordionItem value="faq-2" className="border rounded-xl overflow-hidden border-gray-200 shadow-sm">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline text-secondary text-start px-6 py-5">
                  Can I start using ZedOps before the pricing is announced?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-lg text-secondary bg-gray-50/50">
                  Yes! Our platform is available for pilot projects. Contact our
                  sales team to discuss how ZedOps can help your construction
                  management today and secure early adopter benefits.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 3 */}
              <AccordionItem value="faq-3" className="border rounded-xl overflow-hidden border-gray-200 shadow-sm">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline text-secondary text-start px-6 py-5">
                  Is there a free trial available?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-lg text-secondary bg-gray-50/50">
                  We are working on offering a free trial for new users. Stay
                  tuned for updates or reach out to our team for a personalized
                  demo to experience the platform firsthand.
                </AccordionContent>
              </AccordionItem>
              
              {/* FAQ Item 4 */}
              <AccordionItem value="faq-4" className="border rounded-xl overflow-hidden border-gray-200 shadow-sm">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline text-secondary text-start px-6 py-5">
                  Do you offer custom solutions for specific needs?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-lg text-secondary bg-gray-50/50">
                  Absolutely! Our Enterprise plan is fully customizable to meet your specific requirements. 
                  We can tailor features, integrations, and support options to perfectly align with your 
                  organization’s workflow and objectives.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-[#151414] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          
          <div className="relative z-10 text-white ">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Ready to Transform Your Construction Management?
            </h2>
            <p className="text-xl  max-w-2xl mx-auto mb-10">
              Our team is here to help you every step of the way. Let’s get started on building better together.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/book-a-demo">
                <Button size="lg" className="bg-white text-secondary px-8 py-6 text-lg font-semibold shadow-lg">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/contact-sales">
                <Button size="lg" className=" text-white px-8 py-6 hover:bg-secondary text-lg font-semibold shadow-lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
