import { useState } from 'react'

function TaskInput({ onAdd, errorMsg }) {
  const [value, setValue] = useState('')

  const handleAdd = () => {
    if (!value.trim()) return
    onAdd(value)
    setValue('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div className="w-full text-left bg-gray-50/50 p-4 sm:p-5 rounded-xl border border-gray-100">
      <h2 className="text-sm font-bold text-gray-700 mb-3 tracking-wide uppercase">Add New Task</h2>
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <input
          type="text"
          placeholder="Enter task..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full sm:flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A306D]/30 focus:border-[#4A306D] transition-all placeholder:text-gray-400 text-gray-700 text-sm sm:text-base"
        />
        <button
          onClick={handleAdd}
          className="w-full sm:w-auto bg-[#4A306D] hover:bg-[#382352] text-white font-medium px-5 py-2.5 rounded-lg transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap shadow-sm hover:shadow-md text-sm sm:text-base"
        >
          + Add New Task
        </button>
      </div>
      {errorMsg && <p className="text-red-500 text-sm mt-1">{errorMsg}</p>}
    </div>
  )
}

export default TaskInput
