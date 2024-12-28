import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Login from "./components/Login";
import Register from "./components/Register";
import BestBooks from './components/BestBooks';
import Banner from './components/Banner';
import AppStoreBanner from './components/AppStoreBanner';
import AllBooks from './components/AllBooks';
import Popup from './components/Popup';
import Table from "./components/ProductTable";
import AdminPage from "./components/AdminPage";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (

      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={isAuthenticated ? (
          <>
            <Navbar />
            <Hero handleOrderPopup={handleOrderPopup} />
            <BestBooks handleOrderPopup={handleOrderPopup} />
            <Table />
            <Banner />
            <AppStoreBanner />
            <AllBooks />
            <Testimonial />
            <Footer />
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
          </>
        ) : (
          <Navigate to="/login" />
        )} />
        <Route path="/AdminPage" element={<AdminPage />} /> {/* Add the AdminPage route */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>

  );
};

export default App;
