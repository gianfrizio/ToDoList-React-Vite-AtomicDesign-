import React, { useState } from 'react'
import Checkbox from '../atoms/Checkbox'
import Button from '../atoms/Button'
import { FiTrash2, FiEdit } from 'react-icons/fi'

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
      <div className="todo-item-left">
        <Checkbox checked={completed} onChange={() => onToggle(id)} />
      </div>
      <div className="todo-item-content">
        {!editing ? (
          <div>
            <div className={`todo-text ${completed ? 'todo-text--completed' : ''}`}>{todoText}</div>
            <div className="todo-created">Creato il {String(createdAt).replace(',', ' alle')}</div>
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
        <Button onClick={() => { setEditText(todoText); setEditing(true); }} title="Modifica"><FiEdit /></Button>
        <Button onClick={() => onDelete(id)} title="Elimina"><FiTrash2 /></Button>
      </div>
    </div>
  )
}

export default TodoItem
