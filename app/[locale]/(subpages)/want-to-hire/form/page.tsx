"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/Form";
import { Input } from "@/app/components/ui/Input";
import { Spinner } from "@/app/components/ui/Spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { HireFormData, useHireFormSchema } from "../schemas/useHireFormSchema";

export default function Page() {
  const t = useTranslations("HirePage");
  const schema = useHireFormSchema();

  const form = useForm<HireFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      company: "",
      needs: "",
      desiredSalary: "",
      email: "",
      comments: "",
    },
  });

  const onSubmit = async (values: HireFormData) => {
    try {
      const res = await fetch("/api/hire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        toast.error(t("Form.errorToast"));
        return;
      }

      toast.success(t("Form.successToast"));
      form.reset();
    } catch {
      toast.error(t("Form.errorToast"));
    }
  };

  return (
    <section className="pt-[10svh] pb-[20svh]">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
        {t("h1")}
      </h1>
      <p className="text-gray mb-8">{t("subtitle")}</p>

      <div className="bg-tertiary p-2 rounded-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-6 px-2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Form.labels.name")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("Form.placeholders.name")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Form.labels.email")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("Form.placeholders.email")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Form.labels.company")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("Form.placeholders.company")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="needs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Form.labels.needs")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("Form.placeholders.needs")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="desiredSalary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Form.labels.desiredSalary")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("Form.placeholders.desiredSalary")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Form.labels.comments")}</FormLabel>
                  <FormControl>
                    <textarea
                      className="w-full bg-background rounded-md resize-none h-[10rem] p-4"
                      placeholder={t("Form.placeholders.comments")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="bg-primary w-full xl:w-[10rem] h-10 flex-center rounded-sm font-medium hover:bg-primary/80 disabled:opacity-50 transition-colors duration-150 cursor-pointer"
            >
              {form.formState.isSubmitting ? <Spinner /> : t("Form.submit")}
            </button>
          </form>
        </Form>
      </div>
    </section>
  );
}
