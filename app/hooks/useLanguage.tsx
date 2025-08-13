'use client'
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'

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

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2)
    const initialLang: Language = browserLang === 'en' ? 'en' : 'pt'
    setLanguage(initialLang)
  }, [])

  const translations: Record<Language, Record<string, string>> = {
    pt: {
      // Home
      // Header
      'nav.tech': 'Tech',
      'nav.people': 'Pessoas',
      'nav.education': 'Educação',
      'nav.about': 'Sobre',
      'nav.events': 'Eventos',

      // Hero
      'hero.title': 'Tech global começa aqui',
      'hero.subtitle':
        'O único ecossistema do Brasil que prepara, forma e conecta profissionais de tech com os mercados globais.',
      'hero.subtitle2':
        'A ponte entre talentos tech brasileiros e o mercado internacional — com produtos educacionais, plataforma própria e startups em incubação.',
      'hero.button-exp': 'Ver plano de expansão',
      'hero.button-intl': 'Quero internacionalizar',

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

      // Incubation Examples
      'incubation.examples.title':
        'Startups em Incubação – Powered by Borderless Hub',
      'incubation.examples.rampix.btn': 'Visitar',
      'incubation.examples.rampix.desc':
        'Exchange 100% brasileira para comprar e vender criptomoedas via Pix, de maneira rápida e segura.',
      'incubation.examples.super-app.btn': 'Exclusivo para membros',

      // Team
      'team.title': 'Nossa Equipe',
      'team.yuri.role': 'Founder e Strategic Tech Advisor',
      'team.felipe.role': 'Mentor de Rust',
      'team.matheus.role': 'Mentor de Algoritmos e Estrutura de Dados',
      'team.andre.role': 'Multi-cloud Specialist',
      'team.alex.role': 'Mentor/Investor Web3',
      'team.thiago.role': 'Mentor/Head AI',

      // Social Proof
      'social-proof.title': 'Prova Real – Mais de 105 devs globalizados',
      'social-proof.iframe.caique.desc':
        'Caíque saiu de 8k BRL do Brasil para mais de 60k BRL (11k usd/month) em 6 meses.',
      'social-proof.iframe.lucas.desc':
        'Lucas saiu de 3k BRL do Brasil para mais de 25k BRL (5k usd/month + equity em uma startup no AZ, USA).',
      'social-proof.arthur.desc': 'Testemunho do Arthur (Mentorado da Base).',
      'social-proof.map.desc': 'Diversos países e continentes.',

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

      // About
      'about.title': 'Nossa História',
      'about.subtitle': 'O ecossistema que te conecta com o mundo real',
      'about.content1':
        "Criada em 2023 por Yuri Pereira somente como uma mentoria que conectava developers com o mercado, hoje se tornou um ecossistema com professores de Tech, Inglês, CTO's, Managers, Cybersecurity e diversos áreas do mercado tech.",
      'about.content2':
        'Hoje, a Borderless já contribuiu para a internacionalização de mais de 105 profissionais — desde iniciantes em início de carreira até especialistas com mais de 10 anos de experiência.',

      // How Can We Help
      'how-can-we-help.title': 'Como podemos te ajudar?',
      'how-can-we-help.subtitle':
        'Oferecemos um ecossistema completo de soluções para desenvolvedores, startups e empresas que buscam profissionais de excelência em tecnologia.',
      'how-can-we-help.cta.mentorship': 'Mentoria',
      'how-can-we-help.cta.incubator': 'Incubadora',
      'how-can-we-help.cta.platform': 'Plataforma',
      'how-can-we-help.cta.community': 'Comunidade',

      // Events
      'events.title': 'Eventos & Conquistas',
      'events.image.desc1':
        'Primeira borderless conf São Paulo, Brasil, para mais de 70 convidados.',
      'events.image.desc2':
        'Entrevista do Nosso founder, Yuri Pereira, para a revista Entrepreneur em Dubai, UAE 🇦🇪.',
      'events.image.desc3':
        'Brainstorm durante uma hackthon de AI na França 🇫🇷.',
      'events.image.desc4':
        'Mentorados da borderless receberam o segundo lugar na hackathon da EthCC em Cannes, França 🇫🇷.',

      // Footer
      'footer.copyright.message':
        'Borderless Coding. Todos os direitos reservados.',

      // Expansion
      'expansion.title': 'Expansão',
      'expansion.subtitle':
        'A Borderless tem um plano de expansão para o mercado global. Se vocês querem ser parte, envie um email para: ',
    },
    en: {
      // Header
      'nav.tech': 'Tech',
      'nav.people': 'People',
      'nav.education': 'Education',
      'nav.about': 'About',
      'nav.events': 'Events',

      // Hero
      'hero.title': 'Global tech starts here',
      'hero.subtitle':
        'The only ecosystem in Brazil that prepares, trains and connects tech professionals with global markets.',
      'hero.subtitle2':
        'The bridge between Brazilian tech talent and the international market — with educational products, a proprietary platform, and incubated startups.',
      'hero.button-exp': 'See expansion plan',
      'hero.button-intl': 'I want to internationalize',

      // Arms
      'arms.title': 'From Mobile development to Machine Learning Engineering',
      'arms.education.title': 'Education',
      'arms.education.desc': 'Acceleration programs and specialized mentorship',
      'arms.tech.title': 'Tech',
      'arms.tech.desc': 'Development of innovative solutions',
      'arms.people.title': 'People',
      'arms.people.desc': 'Connection with global markets',
      'arms.companies': 'Companies where our talents have worked or work',

      // Incubation Examples
      'incubation.examples.title':
        'Startups in Incubation – Powered by Borderless Hub',
      'incubation.examples.rampix.btn': 'Visit',
      'incubation.examples.rampix.desc':
        '100% Brazilian exchange to buy and sell cryptocurrencies via Pix, fast and secure.',
      'incubation.examples.super-app.btn': 'Exclusive for members',

      // Team
      'team.title': 'Our Team',
      'team.yuri.role': 'Founder & Strategic Tech Advisor',
      'team.felipe.role': 'Rust Mentor',
      'team.matheus.role': 'Algorithms & Data Structures Mentor',
      'team.andre.role': 'Multi-cloud Specialist',
      'team.alex.role': 'Web3 Mentor/Investor',
      'team.thiago.role': 'AI Mentor/Head',

      // Social Proof
      'social-proof.title': 'Real Proof – Over 105 Global Developers',
      'social-proof.iframe.caique.desc':
        'Caíque went from 8k BRL in Brazil to over 60k BRL (11k USD/month) in 6 months.',
      'social-proof.iframe.lucas.desc':
        'Lucas went from 3k BRL in Brazil to over 25k BRL (5k USD/month + equity in a startup in AZ, USA).',
      'social-proof.arthur.desc': "Arthur's testimony about Borderless.",
      'social-proof.map.desc': 'Multiple countries and continents.',

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

      // About
      'about.title': 'Our Story',
      'about.subtitle': 'The ecosystem that connects you with the real world',
      'about.content1':
        'Founded in 2023 by Yuri Pereira as a simple mentorship connecting developers with the market, it has now become an ecosystem with Tech and English teachers, CTOs, Managers, Cybersecurity specialists, and professionals from various areas of the tech industry.',
      'about.content2':
        'Today, Borderless has contributed to the internationalization of over 105 professionals — from early-career beginners to specialists with more than 10 years of experience.',

      // How Can We Help
      'how-can-we-help.title': 'How can we help you?',
      'how-can-we-help.subtitle':
        'We offer a complete ecosystem of solutions for developers, startups, and companies seeking excellence in technology professionals.',
      'how-can-we-help.cta.mentorship': 'Mentorship',
      'how-can-we-help.cta.incubator': 'Incubator',
      'how-can-we-help.cta.platform': 'Platform',
      'how-can-we-help.cta.community': 'Community',

      // Events
      'events.title': 'Events & Achievements',
      'events.image.desc1':
        'First Borderless Conf São Paulo, Brazil, for more than 70 guests.',
      'events.image.desc2':
        'Interview with our founder, Yuri Pereira, for Entrepreneur magazine in Dubai, UAE 🇦🇪.',
      'events.image.desc3': 'Brainstorm during an AI hackathon in France 🇫🇷.',
      'events.image.desc4':
        'Borderless mentees took second place in the EthCC hackathon in Cannes, France 🇫🇷.',

      // Footer
      'footer.copyright.message': 'Borderless Coding. All rights reserved.',

      // Expansion
      'expansion.title': 'Expansion',
      'expansion.content': 'Expansion content',
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
