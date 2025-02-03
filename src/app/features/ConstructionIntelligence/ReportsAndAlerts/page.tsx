import React from "react";
import Hero from "../../components/solutions/Hero";
import MainHero from "../../components/solutions/MainHero";
import FeaturesSection from "../../components/solutions/FeaturesSection";
import Testimonals from "../../components/solutions/Testimonals";
import MainSection from "../../components/solutions/MainSection";
import EmailFeautres from "../../components/solutions/EmailFeatures";
import FeatureCards from "../../components/solutions/FeatureCards";
import CtoSection from "../../components/solutions/CtoSection";
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
