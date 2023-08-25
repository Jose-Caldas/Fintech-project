import { Data } from '../context/DataContext'

const SaleItem = ({ sale }: { sale: Data }) => {
  return (
    <div className="sale box">
      <a href="" style={{ fontFamily: 'monospace' }}>
        {sale.id}
      </a>
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
