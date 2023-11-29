import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

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
          <Route path='signup' element={<SignUp/>}/>

        </Routes>
    </Router>
    </>
  )
}

export default MyRoutes