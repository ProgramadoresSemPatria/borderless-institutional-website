'use client'

import React from 'react'
import { Instagram } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <footer className=" bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 py-8 mt-16">
      <div className="absolute top-0 left-0 w-64 h-64 bg-borderless-green/10 dark:bg-borderless-green/20 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-borderless-purple/10 dark:bg-borderless-purple/20 rounded-full blur-2xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a
          href="https://www.instagram.com/yuripereirario"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-2 text-borderless-purple dark:text-borderless-green font-semibold hover:underline mb-4 transition-colors duration-300"
        >
          <Instagram className="text-lg" />
          <span>@yuripereirario</span>
        </a>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {t('footer.copyright.message')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
