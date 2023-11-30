import React, {useEffect, useState} from 'react'
import axios from 'axios'

const DataFetch = () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err=>console.log(err))
    })
  return (
    <>
      {
        product && product.map((item,i)=>{
          return(
            <div key={i}>
              <h1 className="text-primary">{item.title}</h1>
              <h2 className="text-secondary">${item.price}</h2>
            </div>
          )
        })
      }
    </>
  )
}

export default DataFetch