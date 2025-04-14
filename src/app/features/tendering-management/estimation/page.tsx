import React from "react";
import Hero from "@/Components/solutions/Hero";
import MainHero from "@/Components/solutions/MainHero";
import FeaturesSection from "@/Components/solutions/FeaturesSection";
import Testimonals from "@/Components/solutions/Testimonals";
import MainSection from "@/Components/solutions/Mainsection";
import EmailFeautres from "@/Components/solutions/Emailfeatures";
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
import { ESTIMATION_PAGE } from "@/Data/features/estimation";

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
      <EmailFeautres
        title="Estimation Features"
        features={ESTIMATION_PAGE.featureData}
      />
      <FeatureCards
       featuresData={ESTIMATION_PAGE.featuresData}
      />
      <CtoSection {...ESTIMATION_PAGE.ctaProps} />
    </div>
  );
}
