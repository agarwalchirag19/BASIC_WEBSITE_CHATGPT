import "../styling/Footer.css";

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2023 My Website</p>
        <ul className="footer__links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
