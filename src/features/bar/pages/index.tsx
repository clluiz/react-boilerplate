import { useTaskStore } from '../state/task'

export default function BarPage() {
  const { tasks, addTask, removeTask } = useTaskStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-500 mb-2">Bar</h1>
      <ul>
        {tasks.map((task) => (
          <li className="text-blue-500 mb-2" key={task}>
            {task}
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={() => addTask('Task ' + (tasks.length + 1))}
      >
        Add Task
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => removeTask(tasks[tasks.length - 1])}
      >
        Remove Task
      </button>
    </div>
  )
}
