import React from "react";
import Hero from "@/Components/solutions/Hero";
import MainHero from "@/Components/solutions/MainHero";
import FeaturesSection from "@/Components/solutions/FeaturesSection";
import Testimonals from "@/Components/solutions/Testimonals";
import MainSection from "@/Components/solutions/Mainsection";
import EmailFeautres from "@/Components/solutions/Emailfeatures";
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
import {  REPORTSANDALERTS_PAGE } from "@/Data/data";

export default function PrequalificationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...REPORTSANDALERTS_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...REPORTSANDALERTS_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...REPORTSANDALERTS_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...REPORTSANDALERTS_PAGE.TestimonalsSectionProps} />
      <MainSection sections={REPORTSANDALERTS_PAGE.mainSectionData} />
      <EmailFeautres
        title="Reports Features"
        features={REPORTSANDALERTS_PAGE.featureData}
      />
      <FeatureCards
       featuresData={REPORTSANDALERTS_PAGE.featuresData}
      />
      <CtoSection {...REPORTSANDALERTS_PAGE.ctaProps} />
    </div>
  );
}
