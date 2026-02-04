export type TaskStore = {
  tasks: string[]
  addTask: (task: string) => void
  removeTask: (task: string) => void
}
