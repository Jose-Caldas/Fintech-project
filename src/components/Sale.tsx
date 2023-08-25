import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Data } from '../context/DataContext'
import Loading from './Loading'

type SaleWithoutDate = Omit<Data, 'data'>

const Sale = () => {
  const { id } = useParams()
  const { data, loading } = useFetch<SaleWithoutDate>(
    `https:/data.origamid.dev/vendas/${id}`
  )

  if (loading) return <Loading />
  if (data === null) return <p>Nada Encontrado</p>

  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
      <div className="box mb">Parcelas: {data.parcelas}</div>
      <div className="box mb">
        Preço:
        {data.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
    </div>
  )
}

export default Sale
