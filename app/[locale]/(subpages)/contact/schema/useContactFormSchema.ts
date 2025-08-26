"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import z from "zod";
import { contactTopics } from "./contactFormSchema";

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
