import React from "react";
import Hero from "@/Components/solutions/Hero";
import MainHero from "@/Components/solutions/MainHero";
import FeaturesSection from "@/Components/solutions/FeaturesSection";
import Testimonals from "@/Components/solutions/Testimonals";
import MainSection from "@/Components/solutions/Mainsection";
import EmailFeautres from "@/Components/solutions/Emailfeatures";
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
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
       
        featuresData={PROCUREMENT_PAGE.featuresData}
      />
      <CtoSection {...PROCUREMENT_PAGE.ctaProps} />
    </div>
  );
}
