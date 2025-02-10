import React from "react";
import Hero from "@/Components/solutions/Hero";
import Testimonals from "@/Components/solutions/Testimonals";
import CtoSection from "@/Components/solutions/Ctosection";
import FeatureSticky from "@/Components/solutions/FeatureSticky";
import { SECURITY_PAGE } from "@/Data/data";
import Faq from "@/Components/solutions/Faq";

export default function SECURITYPage() {
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
