import React, { useState, useEffect } from "react";
import Background from './components/ParticleBackground.jsx';
import Header from "./components/Layout/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./components/Sections/About.jsx";
import Products from "./components/Sections/Products.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Layout/Footer.jsx";
import LoginModal from "./components/Modals/LoginModal.jsx";
import Popup from "./components/Modals/ProductPopup.jsx";
import Loading from "./components/Layout/Loading/Loading.jsx";
import product1 from "./assets/images/product1.png";
import product2 from "./assets/images/product2.png";
import product3 from "./assets/images/product3.png";
import "./styles/style.css";



const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const toggleForm = () => setIsSignUp((prev) => !prev);

  const handleCloseModal = () => {
    setShowLoginModal(false);
    setIsSignUp(false);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedProduct(null);
  };

  const products = [
    { src: product1, name: "Decentralized Browser", description: "A secure, decentralized browser with enhanced privacy." },
    { src: product2, name: "Social Media Application", description: "A blockchain-based social media platform for secure sharing." },
    { src: product3, name: "Arogya Locker", description: "A health data storage solution leveraging blockchain." },
  ];

  const showPopup = (product) => {
    setSelectedProduct(product);
    setPopupVisible(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Background /> 
      <Header onLoginClick={() => setShowLoginModal(true)} />
      <Home />
      <About />
      <Products images={products} onProductClick={showPopup} />
      <Contact />
      <Footer />
      {showLoginModal && (
        <LoginModal
          showLoginModal={showLoginModal}
          handleCloseModal={handleCloseModal}
          isSignUp={isSignUp}
          toggleForm={toggleForm}
        />
      )}
      {popupVisible && selectedProduct && (
        <Popup product={selectedProduct} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default App;
