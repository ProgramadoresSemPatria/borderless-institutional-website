'use client'

import React from 'react'
import { useLanguage } from '@/app/hooks/useLanguage'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

const StartupIncubator: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-borderless-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, scale: 1, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="animate-slide-in-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
              <span>{t('incubator.title')}</span>
            </h2>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
              <span>{t('incubator.subtitle')}</span>
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {t('incubator.desc')}
            </p>

            <button className="flex items-center justify-center bg-borderless-purple hover:bg-borderless-purple-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl cursor-pointer">
              {t('incubator.cta')}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div
            initial={{ x: 100, scale: 1, opacity: 0 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="animate-slide-in-right"
          >
            <div className="relative">
              <div
                className="relative z-10 bg-borderless-background rounded-3xl shadow-2xl p-[1.2rem] border 
              border-gray-700"
              >
                <Image
                  src="/ui/super-app-borderless.webp"
                  alt="Startup incubator"
                  className="w-full h-auto rounded-2xl"
                  width={1200}
                  height={900}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StartupIncubator
