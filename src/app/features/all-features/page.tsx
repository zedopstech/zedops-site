import { ALL_FEATURES } from '@/Data/data'
import React from 'react'
import IntroSection from '@/Components/solutions/IntroSection'
import EmailFeatures from '@/Components/solutions/Emailfeatures'
import CtoSection from '@/Components/solutions/Ctosection'

export default function page() {
  return (
    <div>
       <IntroSection {...ALL_FEATURES.heroprops} />
       <EmailFeatures title="All Features" features={ALL_FEATURES.features} />
       <EmailFeatures title="All Features" features={ALL_FEATURES.features} />
       <EmailFeatures title="All Features" features={ALL_FEATURES.features} />
       <CtoSection {...ALL_FEATURES.ctaProps} />
    </div>
  )
}
