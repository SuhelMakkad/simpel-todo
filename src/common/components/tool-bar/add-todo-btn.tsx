import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";

export const AddTodo = () => {
  return (
    <>
      <Button size="sm" className="md:flex gap-2 items-center hidden ml-auto">
        <span>Add Todo</span>
        <PlusIcon className="h-3.5 w-3.5" />
      </Button>
      <Button size="icon" className="fixed bottom-4 right-4 rounded-full h-12 w-12 md:hidden">
        <span className="sr-only">Add Todo</span>
        <PlusIcon className="h-6 w-6" />
      </Button>
    </>
  );
};
