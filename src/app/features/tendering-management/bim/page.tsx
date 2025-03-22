import React from "react";
import Hero from "@/components/solutions/Hero";
import MainHero from "@/components/solutions/MainHero";
import FeaturesSection from "@/components/solutions/FeaturesSection";
import Testimonals from "@/components/solutions/Testimonals";
import MainSection from "@/components/solutions/Mainsection";
import EmailFeautres from "@/components/solutions/Emailfeatures";
import FeatureCards from "@/components/solutions/Featurecards";
import CtoSection from "@/components/solutions/Ctosection";
import { BIM_PAGE } from "@/Data/data";

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
