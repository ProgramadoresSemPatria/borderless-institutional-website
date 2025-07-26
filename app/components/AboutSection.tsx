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
      className="py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-borderless-green/10 dark:bg-borderless-green/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-borderless-purple/10 dark:bg-borderless-purple/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, scale: 1, opacity: 0.7 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="animate-slide-in-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-borderless-purple dark:text-borderless-green">
                {t('about.title')}
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {t('about.content1')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {t('about.content2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 100, scale: 1, opacity: 0.7 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="animate-slide-in-right"
          >
            <div className="relative">
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
                <Image
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="About Borderless"
                  className="w-full h-auto rounded-2xl"
                  width={800}
                  height={600}
                />
                <div className="absolute -top-6 -right-6 bg-[#19a47a] text-white p-4 rounded-2xl shadow-lg">
                  <div className="text-xl font-bold">Tech</div>
                  <div className="text-sm font-semibold">Global</div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-borderless-purple text-white p-4 rounded-2xl shadow-lg">
                  <div className="text-xl font-bold">BR</div>
                  <div className="text-sm font-semibold">Origin</div>
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

export default AboutSection
