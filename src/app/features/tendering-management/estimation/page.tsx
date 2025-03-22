import React from "react";
import Hero from "@/components/solutions/Hero";
import MainHero from "@/components/solutions/MainHero";
import FeaturesSection from "@/components/solutions/FeaturesSection";
import Testimonals from "@/components/solutions/Testimonals";
import MainSection from "@/components/solutions/Mainsection";
import EmailFeautres from "@/components/solutions/Emailfeatures";
import FeatureCards from "@/components/solutions/Featurecards";
import CtoSection from "@/components/solutions/Ctosection";
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
