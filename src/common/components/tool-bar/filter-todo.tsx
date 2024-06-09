import { useEffect, useState } from "react";
import { useQuerySearchParams } from "@/hooks/use-query-search-params";

import { FilterIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { STATUS_OPTIONS } from "@/utils/constant";

export const FilterTodo = () => {
  const { status, updateStatus } = useQuerySearchParams();
  const [selectedFilters, setSelectedFilters] = useState<string[]>(status);

  const handleDropdownSelect = (value: string) => {
    if (selectedFilters.includes(value)) {
      setSelectedFilters((prev) => prev.filter((filter) => filter !== value));
    } else {
      setSelectedFilters((prev) => {
        const newList = [...prev, value];
        if (newList.length === STATUS_OPTIONS.length) {
          return [];
        }

        return [...prev, value];
      });
    }
  };

  useEffect(() => {
    updateStatus(selectedFilters);
  }, [selectedFilters]);

  useEffect(() => {
    setSelectedFilters(status);
  }, [status]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <FilterIcon className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Filter Tasks</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedFilters.length === 0}
          onSelect={() => setSelectedFilters([])}
        >
          All
        </DropdownMenuCheckboxItem>

        {STATUS_OPTIONS.map((item) => (
          <DropdownMenuCheckboxItem
            key={item.value}
            checked={selectedFilters.includes(item.value)}
            onSelect={() => handleDropdownSelect(item.value)}
          >
            {item.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
