import React from "react";
import Hero from "../../components/solutions/Hero";
import MainHero from "../../components/solutions/MainHero";
import FeaturesSection from "../../components/solutions/FeaturesSection";
import Testimonals from "../../components/solutions/Testimonals";
import MainSection from "../../components/solutions/MainSection";
import EmailFeautres from "../../components/solutions/EmailFeatures";
import FeatureCards from "../../components/solutions/FeatureCards";
import CtoSection from "../../components/solutions/CtoSection";
import { PREQUALIFICATION_PAGE } from "@/Data/data";

export default function PrequalificationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...PREQUALIFICATION_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...PREQUALIFICATION_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...PREQUALIFICATION_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...PREQUALIFICATION_PAGE.TestimonalsSectionProps} />
      <MainSection sections={PREQUALIFICATION_PAGE.mainSectionData} />
      <EmailFeautres
        title="Prequalification Features"
        features={PREQUALIFICATION_PAGE.featureData}
      />
      <FeatureCards
        sectionTitle="Resourecs"
        subtitle="Master Prequlaification Strategies"
        sectionDescription="Explore best practices and comprehensive guides for effectively qualifying contractors "
        features={PREQUALIFICATION_PAGE.features}
      />
      <CtoSection {...PREQUALIFICATION_PAGE.ctaProps} />
    </div>
  );
}
