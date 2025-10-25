"use client";

import { useMessages } from "next-intl";

export interface Testimonial {
  img: string;
  name: string;
  role: string;
  testimony?: string;
  iframeSrc?: string;
  description?: string;
  isHorizontal?: boolean;
}

export function useTestimonials(): Testimonial[] {
  const messages = useMessages();
  const testimonials = messages.HomePage.Testimonials.list as Testimonial[];
  return testimonials;
}
