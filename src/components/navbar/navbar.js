import React from "react";
import "./style_navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
          <div className="logo">OralForm</div>
          <div className="links">
            <span>
              <a href="/">Home</a>
            </span>
            <span>
              <a href="/About_Us">About Us</a>
            </span>
            <span>
              <a href="/Services">Services </a>
            </span>
            <span>
              <a href="/Our_mission">Our mission</a>
            </span>
            <span>
              <a href="/Contact">Contact</a>
            </span>
          </div>

          <div className="login">
            <input
              type="submit"
              onClick={(o) => o.preventDefault()}
              className="login_submit"
              value="Login as Patient"
            />
            <input
              type="submit"
              onClick={(o) => o.preventDefault()}
              className="login_submit"
              value="Login as Dentist"
            />
          </div>
      </div>
    </div>
  );
};

export default Navbar;
