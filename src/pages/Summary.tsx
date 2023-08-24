import { UseData } from '../context/DataContext'

function Summary() {
  const { data } = UseData()
  console.log(data)
  return <div>Resumo</div>
}

export default Summary
