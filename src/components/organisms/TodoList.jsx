import React, { useMemo } from 'react'
import TodoItem from '../molecules/TodoItem'
import FilterGroup from '../molecules/FilterGroup'
import Button from '../atoms/Button'
import { FiClock, FiChevronDown } from 'react-icons/fi'
import ContactForm from './ContactForm'

function TodoList({ todos, filter, onToggle, onDelete, onEdit, onFilterChange, sort, onSortChange }) {
  const filtered = todos.filter(({ completed }) => {
    if (filter === 'all') return true
    if (filter === 'active') return !completed
    if (filter === 'completed') return completed
    return true
  })
  const remaining = todos.filter(({ completed }) => !completed).length
  const total = todos.length
  const completedCount = todos.filter(({ completed }) => completed).length

  const sorted = useMemo(() => {
    const copy = [...filtered]
    if (sort === 'created') {
      // usa timestamp ISO se disponibile per un ordinamento accurato
      copy.sort((a, b) => {
        const pa = a.createdAtRaw || ''
        const pb = b.createdAtRaw || ''
        return pb.localeCompare(pa) // i più recenti prima
      })
    } else if (sort === 'alpha') {
      copy.sort((a, b) => a.text.localeCompare(b.text))
    }
    return copy
  }, [filtered, sort])

  return (
    <div>
  <div className="stats-card">
        <div className="stats-row">
          <div>
            <div className="stats-title">Statistiche</div>
            <div className="stats-values">Totale: {total} • Completati: {completedCount} • Rimanenti: {remaining}</div>
          </div>
          <div className="stats-progress">
            <div className="progress-bar" aria-hidden>
              <div className="progress-fill" style={{ width: `${total === 0 ? 0 : Math.round((completedCount / total) * 100)}%` }} />
            </div>
            <div className="progress-percent">{total === 0 ? '0%' : `${Math.round((completedCount / total) * 100)}%`}</div>
          </div>
        </div>
      </div>
      <div className="list-header">
        <FilterGroup filter={filter} onChange={onFilterChange} />
        <div className="list-controls">
          <Button onClick={() => onSortChange('created')} variant={sort === 'created' ? 'primary' : 'default'} title="Ordina per data" data-tooltip="Ordina per data di creazione (più recenti prima)"><FiClock /></Button>
          <Button onClick={() => onSortChange('alpha')} variant={sort === 'alpha' ? 'primary' : 'default'} title="Ordina alfabeticamente" data-tooltip="Ordina alfabeticamente (A → Z)"><FiChevronDown /></Button>
        </div>
      </div>
      <div className="todo-list">
        {sorted.map((t) => (
          <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
      <div className="todo-stats">&nbsp;</div>
      <div style={{ marginTop: 12 }}>
        <ContactForm onSubmit={(data) => console.log('contact submit', data)} />
      </div>
    </div>
  )
}

export default TodoList
