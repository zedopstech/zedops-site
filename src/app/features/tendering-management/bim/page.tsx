import React from "react";
import Hero from "@/Components/solutions/Hero";
import MainHero from "@/Components/solutions/MainHero";
import FeaturesSection from "@/Components/solutions/FeaturesSection";
import Testimonals from "@/Components/solutions/Testimonals";
import MainSection from "@/Components/solutions/Mainsection";
import EmailFeautres from "@/Components/solutions/Emailfeatures";
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
import { BIM_PAGE } from "@/Data/features/bim";

export default function BimPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...BIM_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...BIM_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...BIM_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...BIM_PAGE.TestimonalsSectionProps} />
      <MainSection sections={BIM_PAGE.mainSectionData} />
      <EmailFeautres
        title="BIM Features"
        features={BIM_PAGE.featureData}
      />
      <FeatureCards
        featuresData={BIM_PAGE.featuresData}
      />
      <CtoSection {...BIM_PAGE.ctaProps} />
    </div>
  );
}
