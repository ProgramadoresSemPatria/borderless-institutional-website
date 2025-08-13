'use client'

import React from 'react'
import { useLanguage } from '@/app/hooks/useLanguage'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

const RecruitmentSection: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-borderless-background-secondary relative overflow-hidden">
      <motion.div
        initial={{ y: +100, scale: 1, opacity: 0.7 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight">
            <span className="text-white">
              {t('recruitment.title')} {t('recruitment.title-emphasis')}
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('recruitment.subtitle')}
          </p>
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="flex items-center justify-center bg-borderless-purple hover:bg-borderless-purple-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl cursor-pointer">
            {t('recruitment.cta')}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-20">
        <svg
          className="relative block w-[calc(133%+1.3px)] h-[78px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-borderless-background"
          />
        </svg>
      </div>
    </section>
  )
}

export default RecruitmentSection
