import React, { useRef, useEffect } from "react";
import "../../styles/Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CreativeTeam = () => {
  const teamMembers = [
    { name: "Varshini", role: "Frontend Lead" },
    { name: "Apoorva", role: "Backend Lead" },
    { name: "Pooja", role: "UI/UX Lead" },
    { name: "Harshitha", role: "Blockchain Lead" },
    { name: "Madhu", role: "AI Lead" },
    { name: "Sairaj", role: "Product Lead" },
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.autoplay.start();

      return () => {
        if (swiperInstance && swiperInstance.autoplay) {
          swiperInstance.autoplay.stop();
        }
      };
    }
  }, []);

  return (
    <div className="creative-team-wrapper">
      <div className="header-section1">
        <div className="header-content1">
          <h1>Our Creative Team</h1>
        </div>
      </div>
      <div className="team-section">
        <Swiper
          ref={swiperRef}
          className="team-slider"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={250}
          slidesPerView={3}
          navigation={false}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={2000}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className={`team-member ${index % 2 === 0 ? "odd" : "even"}`}>
                <div className="image-placeholder">298 x 315</div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="social-links">
                  <a href="#" className="social-icon facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#" className="social-icon twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="social-icon dribbble">
                    <FontAwesomeIcon icon={faDribbble} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="rotated-rectangle"></div>
    </div>
  );
};

export default CreativeTeam;
