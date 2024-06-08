"use client";

import { getTasks } from "@/utils/firebase/tasks";
import { useQuery } from "@tanstack/react-query";

export const useTasksQuery = (userId?: string) =>
  useQuery({
    queryKey: [`tasks-${userId}`],
    queryFn: () => getTasks(userId!),
    enabled: !!userId,
  });
