import React,{useContext} from 'react'
import { GlobalContext } from './GlobalValue'

const ComD = () => {
    const data = useContext(GlobalContext)
  return (
    <>
        <h1>The name of the student is {data.name}.</h1>
        <h2>His address is {data.address}</h2>
    </>
  )
}

export default ComD