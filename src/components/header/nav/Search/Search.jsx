import React, {useState, useEffect} from 'react'
import {BsArrowRightShort} from 'react-icons/bs'

import { MdClose } from 'react-icons/md'

import dummy from '../../../../assets/14759082916022427868_1_1.jpg'
import dummy1 from '../../../../assets/8_1_3.jpg'
import dummy2 from '../../../../assets/7_1_1_1_1.jpg'
import dummy3 from '../../../../assets/orson_prd_10_4_1_7.jpg'
import { LinkContainer } from 'react-router-bootstrap'
import "./Search.scss";
const Search = ({setShowSearch }) => {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
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
    return (
    <div className='search-modal'>
        <div className="form-field">
            <input 
            type="text"
            autoFocus
            placeholder='Search'
             />
             <MdClose onClick={() => setShowSearch(false)}/>
        </div>
        <div className="container p-2 search_container">
       

            <div className="row">
{cards.map((card) => (

                <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
               
       
          <div className = "product-grid">
                <div className = "product">
                    <div className = "product-img">
                        <img src = {card.img} alt = "front product image" />
                        <img src = {card.img2} alt = "rear product image" class = "rear-img" />
                    </div>
                    <div className = "product-info">
                        <div>
                            <span className = "product-name">{card.title}</span>
                            <span className = "product-price">{card.price}</span>
                            <div className="content" onClick={() => setShowSearch(false)}>
                            <LinkContainer to="/singleproduct">
                            <a >View <BsArrowRightShort /></a>
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
    </div>)
    ;
};

export default Search;
