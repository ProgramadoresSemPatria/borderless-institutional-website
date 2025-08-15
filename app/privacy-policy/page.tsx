'use client'
import React, { useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage' // Adjust path to your hook

const PrivacyPolicyPage = () => {
  const { t } = useLanguage()

  useEffect(() => {
    // SEO purposes
    document.title = t('meta-privacy-policy.title')

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        t('meta-privacy-policy.description'),
      )
    } else {
      const metaDescription = document.createElement('meta') as HTMLMetaElement
      metaDescription.name = 'description'
      metaDescription.content = t('meta-privacy-policy.description')
      document.head.appendChild(metaDescription)
    }
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Borderless Coding',
      url: 'https://borderlesscoding.net',
      hasPart: {
        '@type': 'WebPage',
        name: t('header-privacy-policy.title'),
        url: 'https://borderlesscoding.net/privacy-policy',
      },
      publisher: {
        '@type': 'Organization',
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
          <h1 className="text-3xl font-bold text-white mb-4">
            {t('header-privacy-policy.title')}
          </h1>
          <p className="text-gray-200">{t('header-privacy-policy.subtitle')}</p>
        </div>

        <div className="bg-borderless-background-secondary rounded-lg shadow-sm p-8">
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('introduction.title')}
              </h2>
              <p
                className="text-gray-300 leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: t('introduction.content') }}
              />
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('dataCollection.title')}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {t('dataCollection.account.title')}
                  </h3>
                  <p className="text-gray-300">
                    {t('dataCollection.account.content')}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {t('dataCollection.billing.title')}
                  </h3>
                  <p className="text-gray-300">
                    {t('dataCollection.billing.content')}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {t('dataCollection.usage.title')}
                  </h3>
                  <p className="text-gray-300">
                    {t('dataCollection.usage.content')}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {t('dataCollection.content.title')}
                  </h3>
                  <p className="text-gray-300">
                    {t('dataCollection.content.content')}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {t('dataCollection.program.title')}
                  </h3>
                  <p className="text-gray-300">
                    {t('dataCollection.program.content')}
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('useData.title')}
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t('useData.serviceDelivery'),
                    }}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t('useData.platformImprovement'),
                    }}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t('useData.communications'),
                    }}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t('useData.legalCompliance'),
                    }}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t('useData.personalization'),
                    }}
                  />
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('dataSharing.title')}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('dataSharing.content1')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('dataSharing.content2')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('cookies.title')}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('cookies.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('internationalTransfers.title')}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t('internationalTransfers.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('dataRetention.title')}
              </h2>
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="space-y-2">
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t('dataRetention.account'),
                    }}
                  />
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t('dataRetention.program'),
                    }}
                  />
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t('dataRetention.marketing'),
                    }}
                  />
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('yourRights.title')}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('yourRights.content1')}
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <p
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: t('yourRights.content2') }}
                />
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('childrenPrivacy.title')}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t('childrenPrivacy.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('dataSecurity.title')}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t('dataSecurity.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('policyUpdates.title')}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t('policyUpdates.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('contact.title')}
              </h2>
              <div className="bg-gray-900 rounded-lg p-6">
                <p className="text-gray-300 mb-2">{t('contact.content1')}</p>
                <p className="text-white font-medium">
                  {t('contact.emailLabel')}{' '}
                  <a
                    href={`mailto:${t('contact.email')}`}
                    className="text-gray-300 underline"
                  >
                    contato@borderlesscoding.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
