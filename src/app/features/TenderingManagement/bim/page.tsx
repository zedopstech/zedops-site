import React from "react";
import Hero from "../../components/solutions/Hero";
import MainHero from "../../components/solutions/MainHero";
import FeaturesSection from "../../components/solutions/FeaturesSection";
import Testimonals from "../../components/solutions/Testimonals";
import MainSection from "../../components/solutions/MainSection";
import EmailFeautres from "../../components/solutions/EmailFeatures";
import FeatureCards from "../../components/solutions/FeatureCards";
import CtoSection from "../../components/solutions/CtoSection";
import { BIM_PAGE } from "@/Data/data";

export default function BimPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...BIM_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...BIM_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...BIM_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...BIM_PAGE.TestimonalsSectionProps} />
      <MainSection sections={BIM_PAGE.mainSectionData} />
      <EmailFeautres
        title="BIM Features"
        features={BIM_PAGE.featureData}
      />
      <FeatureCards
        sectionTitle="Resourecs"
        subtitle="Master BIM Strategies"
        sectionDescription="Explore best practices and comprehensive guides for effectively qualifying contractors "
        features={BIM_PAGE.features}
      />
      <CtoSection {...BIM_PAGE.ctaProps} />
    </div>
  );
}
