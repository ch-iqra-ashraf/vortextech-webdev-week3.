import { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput.jsx'
import TaskList from './components/TaskList.jsx'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('myTasks')
    return saved ? JSON.parse(saved) : []
  })
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    const alreadyExists = tasks.some(
      (task) => task.text.trim() === text.trim()
    )
    if (alreadyExists) {
      setErrorMsg('Task already exists. Enter a new task.')
      return
    }
    setErrorMsg('')
    const newTask = { id: Date.now(), text, completed: false }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="bg-linear-to-tr from-[#3a2258] to-[#5c3d85] flex flex-col justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-xl bg-white/95 backdrop-blur-sm border border-white/20 rounded-2xl p-5 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col gap-6 sm:gap-8">

        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 text-gray-800 tracking-tight">To Do List</h1>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            A streamlined, interactive to-do list that simplifies your workflow. Seamlessly add, track, and clear your daily tasks.
          </p>
        </div>

        <TaskInput onAdd={addTask} errorMsg={errorMsg} />

        <div className="w-full text-left">
          <h2 className="text-sm font-bold text-gray-700 mb-4 tracking-wide uppercase">My Tasks</h2>
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  )
}

export default App
