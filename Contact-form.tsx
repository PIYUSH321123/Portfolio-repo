"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
} from "@/components/ui/form";
import { Field, FieldLabel, FieldError, FieldContent } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // backend logic here
    console.log(values);
    toast.success("Message sent successfully.");

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <Field>
              <FieldLabel>Name</FieldLabel>
              <FieldContent>
                <Input placeholder="Piyush Neware" {...field} />
              </FieldContent>
              <FieldError />
            </Field>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Field>
              <FieldLabel>Email</FieldLabel>
              <FieldContent>
                <Input placeholder="piyushneware123@gmail.com" {...field} />
              </FieldContent>
              <FieldError />
            </Field>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <Field>
              <FieldLabel>Message</FieldLabel>
              <FieldContent>
                <Textarea
                  placeholder="Tell me about your requirements"
                  {...field}
                  className="min-h-[120px]"
                />
              </FieldContent>
              <FieldError />
            </Field>
          )}
        />
        <Button type="submit" 
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 flex w-full justify-center items-center rounded-lg
        transition-all duration-200 hover:scale-[1.02] transform active:scale-95">
          Send message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;