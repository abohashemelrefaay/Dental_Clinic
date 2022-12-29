import React from 'react';
import './style_about_us.css';
const AboutUs = () => {
  return (
    <div className='about_us'>
      <div className="container">
        <div className="about_us_cover">
          <div className="Dental_cleaner">
            <div className="cleaner">
              <img src="images/about1.webp" alt="" />
              <h6>Free</h6>
              <p>Dental Implant Consultation</p>
            </div>
            <div className="cleaner">
              <img src="images/about1.webp" alt="" />
              <h6>$175</h6>
              <p>Custom Teets Whitening Trays</p>
            </div>
            <div className="cleaner">
              <img src="images/about1.webp" alt="" />
              <h6>$8,200</h6>
              <p>Single Dental Implant & Crown</p>
            </div>
          
          </div>
          <hr/>
          <div className="cov_text_image">
            <div className="cov_image">
              <img src="images/about.webp" alt="" />
            </div>
            <div className="cov_text">
              <div className="text">
                <h5>About Us</h5>
                <h2>We Care About Your Dental Health</h2>
                <p>It has survived not only five centuries, but also the leap into electronictypesetting, remaining essentially unchanged.</p>
              </div>
              <div className="features">
                <span><i className="fa fa-check"/> Easy Online Booking Here</span>
                <span><i className="fa fa-check" />  Best Quality Appointment Services</span>
                <span><i className="fa fa-check" />  100% Dental Care</span>
                <span><i className="fa fa-check" />  Affortable Price For You</span>
                <span><i className="fa fa-check" />  Affortable PriThe standard chunk of Lorem Ipsum used</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default AboutUs;
