import { create } from "zustand";

export type Task = {
  id: number;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  deadline: Date;
  isCompleted: boolean;
  createdAt: Date;
};

interface TasksState {
  tasks: Task[];
  addTask: (task: Task) => void;
}

export const useTasksStore = create<TasksState>((set) => ({
  tasks: [],
  addTask: (newTask) =>
    set((state) => ({
      tasks: [...state.tasks, newTask]
    })),
}))
