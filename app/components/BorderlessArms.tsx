'use client'

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/app/hooks/useLanguage'
import { BookOpenCheck, Code2, Users } from 'lucide-react'
import { motion } from 'motion/react'

const BorderlessArms: React.FC = () => {
  const { t } = useLanguage()

  const arms = [
    {
      icon: BookOpenCheck,
      title: t('arms.education.title'),
      description: t('arms.education.desc'),
      color: 'borderless-green',
    },
    {
      icon: Code2,
      title: t('arms.tech.title'),
      description: t('arms.tech.desc'),
      color: 'borderless-purple',
    },
    {
      icon: Users,
      title: t('arms.people.title'),
      description: t('arms.people.desc'),
      color: 'borderless-green',
    },
  ]

  const companiesSrc = [
    '/logos/coca-cola-logo.png',
    '/logos/apple-logo.svg',
    '/logos/nubank-logo.svg',
    '/logos/btg-logo.svg',
    '/logos/paypal-logo.png',
    '/logos/x-team-logo.svg',
    '/logos/pizza-hut-logo.svg',
    '/logos/accenture-logo.svg',
  ]

  return (
    <section
      id="tech"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 relative"
    >
      <motion.div
        initial={{ y: 30, scale: 1, opacity: 0.7 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t('arms.title')}
          </h2>
          <div className="w-24 h-1 bg-borderless-green mx-auto rounded-full"></div>
        </div>

        <motion.div
          initial={{ y: 30, scale: 1, opacity: 0.7 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {arms.map((arm, index) => {
            const Icon = arm.icon

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700
                 hover:border-borderless-green/30 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
              >
                <div
                  className={`absolute top-6 right-6 w-16 h-16 bg-${arm.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                >
                  <div className="p-4 rounded-2xl bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <div className="p-8">
                  <div
                    className={`w-16 h-1 bg-${arm.color} rounded-full mb-6 group-hover:w-24 transition-all duration-300`}
                  ></div>

                  <h3
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-borderless-purple 
                  dark:group-hover:text-borderless-green transition-colors duration-300"
                  >
                    {arm.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {arm.description}
                  </p>
                </div>

                <div
                  className={`absolute inset-0 bg-${arm.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>
              </div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ y: 30, scale: 1, opacity: 0.7 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center animate-fade-in"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-12">
            {t('arms.companies')}
          </h3>

          <div className="relative">
            <div className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700">
              {companiesSrc.map((company, index) => (
                <Image
                  src={company}
                  key={index}
                  className="w-full h-full object-contain flex items-center justify-center p-4 rounded-xl
                   bg-white dark:bg-white hover:bg-neutral-50 
                   transition-all duration-300 group border border-gray-100 dark:border-gray-700
                    hover:border-borderless-green/30 hover:shadow-lg transform hover:-translate-y-1"
                  width={80}
                  height={80}
                  alt="Companies  logo"
                ></Image>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default BorderlessArms
