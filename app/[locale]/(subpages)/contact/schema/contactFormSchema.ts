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

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(120, { message: "Name must be under 120 characters long" }),
  email: z.email({ message: "Invalid email address" }),
  topic: z.enum(contactTopics),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(3000, { message: "Message must be under 3000 characters long" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
