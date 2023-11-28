import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Login from './pages/Login'

const MyRoutes = () => {
  return (
    <>
    <Router>
        <Routes>
            {/* <Route path='/' element={<Start/>}></Route> */}
          <Route path='' element={<Layout/>}>
            <Route index element={<HomePage/>}/>

          </Route>
          <Route path='login' element={<Login/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default MyRoutes