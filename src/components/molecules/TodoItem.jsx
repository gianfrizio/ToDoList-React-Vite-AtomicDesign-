import React, { useState } from 'react'
import Checkbox from '../atoms/Checkbox'
import Button from '../atoms/Button'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const { id, text: todoText, completed, createdAt } = todo
  const [editing, setEditing] = useState(false)
  const [editText, setEditText] = useState(todoText)

  function save() {
    onEdit(id, editText)
    setEditing(false)
  }

  return (
    <div className="todo-item">
      <div>
        <Checkbox checked={completed} onChange={() => onToggle(id)} />
      </div>
      <div className="todo-item-content">
        {!editing ? (
          <div>
            <div className={completed ? 'todo-text--completed' : ''}>{todoText}</div>
            <div className="todo-created">Creato il {createdAt}</div>
          </div>
        ) : (
          <div className="edit-row">
            <input value={editText} onChange={(e) => setEditText(e.target.value)} />
            <Button onClick={save} variant="primary">Salva</Button>
            <Button onClick={() => setEditing(false)}>Annulla</Button>
          </div>
        )}
      </div>
      <div className="todo-item-actions">
        <Button onClick={() => { setEditText(todoText); setEditing(true); }}>Modifica</Button>
        <Button onClick={() => onDelete(id)}>X</Button>
      </div>
    </div>
  )
}

export default TodoItem
