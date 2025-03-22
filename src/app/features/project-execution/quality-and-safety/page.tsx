import React from "react";
import Hero from "@/Components/solutions/Hero";
import MainHero from "@/Components/solutions/MainHero";
import FeaturesSection from "@/Components/solutions/FeaturesSection";
import Testimonals from "@/Components/solutions/Testimonals";
import MainSection from "@/Components/solutions/Mainsection";
import EmailFeautres from "@/Components/solutions/Emailfeatures";
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
import { QUALITYANDSAFETY_PAGE } from "@/Data/data";

export default function PrequalificationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...QUALITYANDSAFETY_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...QUALITYANDSAFETY_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...QUALITYANDSAFETY_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...QUALITYANDSAFETY_PAGE.TestimonalsSectionProps} />
      <MainSection sections={QUALITYANDSAFETY_PAGE.mainSectionData} />
      <EmailFeautres
        title="Quality Features"
        features={QUALITYANDSAFETY_PAGE.featureData}
      />
      <FeatureCards
        featuresData={QUALITYANDSAFETY_PAGE.featuresData}
      />
      <CtoSection {...QUALITYANDSAFETY_PAGE.ctaProps} />
    </div>
  );
}
