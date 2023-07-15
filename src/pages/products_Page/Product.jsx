import React, {useState} from 'react'
// import duumm from ''
import dummy from '../../assets/1cfb2c9a-6047-4422-b4d3-ac1d77660583.jpeg'
import dummy1 from '../../assets/13f8403c-932f-4fe3-be99-216503ce7c98.jpeg'
import dummy2 from '../../assets/593e8ca4-ede3-426e-bcd1-19add4da8c0f.jpeg'
import dummy3 from '../../assets/006562b2-889a-4086-991d-1a4701eb79f7.jpeg'
import dummy4 from '../../assets/hello11.jpeg'
import dummy5 from '../../assets/hello12.jpeg'
import dummy6 from '../../assets/hello13.jpeg'
import dummy7 from '../../assets/hello14.jpeg'
import dummy8 from '../../assets/hello82.jpeg'
import dummy9 from '../../assets/hello71.jpeg'
import dummy10 from '../../assets/hello81.jpeg'
import dummy11 from '../../assets/hello51.jpeg'
// import './Mens.css'
import {BsArrowRightShort} from 'react-icons/bs'
import { LinkContainer } from 'react-router-bootstrap'

const Product = () => {
  
  const [cards, setCards] = useState([
    {
        id: 1, 
        img: dummy,
        img2: dummy1,
        title: 'dummy Product',
        price: "$19.99",
        
    },
    {
        id: 2, 
        img: dummy1,
        img2: dummy3,
        title: 'dummy Product',
        price: "$19.99",

    },
    {
        id: 3, 
        img: dummy2,
        img2: dummy1,
        title: 'dummy Product',
        price: "$19.99",

                },
    {
        id: 4, 
        img: dummy3,
        img2: dummy1,
        title: 'dummy Product',
        price: "$19.99",

                },
    {
        id: 5, 
        img: dummy4,
        img2: dummy5,
        title: 'dummy Product',
        price: "$19.99",
        
    },
    {
        id: 6, 
        img: dummy5,
        img2: dummy6,
        title: 'dummy Product',
        price: "$19.99",

    },
    {
        id: 7, 
        img: dummy6,
        img2: dummy7,
        title: 'dummy Product',
        price: "$19.99",

                },
    {
        id: 8, 
        img: dummy7,
        img2: dummy5,
        title: 'dummy Product',
        price: "$19.99",

                },
                {
                    id: 9, 
                    img: dummy8,
                    img2: dummy9,
                    title: 'dummy Product',
                    price: "$19.99",
                    
                },
                {
                    id: 10, 
                    img: dummy9,
                    img2: dummy10,
                    title: 'dummy Product',
                    price: "$19.99",
            
                },
                {
                    id: 11, 
                    img: dummy10,
                    img2: dummy11,
                    title: 'dummy Product',
                    price: "$19.99",
            
                            },
                {
                    id: 12, 
                    img: dummy11,
                    img2: dummy8,
                    title: 'dummy Product',
                    price: "$19.99",
            
                            }
]);
return (
<section id='Product'>
    <div className="container p-5">
        <div className="content-heading">

    <h3 className=' mb-lg-2 title'>PRODUCTS</h3>
    <p className='block-note'>Top view in this week</p>
        </div>

        <div className="row mt-5">
{cards.map((card) => (

            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
           
   
      <div class = "product-grid">
            <div class = "product">
                <div class = "product-img">
                    <img src = {card.img} alt = "front product image" />
                    <img src = {card.img2} alt = "rear product image" class = "rear-img" />
                </div>
                <div class = "product-info">
                    <div>
                        <span class = "product-name">{card.title}</span>
                        <span class = "product-price">{card.price}</span>
                        <div className="content">
                        <LinkContainer to="/singleproduct">
                            <a>View <BsArrowRightShort /></a>
                            </LinkContainer>
                        </div>
                    </div>
                   
                </div>
            </div>
            </div>
  
            </div>
))}
        </div>
    </div>
</section>
)
}

export default Product