import React from "react";
import logoKasa from "../images/WHITE-LOGO.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img id="logo-footer" src={logoKasa} alt="logo kasa" />
      <p>2020 Kasa. All right reserved</p>
    </div>
  );
};

export default Footer;
