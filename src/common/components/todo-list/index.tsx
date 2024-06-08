"use client";

import { useAuth } from "@/components/auth-provider";

import { TodoCard } from "./todo-card";
import { EmptyState, ErrorState, LoadingState } from "./list-states";

import { useTasksQuery } from "@/query/use-tasks-query";
import { useQuerySearchParams } from "@/hooks/use-query-search-params";

export const TodoList = () => {
  const { user } = useAuth();
  const { search, status } = useQuerySearchParams();
  const { data: tasks } = useTasksQuery(user?.uid, { search, status });

  if (tasks === undefined) return <LoadingState />;
  if (tasks === null) return <ErrorState />;
  if (tasks.length === 0) return <EmptyState />;

  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TodoCard key={task.id} {...task} />
      ))}
    </div>
  );
};
