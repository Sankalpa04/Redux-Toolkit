import React from 'react'
import Product from './Pages/Product'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart'
import { Provider } from 'react-redux'
import store from './Store/Store'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Provider store={store}>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Provider>
      </BrowserRouter>

    </div>
  )
}

export default App