import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import "../styles/style.css";
import "../styles/contact.css";

const Contact = () => {

  return (
    <section id="contact">
      <div className="contact-section">
        <div className='left-con'>
          <h1>Contact Us</h1>
          <p>Have a question or want to get in touch? Send us a message and we will get back to you as soon as possible!</p>
            <div className="hidden-card visible">
              <form onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea name="message" placeholder="Your message" required></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>

        <div className='right-con'>
          <h2>Contact Info</h2>
          <div className='info-block'>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '30px', color: '#fff', marginRight: '10px' }} />
            <p>1234 Divi St. #1000,<br></br> San Francisco,<br></br> CA 93251</p>
          </div>
          <div className='info-block'>
            <FontAwesomeIcon icon={faClock} style={{ fontSize: '30px', color: '#fff', marginRight: '10px' }} />
            <p>Open Office Hours:<br></br> M-F: 8am-6pm <br></br> S-S: 10am-4pm</p>
          </div>
          <div className='info-block'>
            <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: '30px', color: '#fff', marginRight: '10px' }} />
            <p>NexEther@gmail.com <br></br> (346) 426-2351</p>
          </div>
          <div className='social-icons'>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
