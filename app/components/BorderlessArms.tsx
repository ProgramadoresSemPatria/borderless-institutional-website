'use client'

import Image from 'next/image'
import { useLanguage } from '@/app/hooks/useLanguage'
import { BookOpenCheck, Code2, Users } from 'lucide-react'
import { motion } from 'motion/react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const BorderlessArms: React.FC = () => {
  const { t } = useLanguage()

  const companiesSrc = [
    '/logos/coca-cola-logo.png',
    '/logos/apple-logo.svg',
    '/logos/beehiiv-logo.svg',
    '/logos/strike-logo.svg',
    '/logos/paypal-logo.png',
    '/logos/x-team-logo.svg',
    '/logos/pizza-hut-logo.svg',
    '/logos/accenture-logo.svg',
    '/logos/nubank-logo.svg',
    '/logos/btg-logo.svg',
  ]

  // Garantee smooth transitions
  const slides = [...companiesSrc, ...companiesSrc, ...companiesSrc]

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: 'performance',
      drag: false,
      slides: {
        perView: 8,
        spacing: 20,
      },
      breakpoints: {
        '(max-width: 1024px)': {
          slides: {
            perView: 6,
            spacing: 15,
          },
        },
        '(max-width: 768px)': {
          slides: {
            perView: 4,
            spacing: 10,
          },
        },
        '(max-width: 480px)': {
          slides: {
            perView: 3,
            spacing: 8,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 1000)
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })

        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  const arms = [
    {
      icon: BookOpenCheck,
      title: t('arms.education.title'),
      description: t('arms.education.desc'),
    },
    {
      icon: Code2,
      title: t('arms.tech.title'),
      description: t('arms.tech.desc'),
    },
    {
      icon: Users,
      title: t('arms.people.title'),
      description: t('arms.people.desc'),
    },
  ]

  return (
    <section
      id="tech"
      className="pb-16 pt-20 md:py-24 bg-borderless-background-secondary relative"
    >
      <motion.div
        initial={{ y: 30, scale: 1, opacity: 0.7 }} 
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight">
            {t('arms.title')}
          </h2>
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
                className="group relative overflow-hidden transition-all duration-500 transform hover:-translate-y-1"
              >
                <div>
                  <div className="px-8 rounded-2xl bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors">
                    <Icon className="group-hover:text-borderless-green h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="px-8 pt-3">
                  <h3
                    className="text-2xl font-bold text-white mb-4 group-hover:text-borderless-green transition-colors duration-300"
                  >
                    {arm.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {arm.description}
                  </p>
                </div>
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
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-10 uppercase">
            {t('arms.companies')}
          </h3>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-20 bg-gradient-to-r from-[#0A0A1F] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-20 bg-gradient-to-l from-[#0A0A1F] to-transparent" />

            <div ref={sliderRef} className="keen-slider">
              {slides.map((company, index) => (
                <div
                  key={index}
                  className="keen-slider__slide flex items-center justify-center p-4 rounded-xl bg-gray-300 border border-gray-700 shadow-sm"
                >
                  <Image
                    src={company}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full filter invert-0 pointer-events-none"
                    alt={`Company logo ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default BorderlessArms
