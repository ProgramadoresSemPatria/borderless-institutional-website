import { useState, ChangeEvent, MouseEvent } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { FormErrors, FormData, TopicOption } from '@/utils/types'

export const useContactForm = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    topic: '',
    message: '',
    consent: false,
    website: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const topicOptions: TopicOption[] = [
    { value: '', label: t('form.topic.placeholder') },
    { value: 'general', label: t('form.topic.general') },
    { value: 'technical', label: t('form.topic.technical') },
    { value: 'billing', label: t('form.topic.billing') },
    { value: 'mentorship', label: t('form.topic.mentorship') },
    { value: 'refund', label: t('form.topic.refund') },
    { value: 'partnership', label: t('form.topic.partnership') },
    { value: 'other', label: t('form.topic.other') },
  ]

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t('form.error.name.required')
    } else if (formData.name.length > 120) {
      newErrors.name = t('form.error.name.length')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = t('form.error.email.required')
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('form.error.email.invalid')
    }

    if (!formData.topic) {
      newErrors.topic = t('form.error.topic')
    }

    if (!formData.message.trim()) {
      newErrors.message = t('form.error.message.required')
    } else if (formData.message.length > 3000) {
      newErrors.message = t('form.error.message.length')
    }

    if (!formData.consent) {
      newErrors.consent = t('form.error.consent')
    }

    if (formData.website) {
      newErrors.spam = 'Spam detected'
    }

    return newErrors
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ): void => {
    const target = e.target
    const { name, value, type } = target

    let checked: boolean | string = value

    if (target instanceof HTMLInputElement && type === 'checkbox') {
      checked = target.checked
    }

    setFormData((prev: FormData) => ({
      ...prev,
      [name]: checked,
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev: FormErrors) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.preventDefault()

    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const ticketId: string = 'BC' + Date.now().toString().slice(-6)

      console.log('Form submission:', {
        ...formData,
        ticketId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      })

      setIsSubmitted(true)
    } catch (error: unknown) {
      setErrors({
        submit: t('form.error.submit'),
      })
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      topic: '',
      message: '',
      consent: false,
      website: '',
    })
    setErrors({})
  }

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    topicOptions,
    handleInputChange,
    handleSubmit,
    resetForm,
  }
}
