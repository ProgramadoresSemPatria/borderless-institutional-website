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
      'hero.tag2': 'Internacionalizações',
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

      // Principles
      'principles.banner':
        'Consiga um emprego em tech ou seu dinheiro de volta',
      'principles.implementation': 'Aulas de implementação',
      'principles.implementation_description':
        'Aprenda fazendo com projetos práticos e reais',
      'principles.live': 'Encontros ao vivo',
      'principles.live_description':
        'Interação direta com mentores especialistas',
      'principles.community': 'Comunidade & Networking',
      'principles.community_description':
        'Rede de contatos global para sua carreira',
      'principles.apps': 'Mini-apps para acompanhamento',
      'principles.apps_description': 'Tecnologia para acompanhar sua evolução',

      // Incubator
      'incubator.tag': 'Incubadora',
      'incubator.title': 'Incubadora de Startups',
      'incubator.subtitle': 'Como é a incubadora?',
      'incubator.desc':
        'Dentro do ecossistema os membros podem buscar desde parceiros para iniciar negócios juntos até buscar investidores. Na foto ao lado é o nosso SaaS que atua como um Super-App englobando desde rede social a área de membros.',
      'incubator.cta': 'Para founders e investidores',

      // Recruitment
      'recruitment.title':
        'A única empresa que conecta developers com empresas globais',
      'recruitment.title-emphasis': 'SEM TAXA',
      'recruitment.subtitle':
        'Full-stack, ML Engineer, GoLang Dev e muito mais',
      'recruitment.cta': 'Eu quero contratar um profissional',
      'recruitment.benefits.smart-search.title': 'Busca Inteligente',
      'recruitment.benefits.smart-search.description':
        'Encontre o profissional ideal para sua empresa',
      'recruitment.benefits.global-reach.title': 'Alcance Global',
      'recruitment.benefits.global-reach.description':
        'Talentos preparados para mercados internacionais',
      'recruitment.benefits.no-fees.title': 'Sem Taxa',
      'recruitment.benefits.no-fees.description':
        'Zero cobrança para empresas contratantes',

      // About
      'about.title': 'Nossa História',
      'about.subtitle': 'O ecossistema que te conecta com o mundo real',
      'about.content1':
        "Criada em 2023 por Yuri Pereira somente como uma mentoria que conectava developers com o mercado, hoje se tornou um ecossistema com professores de Tech, Inglês, CTO's, Managers, Cybersecurity e diversos áreas do mercado tech.",
      'about.content2':
        'Hoje, a Borderless já contribuiu para a internacionalização de mais de 95 profissionais — desde iniciantes em início de carreira até especialistas com mais de 10 anos de experiência.',

      // Footer
      'footer.copyright.message':
        'Borderless Coding. Todos os direitos reservados.',
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
      'hero.tag2': 'Internacionalizations',
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

      // Principles
      'principles.banner': 'Get a job in tech or your tuition back',
      'principles.implementation': 'Implementation classes',
      'principles.implementation_description':
        'Learn by building real, practical projects',
      'principles.live': 'Live meetings',
      'principles.live_description': 'Direct interaction with expert mentors',
      'principles.community': 'Community & Networking',
      'principles.community_description': 'Global network to grow your career',
      'principles.apps': 'Mini-apps for tracking',
      'principles.apps_description': 'Tech tools to track your evolution',

      // Incubator
      'incubator.title': 'Startup Incubator',
      'incubator.subtitle': 'What is the incubator like?',
      'incubator.desc':
        'Inside the ecosystem, members can seek everything from partners to start businesses together to investors. The image shows our SaaS, which acts as a Super-App encompassing everything from a social network to a members area.',
      'incubator.cta': 'For founders and investors',

      // Recruitment
      'recruitment.title':
        'The only company that connects developers with global companies',
      'recruitment.title-emphasis': 'WITHOUT FEE',
      'recruitment.subtitle':
        'Full-stack, ML Engineer, GoLang Dev and much more',
      'recruitment.cta': 'I want to hire a professional',
      'recruitment.benefits.smart-search.title': 'Smart Search',
      'recruitment.benefits.smart-search.description':
        'Find the ideal professional for your company',
      'recruitment.benefits.global-reach.title': 'Global Reach',
      'recruitment.benefits.global-reach.description':
        'Talents prepared for international markets',
      'recruitment.benefits.no-fees.title': 'No Fees',
      'recruitment.benefits.no-fees.description':
        'Zero charges for hiring companies',

      // About
      'about.title': 'Our Story',
      'about.subtitle': 'The ecosystem that connects you with the real world',
      'about.content1':
        'Founded in 2023 by Yuri Pereira as a simple mentorship connecting developers with the market, it has now become an ecosystem with Tech and English teachers, CTOs, Managers, Cybersecurity specialists, and professionals from various areas of the tech industry.',
      'about.content2':
        'Today, Borderless has contributed to the internationalization of over 95 professionals — from early-career beginners to specialists with more than 10 years of experience.',

      // Footer
      'footer.copyright.message': 'Borderless Coding. All rights reserved.',
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
