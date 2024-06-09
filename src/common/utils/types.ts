import { z } from "zod";
import { STATUS } from "./constant";

export const taskSchema = z.object({
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
  status: z.enum(Object.values(STATUS).map((status) => status.value) as [string, ...string[]], {
    invalid_type_error: "Invalid status type",
    message: "Status is required",
  }),
});

export type TaskSchema = z.infer<typeof taskSchema>;

export type Task = TaskSchema & { id: string };
