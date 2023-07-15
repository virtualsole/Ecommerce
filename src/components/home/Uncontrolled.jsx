import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import car1 from '../../assets/banner-for-clothes-shop-woman-in-the-store-choose-2022-11-11-17-15-14-utc.jpg'
import car2 from '../../assets/organic-cotton-bodysuit-romper-on-beige-backgroun-2023-04-19-16-43-36-utc.jpg'
import './Home.css'
function Uncontrolled () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={car1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='text-dark'>Spring - Summer 2020</h5>
          <h3 className='text-dark sm_head' style={{
            fontWeight: "700",
            fontSize: "50px"
          }}>FLASH SALE OF 70%</h3>
          <p className='text-dark head_hm'>Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident</p>
          <a href="#" class="btn btn-default btn_home">Shop now</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={car2}
          alt="Second slide"
        />

<Carousel.Caption>
          <h5 className='text-dark'>Spring - Summer 2020</h5>
          <h3 className='text-dark sm_head' style={{
            fontWeight: "700",
            fontSize: "50px"
          }}>FLASH SALE OF 70%</h3>
          <p className='text-dark head_hm '>Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident</p>
          <a href="#" class="btn btn-default btn_home">Shop now</a>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Uncontrolled;