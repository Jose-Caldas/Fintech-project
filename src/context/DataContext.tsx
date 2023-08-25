import { createContext, PropsWithChildren, useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'

interface Data {
  id: string
  nome: string
  preco: number
  status: 'pago' | 'processando' | 'falha'
  pagamento: 'boleto' | 'pix' | 'cartao'
  parcelas: number | null
  data: string
}

interface IDataContext {
  data: Data[] | null
  loading: boolean
  error: string | null
  init: string
  final: string
  setInit: React.Dispatch<React.SetStateAction<string>>
  setFinal: React.Dispatch<React.SetStateAction<string>>
}

const DataContext = createContext<IDataContext | null>(null)

function getDate(n: number) {
  const date = new Date()
  date.setDate(date.getDate() - n)
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()

  return `${yyyy}-${mm}-${dd}`
}

const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [init, setInit] = useState(getDate(30))
  const [final, setFinal] = useState(getDate(0))
  const { data, loading, error } = useFetch<Data[]>(
    `https:/data.origamid.dev/vendas/?inicio=${init}&final=${final}`
  )

  return (
    <DataContext.Provider
      value={{ data, loading, error, init, setInit, final, setFinal }}
    >
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
