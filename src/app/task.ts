export interface Task {
  id: number;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
  resolvedAt: string;
  title: string;
  description: string;
  priority: string;
  status: string;
}