"use client";

import { FormEvent, useState } from "react";

import { toast } from "sonner";
import { refreshTaskList } from "@/query/use-tasks-query";
import { useAuth } from "@/components/auth-provider";
import { Loader2, Trash } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteTask } from "@/utils/firebase/tasks";

type DeleteTodoModalProps = {
  taskId: string;
};

export const DeleteTodoModal = ({ taskId }: DeleteTodoModalProps) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (e: FormEvent) => {
    if (!user) return;

    e.preventDefault();

    setOpen(true);
    setIsLoading(true);

    try {
      await deleteTask(taskId, user.uid);
      toast("Task deleted successfully");
    } catch (e) {
      console.error("Error deleting document: ", e);
      toast("An error occurred while deleting the task");
    } finally {
      setOpen(false);
      setIsLoading(false);
      refreshTaskList(user.uid);
    }
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={(state) => {
        if (isLoading) {
          setOpen(true);
          return;
        }
        setOpen(state);
      }}
    >
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Trash className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete and remove your task details
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={isLoading} onClick={handleDelete}>
            {isLoading && <Loader2 className="animate-spin w-4 h-4 mr-2" />}
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
