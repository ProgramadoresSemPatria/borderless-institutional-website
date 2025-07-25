'use client'

import React from 'react'
import { useLanguage } from '@/app/hooks/useLanguage'
import Image from 'next/image'
import { motion } from 'motion/react'

const HeroSection: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="pt-20 md:pt-24 lg:pt-40 h-screen flex flex-col justify-center items-center pb-12 md:pb-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-borderless-green/10 dark:bg-borderless-green/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-borderless-purple/10 dark:bg-borderless-purple/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ x: -100, scale: 1, opacity: 0.7 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 animate-fade-in-up"
          >

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              <span className="text-borderless-purple dark:text-borderless-green">
                {t('hero.title')}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {t('hero.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 100, scale: 1, opacity: 0.7 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 animation-fade-in-up"
          >
            <div className="relative">
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
                <picture>
                  <source
                    srcSet="/hero-img-mobile.webp"
                    media="(max-width: 768px)"
                  />
                  <Image
                    src="/hero-img.webp"
                    alt="Global Tech"
                    className="w-full md:h-auto rounded-2xl"
                    width={800}
                    height={500}
                  />
                </picture>

                <div className="absolute -top-6 -right-6 bg-[#0f7657] text-white p-4 rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold">95+</div>
                  <div className="text-sm font-bold">{t('hero.tag2')}</div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-borderless-purple text-white p-4 rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold">2023</div>
                  <div className="text-sm font-bold">{t('hero.tag3')}</div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 w-32 h-32 bg-borderless-green/20 dark:bg-borderless-green/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-borderless-purple/20 dark:bg-borderless-purple/30 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
