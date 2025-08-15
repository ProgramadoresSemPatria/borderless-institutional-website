import { contactTranslations } from './contact-page'
import { expansionTranslations } from './expansion-page'
import { homeTranslations } from './home-page'
import { howItWorksTranslations } from './how-it-works-page'
import { privacyPolicyTranslations } from './privacy-policy'
import { refundPolicyTranslations } from './refund-page'

export const translations = {
  pt: {
    ...homeTranslations.pt,
    ...howItWorksTranslations.pt,
    ...expansionTranslations.pt,
    ...privacyPolicyTranslations.pt,
    ...refundPolicyTranslations.pt,
    ...contactTranslations.pt,
  },
  en: {
    ...homeTranslations.en,
    ...howItWorksTranslations.en,
    ...expansionTranslations.en,
    ...privacyPolicyTranslations.en,
    ...refundPolicyTranslations.en,
    ...contactTranslations.en,
  },
}
