import React, { useState } from 'react'
import TodoForm from './components/organisms/TodoForm'
import TodoList from './components/organisms/TodoList'

function formatDate(d) {
  const date = new Date(d)
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${dd}/${mm}/${yyyy}`
}

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [theme, setTheme] = useState('light')

  function addTodo(text) {
    const t = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: formatDate(new Date())
    }
    setTodos([t, ...todos])
  }

  function deleteTodo(id) {
    setTodos(todos.filter(({ id: tid }) => tid !== id))
  }

  function toggleTodo(id) {
    setTodos(todos.map((t) => {
      const { id: tid, completed } = t
      return tid === id ? { ...t, completed: !completed } : t
    }))
  }

  function editTodo(id, newText) {
    setTodos(todos.map((t) => {
      const { id: tid } = t
      return tid === id ? { ...t, text: newText } : t
    }))
  }

  function toggleTheme() {
    setTheme((s) => (s === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`${theme} app`}>
      <div className="app-header">
        <h1>ToDo List Avanzata</h1>
        <button onClick={toggleTheme} className="btn">{theme === 'light' ? 'Dark' : 'Light'}</button>
      </div>

      <div className="container">
        <TodoForm onAdd={addTodo} />
        <div className="spacer" />
        <TodoList todos={todos} filter={filter} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} onFilterChange={setFilter} />
      </div>
    </div>
  )
}

export default App
