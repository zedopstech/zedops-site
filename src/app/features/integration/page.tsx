import { INTEGRATION } from "@/Data/platform/integration";
import IntroSection from "@/Components/solutions/IntroSection";
import FeatureIntegration from "@/Components/solutions/FeatureIntegration";
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
export default function page() {
  return (
    <>
    <IntroSection {...INTEGRATION.heroprops} />
    <FeatureIntegration FeatureIntegration={INTEGRATION.featureIntegration} />
    <FeatureCards featuresData={INTEGRATION.featuresData} />
    <CtoSection {...INTEGRATION.ctaProps} />
    </>


  )
}
