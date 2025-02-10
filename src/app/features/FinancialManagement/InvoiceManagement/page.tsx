import React from "react";
import Hero from "@/Components/solutions/Hero";
import MainHero from "@/Components/solutions/MainHero";
import FeaturesSection from "@/Components/solutions/FeaturesSection";
import Testimonals from "@/Components/solutions/Testimonals";
import MainSection from "@/Components/solutions/Mainsection";
import EmailFeautres from "@/Components/solutions/Emailfeatures";
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
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
