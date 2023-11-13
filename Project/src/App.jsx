import { Route, Routes } from 'react-router-dom'
import { UserProvider, UserContext } from './Context/UserContext'
import Home from './Pages/Home'
import { useContext } from 'react'
import Header from './Components/Header/Header'

function App() {

  const { product } = useContext(UserContext)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home product={product.boy} />} />
        <Route path='girl' element={<Home product={product.girl} />} />
        <Route path='baby' element={<Home product={product.baby} />} />
      </Routes>
    </div>
  )
}

export default App
