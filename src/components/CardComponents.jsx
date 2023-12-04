import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
import { MutatingDots } from 'react-loader-spinner'

const CardComponents = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([])
    useEffect(()=>{
        const fetchProduct = async()=>{
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`)
                console.log(response.data)
                setProducts(response.data)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
        setTimeout(()=>{
            fetchProduct()

        },500)
    },[])
  return (
    <>
        <div className="container-fluid mt-3 mb-3">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {/* apply effect */}
                {
                    loading ?
                    (
                        <div style={{height:'50vh'}} className='d-flex justify-content-center w-100 '>
                            <MutatingDots 
                                height="100"
                                width="100"
                                color="#4fa94d"
                                secondaryColor= '#4fa94d'
                                radius='12.5'
                                ariaLabel="mutating-dots-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                />
                        </div>
                    )
                    :
                    (
                        products.slice(0,8).map((product,i)=>{
                        return <Card key={i} item={product}/>
                    })
                    )
                }

                
            </div>
        </div>
    </>
  )
}

export default CardComponents