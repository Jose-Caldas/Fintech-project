import React from 'react'

type DateInputProps = {
  label: string
} & React.ComponentProps<'input'>

const DateInput = ({ label, ...props }: DateInputProps) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="date" id={label} name={label} {...props} />
    </div>
  )
}

export default DateInput
