import React from "react";
import Hero from "../../components/solutions/Hero";
import MainHero from "../../components/solutions/MainHero";
import FeaturesSection from "../../components/solutions/FeaturesSection";
import Testimonals from "../../components/solutions/Testimonals";
import MainSection from "../../components/solutions/MainSection";
import EmailFeautres from "../../components/solutions/EmailFeatures";
import FeatureCards from "../../components/solutions/FeatureCards";
import CtoSection from "../../components/solutions/CtoSection";
import {  REALTIMEDASHBOARD_PAGE } from "@/Data/data";

export default function PrequalificationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...REALTIMEDASHBOARD_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...REALTIMEDASHBOARD_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...REALTIMEDASHBOARD_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...REALTIMEDASHBOARD_PAGE.TestimonalsSectionProps} />
      <MainSection sections={REALTIMEDASHBOARD_PAGE.mainSectionData} />
      <EmailFeautres
        title="RealTime Features"
        features={REALTIMEDASHBOARD_PAGE.featureData}
      />
      <FeatureCards
       
        featuresData={REALTIMEDASHBOARD_PAGE.featuresData}
      />
      <CtoSection {...REALTIMEDASHBOARD_PAGE.ctaProps} />
    </div>
  );
}
