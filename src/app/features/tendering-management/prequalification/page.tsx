import React from "react";
import Hero from "@/Components/solutions/Hero";
import MainHero from "@/Components/solutions/MainHero";
import FeaturesSection from "@/Components/solutions/FeaturesSection";
import Testimonals from "@/Components/solutions/Testimonals";
import MainSection from "@/Components/solutions/Mainsection";
import EmailFeautres from "@/Components/solutions/Emailfeatures";
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
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
