import React from 'react'
import { Link } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    return (
        <>
            <div className="cointainer-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 shadow py-3">
                    <main className="form-signin w-100 m-auto">
                <form>
                    <img className="mb-4" src="/image/img.jpeg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <div className="d-flex justify-content-center align-item-center">
                    {/* <ToastContainer position='top-right' theme='colored'/> */}
                    <Link to='/' className="btn btn-primary w-50 py-2 " type="submit" 
                    // onClick={()=>{toast.success('Login In Successfull') }}
                    >Login</Link>
                    </div>
                    <p className="mt-5 mb-3 text-body-secondary">Don't have an account,</p>
                    <div className="d-flex justify-content-center align-item-center">
                    <Link to='/signup' className="btn btn-primary w-50 py-2" type="submit">Sign Up</Link>
                    </div>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
                </form>
            </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login