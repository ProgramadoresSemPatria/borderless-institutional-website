"use client";

import { useTranslations } from "next-intl";
import { useMemo } from "react";
import z from "zod";

export const contactTopics = [
  "General",
  "Technical",
  "Billing",
  "Mentorship",
  "Refund",
  "Partnership",
  "Other",
] as const;

export type ContactFormData = {
  name: string;
  email: string;
  topic: (typeof contactTopics)[number];
  message: string;
};

export function useContactFormSchema() {
  const t = useTranslations("ContactPage.Form.validation");

  const schema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .min(2, { message: t("nameMin") })
          .max(120, { message: t("nameMax") }),
        email: z.string().email({ message: t("emailInvalid") }),
        topic: z.enum(contactTopics),
        message: z
          .string()
          .min(10, { message: t("messageMin") })
          .max(3000, { message: t("messageMax") }),
      }),
    [t]
  );

  return schema;
}
