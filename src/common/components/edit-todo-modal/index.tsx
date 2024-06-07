import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditTodoForm, type EditTodoFormProps } from "./edit-todo-form";

export const EditTodoModal = ({
  children,
  ...props
}: React.PropsWithChildren<EditTodoFormProps>) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
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
