export interface FormData {
  name: string
  email: string
  topic: string
  message: string
  consent: boolean
  website: string
}

export interface FormErrors {
  name?: string
  email?: string
  topic?: string
  message?: string
  consent?: string
  spam?: string
  submit?: string
}

export interface TopicOption {
  value: string
  label: string
}
