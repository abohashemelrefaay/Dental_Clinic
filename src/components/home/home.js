import React from "react";
import "./style_home.css";


const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home_cover">
          <div className="home_text">
            <h2>Improving lives, one <span>smile</span> at a time!</h2>
            <p>
              The first and only human-centered EMR, built to enable better
              clinical decisions, superior patient care.
            </p>
            <button>Make Appointment</button>
          </div>
          <div className="home_image">
            <img src="images/home.webp" alt="" />
            <img src="images/home1.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
