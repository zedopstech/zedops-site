import React from "react";
import Hero from "../../components/solutions/Hero";
import MainHero from "../../components/solutions/MainHero";
import FeaturesSection from "../../components/solutions/FeaturesSection";
import Testimonals from "../../components/solutions/Testimonals";
import MainSection from "../../components/solutions/Mainsection";
import EmailFeautres from "../../components/solutions/Emailfeatures";
import FeatureCards from "../../components/solutions/Featurecards";
import CtoSection from "../../components/solutions/Ctosection";
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
