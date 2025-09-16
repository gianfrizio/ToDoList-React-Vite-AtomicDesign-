import React from 'react'
import Button from '../atoms/Button'

function FilterGroup({ filter, onChange }) {
  const opts = ['all', 'active', 'completed']
  return (
    <div className="filters">
      {opts.map((o) => (
        <Button
          key={o}
          onClick={() => onChange(o)}
          variant={filter === o ? 'primary' : 'default'}
        >
          {o === 'all' ? 'Tutti' : o === 'active' ? 'Attivi' : 'Completati'}
        </Button>
      ))}
    </div>
  )
}

export default FilterGroup
