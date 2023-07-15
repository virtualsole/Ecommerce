import React from 'react'
import './Mobile_res.css'

import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import { TbSearch } from 'react-icons/tb'
import { RiShoppingBag2Line } from 'react-icons/ri'
import {BiMessageSquareDetail} from  'react-icons/bi'
import {CiSettings} from  'react-icons/ci'
import { useState } from 'react'
import Search from "./Search/Search";
import Cart from "../../Cart/Cart";
import { LinkContainer } from 'react-router-bootstrap'

const Mobile_res = () => {
  const [activeNavbar, setActiveNavbar] = useState('#')
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <>
  <nav className='menu_container'>
   <LinkContainer to="./">
   <a href="/" onClick={() => setActiveNavbar('#')} className={activeNavbar === '#' ? 'active' : ''}><AiOutlineHome/></a>
   </LinkContainer>
    <a href="#about" onClick={() => setActiveNavbar('#about')} className={activeNavbar === '#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a href="#experience" onClick={() => setActiveNavbar('#experience')} className={activeNavbar === '#experience' ? 'active' : ''}><TbSearch onClick={() => setShowSearch(true)} /></a>
    <a href="#services" onClick={() => setActiveNavbar('#services')} className={activeNavbar === '#services' ? 'active' : ''}><RiShoppingBag2Line onClick={() => setShowCart(true)} /></a>
    <a href="#contact" onClick={() => setActiveNavbar('#contact')} className={activeNavbar === '#contact' ? 'active' : ''}><CiSettings/></a>
  </nav>
  {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
  </>
  )
}

export default Mobile_res
