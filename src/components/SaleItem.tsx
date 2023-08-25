import { Data } from '../context/DataContext'
import { NavLink } from 'react-router-dom'

const SaleItem = ({ sale }: { sale: Data }) => {
  return (
    <div className="sale box">
      <NavLink to={`/vendas/${sale.id}`} style={{ fontFamily: 'monospace' }}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  )
}

export default SaleItem
