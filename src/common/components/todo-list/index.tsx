"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/components/auth-provider";

import { TodoCard } from "./todo-card";
import { EmptyState, ErrorState, LoadingState } from "./list-states";
import { getTasks } from "@/utils/firebase/tasks";

import type { Task } from "@/utils/types";

export const TodoList = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<Task[] | null | undefined>(undefined);

  useEffect(() => {
    if (!user) return;

    getTasks(user.uid).then((data) => setTasks(data));
  }, [user]);

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
