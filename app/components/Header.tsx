'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/app/hooks/useLanguage'
import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { key: 'nav.tech', href: '#tech' },
    { key: 'nav.people', href: '#people' },
    { key: 'nav.education', href: '#education' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.events', href: '#events' },
    { key: 'expansion.title', href: '/expansion' },
  ]

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    e.stopPropagation()

    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
      }
    } else {
      window.location.href = href
    }
  }

  const handleMobileNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.location.href = href
    }

    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{ pointerEvents: 'none' }}
    >
      <div className="container mx-auto px-4" style={{ pointerEvents: 'auto' }}>
        <div
          className={`flex items-center justify-between h-16 md:h-20 rounded-b-4xl px-4 sm:px-6 lg:px-8 shadow-lg border border-gray-800 transition-all duration-300 ${
            isScrolled
              ? 'bg-borderless-background'
              : 'bg-borderless-background/95'
          }`}
        >
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/ui/logo.webp"
              alt="Borderless Logo"
              width={40}
              height={40}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.key}
                onClick={(e) => scrollToSection(e, item.href)}
                className="group relative cursor-pointer text-gray-100 hover:text-borderless-green transition-colors duration-200 font-medium"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-borderless-green transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center border border-gray-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setLanguage('pt')}
                className={`flex items-center px-3 py-1 text-sm font-semibold transition-colors cursor-pointer ${
                  language === 'pt'
                    ? 'bg-[#079f72] text-white'
                    : 'bg-transparent text-gray-300 hover:bg-gray-700'
                }`}
              >
                🇧🇷 <span className="ml-1 text-white">PT</span>
              </button>

              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center px-3 py-1 text-sm font-semibold transition-colors cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#079f72] text-white'
                    : 'bg-transparent text-gray-300 hover:bg-gray-700'
                }`}
              >
                🇺🇸 <span className="ml-1 text-white">EN</span>
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer md:hidden p-2 rounded-full bg-gray-800"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="menu"
              type="button"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="absolute top-full left-4 right-4 mt-4 p-4 rounded-xl bg-zinc-900 border border-gray-700 shadow-lg md:hidden"
          style={{
            zIndex: 9999,
            pointerEvents: 'auto',
          }}
        >
          <div className="flex md:hidden items-center overflow-hidden py-3">
            <button
              onClick={() => setLanguage('pt')}
              className={`flex items-center px-3 py-1 rounded-l-xl text-sm font-semibold transition-colors cursor-pointer ${
                language === 'pt'
                  ? 'bg-[#079f72] text-white'
                  : 'bg-transparent text-gray-300 hover:bg-gray-700'
              }`}
            >
              🇧🇷 <span className="ml-1">PT</span>
            </button>

            <button
              onClick={() => setLanguage('en')}
              className={`flex items-center px-3 py-1 rounded-r-xl text-sm font-semibold transition-colors cursor-pointer ${
                language === 'en'
                  ? 'bg-[#079f72] text-white'
                  : 'bg-transparent text-gray-300 hover:bg-gray-700'
              }`}
            >
              🇺🇸 <span className="ml-1">EN</span>
            </button>
          </div>
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleMobileNavigation(item.href)}
                onTouchStart={() => handleMobileNavigation(item.href)}
                className="text-left text-gray-300 hover:text-borderless-green transition-colors duration-200 font-medium cursor-pointer py-3 px-2 bg-transparent border-none w-full"
                style={{
                  minHeight: '40px',
                  touchAction: 'manipulation',
                }}
              >
                {t(item.key)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
