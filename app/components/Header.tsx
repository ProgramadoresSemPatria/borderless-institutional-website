'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useLanguage } from '@/app/hooks/useLanguage'
import { useTheme } from '@/app/hooks/useTheme'
import Image from 'next/image'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { key: 'nav.education', href: '#education' },
    { key: 'nav.tech', href: '#tech' },
    { key: 'nav.people', href: '#people' },
    { key: 'nav.about', href: '#about' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection('#top')}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Image
                src="/logo.webp"
                alt="Borderless Logo"
                width={40}
                height={40}
              />
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-700 dark:text-gray-100 hover:text-borderless-purple dark:hover:text-borderless-green transition-colors duration-200 font-medium group cursor-pointer"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-borderless-green transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              aria-label="Toggle Theme"
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-borderless-green/10 dark:hover:bg-borderless-green/20 transition-colors duration-200 cursor-pointer"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-borderless-purple dark:text-borderless-green" />
              ) : (
                <Sun className="w-5 h-5 text-borderless-purple dark:text-borderless-green" />
              )}
            </button>

            <div className="relative">
              <button
                type="button"
                aria-label="Toggle Language"
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-borderless-green/10 dark:hover:bg-borderless-green/20 transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-borderless-green/20 cursor-pointer"
              >
                {language === 'pt' ? '🇧🇷' : '🇺🇸'}
                <span className="text-sm font-semibold uppercase text-borderless-purple dark:text-borderless-green ml-1">
                  {language}
                </span>
              </button>
            </div>

            <button
              type="button"
              aria-label="Toggle Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-borderless-green/10 dark:hover:bg-borderless-green/20 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-borderless-purple dark:text-borderless-green" />
              ) : (
                <Menu className="w-5 h-5 text-borderless-purple dark:text-borderless-green" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-borderless-purple dark:hover:text-borderless-green transition-colors duration-200 font-medium py-3 px-2 hover:bg-borderless-green/5 dark:hover:bg-borderless-green/10 rounded-lg active:text-borderless-green-dark"
                >
                  {t(item.key)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
