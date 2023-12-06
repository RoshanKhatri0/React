import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="p-3 text-dark bg-dark sticky-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="products" className="nav-link px-2 text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 text-white">
                  About
                </Link>
              </li>
            </ul>

            

            <div className="text-end">
              <Link to='/login' type="button" className="btn btn-outline-light me-2">
                Login
              </Link>
              <Link to='/signup' type="button" className="btn btn-warning">
                Sign-up
              </Link>
              
            </div>
            <Link to='/cart'>
            <i className="fa-solid fa-cart-shopping text-white fa-xl mx-4"></i>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
