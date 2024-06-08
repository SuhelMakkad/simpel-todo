"use client";

import { useQuery } from "@tanstack/react-query";
import { queryClient } from "./query-provider";
import { getTasks, type Filters } from "@/utils/firebase/tasks";

export const useTasksQuery = (userId?: string, filters: Filters = {}) => {
  return useQuery({
    queryKey: [`tasks-${userId}`, `${filters.status}-${filters.search}`],
    queryFn: () => getTasks(userId!, filters),
    enabled: !!userId,
    staleTime: 0,
  });
};

export const refreshTaskList = (userId: string) =>
  queryClient.refetchQueries({
    queryKey: [`tasks-${userId}`],
  });
