import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { STATUS_LABEL } from "@/utils/constant";

import { FilePenIcon } from "lucide-react";

type TodoCardProps = {
  title: string;
  description: string;
  status: string;
};

export const TodoCard = ({ title, description, status }: TodoCardProps) => {
  return (
    <Card>
      <CardContent className="grid grid-cols-[1fr_auto] items-center gap-4 p-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-secondary-foreground">
            <span>{description}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="outline">{STATUS_LABEL[status]}</Badge>

          <Button variant="ghost" size="icon" className="h-8 w-8">
            <FilePenIcon className="h-4 w-4" />
            <span className="sr-only">Edit</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
