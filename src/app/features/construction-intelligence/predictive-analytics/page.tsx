import React from "react";
import Hero from "@/components/solutions/Hero";
import MainHero from "@/components/solutions/MainHero";
import FeaturesSection from "@/components/solutions/FeaturesSection";
import Testimonals from "@/components/solutions/Testimonals";
import MainSection from "@/components/solutions/Mainsection";
import EmailFeautres from "@/components/solutions/Emailfeatures";
import FeatureCards from "@/components/solutions/Featurecards";
import CtoSection from "@/components/solutions/Ctosection";
import { PREDICTIVEANLYTICS_PAGE} from "@/Data/data";

export default function PredictiveanalyticsPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...PREDICTIVEANLYTICS_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...PREDICTIVEANLYTICS_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...PREDICTIVEANLYTICS_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...PREDICTIVEANLYTICS_PAGE.TestimonalsSectionProps} />
      <MainSection sections={PREDICTIVEANLYTICS_PAGE.mainSectionData} />
      <EmailFeautres
        title="Predictive Features"
        features={PREDICTIVEANLYTICS_PAGE.featureData}
      />
      <FeatureCards
        
        featuresData={PREDICTIVEANLYTICS_PAGE.featuresData}
      />
      <CtoSection {...PREDICTIVEANLYTICS_PAGE.ctaProps} />
    </div>
  );
}
