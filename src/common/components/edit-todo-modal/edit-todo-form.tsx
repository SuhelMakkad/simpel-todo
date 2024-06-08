"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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

import { taskSchema, type TaskSchema } from "@/utils/types";
import { STATUS, STATUS_OPTIONS } from "@/utils/constant";
import { addTask, updateTask } from "@/utils/firebase/tasks";
import { useAuth } from "../auth-provider";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export type EditTodoFormProps =
  | {
      title: string;
      description: string;
      status: string;
      isNew?: false;
      onSuccess?: () => void;
    }
  | {
      isNew: true;
      onSuccess?: () => void;
    };

const defaultValues = {
  title: "",
  description: "",
  status: STATUS.IN_PROGRESS,
};

export const EditTodoForm = ({ isNew, onSuccess, ...props }: EditTodoFormProps) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<TaskSchema>({
    resolver: zodResolver(taskSchema),
    defaultValues: { ...(isNew ? defaultValues : props) },
  });

  const onSubmit = async (values: TaskSchema) => {
    if (!user) return;
    setIsLoading(true);

    try {
      const res = await (isNew ? addTask(values, user.uid) : updateTask(values, "", user.uid));
      toast("Task saved successfully", {
        description: `Task with title "${values.title}" has been saved`,
      });
      onSuccess?.();
    } catch (e) {
      console.error(e);
      toast("Error saving task", {
        description: "An error occurred while saving the task",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="animate-spin w-4 h-4 mr-2" />}
            Save changes
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};
