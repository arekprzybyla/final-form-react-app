import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_info">
          <div className="footerbox1">
            <h2>CONTACT US</h2>
            <ul>
              <li>Waterbridge Road, Edgware</li>
              <li>London HA8 6AG</li>
              <li>finalform@gmail.com</li>
              <li>+44 7543036074</li>
            </ul>
          </div>
          <div className="footerbox2">
            <h2>OPENING TIMES</h2>
            <div className="ul_div">
              <ul className="ul_day">
                <li>MONDAY</li>
                <li>TUESDAY</li>
                <li>WEDNESDAY</li>
                <li>THURSDAY</li>
                <li>FRIDAY</li>
                <li>SATURDAY</li>
                <li>SUNDAY</li>
              </ul>
              <ul className="ul_time">
                <li>07:00 - 22:00</li>
                <li>07:00 - 22:00</li>
                <li>07:00 - 22:00</li>
                <li>07:00 - 22:00</li>
                <li>07:00 - 22:00</li>
                <li>07:00 - 22:00</li>
                <li>07:00 - 22:00</li>
              </ul>
            </div>
          </div>
          <div className="footerbox3">
            <h2>SOCIAL MEDIA</h2>
            <div className="icons">
              <span className="single_icon">
                <i className="ri-instagram-line"></i>
              </span>
              <span className="single_icon">
                <i className="ri-twitter-x-line"></i>
              </span>
              <span className="single_icon">
                <i className="ri-facebook-box-line"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_rights">
        <p>&#169;</p>
        <p>2024 Final Form. All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
