'use client'
import React, { useEffect } from 'react'
import { Mail, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { useContactForm } from '../hooks/useContactForm'

const ContactPage: React.FC = () => {
  const { t } = useLanguage()
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    topicOptions,
    handleInputChange,
    handleSubmit,
  } = useContactForm()

  useEffect(() => {
    // SEO purposes
    document.title = t('meta-contact.title')

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta-contact.description'))
    } else {
      const metaDescription = document.createElement('meta') as HTMLMetaElement
      metaDescription.name = 'description'
      metaDescription.content = t('meta-contact.description')
      document.head.appendChild(metaDescription)
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: t('meta-contact.title'),
      description: t('meta-contact.description'),
      hasPart: {
        name: t('meta-contact.title'),
        url: 'https://borderlesscoding.net/contact',
      },
      publisher: {
        '@type': 'Organization',
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
      ;(jsonLdScript as HTMLScriptElement).type = 'application/ld+json'
      jsonLdScript.textContent = JSON.stringify(structuredData)
      document.head.appendChild(jsonLdScript)
    }
  }, [t])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [isSubmitted])

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-borderless-background flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-borderless-background-secondary rounded-lg shadow-sm p-8 text-center">
            <p className="text-gray-200 text-lg">
              {t('form.submit.error.message')}{' '}
              <a
                href={`mailto:contato@borderlesscoding.com`}
                className="text-gray-300 underline"
              >
                contato@borderlesscoding.com
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-borderless-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-borderless-background-secondary rounded-lg shadow-sm mb-8 p-8">
          <h1 className="text-3xl font-bold text-gray-200 mb-4">
            {t('header-contact.title')}
          </h1>
          <p className="text-gray-300">{t('header-contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-borderless-background-secondary rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">
                {t('form.title')}
              </h2>

              {errors.submit && (
                <div className="mb-6 p-4 border border-red-200 rounded-lg flex items-start">
                  <AlertCircle className="w-5 h-5 text-borderless-green-dark mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-borderless-green-dark">{errors.submit}</p>
                </div>
              )}

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    maxLength={120}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-borderless-purple-light transition-colors ${
                      errors.name
                        ? 'border-borderless-green'
                        : 'border-gray-300'
                    }`}
                    placeholder={t('form.name')}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1 text-sm text-borderless-green-dark"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-borderless-purple-light transition-colors ${
                      errors.email
                        ? 'border-borderless-green'
                        : 'border-gray-300'
                    }`}
                    placeholder={t('form.email')}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1 text-sm text-borderless-green-dark"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="topic"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    {t('form.topic')}
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-borderless-purple-light transition-colors ${
                      errors.topic
                        ? 'border-borderless-green'
                        : 'border-gray-300'
                    }`}
                    aria-describedby={errors.topic ? 'topic-error' : undefined}
                  >
                    {topicOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.topic && (
                    <p
                      id="topic-error"
                      className="mt-1 text-sm text-borderless-green-dark"
                    >
                      {errors.topic}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    {t('form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={3000}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-borderless-purple-light transition-colors resize-vertical ${
                      errors.message
                        ? 'border-borderless-green'
                        : 'border-gray-300'
                    }`}
                    placeholder={t('form.message')}
                    aria-describedby={
                      errors.message ? 'message-error' : undefined
                    }
                  />
                  <div className="mt-1 flex justify-between text-sm text-gray-500">
                    <span>
                      {errors.message ? (
                        <span className="text-borderless-green-dark">
                          {errors.message}
                        </span>
                      ) : (
                        ''
                      )}
                    </span>
                    <span>{formData.message.length}/3000</span>
                  </div>
                </div>

                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className={`mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                        errors.consent ? 'border-borderless-green' : ''
                      }`}
                      aria-describedby={
                        errors.consent ? 'consent-error' : undefined
                      }
                    />
                    <span className="ml-3 text-sm text-gray-300">
                      {t('form.consent')}
                      <a
                        href="/privacy-policy"
                        className="text-borderless-green underline"
                      >
                        {' '}
                        Privacy Policy*
                      </a>
                      .
                    </span>
                  </label>
                  {errors.consent && (
                    <p
                      id="consent-error"
                      className="mt-1 text-sm text-borderless-green-dark"
                    >
                      {errors.consent}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="w-full cursor-pointer bg-borderless-purple hover:bg-borderless-purple/80 disabled:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        {t('form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t('form.submit')}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-borderless-background-secondary rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">
                {t('contact.title')}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-borderless-green mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-200">
                      {t('contact.email')}
                    </p>
                    <a
                      href={`mailto:${t('contact.email.address')}`}
                      className="text-gray-300 underline"
                    >
                      {t('contact.email.address')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-borderless-green mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-200">
                      {t('contact.office_hours')}
                    </p>
                    <p className="text-gray-300">
                      {t('contact.office_hours.time')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-borderless-green mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-200">
                      {t('contact.response_time')}
                    </p>
                    <p className="text-gray-300">
                      {t('contact.response_time.value')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-borderless-background-secondary rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">
                {t('contact.alternative.title')}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {t('contact.alternative.description')}
              </p>
              <a
                href={`mailto:${t('contact.email.address')}`}
                className="inline-flex items-center text-gray-300 font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t('contact.alternative.button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
