import { createContext, PropsWithChildren, useContext } from 'react'
import useFetch from '../hooks/useFetch'

interface Data {
  id: string
  nome: string
  preco: number
  status: 'pago' | 'processado' | 'falha'
  pagamento: 'boleto' | 'pix' | 'cartao'
  parcelas: number | null
  data: string
}

interface IDataContext {
  data: Data[] | null
  loading: boolean
  error: string | null
}

const DataContext = createContext<IDataContext | null>(null)

const DataContextProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useFetch<Data[]>(
    'https:/data.origamid.dev/vendas/'
  )

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  )
}

const UseData = () => {
  const context = useContext(DataContext)
  if (!context) throw new Error('UseData precisa estar em DataContextProvider!')
  return context
}

export { DataContextProvider, UseData }
