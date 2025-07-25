'use client'

import React from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { motion } from 'motion/react'

const ContentPrinciples: React.FC = () => {
  const { t } = useLanguage()

  const principles = [
    {
      title: t('principles.implementation'),
      description: t('principles.implementation_description'),
      number: '01',
    },
    {
      title: t('principles.live'),
      description: t('principles.live_description'),
      number: '02',
    },
    {
      title: t('principles.community'),
      description: t('principles.community_description'),
      number: '03',
    },
    {
      title: t('principles.apps'),
      description: t('principles.apps_description'),
      number: '04',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-borderless-purple relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ y: 30, scale: 1, opacity: 0.7 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            {t('principles.banner')}
          </h2>

          <div className="w-32 h-1 bg-white/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-borderless-purple font-bold text-lg">
                  {principle.number}
                </span>
              </div>

              <div className="text-center">
                <div className="w-16 h-1 bg-white/40 mx-auto mb-6 group-hover:w-24 transition-all duration-300 rounded-full"></div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-borderless-green transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ContentPrinciples
