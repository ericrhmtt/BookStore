import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestBooks from './components/BestBooks';
import Banner from './components/Banner';
import AppStoreBanner from './components/AppStoreBanner';
import AllBooks from './components/AllBooks';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Popup from './components/Popup';
// import Login from './components/Login';
// import Register from './components/Register';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 200,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    // <Routes>
    //   <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
    //   <Route path="/register" element={<Register />} />
    //   <Route 
    //     path="/" 
    //     element={
    //       isAuthenticated ? (
    //         <Navigate to="/home" />
    //       ) : (
    //         <Navigate to="/login" />
    //       )
    //     }
    //   />
    //   <Route 
    //     path="/home" 
    //     element={
    //       isAuthenticated ? (
            <>
              <Navbar handleOrderPopup={handleOrderPopup} />
              <Hero handleOrderPopup={handleOrderPopup} />
              <BestBooks handleOrderPopup={handleOrderPopup} />
              <Banner />
              <AppStoreBanner />
              <AllBooks />
              <Testimonial />
              <Footer />
              <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
            </>
  //         ) : (
  //           <Navigate to="/login" />
  //         )
  //       }
  //     />
  //   </Routes>
   );
};

export default App;
