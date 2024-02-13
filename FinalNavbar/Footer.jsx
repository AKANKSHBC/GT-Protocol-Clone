import React from 'react'
import {FaInstagram, FaTelegram, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'; // Import icons from react-icons library


const Footer= () => {
  return (
    <><div className="footer-container">

    <div className='footer-content'>
        <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615986_logo.svg" alt="yo" width={210} />
        <p>A conversational Web3 Crypto AI <br />
          execution technology that provides <br />
          you with access to CeFi, DeFi, and NFT<br />
          crypto markets through an all-in-one <br />
          conversational AI interface.</p>
        <div className="footer-list">
          <h1>Socials</h1>
          <li><FaInstagram class="icon" />Telegram</li>
          <li><FaTelegram class="icon"/>Community channel</li>
          <li><FaTwitter class="icon" />Twitter</li>
          <li><FaLinkedin class="icon" />Linkeddin</li>
          <li><FaTwitter class="icon" />Medium</li>
          <li><FaYoutube class="icon" />Youtube</li>
        </div>

        <div className="footer-list1">
          <h1>Use cases</h1>
          <li>Technology</li>
          <li>Track Record</li>
          <li>Partners</li>
          <li>Team</li>
          <li>Jobs</li>

        </div>
        <div className="footer-list2">
          <h1>Contacus</h1>
          <li>Contact Us</li>
          <li>Track Record</li>
          <li>BranKit</li>
        </div>
        </div>
      </div></>
  );
}
export default Footer;