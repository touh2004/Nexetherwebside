import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faLinkedin, faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import logo from "../../assets/images/logo.png";


const Footer = () => (

  <footer>
    <div className="end-container">
      <div className="sort">
        <div className="first">
          <img src={logo} alt="NexEther Logo" href="#home" className="logo-img click" />
        </div>
        <div className="second">
          <h1>Join our mailing list</h1>
          <p>Be the first to know about exclusive offers, and more!</p>
          <form action="subscribe">
            <input type="email" placeholder="Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="third">
          <h1>Our Products</h1>
          <a href="product1.html" target="_blank" className="product-link">Arogya Locker</a>
          <a href="product2.html" target="_blank" className="product-link">Decentralized Browser</a>
          <a href="product3.html" target="_blank" className="product-link">Social Media</a>
        </div>
        <div className="fourth">
        <h1>Follow Us</h1>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
