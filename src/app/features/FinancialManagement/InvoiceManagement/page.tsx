import React from "react";
import Hero from "../../components/solutions/Hero";
import MainHero from "../../components/solutions/MainHero";
import FeaturesSection from "../../components/solutions/FeaturesSection";
import Testimonals from "../../components/solutions/Testimonals";
import MainSection from "../../components/solutions/MainSection";
import EmailFeautres from "../../components/solutions/EmailFeatures";
import FeatureCards from "../../components/solutions/FeatureCards";
import CtoSection from "../../components/solutions/CtoSection";
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
        sectionTitle="Resourecs"
        subtitle="Master Invoice Strategies"
        sectionDescription="Explore best practices and comprehensive guides for effectively qualifying contractors "
        features={INVOICEMANAGEMENT_PAGE.features}
      />
      <CtoSection {...INVOICEMANAGEMENT_PAGE.ctaProps} />
    </div>
  );
}
