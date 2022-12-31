import React from "react";
import "./style_footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="cov_footer">
          <div className="myinfo">
            <div className="info">
              <h1>OralForm</h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </div>
            <div className="info">
              <h4>Useful Link</h4>
              <span> Services</span>
              <span>Make Appointment</span>
              <span>Gallery</span>
              <span>Event</span>
            </div>
            <div className="info">
              <h4>Contact</h4>

              <span>1223 Ruckman Road, Oklahoma City, Oklahoma</span>
              <span>(316) 123-4547</span>
              <a href="emailto:abohashemelrefaay@gmail.com">Send Email</a>
            </div>
            <div className="info">
              <h4>Newsletter</h4>
              <p>Subscribe to our newsletter and stay up to date.</p>
              <button>Email Address</button>
              <button>Subscribe</button>
            </div>
          </div>
          <div className="myinformation2">
            <h6>© 2022 abohashem.</h6>
            <div>
              <a href="https://www.facebook.com/">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://www.twitter.com">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com">
                <i className="fa fa-linkedin"></i>
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
