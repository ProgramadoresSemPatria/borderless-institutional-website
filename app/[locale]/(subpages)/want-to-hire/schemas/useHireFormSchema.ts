"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import z from "zod";

export function useHireFormSchema() {
  const t = useTranslations("HirePage.Form.validation");

  const schema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .min(2, { message: t("nameMin") })
          .max(120, { message: t("nameMax") }),
        company: z.string().min(1, { message: t("companyRequired") }),
        needs: z.string().min(1, { message: t("needsRequired") }),
        desiredSalary: z
          .string()
          .min(1, { message: t("desiredSalaryRequired") }),
        email: z.string().email({ message: t("emailInvalid") }),
        comments: z
          .string()
          .max(3000, { message: t("commentsMax") })
          .optional(),
      }),
    [t]
  );

  return schema;
}

export type HireFormData = z.infer<ReturnType<typeof useHireFormSchema>>;
