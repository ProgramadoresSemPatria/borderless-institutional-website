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
import { Popover, PopoverContent } from "@/app/components/ui/Popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/Select";
import { Spinner } from "@/app/components/ui/Spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/ui/Tooltip";
import { zodResolver } from "@hookform/resolvers/zod";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Info } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { ContactFormData } from "./schema/useContactFormSchema";
import {
  contactTopics,
  useContactFormSchema,
} from "./schema/useContactFormSchema";

export default function Page() {
  const t = useTranslations("ContactPage");
  const schema = useContactFormSchema();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      topic: "General",
      message: "",
      orderId: "",
    },
  });

  const onSubmit = async (values: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
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

      if ((values.orderId?.length ?? 0) > 0) {
        await fetch("https://n8n.borderlesscoding.com/webhook/refund", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
      }

      toast.success(t("Form.successToast"));
      form.reset();
    } catch {
      toast.error(t("Form.errorToast"));
    }
  };

  const selectedTopic = form.watch("topic");

  return (
    <section className="pt-36 pb-[10svh]">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
        {t("h1")}
      </h1>
      <p className="text-gray mb-8">{t("subtitle")}</p>

      <div className="flex gap-4 flex-col xl:flex-row bg-tertiary p-2 rounded-md mb-8">
        <aside className="flex flex-col space-y-4 bg-[#212121] p-4 basis-1/3 rounded-sm">
          <div className="text-xl font-semibold">
            {t("aside.contactDetails")}
          </div>

          <div className="space-y-6 xl:mb-auto">
            <p>
              <span className="block font-bold">
                {t("aside.directEmailLabel")}
              </span>
              <a
                href="mailto:contato@borderlesscoding.com"
                className="text-secondary hover:underline break-normal"
              >
                contato@borderlesscoding.com
              </a>
            </p>
            <p>
              <span className="block font-bold">{t("aside.phoneLabel")}</span>
              <a
                href="tel:+16507694117"
                className="text-secondary hover:underline break-normal"
              >
                +1 650 769 4117
              </a>
            </p>
            <p>
              <span className="block font-bold">
                {t("aside.officeHoursLabel")}
              </span>
              {t("aside.officeHoursValue")}
            </p>
            <p>
              <span className="block font-bold">
                {t("aside.responseTimeLabel")}
              </span>
              {t("aside.responseTimeValue")}
            </p>
          </div>

          <div className="text-gray text-sm mt-12 xl:mt-0 max-w-md">
            {t("aside.address")}
          </div>
        </aside>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 py-6 px-2 grow"
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
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Form.labels.topic")}</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full bg-background border-0 py-5">
                        <SelectValue
                          placeholder={t("Form.placeholders.topic")}
                        />
                      </SelectTrigger>
                      <SelectContent className="border-0">
                        {contactTopics.map((topic) => {
                          const label = t(`Form.topics.${topic}`);
                          return (
                            <SelectItem key={topic} value={topic}>
                              {label}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {selectedTopic === "Refund" && (
              <FormField
                control={form.control}
                name="orderId"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <div className="flex items-center gap-2">
                      <FormLabel>{t("Form.labels.orderId")}</FormLabel>

                      <Popover>
                        <PopoverTrigger className="2xl:hidden">
                          <Info className="text-white/50 size-4" />
                        </PopoverTrigger>
                        <PopoverContent
                          align="center"
                          collisionPadding={{
                            left: 30,
                          }}
                          className="max-w-sm bg-foreground text-background text-sm font-medium"
                        >
                          {t("Form.labels.orderIdLabel")}
                        </PopoverContent>
                      </Popover>

                      <Tooltip>
                        <TooltipTrigger className="hidden 2xl:block">
                          <Info className="text-white/50 size-4" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-sm text-sm flex-center font-medium">
                          {t("Form.labels.orderIdLabel")}
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Form.labels.message")}</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder={t("Form.placeholders.message")}
                      className="min-h-[100px] bg-background p-4 rounded-md h-[10rem] resize-none"
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
