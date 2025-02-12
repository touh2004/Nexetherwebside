import React from 'react';
import '../../styles/about.css';

const About = () => {
  const aboutData = [
    {
      title: "ABOUT US",
      content: "At NexEther, we’re revolutionizing industries with blockchain—bringing security, transparency, and control to finance, supply chains, and digital identities. No middlemen, just scalable solutions for real-world problems. Let’s shape a smarter, decentralized future together!",
      image: "image4.jpg",
    },
    {
      title: "CORE VALUES",
      content: "At NexEther, innovation drives us, with every team member contributing to creative solutions. Trust and transparency guide our work, while collaboration fuels our success. We’re committed to excellence, always striving for the highest standards.",
      image: "image1.jpg",
    },
    {
      title: "OUR MISSION",
      content: "Our mission is to empower businesses and individuals with secure, transparent, and decentralized solutions, driving innovation and control in the digital world.",
      image: "image2.jpg",
    },
    {
      title: "OUR VISION",
      content: "Our vision is to create a decentralized world where businesses and individuals have full control, with secure, transparent, and innovative solutions that transform industries.",
      image: "image3.jpg",
    },
  ];

  return (
    <section id="about">
      <div
        className="about-section"
        style={{
          backgroundImage: "url('src/components/parallax.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="about-container">
          <div className="content-wrapper">
            {/* First Row with card1 */}
            <div id="card1" className="news-card">
              <div className="news-card__image" style={{ backgroundImage: `url('src/components/${aboutData[0].image}')` }}></div>
              <div className="news-card__text-wrapper">
                <h2 className="news-card__title">{aboutData[0].title}</h2>
                <div className="news-card__details-wrapper">
                  <p className="news-card__excerpt">{aboutData[0].content}</p>
                </div>
              </div>
            </div>

            {/* Second Row with card2, card3, and card4 */}
            <div className="arrange">
              <div className='remaining-cards-row'>
              <div id="card2" className="news-card">
                <div className="news-card__image" style={{ backgroundImage: `url('src/components/${aboutData[1].image}')` }}></div>
                <div className="news-card__text-wrapper">
                  <h2 className="news-card__title">{aboutData[1].title}</h2>
                  <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">{aboutData[1].content}</p>
                  </div>
                </div>
              </div>

              <div id="card3" className="news-card">
                <div className="news-card__image" style={{ backgroundImage: `url('src/components/${aboutData[2].image}')` }}></div>
                <div className="news-card__text-wrapper">
                  <h2 className="news-card__title">{aboutData[2].title}</h2>
                  <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">{aboutData[2].content}</p>
                  </div>
                </div>
              </div>

              <div id="card4" className="news-card">
                <div className="news-card__image" style={{ backgroundImage: `url('src/components/${aboutData[3].image}')` }}></div>
                <div className="news-card__text-wrapper">
                  <h2 className="news-card__title">{aboutData[3].title}</h2>
                  <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">{aboutData[3].content}</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
