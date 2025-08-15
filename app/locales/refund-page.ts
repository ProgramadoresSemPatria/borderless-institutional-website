import { Language } from '../hooks/useLanguage'

export const refundPolicyTranslations: Record<
  Language,
  Record<string, string>
> = {
  en: {
    // Meta
    'meta-refund.title': 'Refund & Cancellation Policy – Borderless Coding',
    'meta.refund.description':
      'Refund and cancellation policy for Borderless Coding digital services, mentorships, and programs.',

    // Header
    'header-refund.title': 'Refund & Cancellation Policy',
    'header-refund.subtitle':
      'Effective Date: July 01, 2023 | Last Updated: August 13, 2025',

    // Standard Policy
    'standard.title': 'Standard (mentorship cohorts)',
    'standard.coolingOff.title': 'Cooling-off Period',
    'standard.coolingOff.content':
      'Full refund within <strong>7 days</strong> of purchase <strong>if you haven’t accessed paid content or attended live sessions</strong>.',
    'standard.after7Days.title':
      'After 7 days or after accessing content/live calls',
    'standard.after7Days.content':
      'All sales are final for cohorts and mentorships (your seat is reserved and capacity-limited).',
    'standard.paymentPlans.title': 'Payment plans',
    'standard.paymentPlans.content':
      'You are committing to the full program price; installments continue unless a refund is approved under the rules above.',
    'standard.chargebacks.title': 'Chargebacks',
    'standard.chargebacks.content':
      'Please contact support first; friendly chargebacks may lead to account suspension.',
    'standard.digitalProducts.title':
      'Digital products (templates, recordings)',
    'standard.digitalProducts.content': 'Non-refundable after download/access.',
    'standard.thirdPartyCosts.title': 'Scheduling fees or third-party costs',
    'standard.thirdPartyCosts.content': 'Non-refundable if already incurred.',
    'standard.refundRequest.title': 'How to request a refund',
    'standard.refundRequest.content':
      'Email <a href="mailto:contato@borderlesscoding.com"><strong>contato@borderlesscoding.com</strong></a> with your order ID and reason. We respond within <strong>5 business days</strong>.',
    'standard.refundMethod.title': 'Refund method & timing',
    'standard.refundMethod.content':
      'Returned to the original payment method within <strong>5–10 business days</strong> after approval (processor dependent).',
    'standard.abusePrevention.title': 'Abuse prevention',
    'standard.abusePrevention.content':
      'We may deny repeated refund requests by the same customer.',

    // Summary Table
    'summary.title': 'Refund Eligibility Summary',
    'summary.serviceProduct': 'Service/Product',
    'summary.refundWindow': 'Refund Window',
    'summary.conditions': 'Conditions',
    'summary.afterAccess': 'After Access',
    'summary.mentorshipCohorts.service': 'Mentorship Cohorts',
    'summary.mentorshipCohorts.refundWindow': '7 days',
    'summary.mentorshipCohorts.conditions':
      'No content accessed, no sessions attended',
    'summary.mentorshipCohorts.afterAccess': 'Final sale',
    'summary.paymentPlans.service': 'Payment Plans',
    'summary.paymentPlans.refundWindow': '7 days',
    'summary.paymentPlans.conditions': 'Same as above',
    'summary.paymentPlans.afterAccess': 'Continue installments',
    'summary.thirdPartyCosts.service': 'Third-party Costs',
    'summary.thirdPartyCosts.refundWindow': '—',
    'summary.thirdPartyCosts.conditions': 'Non-refundable if incurred',
    'summary.thirdPartyCosts.afterAccess': 'Non-refundable',

    // Contact
    'contact.title': 'Contact for Refunds',
    'contact.content1':
      'To request a refund, please email us with the following information:',
    'contact.orderId': 'Your order ID or transaction reference',
    'contact.reason': 'Reason for the refund request',
    'contact.purchaseDate': 'Purchase date',
    'contact.emailAddress': 'Email address used for the purchase',
    'contact.emailLabel': 'Email:',
    'contact.email': 'contato@borderlesscoding.com',
    'contact.responseTime':
      'We respond to refund requests within 5 business days',
  },
  pt: {
    // Meta.refund
    'meta-refund.title':
      'Política de Reembolso e Cancelamento – Borderless Coding',
    'meta-refund.description':
      'Política de reembolso e cancelamento para serviços digitais, mentorias e programas do Borderless Coding.',

    // Header
    'header-refund.title': 'Política de Reembolso e Cancelamento',
    'header-refund.subtitle':
      'Data de Vigência: 01 de Julho de 2023 | Última Atualização: 13 de Agosto de 2025',

    // Standard Policy
    'standard.title': 'Mentorias e Programas',
    'standard.coolingOff.title': 'Período de Arrefecimento',
    'standard.coolingOff.content':
      'Reembolso total dentro de <strong>7 dias</strong> após a compra <strong>se você não acessou conteúdo pago ou participou de sessões ao vivo</strong>.',
    'standard.after7Days.title':
      'Após 7 dias ou após acessar conteúdo/chamadas ao vivo',
    'standard.after7Days.content':
      'Todas as vendas são finais para mentorias (sua vaga é reservada e limitada).',
    'standard.paymentPlans.title': 'Planos de pagamento',
    'standard.paymentPlans.content':
      'Você se compromete com o preço total do programa; as parcelas continuam a menos que um reembolso seja aprovado conforme as regras acima.',
    'standard.chargebacks.title': 'Estornos',
    'standard.chargebacks.content':
      'Por favor, entre em contato com o suporte primeiro; estornos amigáveis podem levar à suspensão da conta.',
    'standard.digitalProducts.title': 'Produtos digitais (modelos, gravações)',
    'standard.digitalProducts.content':
      'Não reembolsável após download/acesso.',
    'standard.thirdPartyCosts.title':
      'Taxas de agendamento ou custos de terceiros',
    'standard.thirdPartyCosts.content': 'Não reembolsável se já incorridos.',
    'standard.refundRequest.title': 'Como solicitar um reembolso',
    'standard.refundRequest.content':
      'Envie um e-mail para <a href="mailto:contato@borderlesscoding.com"><strong>contato@borderlesscoding.com</strong></a> com seu ID de pedido e motivo. Respondemos dentro de <strong>5 dias úteis</strong>.',
    'standard.refundMethod.title': 'Método e prazo de reembolso',
    'standard.refundMethod.content':
      'Retornado ao método de pagamento original dentro de <strong>5–10 dias úteis</strong> após a aprovação (dependente do processador).',
    'standard.abusePrevention.title': 'Prevenção de abuso',
    'standard.abusePrevention.content':
      'Podemos negar solicitações de reembolso repetidas pelo mesmo cliente.',

    // Summary Table
    'summary.title': 'Resumo de Elegibilidade para Reembolso',
    'summary.serviceProduct': 'Serviço/Produto',
    'summary.refundWindow': 'Janela de Reembolso',
    'summary.conditions': 'Condições',
    'summary.afterAccess': 'Após Acesso',
    'summary.mentorshipCohorts.service': 'Mentoria',
    'summary.mentorshipCohorts.refundWindow': '7 dias',
    'summary.mentorshipCohorts.conditions':
      'Nenhum conteúdo acessado, nenhuma sessão participada',
    'summary.mentorshipCohorts.afterAccess': 'Venda final',
    'summary.paymentPlans.service': 'Planos de Pagamento',
    'summary.paymentPlans.refundWindow': '7 dias',
    'summary.paymentPlans.conditions': 'Mesmo que acima',
    'summary.paymentPlans.afterAccess': 'Continuar parcelas',
    'summary.thirdPartyCosts.service': 'Custos de Terceiros',
    'summary.thirdPartyCosts.refundWindow': '—',
    'summary.thirdPartyCosts.conditions': 'Não reembolsável se incorridos',
    'summary.thirdPartyCosts.afterAccess': 'Não reembolsável',

    // Contact
    'contact.title': 'Contato para Reembolsos',
    'contact.content1':
      'Para solicitar um reembolso, envie um e-mail com as seguintes informações:',
    'contact.orderId': 'Seu ID de pedido ou referência de transação',
    'contact.reason': 'Motivo da solicitação de reembolso',
    'contact.purchaseDate': 'Data da compra',
    'contact.emailAddress': 'Endereço de e-mail usado para a compra',
    'contact.emailLabel': 'E-mail:',
    'contact.email': 'contato@borderlesscoding.com',
    'contact.responseTime':
      'Respondemos às solicitações de reembolso dentro de 5 dias úteis',
  },
}
