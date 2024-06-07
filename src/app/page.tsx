import { TodoCard } from "@/components/todo-card";
import { ToolBar } from "@/components/tool-bar";

const todo = [
  {
    title: "Create a new project",
    description: "Create a new project using the command `npx create-react-app my-app`",
    status: "done",
  },
  {
    title: "Create a new page",
    description: "Create a new page in the `src/app` folder",
    status: "in-progress",
  },
  {
    title: "Create a new component",
    description: "Create a new component in the `src/app` folder",
    status: "done",
  },
  {
    title: "Create a new layout",
    description: "Create a new layout in the `src/app` folder",
    status: "in-progress",
  },
  {
    title: "Create a new route",
    description: "Create a new route in the `src/app` folder",
    status: "in-progress",
  },
  {
    title: "Create a new hook",
    description: "Create a new hook in the `src/app` folder",
    status: "done",
  },
  {
    title: "Create a new context",
    description: "Create a new context in the `src/app` folder",
    status: "in-progress",
  },
  {
    title: "Create a new service",
    description: "Create a new service in the `src/app` folder",
    status: "done",
  },
  {
    title: "Create a new store",
    description: "Create a new store in the `src/app` folder",
    status: "in-progress",
  },
  {
    title: "Create a new model",
    description: "Create a new model in the `src/app` folder",
    status: "in-progress",
  },
  {
    title: "Create a new style",
    description: "Create a new style in the `src/app` folder",
    status: "done",
  },
  {
    title: "Create a new test",
    description: "Create a new test in the `src/app` folder",
    status: "in-progress",
  },
  {
    title: "Create a new story",
    description: "Create a new story in the `src/app` folder",
    status: "done",
  },
  {
    title: "Create a new mock",
    description: "Create a new mock in the `src/app` folder",
    status: "in-progress",
  },
  {
    title: "Create a new fixture",
    description: "Create a new fixture in the `src/app` folder",
    status: "in-progress",
  },
];

export default function Home() {
  return (
    <main className="container my-4 flex flex-col gap-4">
      <h1 className="text-2xl font-medium my-2">Todo List</h1>

      <ToolBar />

      <div className="flex flex-col gap-4">
        {todo.map((item, index) => (
          <TodoCard key={index} {...item} />
        ))}
      </div>
    </main>
  );
}
