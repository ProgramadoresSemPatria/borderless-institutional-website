'use client'

import React from 'react'
import { useLanguage } from '@/app/hooks/useLanguage'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

const EducationDetails: React.FC = () => {
  const { t } = useLanguage()

  const programs = [
    {
      title: t('education.psp'),
      description: t('education.psp.description'),
      color: 'borderless-purple',
      features: [
        t('education.psp.features.0'),
        t('education.psp.features.1'),
        t('education.psp.features.2'),
      ],
    },
    {
      title: t('education.base'),
      description: t('education.base.description'),
      color: 'borderless-green',
      features: [
        t('education.base.features.0'),
        t('education.base.features.1'),
        t('education.base.features.2'),
      ],
    },
    {
      title: t('education.bootcamp'),
      description: t('education.bootcamp.description'),
      color: 'borderless-purple',
      features: [
        t('education.bootcamp.features.0'),
        t('education.bootcamp.features.1'),
        t('education.bootcamp.features.2'),
      ],
    },
  ]

  return (
    <section
      id="education"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-borderless-green rounded-full"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-borderless-purple rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-borderless-green rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-borderless-purple rounded-full"></div>
      </div>

      <motion.div
        initial={{ y: 30, scale: 1, opacity: 0.7 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t('education.title')}
          </h2>
          <div className="w-24 h-1 bg-borderless-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 hover:border-borderless-green/30 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-3 w-full max-w-sm"
            >
              <div className={`h-2 bg-${program.color}`}></div>

              <div className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-borderless-purple dark:group-hover:text-borderless-green transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {program.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div
                          className={`w-2 h-2 bg-${program.color} rounded-full`}
                        ></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className={`w-full flex items-center justify-center bg-${program.color} hover:bg-${program.color}-dark hover:shadow-lg text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                >
                  {t('education.cta.button')}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div
                className={`absolute -bottom-6 -right-6 w-24 h-24 bg-${program.color} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default EducationDetails
