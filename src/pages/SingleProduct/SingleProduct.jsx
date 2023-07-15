import React, {useState, useEffect} from 'react'

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa"
import "./SingleProduct.scss";
// import dumm from '../../'
import prod from '../../assets/14759082916022427868_1_1.jpg'
import Product from "../products_Page/Product";
import { LinkContainer } from 'react-router-bootstrap';
const SingleProduct = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      },[])

    const [count, setCount] = useState(1);
    const increment = () => {
    if (count < 1000) {
      setCount(count + 1);
    }
  }
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }


 
    return (
    
    <>
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={prod} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">
                            product name
                        </span>
                        <span className="price">Price</span>
                        <span className="desc">Description</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{count}</span>
                                <span onClick={increment}>+</span>
                            </div>
                           
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="devider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span>Shirts</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">

                   <FaFacebookF size={16} />
                   <FaTwitter size={16} />
                  <FaInstagram size={16} />
                   <FaPinterest size={16} />
              </span>
        </span>
     </div>
 </div>


                </div>
            </div>
            
        </div>
        <Product />
    </>
    );
};

export default SingleProduct;
