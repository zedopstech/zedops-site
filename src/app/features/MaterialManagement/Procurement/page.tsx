import React from "react";
import Hero from "../../components/solutions/Hero";
import MainHero from "../../components/solutions/MainHero";
import FeaturesSection from "../../components/solutions/FeaturesSection";
import Testimonals from "../../components/solutions/Testimonals";
import MainSection from "../../components/solutions/MainSection";
import EmailFeautres from "../../components/solutions/EmailFeatures";
import FeatureCards from "../../components/solutions/FeatureCards";
import CtoSection from "../../components/solutions/CtoSection";
import { PROCUREMENT_PAGE } from "@/Data/data";

export default function PrequalificationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...PROCUREMENT_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...PROCUREMENT_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...PROCUREMENT_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...PROCUREMENT_PAGE.TestimonalsSectionProps} />
      <MainSection sections={PROCUREMENT_PAGE.mainSectionData} />
      <EmailFeautres
        title="Procurement Features"
        features={PROCUREMENT_PAGE.featureData}
      />
      <FeatureCards
        sectionTitle="Resourecs"
        subtitle="Master Procurement Strategies"
        sectionDescription="Explore best practices and comprehensive guides for effectively qualifying contractors "
        features={PROCUREMENT_PAGE.features}
      />
      <CtoSection {...PROCUREMENT_PAGE.ctaProps} />
    </div>
  );
}
