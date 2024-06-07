import { FilePenIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import EditTodoForm from "./edit-todo-form";

type EditTodoModalProps = {
  title: string;
  description: string;
  status: string;
};

export const EditTodoModal = (props: EditTodoModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <FilePenIcon className="h-4 w-4" />
          <span className="sr-only">Edit</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>Make changes to the task details below</DialogDescription>
        </DialogHeader>

        <EditTodoForm {...props} />
      </DialogContent>
    </Dialog>
  );
};
