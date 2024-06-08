"use client";

import { getTasks } from "@/utils/firebase/tasks";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "./query-provider";

export const useTasksQuery = (userId?: string) =>
  useQuery({
    queryKey: [`tasks-${userId}`],
    queryFn: () => getTasks(userId!),
    enabled: !!userId,
  });

export const refreshTaskList = (userId: string) =>
  queryClient.refetchQueries({
    queryKey: [`tasks-${userId}`],
  });
