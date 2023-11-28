import React from 'react'

const Card = () => {
    return (
        <>
        <div className="container-fluid mt-3 mb-3">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card">
                        <img src="/image/img.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button type="button" className="btn btn-outline-info">Info</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/image/img.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button type="button" className="btn btn-outline-info">Info</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/image/img.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button type="button" className="btn btn-outline-info">Info</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/image/img.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button type="button" className="btn btn-outline-info">Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Card