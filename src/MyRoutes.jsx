import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Show from './context/Show'
import DataCounter from './hook/DataCounter'
import TestNav from './redux/TestNav'

const MyRoutes = () => {
  return (
    <>
    <Router>
        <Routes>
            {/* <Route path='/' element={<Start/>}></Route> */}
          <Route path='' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='productdetail/:product_id' element={<ProductDetail/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='show' element={<Show/>}/>
            <Route path='hooks/reducer' element={<DataCounter/>}/>
            <Route path='redux/first' element={<TestNav/>}/>



          </Route>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>

        </Routes>
    </Router>
    </>
  )
}

export default MyRoutes