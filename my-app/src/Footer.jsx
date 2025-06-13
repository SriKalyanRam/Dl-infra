// src/Footer.jsx
import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Dl Infra. All Rights Reserved.</p>
          <ul className="footer-links">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
