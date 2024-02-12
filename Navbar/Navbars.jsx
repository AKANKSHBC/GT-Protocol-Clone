import React from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaBell,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa"; // Import icons from react-icons library

const Navbars = () => {
  return (
    <div className="flex space-y-3 flex-col w-10 mx-auto">
      <a href="#" className="mx-auto">
        <FaInstagram />
      </a>
      <a href="#" className="mx-auto">
        <FaTelegram />
      </a>
      <a href="#" className="mx-auto">
        <FaWhatsapp />
      </a>
      <a href="#" className="mx-auto">
        <FaDiscord />
      </a>
      <a href="#" className="mx-auto">
        <FaTwitter />
      </a>
      <a href="#" className="mx-auto">
        <FaYoutube />
      </a>
      <a href="#" className="mx-auto">
        <FaLinkedin />
      </a>
      <a href="#" className="mx-auto">
        <FaFacebook />
      </a>
      <a href="#" className="mx-auto">
        <FaTiktok />
      </a>
    </div>
  );
};

export default Navbars;
