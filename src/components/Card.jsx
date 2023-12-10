import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = (props) => {
    // data destructuring
    const {image, price, title, id, category, rating} = props.item
    const addToCart=()=>{
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

        const productItems={
            id: id,
            title: title,
            price: price,
            image: image,
            rating: rating,
            category: category,
            quantity: 1
        }
        //item exists or not
        const existingItem = cartItems.find((item)=>item.id===id)
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
                <div className="col">
                    <div className="card py-1">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">Rs {price}</p>
                            <ToastContainer position='top-right' theme='colored'/>
                            <Link to='#' className="btn btn-outline-danger " onClick={addToCart}>Add to Cart</Link>
                            <Link to={`/productdetail/${id}`} className=' d-flex align-item-center justify-content-end' ><i class="fa-solid fa-circle-info fa-xl mx-2"></i></Link>

                        </div>
                    </div>
                </div>
                
            
        </>
    )
}

export default Card