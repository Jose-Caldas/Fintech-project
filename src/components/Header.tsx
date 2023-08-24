import { UseData } from '../context/DataContext'

function Header() {
  const { data } = UseData()
  console.log(data)
  return <div>Header</div>
}

export default Header
