import React from 'react'

type DateInputProps = {
  label: string
} & React.ComponentProps<'input'>

const generalStyles: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--color-2)',
  padding: 'var(--gap-s) .75rem',
  backgroundColor: 'var(--color-4)',
  borderRadius: 'var(--gap)',
}

const labelStyles: React.CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: '600',
  ...generalStyles,
}

const inputStyles: React.CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  ...generalStyles,
}

const DateInput = ({ label, ...props }: DateInputProps) => {
  return (
    <div>
      <label style={labelStyles} htmlFor={label}>
        {label}
      </label>
      <input
        style={inputStyles}
        type="date"
        id={label}
        name={label}
        {...props}
      />
    </div>
  )
}

export default DateInput
