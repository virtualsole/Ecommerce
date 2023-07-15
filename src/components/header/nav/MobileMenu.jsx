import React, { useState } from 'react';
import { Button, Nav, Tab, Offcanvas, Navbar, NavDropdown  } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {CgMenuLeft} from 'react-icons/cg'
import { LinkContainer } from 'react-router-bootstrap'
// import { } from 'react-bootstrap';
import './MobileMenu.css';
const MobileMenu = () => {

  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Implement logic to change the language in your application
  };

  const [selectedCurrency, setSelectedCurrency] = useState('');

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    // Implement logic to change the currency in your application
  };



  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleTabSelect = (tabId) => {
    setActiveTab(tabId);
  };

  const closeNav = () => {
    setShowOffcanvas(false);
  };

  return (
    <div className='menu'>
             <Button className='lunch' onClick={handleToggleOffcanvas}>
        <CgMenuLeft />
      </Button>

      <Offcanvas show={showOffcanvas} onHide={handleToggleOffcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Virtual Store</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Tab.Container activeKey={activeTab}>
            <Nav variant="pills" onSelect={handleTabSelect}>
              <Nav.Item>
                <Nav.Link eventKey="tab1">Menu</Nav.Link>
                
              </Nav.Item>
              
              <Nav.Item>
                <Nav.Link eventKey="tab2">Accounts</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab3">Setting</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="tab1">
              <Navbar expand="md">
<div className="container mob_container">
<Nav className="ml-auto d-block">
<LinkContainer to="/">
          <Nav.Link href="#">Home</Nav.Link>
          </LinkContainer>
          <hr />
          
          <NavDropdown title="Product"  id="basic-nav-dropdown" href="Product">
          <LinkContainer to="product/mens">
            <NavDropdown.Item href="#" onClick={closeNav}>Mens</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="product/womens">
            <NavDropdown.Item href="#" onClick={closeNav}>Womens</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="product/kid">
            <NavDropdown.Item href="#" onClick={closeNav}>Kids</NavDropdown.Item>
            </LinkContainer>
                 
          </NavDropdown>
        
          <hr />
         <NavDropdown title="Pages" id="basic-nav-dropdown">
         <LinkContainer to="multipages/formal">
            <NavDropdown.Item href="#" onClick={closeNav}>Formal</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="multipages/semiformal">
            <NavDropdown.Item href="#" onClick={closeNav}>Semiformal</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="multipages/arrivals">
            <NavDropdown.Item href="#" onClick={closeNav}>New arrivals</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="multipages/Casual">
           
            <NavDropdown.Item href="#" onClick={closeNav}>Casual</NavDropdown.Item>
            </LinkContainer>

          </NavDropdown>
          <hr />
          <Nav.Link href="#home">Elements</Nav.Link>
          <hr />
                  <Nav.Link href="#home">Accessories</Nav.Link>
                  <hr />

             
                  
        </Nav>
</div>
        
     
    </Navbar>
              </Tab.Pane>
              <Tab.Pane eventKey="tab2">
              <Navbar expand="md">

<Nav className="ml-auto d-block">
  <Nav.Link href="#">My Account</Nav.Link>
  <hr />
  <Nav.Link href="#">My Wish List</Nav.Link>
  <hr />
  <Nav.Link href="#">Sign In</Nav.Link>
  <hr />
  <Nav.Link href="#">Create an Account</Nav.Link>
  
 

          
</Nav>

</Navbar>
     
              </Tab.Pane>
              <Tab.Pane eventKey="tab3">
              <Navbar expand="md">

<Nav className="ml-auto d-block">
<select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        {/* Add more language options as needed */}
      </select>
      <hr />
        <select value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        {/* Add more currency options as needed */}
      </select>
  
 

          
</Nav>

</Navbar>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MobileMenu;
