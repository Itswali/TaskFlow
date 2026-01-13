export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'pending';
  priority: 'low' | 'medium' | 'high';
  dueDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export type TaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>;
