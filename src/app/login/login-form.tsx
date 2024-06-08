"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z
    .string({
      message: "Please enter a valid email address",
    })
    .email(),
  password: z
    .string({
      message: "Please enter a password",
    })
    .min(1),
});

type LoginFormValues = z.infer<typeof formSchema>;

const defaultValues: LoginFormValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...defaultValues },
  });

  function onSubmit(values: LoginFormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="your account password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="sm" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};
