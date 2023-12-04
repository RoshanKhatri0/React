import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const params = useParams()

    useEffect(()=>{
        const id = params.product_id
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[])

  return (
    <>
        <div className="container my-5">
            <div className="row d-flex justify-content-evenly">
                <div className="col-md-5">
                    <img src={product.image} alt={product.image} width={'450'} />
                </div>
                <div className="col-md-6">
                    <h1>{product.title}</h1>
                    <h2>Category: {product.category}</h2>
                    <p>Description: {product.description}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetail