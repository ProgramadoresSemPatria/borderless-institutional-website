import { Language } from '../hooks/useLanguage'

export const howItWorksTranslations: Record<
  Language,
  Record<string, string>
> = {
  en: {
    // Meta
    'meta-how-it-works.title': 'How Borderless Coding Works',
    'meta-how-it-works.description':
      'Service delivery information for Borderless Coding digital programs and mentorships.',

    // Header
    'header-how-it-works.title': 'How Borderless Coding Works',
    'header-how-it-works.subtitle':
      'Service Delivery Information | Last Updated: August 13, 2025',

    // Overview
    'overview.title': 'Overview',
    'overview.content':
      'Borderless Coding provides <strong>digital services</strong>: mentorships, cohort programs, and access to an online platform. Nothing physical is shipped.',

    // Step-by-step
    'stepByStep.title': 'Step-by-step',
    'step1.title': '1. Purchase & Confirmation',
    'step1.item1':
      'Pay via <strong>Stripe</strong> or <strong>Appmax</strong>.',
    'step1.item2':
      'You’ll receive an email receipt and account-activation link.',
    'step2.title': '2. Account Activation',
    'step2.item1':
      'Verify your email → automatically provisioned role (BASE, PSP).',
    'step2.item2':
      'You’ll see the <strong>Onboarding</strong> page with next steps.',
    'step3.title': '3. Access & Scheduling',
    'step3.item1': 'Immediate access to available modules/content.',
    'step3.item2':
      'Mentorship calls scheduled via our calendar tool; time-zone friendly options.',
    'step4.title': '4. Program Delivery',
    'step4.item1':
      'Video lessons hosted on <strong>Vimeo</strong>; resources downloadable.',
    'step4.item2':
      'Live calls via Meet; replays available.',
    'step4.item3': 'Community/forum access.',
    'step5.title': '5. Support',
    'step5.item1':
      'Email <a href="mailto:contato@borderlesscoding.com"><strong>contato@borderlesscoding.com</strong></a> or use the in-app help widget.',
    'step5.item2':
      'Typical first response: <strong>within 1 business day</strong> (Mon–Fri, BRT).',
    'step5.item3': 'Tech incidents prioritized by severity.',
    'step6.title': '6. Cancellations & Rescheduling',
    'step6.item1':
      'You may reschedule 1:1 sessions <strong>up to 24 hours</strong> before the start time.',
    'step6.item2':
      'Late cancellations/no-shows may be deducted from your session quota.',

    // Plan Comparison
    'planComparison.title': 'Plan Comparison',
    'planComparison.feature': 'Feature',
    'planComparison.base': 'BASE',
    'planComparison.psp': 'PSP',
    'planComparison.platformAccess': 'Platform Access',
    'planComparison.modulesContent': 'Modules/Content',
    'planComparison.mentorshipLiveCalls': 'Mentorship Live Calls',
    'planComparison.mentorshipOneOnOne': 'Mentorship Call One-on-One',
    'planComparison.communityForum': 'Community/Forum',
    'planComparison.liveCallReplays': 'Live Call Replays',
    'planComparison.videoLessons': 'Video Lessons',

    'planComparison.baseMentorshipLiveCalls': '✓ (monthly)',
    'planComparison.pspMentorshipLiveCalls': '✓ (monthly)',
    'planComparison.baseMentorshipOneOnOne': '—',
    'planComparison.pspMentorshipOneOnOne': '✓',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How quickly can I access my program after purchase?',
    'faq.a1':
      'You’ll receive immediate access after email verification. The process typically takes just a few minutes.',
    'faq.q2': 'What payment methods do you accept?',
    'faq.a2':
      'We accept payments via Stripe and Appmax, which support major credit cards and various payment methods.',
    'faq.q3': 'Can I reschedule my mentorship sessions?',
    'faq.a3':
      'Yes, you may reschedule 1:1 sessions up to 24 hours before the start time. Late cancellations or no-shows may be deducted from your session quota.',
    'faq.q4': 'What if I need technical support?',
    'faq.a4':
      'Email contato@borderlesscoding.com or use the in-app help widget. We typically respond within 1 business day (Mon–Fri, BRT).',
    'faq.q5': 'Are there any physical products shipped?',
    'faq.a5':
      'No, Borderless Coding provides 100% digital services. Nothing physical is shipped.',

    // Contact
    'contact-how-it-works.title': 'Contact',
    'contact-how-it-works.emailLabel': 'Email:',
    'contact-how-it-works.email': 'contato@borderlesscoding.com',
  },
  pt: {
    // Meta.how-it-works
    'meta-how-it-works.title': 'Como Funciona a Borderless Coding',
    'meta-how-it-works.description':
      'Informações sobre a entrega de serviços para programas digitais e mentorias do Borderless Coding.',

    // Header
    'header-how-it-works.title': 'Como Funciona a Borderless Coding',
    'header-how-it-works.subtitle':
      'Informações de Entrega de Serviços | Última Atualização: 13 de Agosto de 2025',

    // Overview
    'overview.title': 'Visão Geral',
    'overview.content':
      'A Borderless Coding oferece <strong>serviços digitais</strong>: mentorias, programas e acesso a uma plataforma online. Não há envio de produtos físicos.',

    // Step-by-step
    'stepByStep.title': 'Passo a Passo',
    'step1.title': '1. Compra e Confirmação',
    'step1.item1':
      'Pague via <strong>Stripe</strong> ou <strong>Appmax</strong>.',
    'step1.item2':
      'Você receberá um recibo por e-mail e um link de ativação da conta.',
    'step2.title': '2. Ativação da Conta',
    'step2.item1':
      'Verifique seu e-mail → função provisionada automaticamente (BASE, PSP).',
    'step2.item2':
      'Você verá a página de <strong>Onboarding</strong> com os próximos passos.',
    'step3.title': '3. Acesso e Agendamento',
    'step3.item1': 'Acesso imediato aos módulos/conteúdos disponíveis.',
    'step3.item2':
      'Chamadas de mentoria agendadas via nossa ferramenta de calendário; opções amigáveis ao fuso horário.',
    'step4.title': '4. Produto',
    'step4.item1':
      'Aulas em vídeo hospedadas no <strong>Vimeo</strong>; recursos disponíveis para download.',
    'step4.item2':
      'Chamadas ao vivo via Meet; gravações disponíveis.',
    'step4.item3': 'Acesso à comunidade/fórum.',
    'step5.title': '5. Suporte',
    'step5.item1':
      'Envie um e-mail para <a href="mailto:contato@borderlesscoding.com"><strong>contato@borderlesscoding.com</strong></a> ou use o widget de ajuda no aplicativo.',
    'step5.item2':
      'Primeira resposta típica: <strong>dentro de 1 dia útil</strong> (Seg–Sex, BRT).',
    'step5.item3': 'Incidentes técnicos priorizados por severidade.',
    'step6.title': '6. Cancelamentos e Reagendamentos',
    'step6.item1':
      'Você pode reagendar sessões 1:1 até <strong>24 horas</strong> antes do horário de início.',
    'step6.item2':
      'Cancelamentos tardios ou ausências podem ser deduzidos da sua cota de sessões.',

    // Plan Comparison
    'planComparison.title': 'Comparação de Planos',
    'planComparison.feature': 'Funcionalidade',
    'planComparison.base': 'BASE',
    'planComparison.psp': 'PSP',
    'planComparison.platformAccess': 'Acesso à Plataforma',
    'planComparison.modulesContent': 'Módulos/Conteúdo',
    'planComparison.mentorshipLiveCalls': 'Chamadas ao Vivo de Mentoria',
    'planComparison.mentorshipOneOnOne': 'Chamada de Mentoria Individual',
    'planComparison.communityForum': 'Comunidade/Fórum',
    'planComparison.liveCallReplays': 'Gravações de Chamadas ao Vivo',
    'planComparison.videoLessons': 'Aulas em Vídeo',

    'planComparison.baseMentorshipLiveCalls': '✓ (mensal)',
    'planComparison.pspMentorshipLiveCalls': '✓ (mensal)',
    'planComparison.baseMentorshipOneOnOne': '—',
    'planComparison.pspMentorshipOneOnOne': '✓',

    // FAQ
    'faq.title': 'Perguntas Frequentes',
    'faq.q1': 'Quão rápido posso acessar meu programa após a compra?',
    'faq.a1':
      'Você receberá acesso imediato após a verificação do e-mail. O processo geralmente leva apenas alguns minutos.',
    'faq.q2': 'Quais métodos de pagamento vocês aceitam?',
    'faq.a2':
      'Aceitamos pagamentos via Stripe e Appmax, que suportam os principais cartões de crédito e vários métodos de pagamento.',
    'faq.q3': 'Posso reagendar minhas sessões de mentoria?',
    'faq.a3':
      'Sim, você pode reagendar sessões 1:1 até 24 horas antes do horário de início. Cancelamentos tardios ou ausências podem ser deduzidos da sua cota de sessões.',
    'faq.q4': 'E se eu precisar de suporte técnico?',
    'faq.a4':
      'Envie um e-mail para contato@borderlesscoding.com ou use o widget de ajuda no aplicativo. Geralmente respondemos dentro de 1 dia útil (Seg–Sex, BRT).',
    'faq.q5': 'Há algum produto físico enviado?',
    'faq.a5':
      'Não, a Borderless Coding oferece serviços 100% digitais. Nada físico é enviado.',

    // Contact
    'contact-how-it-works.title': 'Contato',
    'contact-how-it-works.emailLabel': 'E-mail:',
    'contact-how-it-works.email': 'contato@borderlesscoding.com',
  },
}
