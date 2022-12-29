import React from "react";
import "./style_navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
          <div className="logo">OralForm</div>
          <ul className="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About_Us">About Us</a>
            </li>
            <li>
              <a href="/Services">Services </a>
            </li>
            <li>
              <a href="/Our_mission">Our mission</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
          <form className="login">
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
          </form>
      </div>
    </div>
  );
};

export default Navbar;
