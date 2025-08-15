'use client'
import React, { useEffect, useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const HowItWorksPage = () => {
  const { t } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    // SEO purposes
    document.title = t('meta-how-it-works.title')

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        t('meta-how-it-works.description'),
      )
    } else {
      const metaDescription = document.createElement('meta') as HTMLMetaElement
      metaDescription.name = 'description'
      metaDescription.content = t('meta-how-it-works.description')
      document.head.appendChild(metaDescription)
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      hasPart: {
        name: t('header-how-it-works.title'),
        url: 'https://borderlesscoding.net/how-it-works',
      },
      publisher: {
        name: 'Borderless Coding',
        email: 'contato@borderlesscoding.com',
      },
    }

    let jsonLdScript = document.querySelector(
      'script[type="application/ld+json"]',
    )
    if (jsonLdScript) {
      jsonLdScript.textContent = JSON.stringify(structuredData)
    } else {
      jsonLdScript = document.createElement('script') as HTMLScriptElement
      if (jsonLdScript instanceof HTMLScriptElement) {
        jsonLdScript.type = 'application/ld+json'
      }
      jsonLdScript.textContent = JSON.stringify(structuredData)
      document.head.appendChild(jsonLdScript)
    }
  }, [t])

  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-borderless-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-borderless-background-secondary rounded-lg shadow-sm mb-8 p-8">
          <h1 className="text-3xl font-bold text-gray-200 mb-4">
            {t('header-how-it-works.title')}
          </h1>
          <p className="text-gray-300">{t('header-how-it-works.subtitle')}</p>
        </div>

        <div className="bg-borderless-background-secondary rounded-lg shadow-sm p-8">
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                {t('overview.title')}
              </h2>
              <p
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('overview.content') }}
              />
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">
                {t('stepByStep.title')}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">
                    {t('step1.title')}
                  </h3>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li
                      dangerouslySetInnerHTML={{ __html: t('step1.item1') }}
                    />
                    <li
                      dangerouslySetInnerHTML={{ __html: t('step1.item2') }}
                    />
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">
                    {t('step2.title')}
                  </h3>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li
                      dangerouslySetInnerHTML={{ __html: t('step2.item1') }}
                    />
                    <li
                      dangerouslySetInnerHTML={{ __html: t('step2.item2') }}
                    />
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">
                    {t('step3.title')}
                  </h3>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>{t('step3.item1')}</li>
                    <li
                      dangerouslySetInnerHTML={{ __html: t('step3.item2') }}
                    />
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">
                    {t('step4.title')}
                  </h3>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li
                      dangerouslySetInnerHTML={{ __html: t('step4.item1') }}
                    />
                    <li
                      dangerouslySetInnerHTML={{ __html: t('step4.item2') }}
                    />
                    <li>{t('step4.item3')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">
                    {t('step5.title')}
                  </h3>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li
                      dangerouslySetInnerHTML={{ __html: t('step5.item1') }}
                    />
                    <li
                      dangerouslySetInnerHTML={{ __html: t('step5.item2') }}
                    />
                    <li>{t('step5.item3')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">
                    {t('step6.title')}
                  </h3>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li
                      dangerouslySetInnerHTML={{ __html: t('step6.item1') }}
                    />
                    <li>{t('step6.item2')}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">
                {t('planComparison.title')}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200">
                  <thead>
                    <tr className="bg-gray-500">
                      <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-200">
                        {t('planComparison.feature')}
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-center font-medium text-gray-200">
                        {t('planComparison.base')}
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-center font-medium text-gray-200">
                        {t('planComparison.psp')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        {t('planComparison.platformAccess')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        ✓
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        ✓
                      </td>
                    </tr>
                    <tr className="bg-gray-500">
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        {t('planComparison.modulesContent')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        ✓
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        ✓
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        {t('planComparison.mentorshipLiveCalls')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        {t('planComparison.baseMentorshipLiveCalls')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        {t('planComparison.pspMentorshipLiveCalls')}
                      </td>
                    </tr>
                    <tr className="bg-gray-500">
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        {t('planComparison.mentorshipOneOnOne')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        {t('planComparison.baseMentorshipOneOnOne')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        {t('planComparison.pspMentorshipOneOnOne')}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        {t('planComparison.communityForum')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        ✓
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        ✓
                      </td>
                    </tr>
                    <tr className="bg-gray-500">
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        {t('planComparison.liveCallReplays')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        ✓
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        ✓
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        {t('planComparison.videoLessons')}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        ✓
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        ✓
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">
                {t('faq.title')}
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg"
                  >
                    <button
                      className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-borderless-background rounded-lg transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-medium text-gray-200">
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <Minus className="w-4 h-4 text-gray-300" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-300" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-3 border-t border-gray-200">
                        <p
                          className="text-gray-300 pt-3"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                {t('contact-how-it-works.title')}
              </h2>
              <div className="bg-borderless-background rounded-lg p-4">
                <p className="text-gray-200">
                  <strong>{t('contact-how-it-works.emailLabel')}</strong>{' '}
                  <a
                    href={`mailto:${t('contact.email')}`}
                    className="text-gray-300 underline"
                  >
                    {t('contact-how-it-works.email')}
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

export default HowItWorksPage
