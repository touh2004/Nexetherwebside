import React, { useState, useEffect } from "react";
import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ProductPopup from '../../components/Modals/ProductPopup.jsx';
import '../../styles/product.css';


const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const images = [
    { src: product1, name: "Decentralized Browser", description: "The Decentralized Browser by NexEther redefines internet browsing with enhanced privacy, security, and freedom. Built on blockchain technology, this innovative browser eliminates the need for central servers, ensuring that user data remains private and untraceable. It provides a seamless browsing experience while supporting peer-to-peer networks, enabling censorship-resistant access to information." },
    { src: product2, name: "Social Media Application", description: "Our Decentralized Social Media Application redefines online interactions by offering a platform that prioritizes user autonomy  data privacy, and transparency. Built on blockchain technology, this application ensures that users retain full ownership of their content and data, eliminating reliance on centralized servers prone to breaches and censorship. By integrating peer-to-peer networking, it promotes freedom of expression and a fair content distribution model" },
    { src: product3, name: "Arogya Locker", description: "Arogya Locker is an innovative product designed to revolutionize healthcare data management  It serves as a secure, decentralized platform for storing and sharing medical records. Leveraging blockchain technology, it ensures data integrity, privacy, and transparency, enabling users to access and control their health information seamlessly. Arogya Locker empowers individuals while fostering a more efficient and connected healthcare ecosystem." },
  ];

  const nextImaged = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImaged = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getTransformStyled = (index) => {
    const position = (index - currentIndex + images.length) % images.length;
    if (position === 0) return "translateX(0) scale(1.2)";
    if (position === 1 || position === -images.length + 1) return "translateX(120%) scale(1)";
    if (position === -1 || position === images.length - 1) return "translateX(-120%) scale(1)";
    return "translateX(200%)";
  };

  const getOpacity = (index) => {
    const position = (index - currentIndex + images.length) % images.length;
    return position === 0 ? 1 : 0.6;
  };

  const getZIndex = (index) => {
    const position = (index - currentIndex + images.length) % images.length;
    return position === 0 ? 1 : 0;
  };

  const showPopup = (product) => {
    setSelectedProduct(product);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedProduct(null);
  };

  const prevPopupImage = () => {
    if (!selectedProduct) return;
    const currentIndex = images.findIndex((product) => product.name === selectedProduct.name);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedProduct(images[prevIndex]);
  };

  const nextPopupImage = () => {
    if (!selectedProduct) return;
    const currentIndex = images.findIndex((product) => product.name === selectedProduct.name);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedProduct(images[nextIndex]);
  };

  useEffect(() => {
    const interval = setInterval(nextImaged, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="products">
      <div className="product-section">
        <main>
          <div className="product-container">
            <h1>Our Products</h1>
            <div className="align">
              <div className="image-slider">
                <button className="slider-btn left-btn" onClick={prevImaged}>
                  &#10094;
                </button>
                <div className="slider-images">
                  {images.map((product, index) => (
                    <div
                      className="image-container"
                      key={`image-${index}`}
                      style={{
                        transform: getTransformStyled(index),
                        opacity: getOpacity(index),
                        zIndex: getZIndex(index),
                      }}
                      onClick={() => showPopup(product)}
                    >
                      <img src={product.src} alt={`Product ${index + 1}`} />
                      <div className="layer">
                        <h2>{product.name}</h2>
                        <i>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </i>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="slider-btn right-btn" onClick={nextImaged}>
                  &#10095;
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Render the popup component */}
      <ProductPopup
        selectedProduct={selectedProduct}
        popupVisible={popupVisible}
        closePopup={closePopup}
        prevPopupImage={prevPopupImage}
        nextPopupImage={nextPopupImage}
      />
    </section>
  );
};

export default Product;
