'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>('pt')

  const translations: Record<Language, Record<string, string>> = {
    pt: {
      // Header
      'nav.education': 'Educação',
      'nav.tech': 'Tech',
      'nav.people': 'Pessoas',
      'nav.about': 'Sobre',

      // Hero
      'hero.title': 'Tech global começa aqui',
      'hero.subtitle':
        'O único ecossistema do Brasil que prepara, forma e conecta profissionais de tech com os mercados globais',
      'hero.tag1': 'Ecossistema Tech Global',
      'hero.tag2': 'Internacionalização',
      'hero.tag3': 'Fundação',
    },
    en: {
      // Header
      'nav.education': 'Education',
      'nav.tech': 'Tech',
      'nav.people': 'People',
      'nav.about': 'About',

      // Hero
      'hero.title': 'Global tech starts here',
      'hero.subtitle':
        'The only ecosystem in Brazil that prepares, trains and connects tech professionals with global markets',
      'hero.tag1': 'Global Tech Ecosystem',
      'hero.tag2': 'Internacionalization',
      'hero.tag3': 'Foundation',
    },
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
