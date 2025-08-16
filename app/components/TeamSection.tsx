'use client'

import React from 'react'
import { useLanguage } from '@/app/hooks/useLanguage'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Github, Linkedin } from 'lucide-react'

const TeamSection: React.FC = () => {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: 'Yuri Pereira',
      role: t('team.yuri.role'),
      image: '/team/yuri-pereira.webp',
      color: 'borderless-green',
      linkedin: 'https://www.linkedin.com/in/yuri-pereira/',
      github: 'https://github.com/yuripramos',
    },
    {
      name: 'Felipe Meriga',
      role: t('team.felipe.role'),
      image: '/team/felipe-meriga.webp',
      color: 'borderless-green',
      linkedin: 'https://www.linkedin.com/in/felipersil/',
      github: 'https://github.com/felipemeriga',
    },
    {
      name: 'Matheus Avi',
      role: t('team.matheus.role'),
      image: '/team/matheus-avi.webp',
      color: 'borderless-green',
      linkedin: 'https://www.linkedin.com/in/matheusavi/',
      github: 'https://github.com/matheusavi',
    },
    {
      name: 'André Wlodkosvki',
      role: t('team.andre.role'),
      image: '/team/andre-wlodkosvki.webp',
      color: 'borderless-green',
      linkedin: 'https://www.linkedin.com/in/andrewlod/',
      github: 'https://github.com/andrewlod',
    },
    {
      name: 'Alex Miloski',
      role: t('team.alex.role'),
      image: '/team/alex-miloski.webp',
      color: 'borderless-green',
      linkedin: 'https://www.linkedin.com/in/amiloski',
      github: 'https://github.com/alex-miloski',
    },
    {
      name: 'Thiago Dantas',
      role: t('team.thiago.role'),
      image: '/team/thiago-dantas.webp',
      color: 'borderless-green',
      linkedin: 'https://www.linkedin.com/in/thethiagodma/',
      github: 'https://github.com/thiagodma',
    },
  ]

  return (
    <section
      id="people"
      className="py-16 md:pb-24 md:pt-0 bg-[#090916] relative overflow-hidden border-b border-gray-800"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
            {t('team.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-500 
              transform hover:-translate-y-[.2rem] overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-${member.color} opacity-0 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="relative mb-6 group">
                  <div className="absolute -top-2 left-10 md:left-18 2xl:left-28 -m-2 z-0 rotate-2">
                    <div
                      className={`w-52 h-56 md:w-[10rem] md:h-[11rem] mx-auto bg-gradient-to-br from-${member.color}/20 via-${member.color}/10 to-${member.color}/5 rounded-3xl rotate-2 group-hover:rotate-6 transition-transform duration-500`}
                    ></div>
                    <div
                      className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-36 bg-gradient-to-bl from-${member.color}/15 via-transparent to-${member.color}/10 rounded-3xl -rotate-3 group-hover:-rotate-6 transition-transform duration-700`}
                    ></div>
                  </div>

                  <div className="relative w-52 h-56 md:w-[10rem] md:h-[11rem] mx-auto z-10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-2xl object-cover border-4 border-gray-300 shadow-xl 
                      backdrop-blur-sm group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[0.5rem]"
                      width={800}
                      height={600}
                    />
                    <div
                      className={`absolute inset-0 rounded-2xl ring-2 ring-${member.color}/30 
                        group-hover:ring-${member.color}/50 group-hover:ring-2 transition-all duration-500`}
                    ></div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2 roup-hover:text-borderless-green transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 font-medium leading-relaxed">
                    {member.role}
                  </p>

                  <div className="flex items-center justify-center gap-4 mt-4">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>

                  <div
                    className={`w-12 h-0.5 bg-${member.color} mx-auto mt-4 group-hover:w-20 transition-all duration-300`}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default TeamSection
