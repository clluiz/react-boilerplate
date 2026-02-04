import { create } from 'zustand'
import type { TaskStore } from '../types/task-store'

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (task: string) =>
    set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (task: string) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t !== task) })),
}))
