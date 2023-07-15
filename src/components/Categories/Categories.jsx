import React from 'react'
import cart1 from '../../assets/women_3.jpg'
import cart2 from '../../assets/footwear_banner.png'
import cart3 from '../../assets/watches_banner.png'
import cart4 from '../../assets/resize-16874386851859937901accessoriesbanner.png';
import './Categories.css'
import { LinkContainer } from 'react-router-bootstrap'
const Categories = () => {
  return (
    <div className="container pt-lg-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
        <img src={cart1} className='img-fluid mt-3 stak-sd' alt="" />
                <LinkContainer to="product/womens">
          <button className='btn_categories'>Women</button>
          </LinkContainer>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              
            <img src={cart2} className='img-fluid mt-3 stak-sd' alt="" />
            <button className='btn_categories stak-sd'>Footwear</button>

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12"> 
                       <img src={cart3} className='img-fluid mt-3 stak-sd' alt="" />
            <button className='btn_categories stak-sd'>Watches</button>
</div>
<div className="col-12">   
                       <img src={cart4} className='img-fluid stak-sd' alt="" />
                       <button className='btn_categories stak-sd'>Accessories</button>

              </div>
          </div>    
              
           
        </div>
      </div>
    </div>
  )
}

export default Categories