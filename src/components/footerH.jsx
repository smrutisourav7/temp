import React from "react";
import green_field from "../images/green-field.webp";
import "../styles/footerH.css";
import logo from "../images/hand-icon.svg";

const FooterH = () => {
  return (
    <>
      <div
        className="footerH"
        style={{ backgroundImage: `url(${green_field})` }}
      >
        <img src={logo} alt="logo" />
        <div className="Container">
          <p id="footer">We're proud to be a</p>
          <p id="id">carbon neutral company</p>
          <button style={{textAlign: "center"}}>learn more</button>
        </div>
      </div>
    </>
  );
};

export default FooterH;
