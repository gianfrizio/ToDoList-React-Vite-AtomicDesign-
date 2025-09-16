import React from 'react'
import TodoItem from '../molecules/TodoItem'
import FilterGroup from '../molecules/FilterGroup'

function TodoList({ todos, filter, onToggle, onDelete, onEdit, onFilterChange }) {
  const filtered = todos.filter(({ completed }) => {
    if (filter === 'all') return true
    if (filter === 'active') return !completed
    if (filter === 'completed') return completed
    return true
  })

  const remaining = todos.filter(({ completed }) => !completed).length

  return (
    <div>
      <FilterGroup filter={filter} onChange={onFilterChange} />
      <div className="todo-list">
        {filtered.map((t) => (
          <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
  <div className="todo-remaining">{remaining} task rimanenti.</div>
    </div>
  )
}

export default TodoList
