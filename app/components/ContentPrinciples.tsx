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
          <motion.svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            style={{ zIndex: 1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.line
              x1="50%"
              y1="50%"
              x2="160"
              y2="180"
              stroke="#465851"
              strokeWidth="2"
              strokeDasharray="8,6"
              opacity="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.line
              x1="50%"
              y1="50%"
              x2="180"
              y2="580"
              stroke="#465851"
              strokeWidth="2"
              strokeDasharray="8,6"
              opacity="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.line
              x1="50%"
              y1="50%"
              x2="calc(100% - 160px)"
              y2="120"
              stroke="#465851"
              strokeWidth="2"
              strokeDasharray="8,6"
              opacity="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            />
            <motion.line
              x1="50%"
              y1="50%"
              x2="calc(100% - 160px)"
              y2="520"
              stroke="#465851"
              strokeWidth="2"
              strokeDasharray="8,6"
              opacity="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.svg>

          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
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
            transition={{ delay: 0.6, duration: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-28 left-0 w-80"
            style={{ zIndex: 3 }}
          >
            <div className="bg-borderless-background-secondary/90 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="font-semibold text-lg mb-3 text-borderless-green-dark">
                {principles[0].title}
              </h3>
              <p className="text-sm text-gray-100 leading-relaxed">
                {principles[0].description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-16 left-6 w-80"
            style={{ zIndex: 3 }}
          >
            <div className="bg-borderless-background-secondary/90 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="font-semibold text-lg mb-3 text-borderless-green-dark">
                {principles[1].title}
              </h3>
              <p className="text-sm text-gray-100 leading-relaxed">
                {principles[1].description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            viewport={{ once: true }}
            className="absolute top-16 right-5 w-80"
            style={{ zIndex: 3 }}
          >
            <div className="bg-borderless-background-secondary/90 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="font-semibold text-lg mb-3 text-borderless-green-dark">
                {principles[2].title}
              </h3>
              <p className="text-sm text-gray-100 leading-relaxed">
                {principles[2].description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute bottom-17 right-0 w-80"
            style={{ zIndex: 3 }}
          >
            <div className="bg-borderless-background-secondary/90 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="font-semibold text-lg mb-3 text-borderless-green-dark">
                {principles[3].title}
              </h3>
              <p className="text-sm text-gray-100 leading-relaxed">
                {principles[3].description}
              </p>
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