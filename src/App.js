
import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';  


import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import Add from './components/header/add/Add';
import Navigation from './components/header/nav/Navigation';
import Newsletter  from "./components/Footer/Newsletter/Newsletter"
import Footer from "./components/Footer/Footer"
import Homes from './pages/Homes';
import MobileMenu from './components/header/nav/MobileMenu';
import Mobile_res from './components/header/nav/Mobile_res';
import Mens from './pages/products_Page/mens/Mens';
import Womens from './pages/products_Page/womens/Womens';
import Kid from './pages/products_Page/kid/Kid';
import Product from './pages/products_Page/Product';
import Formal from './pages/multiiPages/formal/Formal';
import SemiFormal from './pages/multiiPages/semiFormal/SemiFormal';
import New from './pages/multiiPages/new/New';
import Casual from './pages/multiiPages/casual/Casual';
import SingleProduct from './pages/SingleProduct/SingleProduct';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Router>
     <Add />
     <Navigation />
     <MobileMenu />
     <Mobile_res />
     <Routes>
     <Route path="/" element={<Homes />} />
     {/* Product Pages  */}
     <Route path="product" element={<Product />} />
     <Route path="product/mens" element={<Mens />} />
     <Route path="product/womens" element={<Womens />} />
     <Route path="product/kid" element={<Kid />} />

     {/* Multi Pages  */}
     <Route path="multipages/formal" element={<Formal />} />
     <Route path="multipages/semiformal" element={<SemiFormal />} />
     <Route path="multipages/arrivals" element={<New />} />
     <Route path="multipages/Casual" element={<Casual />} />
     <Route path="/singleproduct" element={<SingleProduct />} />
  


     </Routes>
     <Newsletter />
                <Footer />
     
                </Router>
    </div>
  );
}

export default App;
