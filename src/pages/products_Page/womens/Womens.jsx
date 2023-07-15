import React, {useState, useEffect} from 'react'
import dummy from '../../../assets/hello11.jpeg'
import dummy1 from '../../../assets/hello12.jpeg'
import dummy2 from '../../../assets/hello13.jpeg'
import dummy3 from '../../../assets/hello14.jpeg'
import './Womens.css'
import {BsArrowRightShort} from 'react-icons/bs'
import { LinkContainer } from 'react-router-bootstrap'
const Womens = () => {
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
        img: dummy,
        img2: dummy1,
        title: 'dummy Product',
        price: "$19.99",
        
    },
    {
        id: 6, 
        img: dummy1,
        img2: dummy3,
        title: 'dummy Product',
        price: "$19.99",

    },
    {
        id: 7, 
        img: dummy2,
        img2: dummy1,
        title: 'dummy Product',
        price: "$19.99",

                },
    {
        id: 8, 
        img: dummy3,
        img2: dummy1,
        title: 'dummy Product',
        price: "$19.99",

                }
]);

useEffect(() => {
    window.scrollTo(0,0)
  },[])
return (
<section>
    <div className="container p-5">
        <div className="content-heading">

    <h3 className=' mb-lg-2 title'>WOMENS PRODUCTS</h3>
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

export default Womens