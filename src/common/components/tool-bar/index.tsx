import { AddTodo } from "./add-todo-btn";
import { FilterTodo } from "./filter-todo";
import { TodoSearch } from "./todo-search";

export const ToolBar = () => {
  return (
    <div className="flex gap-3 items-center">
      <TodoSearch />
      <FilterTodo />
      <AddTodo />
    </div>
  );
};
