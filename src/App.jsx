import React, { useEffect, useState } from 'react'
import TodoForm from './components/organisms/TodoForm'
import TodoList from './components/organisms/TodoList'
import { FiMoon, FiSun } from 'react-icons/fi'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [theme, setTheme] = useState('light')
  const [sort, setSort] = useState('created') 

  function addTodo(text) {
    const t = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date().toLocaleString('it-IT', { dateStyle: 'short', timeStyle: 'short' }),
      createdAtRaw: new Date().toISOString()
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
        <button onClick={toggleTheme} className="btn btn--icon" aria-label="Toggle theme">
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
      </div>

      <div className="container">
        <TodoForm onAdd={addTodo} />
        <div className="spacer" />
        <TodoList
          todos={todos}
          filter={filter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
          onFilterChange={setFilter}
          sort={sort}
          onSortChange={setSort}
        />
      </div>
    </div>
  )
}

export default App
