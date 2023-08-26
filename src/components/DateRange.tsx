import DateInput from './DateInput'
import { UseData } from '../context/DataContext'

const DateRange = () => {
  const { init, setInit, final, setFinal } = UseData()

  return (
    <form className="box flex" onSubmit={(event) => event.preventDefault}>
      <DateInput
        label="Início"
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
