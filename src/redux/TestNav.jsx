import React from 'react'
import { useSelector } from 'react-redux'
import TestItem from './reducers/TestItem'

const TestNav = () => {
    const data = useSelector(store=>store)
  return (
    <>
        <h1>The number of item in the cart is {data.cartCount}</h1>
        <TestItem/>
    </>
  )
}

export default TestNav