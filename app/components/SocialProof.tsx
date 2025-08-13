'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useLanguage } from '@/app/hooks/useLanguage'
import Image from 'next/image'
import { motion } from 'motion/react'
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SocialProof: React.FC = () => {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderLoaded, setSliderLoaded] = useState(false)
  const [videoKeys, setVideoKeys] = useState<{ [key: number]: number }>({})
  const isVideoPlayingRef = useRef(false)

  const contentCarousel = [
    {
      src: 'https://player.vimeo.com/video/1108946498?h=3f9f4bb648',
      desc: 'social-proof.iframe.caique.desc',
      alt: 'Caíque testimony about Borderless',
      type: 'video',
    },
    {
      src: 'https://player.vimeo.com/video/1108946473?h=669d1e58ee',
      desc: 'social-proof.iframe.lucas.desc',
      alt: 'Lucas testimony about Borderless',
      type: 'video',
    },
    {
      src: '/ui/arthur-testimony.webp',
      desc: 'social-proof.arthur.desc',
      alt: 'Arthur testimony about Borderless',
      type: 'image',
    },
    {
      src: '/ui/global-map.png',
      desc: 'social-proof.map.desc',
      alt: 'Global Map where Borderless helped developers to internationalize their careers',
      type: 'image',
    },
  ]

  useEffect(() => {
    const handleVimeoMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://player.vimeo.com') return

      try {
        const data = JSON.parse(event.data)
        const iframe = event.source as Window
        const iframeElement = Array.from(
          document.querySelectorAll('iframe'),
        ).find((el) => el.contentWindow === iframe)

        if (iframeElement) {
          const videoIndex = parseInt(
            iframeElement.getAttribute('data-video-index') || '0',
          )

          if (data.event === 'play') {
            isVideoPlayingRef.current = true
          } else if (data.event === 'pause') {
            isVideoPlayingRef.current = false
          } else if (data.event === 'ended') {
            isVideoPlayingRef.current = false
            setVideoKeys((prev) => ({
              ...prev,
              [videoIndex]: (prev[videoIndex] || 0) + 1,
            }))
          }
        }
      } catch (error) {
        console.error('Error parsing Vimeo message:', error)
      }
    }

    window.addEventListener('message', handleVimeoMessage)
    return () => {
      window.removeEventListener('message', handleVimeoMessage)
    }
  }, [])

  const autoplay: KeenSliderPlugin = (slider) => {
    let timeout: ReturnType<typeof setTimeout> | null = null
    let mouseOver = false
    const delay = 7000

    function clearNextTimeout() {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
    }

    function nextTimeout() {
      clearNextTimeout()
      if (!mouseOver && !isVideoPlayingRef.current) {
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
      mode: 'snap',
      slides: {
        perView: 1,
        spacing: 20,
      },
      breakpoints: {
        '(min-width: 768px)': {
          slides: { perView: 2, spacing: 24 },
        },
        '(min-width: 1200px)': {
          slides: { perView: 2, spacing: 32 },
        },
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
      created() {
        setSliderLoaded(true)
        setTimeout(() => {
          instanceRef.current?.update()
        }, 100)
      },
    },
    [autoplay],
  )

  return (
    <section className="py-16 bg-borderless-background-secondary border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.7rem] font-medium text-white leading-tight">
            {t('social-proof.title')}
          </h2>
        </motion.div>

        <div
          ref={sliderRef}
          className={`keen-slider w-full mx-auto relative transition-opacity duration-300 ${
            sliderLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ maxWidth: '1200px' }}
        >
          {contentCarousel.map((item, idx) => (
            <div
              key={idx}
              className="keen-slider__slide !min-h-0 flex flex-col"
            >
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg flex flex-col bg-black h-full pt-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="relative w-full pb-[65%]">
                  {item.type === 'video' ? (
                    <iframe
                      key={videoKeys[idx] || 0} 
                      src={`${item.src}&api=1`}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={item.alt}
                      data-video-index={idx}
                      onLoad={() => {
                        const iframe =
                          document.querySelector<HTMLIFrameElement>(
                            `iframe[data-video-index="${idx}"]`,
                          )
                        if (iframe?.contentWindow) {
                          ;['play', 'pause', 'ended'].forEach((evt) => {
                            iframe.contentWindow!.postMessage(
                              JSON.stringify({
                                method: 'addEventListener',
                                value: evt,
                              }),
                              'https://player.vimeo.com',
                            )
                          })
                        }
                      }}
                    />
                  ) : (
                    <>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-contain transition-transform duration-300 hover:scale-105"
                        priority={idx < 2}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </>
                  )}
                </div>
                <p className="text-md text-gray-300 leading-relaxed mt-3 p-4 flex-1">
                  {t(item.desc)}
                </p>
              </motion.div>
            </div>
          ))}

          <button
            onClick={() => instanceRef.current?.prev()}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-borderless-green-dark/80 hover:bg-borderless-green-dark p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-borderless-green-dark/80 hover:bg-borderless-green-dark p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {contentCarousel.map((_, idx) => (
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
      </div>
    </section>
  )
}

export default SocialProof
