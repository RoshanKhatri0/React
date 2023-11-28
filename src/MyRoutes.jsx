import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'

const MyRoutes = () => {
  return (
    <>
    <Router>
        <Routes>
            {/* <Route path='/' element={<Start/>}></Route> */}
          <Route path='' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
          </Route>
        </Routes>
    </Router>
    </>
  )
}

export default MyRoutes