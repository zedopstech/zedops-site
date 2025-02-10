import React from "react";
import Hero from "../../components/solutions/Hero";
import MainHero from "../../components/solutions/MainHero";
import FeaturesSection from "../../components/solutions/FeaturesSection";
import Testimonals from "../../components/solutions/Testimonals";
import MainSection from "../../components/solutions/Mainsection";
import EmailFeautres from "../../components/solutions/Emailfeatures";
import FeatureCards from "../../components/solutions/Featurecards";
import CtoSection from "../../components/solutions/Ctosection";
import { INVOICEMANAGEMENT_PAGE } from "@/Data/data";

export default function PrequalificationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <Hero {...INVOICEMANAGEMENT_PAGE.heroProps} />
      {/* Hero Content Section */}
      <MainHero {...INVOICEMANAGEMENT_PAGE.heroSectionProps} />
      {/* Features Section */}
      <FeaturesSection {...INVOICEMANAGEMENT_PAGE.featuresSectionProps} />
      {/* Control Section */}
      <Testimonals {...INVOICEMANAGEMENT_PAGE.TestimonalsSectionProps} />
      <MainSection sections={INVOICEMANAGEMENT_PAGE.mainSectionData} />
      <EmailFeautres
        title="Invoice Features"
        features={INVOICEMANAGEMENT_PAGE.featureData}
      />
      <FeatureCards
       
        featuresData={INVOICEMANAGEMENT_PAGE.featuresData}
      />
      <CtoSection {...INVOICEMANAGEMENT_PAGE.ctaProps} />
    </div>
  );
}
