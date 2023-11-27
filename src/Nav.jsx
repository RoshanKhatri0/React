import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <ul className='d-flex bg-secondary'>
        <li><Link to='/test'>Test</Link></li>
        <li><Link to='/demo'>Demo</Link></li>
    </ul>
    

    </>
  )
}

export default Nav