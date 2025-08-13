'use client'

import React from 'react'
import { useLanguage } from '@/app/hooks/useLanguage'
import Image from 'next/image'
import { motion } from 'motion/react'

const AboutSection: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-borderless-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, scale: 1, opacity: 0 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="animate-slide-in-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
              <span>{t('about.title')}</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {t('about.content1')}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {t('about.content2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 100, scale: 1, opacity: 0 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="animate-slide-in-right"
          >
            <div className="relative">
              <div className="relative z-10 bg-borderless-background rounded-3xl shadow-2xl p-[1.2rem] border border-gray-700">
                <Image
                  src="/ui/borderless-conference.webp"
                  alt="About Borderless"
                  className="w-full h-auto rounded-2xl"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
