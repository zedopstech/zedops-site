import React from "react";
import Hero from "@/Components/solutions/Hero";
import MainHero from "@/Components/solutions/MainHero";
import FeaturesSection from "@/Components/solutions/FeaturesSection";
import Testimonals from "@/Components/solutions/Testimonals";
import MainSection from "@/Components/solutions/Mainsection";
import EmailFeautres from "@/Components/solutions/Emailfeatures";
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
import { PROJECTMANAGEMENT_PAGE} from "@/Data/data";

export default function PrequalificationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...PROJECTMANAGEMENT_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...PROJECTMANAGEMENT_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...PROJECTMANAGEMENT_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...PROJECTMANAGEMENT_PAGE.TestimonalsSectionProps} />
      <MainSection sections={PROJECTMANAGEMENT_PAGE.mainSectionData} />
      <EmailFeautres
        title="Project Features"
        features={PROJECTMANAGEMENT_PAGE.featureData}
      />
      <FeatureCards
       featuresData={PROJECTMANAGEMENT_PAGE.featuresData}
      />
      <CtoSection {...PROJECTMANAGEMENT_PAGE.ctaProps} />
    </div>
  );
}
