import { TodoList } from "@/components/todo-list";
import { ToolBar } from "@/components/tool-bar";

export default function Home() {
  return (
    <main className="container my-4 flex flex-col gap-4">
      <h1 className="text-2xl font-medium my-2">Todo List</h1>

      <ToolBar />

      <TodoList />
    </main>
  );
}
