import React from "react";
import Hero from "../../components/solutions/Hero";
import MainHero from "../../components/solutions/MainHero";
import FeaturesSection from "../../components/solutions/FeaturesSection";
import Testimonals from "../../components/solutions/Testimonals";
import MainSection from "../../components/solutions/MainSection";
import EmailFeautres from "../../components/solutions/EmailFeatures";
import FeatureCards from "../../components/solutions/FeatureCards";
import CtoSection from "../../components/solutions/CtoSection";
import { QUALITYANDSAFETY_PAGE } from "@/Data/data";

export default function PrequalificationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...QUALITYANDSAFETY_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...QUALITYANDSAFETY_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...QUALITYANDSAFETY_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...QUALITYANDSAFETY_PAGE.TestimonalsSectionProps} />
      <MainSection sections={QUALITYANDSAFETY_PAGE.mainSectionData} />
      <EmailFeautres
        title="Quality Features"
        features={QUALITYANDSAFETY_PAGE.featureData}
      />
      <FeatureCards
        sectionTitle="Resourecs"
        subtitle="Master Quality Strategies"
        sectionDescription="Explore best practices and comprehensive guides for effectively qualifying contractors "
        features={QUALITYANDSAFETY_PAGE.features}
      />
      <CtoSection {...QUALITYANDSAFETY_PAGE.ctaProps} />
    </div>
  );
}
