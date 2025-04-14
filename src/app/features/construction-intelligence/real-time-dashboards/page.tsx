import React from "react";
import Hero from "@/Components/solutions/Hero";
import MainHero from "@/Components/solutions/MainHero";
import FeaturesSection from "@/Components/solutions/FeaturesSection";
import Testimonals from "@/Components/solutions/Testimonals";
import MainSection from "@/Components/solutions/Mainsection";
import EmailFeautres from "@/Components/solutions/Emailfeatures";
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
import {  REALTIMEDASHBOARD_PAGE } from "@/Data/features/real-time-dashboard";

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
