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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/Select";
import { Spinner } from "@/app/components/ui/Spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  ContactFormData,
  contactFormSchema,
  contactTopics,
} from "./schema/contactFormSchema";

export default function Page() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "General",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormData) => {
    try {
      const res = await fetch("/api/send", {
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
        Contact Borderless Coding
      </h1>
      <p className="text-gray mb-8">
        Fill out the form and we’ll get back to you as soon as possible.
      </p>

      <div className="grid gap-4 xl:grid-cols-[30%_1fr] bg-tertiary p-2 rounded-md mb-8">
        <aside className="flex flex-col space-y-4 bg-[#212121] p-4 mb-8 min-h-full">
          <div className="text-xl font-semibold">Contact details</div>
          <div className="space-y-6 grow">
            <p>
              <span className="block font-bold">Direct email: </span>
              <a
                href="mailto:contato@borderlesscoding.com"
                className="text-secondary hover:underline break-normal"
              >
                contato@borderlesscoding.com
              </a>
            </p>
            <p>
              <span className="block font-bold">Phone: </span>
              <span className="text-secondary">+5521971417218</span>
            </p>
            <p>
              <span className="block font-bold">Office hours: </span>
              Mon–Fri, 9:00–18:00 BRT
            </p>
            <p>
              <span className="block font-bold">Response time: </span>
              within 1 business day
            </p>
          </div>

          <div className="text-gray text-sm">
            Borderless Coding LLC. 30 N Gould St, STE R, Sheridan, WY 82801
            Wyoming, USA
          </div>
        </aside>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 py-6 px-2"
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
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Topic</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full bg-background border-0 py-5">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent className="border-0">
                        {contactTopics.map((topic) => (
                          <SelectItem key={topic} value={topic}>
                            {topic}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Write your message here..."
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
              {form.formState.isSubmitting ? <Spinner /> : "Send Email"}
            </button>
          </form>
        </Form>
      </div>
    </section>
  );
}
