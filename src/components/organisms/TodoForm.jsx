import React, { useState } from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  function submit() {
    if (!text.trim()) return
    onAdd(text.trim())
    setText('')
  }

  return (
    <div className="todo-form">
      <Input value={text} onChange={setText} placeholder="Nuovo task..." onKeyDown={(e) => { if (e.key === 'Enter') submit() }} />
      <Button onClick={submit} variant="primary">Aggiungi</Button>
    </div>
  )
}

export default TodoForm
