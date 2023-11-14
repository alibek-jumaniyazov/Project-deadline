import { Route, Routes } from 'react-router-dom'
import { UserProvider, UserContext } from './Context/UserContext'
import Home from './Pages/Home'
import { useContext } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer'
import Text from './Pages/Text'
import PatterPrint from './Pages/PatterPrint'

function App() {

  const { product } = useContext(UserContext)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home product={product.boy} />} />
        <Route path='girl' element={<Home product={product.girl} />} />
        <Route path='baby' element={<Home product={product.baby} />} />
        <Route path='text' element={<Text />} />
        <Route path='print' element={<PatterPrint />} />
      </Routes>
      <hr />

      <Footer/>
    </div>
  )
}

export default App
