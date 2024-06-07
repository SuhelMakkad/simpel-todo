import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";

export const AddTodo = () => {
  return (
    <Button size="sm" className="flex gap-2 items-center">
      <span>Add Todo</span>
      <PlusIcon className="h-3.5 w-3.5" />
    </Button>
  );
};
