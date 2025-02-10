import { INTEGRATION } from "@/Data/data";
import IntroSection from "../components/solutions/IntroSection";
import FeatureIntegration from "../components/solutions/FeatureIntegration";
import FeatureCards from "../components/solutions/Featurecards";
import CtaSection from "../components/solutions/Ctosection";
export default function page() {
  return (
    <>
    <IntroSection {...INTEGRATION.heroprops} />
    <FeatureIntegration FeatureIntegration={INTEGRATION.featureIntegration} />
    <FeatureCards featuresData={INTEGRATION.featuresData} />
    <CtaSection {...INTEGRATION.ctaProps} />
    </>


  )
}
