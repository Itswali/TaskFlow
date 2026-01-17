import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

export const useTaskStore = create(
  persist((set) => ({
    tasks: [],
    addTask: (title, desc, category) => set((state) =>({
      tasks: [...state.tasks, {id: nanoid(), title, desc, category, completed: false}]
    })),

    toggleTask: (id) => set((state) => ({
      tasks: state.tasks.map((t) => t.id === id ? {...t, completed: !t.completed} : t
    )
    })),
deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter((t) => t.id !== id)
      })),

      clearCompleted: () => set((state) => ({
        tasks: state.tasks.filter((t) => !t.completed)
      })),
      editTask: (id, newData) => set((state) => ({
      tasks: state.tasks.map((t) => t.id === id ? { ...t, ...newData } : t)
    })),
    }),
    { name: 'task-storage' }
  )
);
