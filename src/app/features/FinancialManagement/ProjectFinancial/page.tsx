import React from "react";
import Hero from "../../components/solutions/Hero";
import MainHero from "../../components/solutions/MainHero";
import FeaturesSection from "../../components/solutions/FeaturesSection";
import Testimonals from "../../components/solutions/Testimonals";
import MainSection from "../../components/solutions/MainSection";
import EmailFeautres from "../../components/solutions/EmailFeatures";
import FeatureCards from "../../components/solutions/FeatureCards";
import CtoSection from "../../components/solutions/CtoSection";
import { PROJECTFINANCIAL_PAGE} from "@/Data/data";

export default function PrequalificationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...PROJECTFINANCIAL_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...PROJECTFINANCIAL_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...PROJECTFINANCIAL_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...PROJECTFINANCIAL_PAGE.TestimonalsSectionProps} />
      <MainSection sections={PROJECTFINANCIAL_PAGE.mainSectionData} />
      <EmailFeautres
        title="Financial Features"
        features={PROJECTFINANCIAL_PAGE.featureData}
      />
      <FeatureCards
        featuresData={PROJECTFINANCIAL_PAGE.featuresData}
      />
      <CtoSection {...PROJECTFINANCIAL_PAGE.ctaProps} />
    </div>
  );
}
