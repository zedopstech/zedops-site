import React from "react";
import Hero from "@/components/solutions/Hero";
import Testimonals from "@/components/solutions/Testimonals";
import CtoSection from "@/components/solutions/Ctosection";
import FeatureSticky from "@/components/solutions/FeatureSticky";
import { SECURITY_PAGE } from "@/Data/data";
import Faq from "@/components/solutions/Faq";

export default function SecurityPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...SECURITY_PAGE.heroProps} />
      <Testimonals {...SECURITY_PAGE.TestimonalsSectionProps} />
      <FeatureSticky {...SECURITY_PAGE.stickySection} />
      <Faq {...SECURITY_PAGE.faqSection} />
      <CtoSection {...SECURITY_PAGE.ctaProps} />
    </div>
  );
}
