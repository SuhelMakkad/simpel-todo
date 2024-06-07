"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";

import { STATUS, STATUS_OPTIONS } from "@/utils/constant";

export type EditTodoFormProps =
  | {
      title: string;
      description: string;
      status: string;
      isNew?: false;
    }
  | {
      isNew: true;
    };

const editFormSchema = z.object({
  title: z
    .string({
      message: "Title is required",
    })
    .trim()
    .min(1)
    .max(50),
  description: z
    .string({
      message: "Description is required",
    })
    .trim()
    .min(1)
    .max(500),
  status: z.enum(Object.values(STATUS) as [string, ...string[]], {
    invalid_type_error: "Invalid status type",
    message: "Status is required",
  }),
});

const defaultValues = {
  title: "",
  description: "",
  status: STATUS.IN_PROGRESS,
};

type EditFormSchema = z.infer<typeof editFormSchema>;

export const EditTodoForm = (props: EditTodoFormProps) => {
  const form = useForm<EditFormSchema>({
    resolver: zodResolver(editFormSchema),
    defaultValues: { ...(props.isNew ? defaultValues : props) },
  });

  function onSubmit(values: EditFormSchema) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Finish the project" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Write description for your task" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {STATUS_OPTIONS.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </form>
    </Form>
  );
};
