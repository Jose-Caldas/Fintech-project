import Loading from '../components/Loading'
import SalesGraph from '../components/SalesGraph'
import { UseData } from '../context/DataContext'

const Summary = () => {
  const { data, loading } = UseData()

  if (loading) return <Loading />
  if (data === null) return null
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((i) => i.status !== 'falha')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((i) => i.status === 'processando')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <SalesGraph data={data} />
      </div>
    </section>
  )
}

export default Summary
