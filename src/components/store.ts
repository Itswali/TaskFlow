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
  findTask: (id: number) => Task | undefined;
  toggleTask: (id: number) => void;
}

export const useTasksStore = create<TasksState>((set, get) => ({
  tasks: [],
  addTask: (newTask) =>
    set((state) => ({
      tasks: [...state.tasks, newTask]
    })),
    findTask: (id: number) => {
      return get().tasks.find((task) => task.id === id);
    },
    toggleTask: (id: number) => set((state) => ({
    tasks: state.tasks.map((t) =>
      t.id === id ? { ...t, isCompleted: true } : t
    )
  }))
}))
