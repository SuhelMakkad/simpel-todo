import { AddTodo } from "./add-todo-btn";
import { FilterTodo } from "./filter-todo";
import { SearchTodo } from "./search-todo";

export const ToolBar = () => {
  return (
    <div className="flex gap-3 items-center">
      <SearchTodo />
      <FilterTodo />
      <AddTodo />
    </div>
  );
};
