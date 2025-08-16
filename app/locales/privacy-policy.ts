import { Language } from '../hooks/useLanguage'

export const privacyPolicyTranslations: Record<
  Language,
  Record<string, string>
> = {
  en: {
    // Meta
    'meta-privacy-policy.title': 'Privacy Policy – Borderless Coding',
    'meta-privacy-policy.description':
      'Privacy Policy for Borderless Coding - Learn how we collect, use, and protect your personal information.',

    // Header
    'header-privacy-policy.title': 'Privacy Policy',
    'header-privacy-policy.subtitle':
      'Effective Date: July 01, 2023 | Last Updated: August 13, 2025',

    // Introduction
    'introduction.title': '1. Introduction',
    'introduction.content':
      'We are Borderless Coding. This Privacy Policy explains how we collect, use, share, and protect your information when you use our websites, programs, mentorships, and platform (collectively, the &quot;Services&quot;).',

    // Data Collection
    'dataCollection.title': '2. Information We Collect',
    'dataCollection.account.title': 'Account & Contact Information',
    'dataCollection.account.content':
      'Name, email address, password (encrypted), phone number (optional), and location (city/country).',
    'dataCollection.billing.title': 'Billing Information',
    'dataCollection.billing.content':
      'Payer name, billing address, tax IDs (if provided). Payment details are processed by secure third-party processors (Stripe/Appmax) - we do not store full credit card numbers.',
    'dataCollection.usage.title': 'Usage & Device Data',
    'dataCollection.usage.content':
      'Pages viewed, clicks, IP address, approximate location, device type, and browser information collected via cookies and similar technologies.',
    'dataCollection.content.title': 'Content & Submissions',
    'dataCollection.content.content':
      'Messages sent via contact forms, forum posts, assignments, and uploaded files.',
    'dataCollection.program.title': 'Program Data',
    'dataCollection.program.content':
      'Scheduling information, progress tracking, feedback, and recordings/notes (with your consent).',

    // How We Use Data
    'useData.title': '3. How We Use Your Information',
    'useData.serviceDelivery':
      '<strong>Service Delivery:</strong> Account creation, authentication, course/mentorship access, payment processing, and receipts.',
    'useData.platformImprovement':
      '<strong>Platform Improvement:</strong> Analytics, debugging, preventing abuse, and enhancing service quality.',
    'useData.communications':
      '<strong>Communications:</strong> Onboarding emails, product updates, and marketing emails (only with your consent).',
    'useData.legalCompliance':
      '<strong>Legal Compliance:</strong> Tax records, fraud prevention, and responding to legal obligations.',
    'useData.personalization':
      '<strong>Personalization:</strong> Recommended content and helpful reminders.',

    // Data Sharing
    'dataSharing.title': '4. Information Sharing',
    'dataSharing.content1':
      'We share data with trusted service providers who help us operate our Services, including Stripe, Appmax, Resend (email), Vimeo (video hosting), Notion (internal documentation), and analytics providers (Google/Meta.privacy-policy).',
    'dataSharing.content2':
      'We may also share information as required by law, during business transactions (mergers/acquisitions), or to prevent fraud and abuse.',

    // Cookies
    'cookies.title': '5. Cookies & Tracking',
    'cookies.content':
      'We use essential cookies for login and session management, plus optional analytics and marketing cookies. You can manage your preferences through our cookie banner with granular controls for Essential, Analytics, and Marketing cookies.',

    // International Transfers
    'internationalTransfers.title': '6. International Data Transfers',
    'internationalTransfers.content':
      'We operate internationally. Where required by law (such as GDPR or LGPD), we implement appropriate safeguards like Standard Contractual Clauses for cross-border data transfers.',

    // Data Retention
    'dataRetention.title': '7. Data Retention',
    'dataRetention.account':
      '<strong>Account Data:</strong> Retained for the life of your account plus up to 7 years for financial and audit purposes.',
    'dataRetention.program':
      '<strong>Program Records:</strong> Kept for 24 months after completion (unless you request earlier deletion, subject to legal obligations).',
    'dataRetention.marketing':
      '<strong>Marketing Data:</strong> Retained until you withdraw consent.',

    // Your Rights
    'yourRights.title': '8. Your Privacy Rights',
    'yourRights.content1':
      'Depending on your location (EEA/UK under GDPR, Brazil under LGPD, California under CPRA), you may have rights to access, correct, delete, port your data, object to or restrict processing, and withdraw consent.',
    'yourRights.content2':
      '<strong>To exercise your rights:</strong> Email us at <a href="mailto:contato@borderlesscoding.com">contato@borderlesscoding.com</a>. We will verify your identity and respond within the legally required timeframe.',

    // Children's Privacy
    'childrenPrivacy.title': '9. Children’s Privacy',
    'childrenPrivacy.content':
      'Our Services are intended for individuals aged 16 and older (or the local age of digital consent). We do not knowingly collect personal information from children under this age.',

    // Data Security
    'dataSecurity.title': '10. Data Security',
    'dataSecurity.content':
      'We implement industry-standard security measures including encryption in transit and at rest, access controls, least-privilege principles, audit logs, vendor security reviews, and regular backups. However, no security method is 100% secure.',

    // Policy Updates
    'policyUpdates.title': '11. Policy Updates',
    'policyUpdates.content':
      'We may update this policy periodically. Material changes will be communicated via email or in-app notifications. The effective date is shown at the top of this policy.',

    // Contact
    'contact.title': '12. Contact Us',
    'contact.content1':
      'If you have questions about this Privacy Policy or our data practices, please contact us:',
    'contact.emailLabel': 'Email:',
  },
  pt: {
    // Meta.privacy-policy
    'meta-privacy-policy.title': 'Política de Privacidade – Borderless Coding',
    'meta-privacy-policy.description':
      'Política de Privacidade do Borderless Coding - Saiba como coletamos, usamos e protegemos suas informações pessoais.',

    // Header
    'header-privacy-policy.title': 'Política de Privacidade',
    'header-privacy-policy.subtitle':
      'Data de Vigência: 01 de Julho de 2023 | Última Atualização: 13 de Agosto de 2025',

    // Introduction
    'introduction.title': '1. Introdução',
    'introduction.content':
      'Nós somos o Borderless Coding. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações quando você usa nossos sites, programas, mentorias e plataforma (coletivamente, os &quot;Serviços&quot;).',

    // Data Collection
    'dataCollection.title': '2. Informações que Coletamos',
    'dataCollection.account.title': 'Informações de Conta e Contato',
    'dataCollection.account.content':
      'Nome, endereço de e-mail, senha (criptografada), número de telefone (opcional) e localização (cidade/país).',
    'dataCollection.billing.title': 'Informações de Cobrança',
    'dataCollection.billing.content':
      'Nome do pagador, endereço de cobrança, identificações fiscais (se fornecidas). Detalhes de pagamento são processados por processadores terceiros seguros (Stripe/Appmax) - não armazenamos números completos de cartões de crédito.',
    'dataCollection.usage.title': 'Dados de Uso e Dispositivo',
    'dataCollection.usage.content':
      'Páginas visualizadas, cliques, endereço IP, localização aproximada, tipo de dispositivo e informações do navegador coletadas via cookies e tecnologias semelhantes.',
    'dataCollection.content.title': 'Conteúdo e Envios',
    'dataCollection.content.content':
      'Mensagens enviadas por formulários de contato, postagens em fóruns, tarefas e arquivos enviados.',
    'dataCollection.program.title': 'Dados do Programa',
    'dataCollection.program.content':
      'Informações de agendamento, acompanhamento de progresso, feedback e gravações/notas (com seu consentimento).',

    // How We Use Data
    'useData.title': '3. Como Usamos Suas Informações',
    'useData.serviceDelivery':
      '<strong>Entrega de Serviços:</strong> Criação de conta, autenticação, acesso a cursos/mentorias, processamento de pagamentos e recibos.',
    'useData.platformImprovement':
      '<strong>Melhoria da Plataforma:</strong> Análises, depuração, prevenção de abusos e melhoria da qualidade do serviço.',
    'useData.communications':
      '<strong>Comunicações:</strong> E-mails de integração, atualizações de produtos e e-mails de marketing (apenas com seu consentimento).',
    'useData.legalCompliance':
      '<strong>Conformidade Legal:</strong> Registros fiscais, prevenção de fraudes e resposta a obrigações legais.',
    'useData.personalization':
      '<strong>Personalização:</strong> Conteúdo recomendado e lembretes úteis.',

    // Data Sharing
    'dataSharing.title': '4. Compartilhamento de Informações',
    'dataSharing.content1':
      'Compartilhamos dados com provedores de serviços confiáveis que nos ajudam a operar nossos Serviços, incluindo Stripe, Appmax, Resend (e-mail), Vimeo (hospedagem de vídeo), Notion (documentação interna) e provedores de análise (Google/Meta.privacy-policy).',
    'dataSharing.content2':
      'Também podemos compartilhar informações conforme exigido por lei, durante transações comerciais (fusões/aquisições) ou para prevenir fraudes e abusos.',

    // Cookies
    'cookies.title': '5. Cookies e Rastreamento',
    'cookies.content':
      'Usamos cookies essenciais para login e gerenciamento de sessões, além de cookies opcionais de análise e marketing. Você pode gerenciar suas preferências por meio do nosso banner de cookies com controles granulares para cookies Essenciais, de Análise e de Marketing.',

    // International Transfers
    'internationalTransfers.title': '6. Transferências Internacionais de Dados',
    'internationalTransfers.content':
      'Operamos internacionalmente. Quando exigido por lei (como GDPR ou LGPD), implementamos salvaguardas apropriadas, como Cláusulas Contratuais Padrão, para transferências de dados transfronteiriças.',

    // Data Retention
    'dataRetention.title': '7. Retenção de Dados',
    'dataRetention.account':
      '<strong>Dados da Conta:</strong> Retidos durante a vida útil da sua conta, mais até 7 anos para fins financeiros e de auditoria.',
    'dataRetention.program':
      '<strong>Registros do Programa:</strong> Mantidos por 24 meses após a conclusão (a menos que você solicite exclusão anterior, sujeito a obrigações legais).',
    'dataRetention.marketing':
      '<strong>Dados de Marketing:</strong> Retidos até que você retire o consentimento.',

    // Your Rights
    'yourRights.title': '8. Seus Direitos de Privacidade',
    'yourRights.content1':
      'Dependendo da sua localização (EEA/Reino Unido sob GDPR, Brasil sob LGPD, Califórnia sob CPRA), você pode ter direitos de acessar, corrigir, excluir, portar seus dados, objetar ou restringir o processamento e retirar o consentimento.',
    'yourRights.content2':
      '<strong>Para exercer seus direitos:</strong> Envie um e-mail para <a href="mailto:contato@borderlesscoding.com">contato@borderlesscoding.com</a>. Verificaremos sua identidade e responderemos dentro do prazo legalmente exigido.',

    // Children's Privacy
    'childrenPrivacy.title': '9. Privacidade de Crianças',
    'childrenPrivacy.content':
      'Nossos Serviços são destinados a indivíduos com 16 anos ou mais (ou a idade local de consentimento digital). Não coletamos intencionalmente informações pessoais de crianças abaixo dessa idade.',

    // Data Security
    'dataSecurity.title': '10. Segurança de Dados',
    'dataSecurity.content':
      'Implementamos medidas de segurança padrão da indústria, incluindo criptografia em trânsito e em repouso, controles de acesso, princípios de privilégio mínimo, logs de auditoria, revisões de segurança de fornecedores e backups regulares. No entanto, nenhum método de segurança é 100% seguro.',

    // Policy Updates
    'policyUpdates.title': '11. Atualizações da Política',
    'policyUpdates.content':
      'Podemos atualizar esta política periodicamente. Alterações materiais serão comunicadas por e-mail ou notificações no aplicativo. A data de vigência é exibida no topo desta política.',

    // Contact
    'contact.title': '12. Contate-nos',
    'contact.content1':
      'Se você tiver dúvidas sobre esta Política de Privacidade ou nossas práticas de dados, entre em contato conosco:',
    'contact.emailLabel': 'E-mail:',
  },
}
