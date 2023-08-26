import { Data } from '../context/DataContext'
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

type SaleDay = {
  data: string
  pago: number
  processando: number
  falha: number
}

function transformData(data: Data[]): SaleDay[] {
  const days = data.reduce((acc: { [key: string]: SaleDay }, item) => {
    const day = item.data.split(' ')[0]
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        processando: 0,
        falha: 0,
      }
    }
    acc[day][item.status] += item.preco

    return acc
  }, {})

  console.log(Object.values(days))

  return Object.values(days).map((day) => ({
    ...day,
    data: day.data.substring(5),
  }))
}

const SalesGraph = ({ data }: { data: Data[] }) => {
  const transformedData = transformData(data)

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#8884d8" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#82ca9d"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#ff7300"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default SalesGraph
