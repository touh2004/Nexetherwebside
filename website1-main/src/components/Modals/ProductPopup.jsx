import React from "react";

const ProductPopup = ({ 
  selectedProduct, 
  popupVisible, 
  closePopup, 
  prevPopupImage, 
  nextPopupImage 
}) => {
  if (!popupVisible || !selectedProduct) return null;

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn1" onClick={closePopup}>
          &#10005;
        </button>
        <button className="slider-btn left-btn" onClick={prevPopupImage}>
          &#10094;
        </button>
        <div className="border-line"> </div>
        <div className="popup-image-content">
          <img src={selectedProduct.src} alt={selectedProduct.name} />
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
        </div>
        <button className="slider-btn right-btn" onClick={nextPopupImage}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ProductPopup;
