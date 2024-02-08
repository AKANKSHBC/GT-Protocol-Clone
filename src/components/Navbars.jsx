import React from "react";
import { FaHome, FaUser, FaCog, FaBell, FaInstagram, FaTelegram, FaWhatsapp, FaDiscord, FaTwitter, FaYoutube, FaLinkedin, FaFacebook, FaTiktok } from 'react-icons/fa'; // Import icons from react-icons library

const Navbars = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#"><FaInstagram /></a></li>
        <li><a href="#"><FaTelegram /></a></li>
        <li><a href="#"><FaWhatsapp /></a></li>
        <li><a href="#"><FaDiscord /></a></li>
        <li><a href="#"><FaTwitter /></a></li>
        <li><a href="#"><FaYoutube /></a></li>
        <li><a href="#"><FaLinkedin /></a></li>
        <li><a href="#"><FaFacebook /></a></li>
        <li><a href="#"><FaTiktok /></a></li>
      </ul>
    </div>
  );
}

export default Navbars;