'use client'

import React from 'react'
import { useLanguage } from '@/app/hooks/useLanguage'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { motion } from 'motion/react'

const Events: React.FC = () => {
  const { t } = useLanguage()

  const events = [
    {
      description: t('events.image.desc1'),
      image: '/events/sp-borderless-conference.webp',
    },
    {
      description: t('events.image.desc2'),
      image: '/events/yuri-in-dubai.webp',
    },
    {
      description: t('events.image.desc3'),
      image: '/events/hackhaton-france.webp',
    },
    {
      description: t('events.image.desc4'),
      image: '/events/prize-hackhaton-france.webp',
    },
  ]

  const [currentSlide, setCurrentSlide] = React.useState(0)

  const autoplay: KeenSliderPlugin = (slider) => {
    let timeout: ReturnType<typeof setTimeout> | null = null
    let mouseOver = false
    const delay = 5000

    function clearNextTimeout() {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
    }

    function nextTimeout() {
      clearNextTimeout()
      if (!mouseOver) {
        timeout = setTimeout(() => {
          slider.next()
        }, delay)
      }
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
  }

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: 'performance',
      slides: {
        perView: 1,
        spacing: 0,
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
    },
    [autoplay],
  )

  return (
    <section
      id="events"
      className="relative py-16 bg-borderless-background-secondary overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ x: -100, scale: 1, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.7rem] font-medium text-white leading-tight">
            {t('events.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ x: 100, scale: 1, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-3xl mx-auto"
        >
          <div ref={sliderRef} className="keen-slider">
            {events.map((evt, idx) => (
              <div
                key={idx}
                className="keen-slider__slide relative overflow-hidden rounded-2xl bg-transparent flex flex-col"
              >
                <div className="relative w-full h-[400px] rounded-t-2xl overflow-hidden">
                  <div className="relative w-full h-full bg-black">
                    <Image
                      src={evt.image}
                      alt={evt.description}
                      fill
                      className="object-contain relative z-10"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                    <Image
                      src={evt.image}
                      alt=""
                      fill
                      className="object-cover blur-xl scale-110 absolute top-0 left-0 opacity-30"
                      aria-hidden
                    />
                  </div>
                </div>

                <div className="p-6 text-center bg-black/30 text-white rounded-b-2xl">
                  <p className="text-lg font-medium">{evt.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => instanceRef.current?.prev()}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-borderless-green-dark/80 hover:bg-borderless-green-dark p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-borderless-green-dark/80 hover:bg-borderless-green-dark p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          <div className="flex justify-center mt-6 space-x-2 z-20 relative">
            {events.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`h-2 w-8 rounded-full transition-colors ${
                  currentSlide === idx ? 'bg-borderless-green' : 'bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Events
