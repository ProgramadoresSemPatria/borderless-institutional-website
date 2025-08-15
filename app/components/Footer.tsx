'use client'

import React from 'react'
import { Instagram } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const Footer: React.FC = () => {
  const { t } = useLanguage()

  const footerLinks = [
    { href: '/how-it-works', label: t('footer.links.howItWorks') },
    {
      href: '/privacy-policy',
      label: t('footer.links.privacy'),
    },
    { href: '/refund', label: t('footer.links.refund') },
    { href: '/contact', label: t('footer.links.contact') },
  ]

  return (
    <footer className="bg-borderless-background border-t border-gray-700 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mb-6">
            {footerLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-300 hover:text-borderless-green transition-colors duration-300 font-medium underline"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-5">
          <a
            href="https://www.instagram.com/borderlesscoding"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 text-gray-200 font-semibold hover:underline mb-4 transition-colors duration-300"
          >
            <Instagram className="text-lg" />
            <span>@borderlesscoding</span>
          </a>

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {t('footer.copyright.message')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
