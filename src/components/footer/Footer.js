import React from "react";
import logo_R from '../../assets/log_R-white.svg'
import logo_mobile from '../../assets/logo_mobile_white.svg'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo_R} alt="logo" />
      <img className="footer__logo-mobile" src={logo_mobile} alt="logo"/>
      <p className="footer__text">© 2024 RIMAC Seguros y Reaseguros.</p>
    </footer>
  );
};
