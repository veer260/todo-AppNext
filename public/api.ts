import { Task } from "@/types/tasks";

const baseURL = "http://localhost:3001";

export const getAllTodos = async (): Promise<Task[]> => {
  const response = await fetch(`${baseURL}/tasks`);
  const data = await response.json();
  return data;
};
