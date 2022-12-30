import React from "react";
import "./style_Works.css";
const Work = () => {
  return (
    <div className="work">
      <div className="container">
        <div className="work_cover">
          <div className="cov_text_image">
            <div className="cov_text">
              <div className="text">
                <h5>How It Works</h5>
                <h2>Why Choose OralForm Dental Health?</h2>
                <p>
                  Handled directly by general dentists and professional and
                  experience Desktop-1.png As well as cooperating with various
                  insurances for the convenience of payment.
                </p>
              </div>
              <div className="features">
                <div className="element">
                  <img src="images/work2.webp" alt="" />
                  <p>
                    Professional dental care of the highest standards in a
                    Comfortable and Relaxed environment.
                  </p>
                </div>
                <div className="element">
                  <img src="images/work2.webp" alt="" />
                  <p>
                    We utilize Up to date dental technologies and techniques to
                    help you achieve a smile that you can be proud of.
                  </p>
                </div>
                <div className="element">
                  <img src="images/work2.webp" alt="" />
                  <p>
                    Provides On-Site oral health care services to Schools,
                    Corporate, and Senior homes We bring the dentist to you.
                  </p>
                </div>
              </div>
            </div>
            <div className="cov_image">
              <img src="images/about.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
