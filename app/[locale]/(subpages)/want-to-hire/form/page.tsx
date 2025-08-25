"use client";

import {
  HireFormData,
  hireSchema,
} from "@/app/[locale]/(subpages)/want-to-hire/schemas/hireSchema";
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
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Page() {
  const form = useForm<HireFormData>({
    resolver: zodResolver(hireSchema),
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
        toast.error("Error sending email");
        return;
      }

      toast.success("Message sent successfully!");
      form.reset();
    } catch (err) {
      toast.error("Error sending email");
    }
  };

  return (
    <section className="pt-[10svh] pb-[20svh]">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
        Get access to our talent pool
      </h1>
      <p className="text-gray mb-8">
        Fill out the form and we’ll get back to you as soon as possible.
      </p>

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
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
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
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Needs</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Desired salary</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Comments</FormLabel>
                  <FormControl>
                    <textarea className="w-full bg-background rounded-md resize-none h-[10rem] p-4" />
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
              {form.formState.isSubmitting ? <Spinner /> : "Send Email"}
            </button>
          </form>
        </Form>
      </div>
    </section>
  );
}
