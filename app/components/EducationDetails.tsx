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
      features: [
        t('education.psp.features.0'),
        t('education.psp.features.1'),
        t('education.psp.features.2'),
      ],
    },
    {
      title: t('education.base'),
      description: t('education.base.description'),
      features: [
        t('education.base.features.0'),
        t('education.base.features.1'),
        t('education.base.features.2'),
      ],
    },
    {
      title: t('education.bootcamp'),
      description: t('education.bootcamp.description'),
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
      className="py-16 md:py-24 bg-borderless-background relative overflow-hidden"
    >
      <motion.div
        initial={{ y: 30, scale: 1, opacity: 0.7 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight">
            {t('education.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {programs.map((program, index) => (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-borderless-purple/30
                transition-all duration-500 hover:shadow-md transform hover:-translate-y-[.2rem] w-full max-w-sm"
            >
              <div className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-6">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-white mb-4 group-hover:text-borderless-purple transition-colors duration-300"
                    >
                      {program.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-gray-300 leading-relaxed mb-6"
                    >
                      {program.description}
                    </motion.p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + 0.4 + featureIndex * 0.1, 
                        }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full`}></div>
                        <span className="text-gray-300 font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.4, 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full flex items-center justify-center bg-borderless-purple hover:bg-borderless-purple-dark hover:-dark hover:shadow-lg text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 cursor-pointer`}
                >
                  {t('education.cta.button')}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>

              <div
                className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default EducationDetails
