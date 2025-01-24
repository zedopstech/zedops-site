import React from "react";
import Hero from "../components/solutions/Hero";
import MainHero from "../components/solutions/MainHero";
import FeaturesSection from "../components/solutions/FeaturesSection";
import Testimonals from "../components/solutions/Testimonals";
import MainSection from "../components/solutions/Mainsection";
import EmailFeautres from "../components/solutions/Emailfeatures";
import FeatureCards from "../components/solutions/Featurecards";
import CtoSection from "../components/solutions/Ctosection";
import {CircleArrowOutDownLeft,Volume,Sparkles,LucideMousePointerClick,LucideCode ,LucideEye,LucideLink2} from 'lucide-react';

export default function EstimationPage() {
  // Props configuration
  const heroProps = {
    title: "Tendering Management",
    subtitle: "Estimation",
    description:
      "Accelerate project initiation with precise cost estimates and optimized efficiency.",
    buttonLabel: "Get Started",
    imageSrc: "/solutions/estimation-hero.jpg",
    imageAlt: "Construction workers using ZedOps",
    linkHref: "/book-a-demo",
  };

  const heroSectionProps = {
    subtitle: "STAND OUT IN THE INBOX",
    title: "Content that converts",
    description:
      "Craft compelling emails that seamlessly blend text and imagery, unlocking unique engagement possibilities.",
    buttonLabel: "Start emailing",
    buttonLink: "/start-emailing",
  };

  const featuresSectionProps = {
    features: [
      {
        title: "Drag-and-drop email builder",
        description:
          "Allow non-technical marketers to move quickly with email content creation needs in a familiar and intuitive drag-and-drop environment.",
        imageSrc: "/solutions/estimation-1.jpg",
      },
      {
        title: "Code from scratch",
        description:
          "Gain granular control over your email content with our robust HTML code builder powered by Parcel. Develop effective.",
        imageSrc: "/solutions/estimation-2.jpg",
      },
    ],
  };

  const TestimonalsSectionProps = {
    subtitle: "TIMING MATTERS",
    title: "Control is at your fingertips",
    imageSrc:"/solutions/estimation-testimonal.jpg",
    imageAlt:"Illustration showing control features",
    features: [
      {
        title: "Automated, on-time delivery",
        description:
          "Leverage campaigns to create automated email touchpoints that build relationships on your behalf.Whether a single email or a series, let automation take the wheel so you can focus on other parts of your business.",
        icon:  <CircleArrowOutDownLeft size={24} />,
      },
      {
        title: "Evergreen and predictable messaging",
        description:
          "Maintain a consistent presence in your subscriber's inbox with regular broadcasts and relevant updates.Whether a single email or a series, let automation take the wheel so you can focus on other parts of your business.",
        icon: <Volume size={24} />,
      },
      {
        title: "Optimally timed, perfectly positioned",
        description:
          "Ensure precise timing and strategic placement of your automated touchpoints and broadcasts.Whether a single email or a series, let automation take the wheel so you can focus on other parts of your business.",
        icon: <Sparkles size={24} />,
      },
    ],
  };

  const mainSectionData = [
    {
    image: "/solutions/estimation section.jpg", // Path to your left-side image
    title: "Advanced segmentation",
    description: "Avoid sending batch and blast campaigns when you can deliver personalized messages at scale.",
    features: [
      {
        icon: "/icons/segments.svg",
        title: "Group your users into segments",
        description: "Trigger messaging based on critical moments in your customer's lifecycle using events.",
      },
      {
        icon: "/icons/data-points.svg",
        title: "Personalize messaging with key data points",
        description: "Such as the recipient’s first name, upcoming dates, or alternate attributes.",
      },
      {
        icon: "/icons/dynamic-content.svg",
        title: "Display dynamic content",
        description: "Based on a subscriber's relationship to an object.",
      },
    ],
   
  },
  {
    image: "/solutions/estimation section-1.jpg", // Path to your left-side image
    imageOnRight :"true",
    title: "Advanced segmentation",
    description: "Avoid sending batch and blast campaigns when you can deliver personalized messages at scale.",
    features: [
      {
        icon: "/icons/segments.svg",
        title: "Group your users into segments",
        description: "Trigger messaging based on critical moments in your customer's lifecycle using events.",
      },
      {
        icon: "/icons/data-points.svg",
        title: "Personalize messaging with key data points",
        description: "Such as the recipient’s first name, upcoming dates, or alternate attributes.",
      },
      {
        icon: "/icons/dynamic-content.svg",
        title: "Display dynamic content",
        description: "Based on a subscriber's relationship to an object.",
      },
    ],
   
  },
];
  const featureData = [
    {
      icon: <LucideMousePointerClick className="text-green-700" />,
      title: "Drag-and-drop editor",
      description: "Quickly build campaigns in a familiar interface",
    },
    {
      icon: <LucideCode className="text-green-700" />,
      title: "Code editor",
      description: "Craft unique emails with HTML and CSS",
    },
    {
      icon: <LucideEye className="text-green-700" />,
      title: "Accessibility checker",
      description: "Review the accessibility of your emails",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    // Add more features as needed
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
    {
      icon: <LucideLink2 className="text-green-700" />,
      title: "Dynamic content",
      description: "Personalize messages with Liquid using attributes",
    },
  ];
  const features = [
    {
      title: "Want to become a deliverability expert?",
      description: "Watch the workshop",
      icon: <LucideLink2 className="text-white" />,
    },
    {
      icon: <LucideLink2 className="text-white" />,
      title: "Principles and practices you need to create HTML emails",
      description: "Access the guide",
    
    },
    {
      icon: <LucideLink2 className="text-white" />,
      title: "Learn intermediate and advanced Liquid",
      description: "Access the guide",
      
    },
    {
      icon: <LucideLink2 className="text-white" />,
      title: "Learn intermediate and advanced Liquid",
      description: "Access the guide",
      
    },
    {
      icon: <LucideLink2 className="text-white" />,
      title: "Learn intermediate and advanced Liquid",
      description: "Access the guide",
      
    },
    {
      icon: <LucideLink2 className="text-white" />,
      title: "Learn intermediate and advanced Liquid",
      description: "Access the guide",
      
    },
  ];
    const ctaProps = {
    title: "Supercharge your messaging automation",
    description: "",
    benefits: [
      "14-day free trial",
      "No credit card required",
      "Cancel anytime",
    ],
    button1Label: "Book a demo",
    button1Link: "/book-a-demo",
    button2Label: "Start a trial",
    button2Link: "/start-trial",
    };

  return (
    <div>
      {/* Hero Section */}
      <Hero {...heroProps} />

      {/* Hero Content Section */}
      <MainHero {...heroSectionProps} />

      {/* Features Section */}
      <FeaturesSection {...featuresSectionProps} />

      {/* Control Section */}
      <Testimonals {...TestimonalsSectionProps} />

      <MainSection sections={mainSectionData} />

      <EmailFeautres features={featureData}  />
      <FeatureCards features={features} />
      <CtoSection {...ctaProps} />
    
      </div>

)
}

        {/* <Mainsection/> */}
        {/* <Ctosection/> */}
          {/* FAQ Section */}
    
     {/* <section id="projects" className="bg-gray-200 ">
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
            //                <AccordionItem value="faq-1">
            //                  <AccordionTrigger className="lg:text-2xl font-semibold hover:no-underline text-background text-start">
            //                  What is construction estimation
            //                </AccordionTrigger>
            //                  <AccordionContent className="mt-2 lg:text-lg text-background">
            //                  Construction estimation involves determining the costs, resources, and time 
            //                  needed to complete a project. It is crucial for
            //                  budgeting, planning, and ensuring the project's financial feasibility.
            //                </AccordionContent>
            //                </AccordionItem>
             
            //                {/* FAQ Item 2 */}
            //                <AccordionItem value="faq-2">
            //                  <AccordionTrigger className="text-start lg:text-2xl hover:no-underline font-semibold text-background">
            //                  How do advanced estimation tools improve accuracy?
            //                  </AccordionTrigger>
            //                  <AccordionContent className="mt-2 lg:text-lg hover:no-underline text-background">
            //                  Advanced tools use real-time data, templates, and AI-driven insights to minimize errors, provide detailed breakdowns,
            //                 and optimize resource allocation, leading to more precise estimates.
            //                 </AccordionContent>
            //                </AccordionItem>
             
            //                {/* FAQ Item 3 */}
            //                <AccordionItem value="faq-3">
            //                  <AccordionTrigger className="lg:text-2xl font-semibold hover:no-underline text-background text-center lg:text-left">
            //                  What factors influence the cost estimation process?
            //                </AccordionTrigger>
            //                  <AccordionContent className="mt-2 lg:text-lg text-background">
            //                  Key factors include material costs, labor rates, project scope, location, equipment, and potential contingencies.
            //                  Accurate estimation requires considering all these variables.
            //                  </AccordionContent>
            //                </AccordionItem>
         
            //               {/* FAQ Item 4 */}
            //                <AccordionItem value="faq-4">
            //                  <AccordionTrigger className="lg:text-2xl font-semibold hover:no-underline text-background text-center lg:text-left">
            //                  Can estimation tools integrate with other project management software?
            //                </AccordionTrigger>
            //                  <AccordionContent className="mt-2 lg:text-lg text-background">
            //                  Yes, modern estimation tools often integrate seamlessly with project management, procurement, 
            //                  and accounting software, enabling streamlined workflows and better coordination.
            //               </AccordionContent>
            //                </AccordionItem>
            //              </Accordion>
            //            </div>
            //          </div>
            //        </div>
            // </section> */}
   
    
 