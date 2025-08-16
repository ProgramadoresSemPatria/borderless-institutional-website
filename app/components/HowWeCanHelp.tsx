'use client'

import React from 'react'
import { useLanguage } from '@/app/hooks/useLanguage'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const HowWeCanHelp: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section
      id="how-we-can-help"
      className="py-16 md:py-24 bg-borderless-background relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-borderless-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-borderless-purple/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
            {t('how-can-we-help.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('how-can-we-help.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <div className="flex flex-wrap gap-5 md:gap-4 justify-center">
            {[
              t('how-can-we-help.cta.mentorship'),
              t('how-can-we-help.cta.incubator'),
              t('how-can-we-help.cta.platform'),
              t('how-can-we-help.cta.community'),
            ].map((item, index) => (
              <motion.a
                key={item}
                href="https://www.instagram.com/borderlesscoding"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-4/5 sm:w-auto inline-flex items-center justify-center gap-2 font-medium transition-all duration-300
  bg-borderless-purple text-white shadow-lg hover:shadow-xl hover:bg-borderless-purple/80
  hover:scale-105 active:scale-95 h-12 rounded-lg px-4 py-4 text-sm text-center"
              >
                {item}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowWeCanHelp
