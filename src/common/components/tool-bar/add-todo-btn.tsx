import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditTodoModal } from "@/components/edit-todo-modal";

export const AddTodo = () => {
  return (
    <EditTodoModal isNew>
      <div className="md:ml-auto">
        <Button size="sm" className="md:flex gap-2 items-center hidden">
          <span>Add Task</span>
          <PlusIcon className="h-3.5 w-3.5" />
        </Button>
        <Button size="icon" className="fixed bottom-4 right-4 rounded-full h-12 w-12 md:hidden">
          <span className="sr-only">Add Task</span>
          <PlusIcon className="h-6 w-6" />
        </Button>
      </div>
    </EditTodoModal>
  );
};
