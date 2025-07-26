'use client'

import React from 'react'
import { useLanguage } from '@/app/hooks/useLanguage'
import { ArrowRight } from 'lucide-react'

const RecruitmentSection: React.FC = () => {
  const { t } = useLanguage()

  const benefits = [
    {
      title: t('recruitment.benefits.smart-search.title'),
      description: t('recruitment.benefits.smart-search.description'),
      number: '01',
    },
    {
      title: t('recruitment.benefits.global-reach.title'),
      description: t('recruitment.benefits.global-reach.description'),
      number: '02',
    },
    {
      title: t('recruitment.benefits.no-fees.title'),
      description: t('recruitment.benefits.no-fees.description'),
      number: '03',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-3 h-3 bg-borderless-green rounded-full"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-borderless-purple rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-borderless-green rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-borderless-purple rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="text-borderless-purple dark:text-white">
              {t('recruitment.title')}{' '}
              <span className="text-borderless-green">
                {t('recruitment.title-emphasis')}
              </span>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('recruitment.subtitle')}
          </p>

          <div className="w-24 h-1 bg-borderless-green mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-borderless-green/10 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-borderless-green/20">
                  <span className="text-2xl font-bold text-borderless-purple dark:text-borderless-green">
                    {benefit.number}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-borderless-purple dark:group-hover:text-borderless-green transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="flex items-center justify-center cursor-pointer bg-borderless-purple hover:bg-borderless-purple-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
            {t('recruitment.cta')}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default RecruitmentSection
