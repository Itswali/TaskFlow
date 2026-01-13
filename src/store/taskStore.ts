import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task, TaskInput } from '../types/task';

interface TaskStore {
  tasks: Task[];
  addTask: (task: TaskInput) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  getTaskById: (id: string) => Task | undefined;
  getActiveTasks: () => Task[];
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      
      addTask: (taskInput: TaskInput) => {
        const newTask: Task = {
          ...taskInput,
          id: crypto.randomUUID(),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      },
      
      updateTask: (id: string, updatedFields: Partial<Task>) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, ...updatedFields, updatedAt: new Date() }
              : task
          ),
        }));
      },
      
      deleteTask: (id: string) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },
      
      getTaskById: (id: string) => {
        return get().tasks.find((task) => task.id === id);
      },
      
      getActiveTasks: () => {
        return get().tasks.filter((task) => task.status === 'active');
      },
    }),
    {
      name: 'task-storage',
    }
  )
);
