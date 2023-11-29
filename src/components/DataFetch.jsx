import React, {useEffect, useState} from 'react'
import axios from 'axios'

const DataFetch = () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>{
            console.log(res.data)
        })
        .catch(err=>console.log(err))
    })
  return (
    <>

    </>
  )
}

export default DataFetch