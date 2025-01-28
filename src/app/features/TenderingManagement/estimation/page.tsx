import React from "react";
import Hero from "../../components/solutions/Hero";
import MainHero from "../../components/solutions/MainHero";
import FeaturesSection from "../../components/solutions/FeaturesSection";
import Testimonals from "../../components/solutions/Testimonals";
import MainSection from "../../components/solutions/MainSection";
import EmailFeautres from "../../components/solutions/EmailFeatures";
import FeatureCards from "../../components/solutions/FeatureCards";
import CtoSection from "../../components/solutions/CtoSection";
import { ESTIMATION_PAGE } from "@/Data/data";

export default function EstimationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...ESTIMATION_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...ESTIMATION_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...ESTIMATION_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...ESTIMATION_PAGE.TestimonalsSectionProps} />
      
      <MainSection sections={ESTIMATION_PAGE.mainSectionData} />
      <EmailFeautres title="EmailFeatures" features={ESTIMATION_PAGE.featureData} />
      <FeatureCards
      sectionTitle= "Resourecs"
      subtitle= "Master email marketing"
      sectionDescription="Explore best practices, expert tips, and guides for an effective email marketing strategy." features={ESTIMATION_PAGE.features} />
      <CtoSection {...ESTIMATION_PAGE.ctaProps} />
    </div>
  );
}
