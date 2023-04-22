import Image from "next/image";
import { Inter } from "next/font/google";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import { getAllTodos } from "@/public/api";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const todos = await getAllTodos();
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div>
        <h1>Todo List App</h1>
        <AddTask />
      </div>

      <TodoList todos={todos} />
    </main>
  );
}
