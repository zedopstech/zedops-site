import React from "react";
import Hero from "../components/solutions/Hero";
import MainHero from "../components/solutions/MainHero";
import FeaturesSection from "../components/solutions/FeaturesSection";
import Testimonals from "../components/solutions/Testimonals";
import MainSection from "../components/solutions/MainSection";
import EmailFeautres from "../components/solutions/EmailFeatures";
import FeatureCards from "../components/solutions/FeatureCards";
import CtoSection from "../components/solutions/CtoSection";
import {CircleArrowOutDownLeft,Volume,Sparkles,LucideMousePointerClick,LucideCode ,LucideEye,LucideLink2} from 'lucide-react';

export default function EstimationPage() {
  // Props configuration
  const heroProps = {
    subtitle: "Estimation",
    description:
    "Effortlessly estimate your projects with precision. Explore accurate tools designed to simplify planning and streamline your workflow.",
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
          "Leverage campaigns to create automated email touchpoints that build relationships on your behalf.Whether a single email or a series, let automation.",
        icon:  <CircleArrowOutDownLeft size={24} />,
      },
      {
        title: "Evergreen and predictable",
        description:
          "Maintain a consistent presence in your subscriber's inbox with regular broadcasts and relevant updates.Whether a single email or a.",
        icon: <Volume size={24} />,
      },
      {
        title: "Optimally timed, perfectly",
        description:
          "Ensure precise timing and strategic placement of your automated touchpoints and broadcasts.Whether a single email or a series.",
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

       