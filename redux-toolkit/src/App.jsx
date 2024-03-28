import React from 'react'
import Product from './Pages/Product'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Product/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App