'use client'
import React, { useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'

const RefundPolicyPage = () => {
  const { t } = useLanguage()

  useEffect(() => {
    // SEO purposes
    document.title = t('meta-refund.title')

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta-refund.description'))
    } else {
      const metaDescription = document.createElement('meta') as HTMLMetaElement
      metaDescription.name = 'description'
      metaDescription.content = t('meta-refund.description')
      document.head.appendChild(metaDescription)
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: t('header-refund.title'),
      url: 'https://borderlesscoding.net',
      hasPart: {
        '@type': 'WebPage',
        name: t('header-refund.title'),
        url: 'https://borderlesscoding.net/refund',
      },
      publisher: {
        name: 'Borderless Coding',
        email: 'contato@borderlesscoding.com',
      },
    }

    let jsonLdScript = document.querySelector(
      'script[type="application/ld+json"]',
    ) as HTMLScriptElement | null
    if (jsonLdScript) {
      jsonLdScript.textContent = JSON.stringify(structuredData)
    } else {
      jsonLdScript = document.createElement('script') as HTMLScriptElement
      jsonLdScript.type = 'application/ld+json'
      jsonLdScript.textContent = JSON.stringify(structuredData)
      document.head.appendChild(jsonLdScript)
    }
  }, [t])

  return (
    <div className="min-h-screen bg-borderless-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-borderless-background-secondary rounded-lg shadow-sm mb-8 p-8">
          <h1 className="text-3xl font-bold text-gray-200 mb-4">
            {t('header-refund.title')}
          </h1>
          <p className="text-gray-300">{t('header-refund.subtitle')}</p>
        </div>

        <div className="bg-borderless-background-secondary rounded-lg shadow-sm p-8">
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">
                {t('standard.title')}
              </h2>
              <div className="space-y-4">
                <div className="bg-borderless-background p-4">
                  <h3 className="font-semibold text-gray-200 mb-2">
                    {t('standard.coolingOff.title')}
                  </h3>
                  <p
                    className="text-gray-200"
                    dangerouslySetInnerHTML={{
                      __html: t('standard.coolingOff.content'),
                    }}
                  />
                </div>
                <div className="bg-borderless-background p-4">
                  <h3 className="font-semibold text-gray-200 mb-2">
                    {t('standard.after7Days.title')}
                  </h3>
                  <p className="text-gray-200">
                    {t('standard.after7Days.content')}
                  </p>
                </div>
                <div className="bg-borderless-background p-4">
                  <h3 className="font-semibold text-gray-200 mb-2">
                    {t('standard.paymentPlans.title')}
                  </h3>
                  <p className="text-gray-200">
                    {t('standard.paymentPlans.content')}
                  </p>
                </div>
                <div className="bg-borderless-background p-4">
                  <h3 className="font-semibold text-gray-200 mb-2">
                    {t('standard.chargebacks.title')}
                  </h3>
                  <p className="text-gray-200">
                    {t('standard.chargebacks.content')}
                  </p>
                </div>
                <div className="bg-borderless-background p-4">
                  <h3 className="font-semibold text-gray-200 mb-2">
                    {t('standard.digitalProducts.title')}
                  </h3>
                  <p className="text-gray-200">
                    {t('standard.digitalProducts.content')}
                  </p>
                </div>
                <div className="bg-borderless-background p-4">
                  <h3 className="font-semibold text-gray-200 mb-2">
                    {t('standard.thirdPartyCosts.title')}
                  </h3>
                  <p className="text-gray-200">
                    {t('standard.thirdPartyCosts.content')}
                  </p>
                </div>
                <div className="bg-borderless-background p-4">
                  <h3 className="font-semibold text-gray-200 mb-2">
                    {t('standard.refundRequest.title')}
                  </h3>
                  <p
                    className="text-gray-200"
                    dangerouslySetInnerHTML={{
                      __html: t('standard.refundRequest.content'),
                    }}
                  />
                </div>
                <div className="bg-borderless-background p-4">
                  <h3 className="font-semibold text-gray-200 mb-2">
                    {t('standard.refundMethod.title')}
                  </h3>
                  <p
                    className="text-gray-200"
                    dangerouslySetInnerHTML={{
                      __html: t('standard.refundMethod.content'),
                    }}
                  />
                </div>
                <div className="bg-borderless-background p-4">
                  <h3 className="font-semibold text-gray-200 mb-2">
                    {t('standard.abusePrevention.title')}
                  </h3>
                  <p className="text-gray-200">
                    {t('standard.abusePrevention.content')}
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">
                {t('summary.title')}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200">
                  <thead>
                    <tr className="bg-gray-500">
                      <th className="border border-gray-200 px-4 py-3 text-left font-medium text-white">
                        {t('summary.serviceProduct')}
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-center font-medium text-white">
                        {t('summary.refundWindow')}
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-center font-medium text-white">
                        {t('summary.conditions')}
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-center font-medium text-white">
                        {t('summary.afterAccess')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        {t('summary.mentorshipCohorts.service')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        {t('summary.mentorshipCohorts.refundWindow')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        {t('summary.mentorshipCohorts.conditions')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        {t('summary.mentorshipCohorts.afterAccess')}
                      </td>
                    </tr>
                    <tr className="bg-gray-500">
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        {t('summary.paymentPlans.service')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        {t('summary.paymentPlans.refundWindow')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        {t('summary.paymentPlans.conditions')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        {t('summary.paymentPlans.afterAccess')}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        {t('summary.thirdPartyCosts.service')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        {t('summary.thirdPartyCosts.refundWindow')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        {t('summary.thirdPartyCosts.conditions')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        {t('summary.thirdPartyCosts.afterAccess')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                {t('contact.title')}
              </h2>
              <div className="bg-borderless-background rounded-lg p-6">
                <p className="text-gray-200 mb-4">{t('contact.content1')}</p>
                <ul className="text-gray-200 space-y-2 mb-4 ml-4">
                  <li>{t('contact.orderId')}</li>
                  <li>{t('contact.reason')}</li>
                  <li>{t('contact.purchaseDate')}</li>
                  <li>{t('contact.emailAddress')}</li>
                </ul>
                <p className="text-gray-200">
                  <strong>{t('contact.emailLabel')}</strong>{' '}
                  <a
                    href={`mailto:contato@borderlesscoding.com`}
                    className="underline"
                  >
                    contato@borderlesscoding.com
                  </a>
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  {t('contact.responseTime')}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicyPage
