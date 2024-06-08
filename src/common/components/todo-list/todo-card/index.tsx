import { FilePenIcon } from "lucide-react";

import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EditTodoModal } from "@/components/edit-todo-modal";
import { Button } from "@/components/ui/button";
import { DeleteTodoModal } from "./delete-todo-modal";

import { STATUS_LABEL } from "@/utils/constant";
import type { Task } from "@/utils/types";

export const TodoCard = ({ id, title, description, status }: Task) => {
  return (
    <Card>
      <CardContent className="grid grid-cols-[1fr_auto] items-center gap-4 p-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-secondary-foreground">
            <span>{description}</span>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center md:gap-2 gap-4">
          <Badge variant="outline">{STATUS_LABEL[status]}</Badge>

          <div className="flex items-center">
            <EditTodoModal taskId={id} title={title} description={description} status={status}>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <FilePenIcon className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </EditTodoModal>

            <DeleteTodoModal taskId={id} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
