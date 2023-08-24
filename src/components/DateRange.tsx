import { useState } from 'react'
import DateInput from './DateInput'

const DateRange = () => {
  const [init, setInit] = useState('')
  const [final, setFinal] = useState('')

  return (
    <form className="box flex" onSubmit={(event) => event.preventDefault}>
      <DateInput
        label="Inicio"
        value={init}
        onChange={({ target }) => setInit(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  )
}

export default DateRange
