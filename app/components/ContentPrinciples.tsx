'use client'

import React from 'react'
import { useLanguage } from '../hooks/useLanguage'
import Image from 'next/image'
import { motion } from 'motion/react'

const ContentPrinciples: React.FC = () => {
  const { t } = useLanguage()

  const principles = [
    {
      title: t('principles.implementation'),
      description: t('principles.implementation_description'),
      position: 'top-left',
    },
    {
      title: t('principles.live'),
      description: t('principles.live_description'),
      position: 'bottom-left',
    },
    {
      title: t('principles.community'),
      description: t('principles.community_description'),
      position: 'top-right',
    },
    {
      title: t('principles.apps'),
      description: t('principles.apps_description'),
      position: 'bottom-right',
    },
  ]

  return (
    <section className="py-5 bg-borderless-background relative overflow-hidden">
      <div className="bg-borderless-background-secondary py-20 px-4 text-center relative overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl xl:text-5xl font-medium mb-6 text-white"
        >
          {t('principles.banner')}
        </motion.h2>

        <div className="hidden lg:block relative w-full max-w-6xl mx-auto h-[700px] mt-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Image
                src="/ui/globe-img.png"
                alt="Globo Borderless"
                className="w-72 md:w-96 lg:w-[28rem] h-auto mx-auto"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
                <Image
                  src="/ui/logo.webp"
                  alt="Logo Borderless"
                  className="w-16 h-auto mx-auto drop-shadow-[0_0_8px_#4fffbcb7]"
                  width={64}
                  height={64}
                />
                <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_8px_#4fffbccc]">
                  BORDERLESS
                </h3>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-22 left-0 w-[22.3rem] h-[22rem]"
          >
            <div className="relative w-full h-full">
              <Image
                src="/ui/ellipse-item.png"
                alt=""
                className="absolute inset-0 w-full h-full object-contain z-0 rotate-[32deg]"
                width={600}
                height={600}
              />
              <div className="relative top-29 left-1 z-20 p-6 text-white">
                <h3 className="font-semibold text-lg">{principles[0].title}</h3>
                <p className="text-sm text-gray-100">
                  {principles[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-6 w-[22.3rem] h-[22rem]"
          >
            <div className="relative w-full h-full">
              <Image
                src="/ui/ellipse-item.png"
                alt=""
                className="absolute inset-0 w-full h-full object-contain z-0 -rotate-[2deg]"
                width={600}
                height={600}
              />
              <div className="relative top-19 z-10 p-6 text-white">
                <h3 className="font-semibold text-lg">{principles[1].title}</h3>
                <p className="text-sm text-gray-100">
                  {principles[1].description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-5 right-5 w-[22.3rem] h-[22rem]"
          >
            <div className="relative w-full h-full">
              <Image
                src="/ui/ellipse-item.png"
                alt=""
                className="absolute inset-0 w-full h-full object-contain z-0 rotate-[-182deg]"
                width={600}
                height={600}
              />
              <div className="relative top-46 left-1 z-10 p-6 text-white">
                <h3 className="font-semibold text-lg">{principles[2].title}</h3>
                <p className="text-sm text-gray-100">
                  {principles[2].description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-17 -right-0 w-[22.3rem] h-[22rem]"
          >
            <div className="relative w-full h-full">
              <Image
                src="/ui/ellipse-item.png"
                alt=""
                className="absolute inset-0 w-full h-full object-contain z-0 rotate-[-147deg]"
                width={600}
                height={600}
              />
              <div className="relative top-36 right-2 z-10 p-6 text-white">
                <h3 className="font-semibold text-lg">{principles[3].title}</h3>
                <p className="text-sm text-gray-100">
                  {principles[3].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:hidden mt-10">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="relative mb-8">
              <Image
                src="/ui/globe-img.png"
                alt="Globo Borderless"
                className="w-48 md:w-64 h-auto mx-auto opacity-20"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <Image
                  src="/ui/logo.webp"
                  alt="Logo Borderless"
                  className="w-12 md:w-16 h-auto mx-auto drop-shadow-[0_0_8px_#4fffbc58]"
                  width={64}
                  height={64}
                />
                <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-[0_0_8px_#4fffbc89]">
                  BORDERLESS
                </h3>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-borderless-green/20 to-borderless-purple/20 backdrop-blur-sm border border-borderless-green/30 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-borderless-green/10 to-borderless-purple/10 rounded-2xl"></div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg mb-3 text-borderless-green">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-gray-100 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentPrinciples
