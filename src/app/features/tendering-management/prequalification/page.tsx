import React from "react";
import Hero from "@/components/solutions/Hero";
import MainHero from "@/components/solutions/MainHero";
import FeaturesSection from "@/components/solutions/FeaturesSection";
import Testimonals from "@/components/solutions/Testimonals";
import MainSection from "@/components/solutions/Mainsection";
import EmailFeautres from "@/components/solutions/Emailfeatures";
import FeatureCards from "@/components/solutions/Featurecards";
import CtoSection from "@/components/solutions/Ctosection";
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
       featuresData={PREQUALIFICATION_PAGE.featuresData}
      />
      <CtoSection {...PREQUALIFICATION_PAGE.ctaProps} />
    </div>
  );
}
