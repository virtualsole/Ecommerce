import React, {useState} from 'react'
import {BsTelephone} from 'react-icons/bs' 
import {CiMail} from 'react-icons/ci' 
import './Add.css'
const Add = () => {
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
  return (
    <header className="top-header">
    <div className="column col-lg-4 d-flex">
    <div className="d-flex ms-lg-3 ms-md-3 ">
     <CiMail className='icon mt-1' />
     <a href="mailto:info@virtualtec.org"><span className='ms-2 add_contact'>info@virtualtec.org</span></a>
     </div>
     <div className="d-flex ms-2">
     <BsTelephone className='icon mt-1' />
     <a href="tel:+97-150-994-9375 "><span className='ms-2 add_contact'>+971509949375</span></a>
     </div>
    
   
    </div>
    <div className="column col-lg-4"><span className='add_discont'>Summer sale discount off <span className="text-danger">50%!</span> Shop Now</span></div>
    <div className="column add_respons">
    <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        {/* Add more language options as needed */}
      </select>
        <select value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        {/* Add more currency options as needed */}
      </select>
    </div>
  </header>
  )
}

export default Add

// {/* <span class="icon pe-7s-mail">&nbsp;</span>claue@domain.com</a> */}<span class="icon pe-7s-call">&nbsp;</span>+01 23456789</a>