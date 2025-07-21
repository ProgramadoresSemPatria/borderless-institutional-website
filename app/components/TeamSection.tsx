'use client'

import React from 'react'
import { useLanguage } from '@/app/hooks/useLanguage'
import Image from 'next/image'
import { motion } from 'motion/react'

const TeamSection: React.FC = () => {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: 'Yuri Pereira',
      role: t('team.yuri.role'),
      image: '/team/yuri-pereira.webp',
      color: 'borderless-purple',
    },
    {
      name: 'Felipe Meriga',
      role: t('team.felipe.role'),
      image: '/team/felipe-meriga.webp',
      color: 'borderless-green',
    },
    {
      name: 'Matheus Avi',
      role: t('team.matheus.role'),
      image: '/team/matheus-avi.webp',
      color: 'borderless-purple',
    },
    {
      name: 'André Wlodkosvki',
      role: t('team.andre.role'),
      image: '/team/andre-wlodkosvki.webp',
      color: 'borderless-green',
    },
    {
      name: 'Alex Miloski',
      role: t('team.alex.role'),
      image: '/team/alex-miloski.webp',
      color: 'borderless-purple',
    },
    {
      name: 'Thiago Dantas',
      role: t('team.thiago.role'),
      image: '/team/thiago-dantas.webp',
      color: 'borderless-green',
    },
  ]

  return (
    <motion.section
      initial={{ y: 30, scale: 1, opacity: 0.7 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      id="people"
      className="py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-borderless-green/10 dark:bg-borderless-green/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-borderless-purple/10 dark:bg-borderless-purple/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('team.title')}
          </h2>
          <div className="w-24 h-1 bg-borderless-green mx-auto rounded-full"></div>
        </div>

        <motion.div
          initial={{ y: 30, scale: 1, opacity: 0.7 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700 hover:border-borderless-green/30 overflow-hidden"
            >
              {/* Gradient Background Hover Layer */}
              <div
                className={`absolute inset-0 bg-${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Fancy Image Container with Layered Effects */}
                <div className="relative mb-6 group">
                  {/* Background Gradient Decorations */}
                  <div className="absolute inset-0 -m-2 z-0">
                    <div
                      className={`w-36 h-40 mx-auto bg-gradient-to-br from-${member.color}/20 via-${member.color}/10 to-${member.color}/5 rounded-3xl rotate-2 group-hover:rotate-6 transition-transform duration-500`}
                    ></div>
                    <div
                      className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-36 bg-gradient-to-bl from-${member.color}/15 via-transparent to-${member.color}/10 rounded-3xl -rotate-3 group-hover:-rotate-6 transition-transform duration-700`}
                    ></div>
                  </div>

                  {/* Image with ring + transitions */}
                  <div className="relative w-36 h-40 mx-auto z-10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-2xl object-cover border-4 border-white shadow-xl backdrop-blur-sm group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                      width={800}
                      height={600}
                    />
                    {/* Decorative Ring */}
                    <div
                      className={`absolute inset-0 rounded-2xl ring-2 ring-${member.color}/30 group-hover:ring-${member.color}/50 group-hover:ring-4 transition-all duration-500`}
                    ></div>
                  </div>
                </div>

                {/* Text & Line */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-borderless-purple dark:group-hover:text-borderless-green transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                    {member.role}
                  </p>

                  <div
                    className={`w-12 h-0.5 bg-${member.color} mx-auto mt-4 group-hover:w-20 transition-all duration-300`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default TeamSection
