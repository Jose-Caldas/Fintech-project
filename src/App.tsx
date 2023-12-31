import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Style.css'
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import { DataContextProvider } from './context/DataContext'
import Sales from './pages/Sales'
import Summary from './pages/Summary'
import Sale from './components/Sale'

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/vendas" element={<Sales />} />
              <Route path="/vendas/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
