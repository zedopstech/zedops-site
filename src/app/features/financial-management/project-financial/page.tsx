import React from "react";
import Hero from "@/Components/solutions/Hero";
import MainHero from "@/Components/solutions/MainHero";
import FeaturesSection from "@/Components/solutions/FeaturesSection";
import Testimonals from "@/Components/solutions/Testimonals";
import MainSection from "@/Components/solutions/Mainsection";
import EmailFeautres from "@/Components/solutions/Emailfeatures"; 
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
import { PROJECTFINANCIAL_PAGE } from "@/Data/features/project-financial";

export default function PrequalificationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...PROJECTFINANCIAL_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...PROJECTFINANCIAL_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...PROJECTFINANCIAL_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...PROJECTFINANCIAL_PAGE.TestimonalsSectionProps} />
      <MainSection sections={PROJECTFINANCIAL_PAGE.mainSectionData} />
      <EmailFeautres
        title="Financial Features"
        features={PROJECTFINANCIAL_PAGE.featureData}
      />
      <FeatureCards
        featuresData={PROJECTFINANCIAL_PAGE.featuresData}
      />
      <CtoSection {...PROJECTFINANCIAL_PAGE.ctaProps} />
    </div>
  );
}
