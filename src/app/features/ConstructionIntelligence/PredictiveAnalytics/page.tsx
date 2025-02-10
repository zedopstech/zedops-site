import React from "react";
import Hero from "@/Components/solutions/Hero";
import MainHero from "@/Components/solutions/MainHero";
import FeaturesSection from "@/Components/solutions/FeaturesSection";
import Testimonals from "@/Components/solutions/Testimonals";
import MainSection from "@/Components/solutions/Mainsection";
import EmailFeautres from "@/Components/solutions/Emailfeatures";
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
import { PREDICTIVEANLYTICS_PAGE} from "@/Data/data";

export default function PrequalificationPage() {
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
