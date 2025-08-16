'use client'

import React from 'react'
import { useLanguage } from '@/app/hooks/useLanguage'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

const StartupIncubatorExample: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="relative pt-16 pb-8 md:pb-60 bg-borderless-background-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.7rem] font-medium text-white leading-tight">
            {t('incubation.examples.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="overflow-hidden transition-shadow group"
          >
            <div className="relative h-64 w-full rounded-xl overflow-hidden">
              <Image
                src="/ui/rampix.webp"
                alt="Rampix - Plataforma inovadora de exchange"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <a
                  href="https://www.rampix.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-[16rem] items-center justify-center gap-2 font-medium 
                    transition-colors bg-white text-black shadow-sm hover:bg-gray-300 h-10 
                    rounded-md px-4 text-sm"
                >
                  {t('incubation.examples.rampix.btn')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="bg-card p-6">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                Rampix
              </h3>
              <p className="text-muted-foreground">
                {t('incubation.examples.rampix.desc')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="overflow-hidden  transition-shadow group"
          >
            <div className="relative h-64 w-full rounded-xl overflow-hidden">
              <Image
                src="/ui/borderless-community.webp"
                alt="Borderless Community - Rede global de desenvolvedores"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <a
                  href="https://community.borderlesscoding.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-[16rem] items-center justify-center gap-2 font-medium 
                    transition-colors bg-white text-black shadow-sm hover:bg-gray-200 h-10 
                    rounded-md px-4 text-sm"
                >
                  {t('incubation.examples.super-app.btn')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="bg-card p-6">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                Borderless Community
              </h3>
              <p className="text-muted-foreground">
                Super-app Borderless Coding
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(266%+1.3px)] h-[356px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39
               -57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
               C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-borderless-background"
          />
        </svg>
      </div>
    </section>
  )
}

export default StartupIncubatorExample
