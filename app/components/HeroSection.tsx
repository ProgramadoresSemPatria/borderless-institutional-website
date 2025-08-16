'use client'

import React from 'react'
import { useLanguage } from '@/app/hooks/useLanguage'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const HeroSection: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="pt-24 lg:pt-32 xl:pt-28 min-h-screen flex items-center bg-gradient-to-br from-borderless-background
       via-borderless-background-secondary to-[#0d0d27] relative 
      overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-green-400/10 to-blue-600/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold:text-white font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-borderless-purple to-borderless-green bg-clip-text text-transparent">
                  Global tech
                </span>
                <br />
                <span className="text-white">starts here</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="border-t border-gray-700 pt-6 max-w-2xl"
            >
              <p className="text-lg text-gray-400 mb-6">
                {t('hero.subtitle2')}
              </p>

              <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-4">
                <Link
                  href="https://www.instagram.com/borderlesscoding"
                  className="w-full sm:w-fit cursor-pointer group bg-gradient-to-r bg-borderless-purple hover:bg-borderless-purple-dark 
                   text-white px-8 py-4 
                  rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 
                  flex items-center justify-center"
                  aria-label="expansion button"
                >
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    {t('hero.button-exp')}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                </Link>

                <Link
                  href="https://www.instagram.com/borderlesscoding"
                  className="w-full sm:w-fit cursor-pointer group border-2 border-gray-600 hover:border-borderless-green 
                  text-gray-300 hover:text-borderless-green px-8 py-4 rounded-xl font-semibold 
                  transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                  aria-label="internationalize button"
                >
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 cursor-pointer"
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('hero.button-intl')}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full flex justify-center"
          >
            <div className="relative w-full max-w-[700px] rounded-3xl shadow-2xl p-[1.2rem] border border-gray-700">
              <picture>
                <source
                  srcSet="/ui/hero-img-mobile.webp"
                  media="(max-width: 768px)"
                />
                <Image
                  src="/ui/hero-img.webp"
                  alt="Global Tech"
                  className="w-full h-auto rounded-2xl object-cover"
                  width={800}
                  height={500}
                  priority
                />
              </picture>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(133%+1.3px)] h-[78px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-borderless-background-secondary"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
