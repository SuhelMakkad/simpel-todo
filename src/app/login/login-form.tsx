"use client";

import { useState } from "react";

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

import { loginWithEmail } from "@/utils/firebase/auth";
import { Loader2 } from "lucide-react";

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
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...defaultValues },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);

    try {
      await loginWithEmail(values.email, values.password);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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

        <Button type="submit" size="sm" className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="animate-spin mr-2 w-4 h-4" />}
          Submit
        </Button>
      </form>
    </Form>
  );
};
