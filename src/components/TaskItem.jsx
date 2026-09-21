function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50/50 hover:bg-white border border-gray-100 rounded-xl transition-all hover:shadow-md hover:border-gray-200 group gap-3 sm:gap-0">
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <input
          type="checkbox"
          className="checkBox w-4 h-4 accent-[#4A306D] cursor-pointer shrink-0"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span
          className={`text-gray-700 font-medium transition-all duration-200 text-sm sm:text-base break-all ${task.completed ? 'line-through text-gray-400' : ''}`}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="delete-btn self-end sm:self-auto px-3 py-1.5 text-xs sm:text-sm font-medium text-red-600 bg-red-50 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-200 cursor-pointer active:scale-95 shadow-xs"
      >
        Delete
      </button>
    </div>
  )
}

export default TaskItem
