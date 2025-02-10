import React from "react";
import Hero from "../../components/solutions/Hero";
import MainHero from "../../components/solutions/MainHero";
import FeaturesSection from "../../components/solutions/FeaturesSection";
import Testimonals from "../../components/solutions/Testimonals";
import MainSection from "../../components/solutions/Mainsection";
import EmailFeautres from "../../components/solutions/Emailfeatures";
import FeatureCards from "../../components/solutions/Featurecards";
import CtoSection from "../../components/solutions/Ctosection";
import { INVENTORY_PAGE } from "@/Data/data";

export default function PrequalificationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...INVENTORY_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...INVENTORY_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...INVENTORY_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...INVENTORY_PAGE.TestimonalsSectionProps} />
      <MainSection sections={INVENTORY_PAGE.mainSectionData} />
      <EmailFeautres
        title="Inventory Features"
        features={INVENTORY_PAGE.featureData}
      />
      <FeatureCards
       
        featuresData={INVENTORY_PAGE.featuresData}
      />
      <CtoSection {...INVENTORY_PAGE.ctaProps} />
    </div>
  );
}
