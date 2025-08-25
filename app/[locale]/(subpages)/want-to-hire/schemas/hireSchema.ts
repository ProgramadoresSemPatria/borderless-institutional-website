import z from "zod";

export const hireSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  company: z.string().min(1, { message: "Company is required" }),
  needs: z.string().min(1, { message: "Needs is required" }),
  desiredSalary: z.string().min(1, { message: "Desired salary is required" }),
  email: z.email({ message: "Invalid email address" }),
  comments: z
    .string()
    .max(3000, { message: "Comments must be under 3000 characters long" })
    .optional(),
});

export type HireFormData = z.infer<typeof hireSchema>;
