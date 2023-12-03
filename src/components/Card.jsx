import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    // data destructuring
    const {image, price, title} = props.item

    return (
        <>
        
                <div className="col">
                    <div className="card">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">Rs {price}</p>
                            <Link to='#' className="btn btn-outline-info">Buy Now</Link>
                        </div>
                    </div>
                </div>
                
            
        </>
    )
}

export default Card