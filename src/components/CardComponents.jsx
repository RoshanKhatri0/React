import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const CardComponents = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchProduct = async()=>{
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`)
                console.log(response.data)
                setProducts(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchProduct()
    },[])
  return (
    <>
        <div className="container-fluid mt-3 mb-3">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    products.map((product,i)=>{
                        return <Card key={i} item={product}/>
                    })
                }
            </div>
        </div>
    </>
  )
}

export default CardComponents