import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const params = useParams()

    useEffect(()=>{
        const id = params.product_id
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[params.product_id])

    const addToCart=()=>{
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

        const productItems={
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            rating: product.rating,
            category: product.category,
            quantity: 1
        }
        //item exists or not
        const existingItem = cartItems.find((item)=>item.id===product.id)
        if(existingItem){
            toast.error('Product is already in Cart')
        }
        else{
            cartItems.push(productItems)
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            toast.success(`${productItems.title} is succesfully added to cart`)
        }
    }

  return (
    <>
    <ToastContainer position='top-right' theme='colored'/>
        <div className="container my-5 shadow-lg p-3 mb-5 bg-white rounded">
            <div className="row d-flex justify-content-evenly">
                <div className="col-md-5">
                    <img src={product.image} alt={product.image} width={'450'} height={'450'} />
                </div>
                <div className="col-md-6">
                    <h1>{product.title}</h1>
                    <h2 className='text-secondary'>Category: {product.category}</h2>
                    <p className='text-secondary'><strong>Description:</strong> {product.description}</p>
                    <p className='text-secondary'>Rating: {product.rating && product.rating.rate}</p>
                    <Link to='#' className="btn btn-outline-danger" onClick={addToCart}>Add to Cart</Link>

                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetail