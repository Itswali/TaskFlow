import { create } from "zustand";

type TasksStore = {
  id: number;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  deadline: Date;
  isCompleted: boolean;
  createdAt: Date;
}

export const useTasksStore = create<TasksStore>(() => ({
  id: 0,
  title: "",
  description: "",
  priority: "Low",
  deadline: new Date,
  isCompleted: false,
  createdAt: new Date,

}))
