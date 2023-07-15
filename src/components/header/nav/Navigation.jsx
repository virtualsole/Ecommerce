import React, { useState } from 'react'
import { ImFacebook } from 'react-icons/im'
import { ImTwitter } from 'react-icons/im'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { TbSearch } from 'react-icons/tb'
import { IoIosContact } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'
import { RiShoppingBag2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/Virtual_store_Mesa_de_trabajo_1.png'
import Search from "./Search/Search";
import Cart from "../../Cart/Cart";
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
// import { NavDropdown } from 'react-bootstrap';
import './Navigation.css'
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>

      <nav className="top-nav p-2">
        <div className="column col-lg-4 d-flex mt-3 res_social">
          <a href="https://www.facebook.com/VirtualtechVision/">

          <ImFacebook className='social_icon ' />
          </a>
          <a href="https://www.facebook.com/VirtualtechVision/">

          <ImTwitter className='social_icon ms-3' />
          </a>
          <a href="https://www.instagram.com/virtualtechvision/">


          <FaInstagram className='social_icon ms-3' />
          </a>

          <a href="https://www.linkedin.com/company/virtualtechub/">

          <FaLinkedinIn className='social_icon ms-3' />
          </a>


        </div>
        <div className="column">
          <img className='desk mob' src={Logo} alt="" height={98} width={98} />
          <Navbar expand="lg">
            <Container className='container_nav'>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link href="#home">Home</Nav.Link>
                  </LinkContainer>
                  <div class="dropdown m-2">
                  <Link to="product">
                    <button class="dropbtn">
                      Products
                    </button>
                    </Link>
                    <div class="dropdown-content">
                    <LinkContainer to="product/mens">
                      <a href="#">Mens</a>
                      </LinkContainer>
                      <LinkContainer to="product/womens">
                      <a href="#">Womens</a>
                      </LinkContainer>
                      <LinkContainer to="product/kid">
                      <a href="#">Kids</a>
                      </LinkContainer>
                     

                    </div>
                  </div>
                  <div class="dropdown m-2">
             
                    <button class="dropbtn" style={{ marginRight: "1rem" }}>
                      Pages
                    </button>
                   
                    <div class="dropdown-content">
                  <LinkContainer to="multipages/formal">

                      <a href="#">Formal</a>
                      </LinkContainer>
                  <LinkContainer to="multipages/semiformal">

                      <a href="#">Semiformal</a>
                      </LinkContainer>
                      <LinkContainer to="multipages/arrivals">

                      <a href="#">New arrivals</a>
                      </LinkContainer>
                      <LinkContainer to="multipages/Casual">

                      <a href="#">Casual</a>
                      </LinkContainer>
                    </div>
                  </div>
                </Nav>
             
              <Navbar.Brand href="#">
                <LinkContainer to="/">
                <img src={Logo} alt="" height={30} width={98} />
                </LinkContainer>
                </Navbar.Brand>
              
                <Nav className="me-auto">

                  <Nav.Link href="#home" disabled>Elements</Nav.Link>
                  <Nav.Link href="#home" disabled>Accessories</Nav.Link>

                



                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
         
        </div>
        <div className="column col-lg-4 d-flex mt-lg-4 mt-3">

          <TbSearch onClick={() => setShowSearch(true)} className='search_icon' />
          <div class="dropdown">
            <button class="dropbtn">
              <IoIosContact className='search_icon ms-3 mob_icon' />

            </button>
            <div class="dropdown-content dropto" style={{
              width: "191px"
            }}>
              <a href="#">My Account</a>

              <a href="#">My Wish List</a>
              
              <a href="#">Sign In</a>
              
              <a href="#">Create an Account</a>

            </div>
          </div>

          <AiOutlineHeart className='search_icon ms-2 mob_icon' />
          
          <span className="search_icon ms-2" onClick={() => setShowCart(true)}>  <RiShoppingBag2Line />
            <div className="cart_icon">
              <span className='cart-icon'>5</span>
            </div>
          </span>
        </div>
      </nav>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}

    </>)
}

export default Navigation