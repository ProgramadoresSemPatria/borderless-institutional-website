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

      // Arms
      'arms.title': 'Desde Mobile development até Machine Learning Engineering',
      'arms.education.title': 'Educação',
      'arms.education.desc': 'Programas de aceleração e mentoria especializada',
      'arms.tech.title': 'Tech',
      'arms.tech.desc': 'Desenvolvimento de soluções inovadoras',
      'arms.people.title': 'People',
      'arms.people.desc': 'Conexão com mercados globais',
      'arms.companies':
        'Empresas onde nossos talentos já trabalharam ou trabalham',

      // Team
      'team.title': 'Nossa Equipe',
      'team.yuri.role': 'Founder e Strategic Tech Advisor',
      'team.felipe.role': 'Mentor de Rust',
      'team.matheus.role': 'Mentor de Algoritmos e Estrutura de Dados',
      'team.andre.role': 'Multi-cloud Specialist',
      'team.alex.role': 'Mentor/Investor Web3',
      'team.thiago.role': 'Mentor/Head AI',

      // Education
      'education.title': 'Conheça nossos programas de aceleração',
      'education.psp': 'Mentoria PSP',
      'education.base': 'Mentoria BASE',
      'education.bootcamp': 'Bootcamp: Web3 Global Developer',
      'education.psp.description':
        'Programa de mentorias estruturado para acelerar sua carreira em tecnologia',
      'education.psp.features.0': 'Mentoria especializada',
      'education.psp.features.1': 'Projetos práticos',
      'education.psp.features.2': 'Network global',

      'education.base.description':
        'Fundamentos sólidos para sua jornada em tecnologia e mercados internacionais',
      'education.base.features.0': 'Base técnica',
      'education.base.features.1': 'Soft skills',
      'education.base.features.2': 'Preparação global',

      'education.bootcamp.description':
        'Bootcamp intensivo focado em tecnologias Web3 e desenvolvimento descentralizado',
      'education.bootcamp.features.0': 'Web3 Stack',
      'education.bootcamp.features.1': 'DApps',
      'education.bootcamp.features.2': 'Blockchain',
      'education.cta.button': 'Saiba mais',
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

      // Arms
      'arms.title': 'From Mobile development to Machine Learning Engineering',
      'arms.education.title': 'Education',
      'arms.education.desc': 'Acceleration programs and specialized mentorship',
      'arms.tech.title': 'Tech',
      'arms.tech.desc': 'Development of innovative solutions',
      'arms.people.title': 'People',
      'arms.people.desc': 'Connection with global markets',
      'arms.companies': 'Companies where our talents have worked or work',

      // Team
      'team.title': 'Our Team',
      'team.yuri.role': 'Founder & Strategic Tech Advisor',
      'team.felipe.role': 'Rust Mentor',
      'team.matheus.role': 'Algorithms & Data Structures Mentor',
      'team.andre.role': 'Multi-cloud Specialist',
      'team.alex.role': 'Web3 Mentor/Investor',
      'team.thiago.role': 'AI Mentor/Head',

      // Education
      'education.title': 'Meet our acceleration programs',
      'education.psp': 'PSP Mentorship',
      'education.base': 'BASE Mentorship',
      'education.bootcamp': 'Bootcamp: Web3 Global Developer',
      'education.psp.description':
        'Structured mentorship program to accelerate your tech career',
      'education.psp.features.0': 'Specialized mentorship',
      'education.psp.features.1': 'Hands-on projects',
      'education.psp.features.2': 'Global networking',

      'education.base.description':
        'Solid foundations for your journey in tech and international markets',
      'education.base.features.0': 'Technical base',
      'education.base.features.1': 'Soft skills',
      'education.base.features.2': 'Global preparation',

      'education.bootcamp.description':
        'Intensive bootcamp focused on Web3 technologies and decentralized development',
      'education.bootcamp.features.0': 'Web3 Stack',
      'education.bootcamp.features.1': 'DApps',
      'education.bootcamp.features.2': 'Blockchain',
      'education.cta.button': 'Discover more',
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
