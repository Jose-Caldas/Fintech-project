import { UseData } from '../context/DataContext'
import SaleItem from '../components/SaleItem'

const Sales = () => {
  const { data } = UseData()

  if (data === null) return null

  return (
    <ul>
      {data.map((sale) => (
        <li key={sale.id}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  )
}

export default Sales
