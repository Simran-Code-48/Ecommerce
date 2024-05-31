import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import Cart from './pages/Cart'
import Product from './pages/Product'

function App() {
  return (
    <div className='container mx-auto'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<CategoryPage key='all' category='All'/>}/>
          <Route path='/men' element={<CategoryPage key='men' category='Men'/>}/>
          <Route path='/women' element={<CategoryPage key='women' category='Women'/>}/>
          <Route path='/kids' element={<CategoryPage key='kids' category='Kids'/>}/>
          <Route path='/products' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
