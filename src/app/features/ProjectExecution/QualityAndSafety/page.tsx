import React from "react";
import Hero from "../../components/solutions/Hero";
import MainHero from "../../components/solutions/MainHero";
import FeaturesSection from "../../components/solutions/FeaturesSection";
import Testimonals from "../../components/solutions/Testimonals";
import MainSection from "../../components/solutions/Mainsection";
import EmailFeautres from "../../components/solutions/Emailfeatures";
import FeatureCards from "../../components/solutions/Featurecards";
import CtoSection from "../../components/solutions/Ctosection";
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
