import React from 'react'
import { UseData } from '../context/DataContext'
type MonthBtnProps = {
  n: number
}

const styleBtn: React.CSSProperties = {
  padding: 'var(--gap) var(--gap-s)',
  backgroundColor: 'var(--color-3)',
  border: 'none',
  borderRadius: 'var(--gap)',
  color: 'var(--color-2)',
  fontWeight: '600',
  textTransform: 'capitalize',
}

function monthName(n: number) {
  const date = new Date()
  date.setMonth(date.getMonth() + n)
  return new Intl.DateTimeFormat('pt-Br', { month: 'long' }).format(date)
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()

  return `${yyyy}-${mm}-${dd}`
}

const MonthBtn = ({ n }: MonthBtnProps) => {
  const { setInit, setFinal } = UseData()
  function setMonth(n: number) {
    const date = new Date()
    date.setMonth(date.getMonth() + n)

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    setInit(formatDate(firstDay))
    setFinal(formatDate(lastDay))
  }

  return (
    <button style={styleBtn} onClick={() => setMonth(n)}>
      {monthName(n)}
    </button>
  )
}

export default MonthBtn
