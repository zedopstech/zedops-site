import React from "react";
import Hero from "@/Components/solutions/Hero";
import MainHero from "@/Components/solutions/MainHero";
import FeaturesSection from "@/Components/solutions/FeaturesSection";
import Testimonals from "@/Components/solutions/Testimonals";
import MainSection from "@/Components/solutions/Mainsection";
import EmailFeautres from "@/Components/solutions/Emailfeatures";
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
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
