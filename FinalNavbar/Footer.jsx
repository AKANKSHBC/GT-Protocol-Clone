import React from 'react';
import { FaInstagram, FaTelegram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons library
import { useNavigate } from 'react-router';

const Footer = () => {

  const navigate= useNavigate()
  return (
    <div className="  bg-gray-900  flex flex-row  justify-around items-center flex-wrap  h-screen w-screen  max-lg:space-y-10 max-sm:flex-col ">
      <div className='flex flex-col justify-around relative -mt-28 max-lg:hidden '>
        <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615986_logo.svg" alt="yo" className=" text-white w-60 h-16 -mt-8" />
        <p className=" text-white text-lg my-3">A conversational Web3 Crypto AI<br></br>
          execution technology that provides <br></br>
          you with access to CeFi, DeFi, and NFT<br></br>
          crypto markets through an all-in-one <br></br>
          conversational AI interface.</p>
        </div> 
        <div className='max-lg:flex flex-col justify-around relative ml-16 mr-52  hidden max-lg:absolute max-lg:top-0 max-sm:mx-4 '>
        <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615986_logo.svg" alt="yo" className=" text-white w-60 h-16 -mt-8" />
        <p className=" text-white text-lg my-3 flex flex-wrap max-sm:text-sm">A conversational Web3 Crypto AI
          execution technology that provides 
          you with access to CeFi, DeFi, and NFT
          crypto markets through an all-in-one 
          conversational AI interface.</p>
        </div>
        <div className=" flex flex-col justify-around max-lg:absolute max-lg:left-14 max-lg:bottom-14 max-sm:bottom-44 max-sm:left-4  ">
          <div className="text-white text-2xl -mt-8  max-lg:mt-0 max-sm:xl">Socials</div>
          <ul className='my-6 space-y-3 max-sm:space-y-1'>
            <li className="flex items-center text-white text-lg max-sm:md"><FaTelegram className="icon mr-2" /><a href="https://telegram.org/"className="contact-link">Telegram</a></li>
            <li className="flex items-center text-white text-lg max-sm:md"><FaTelegram className="icon mr-2" /><a href="https://twitter.com/"className="contact-link">Communitychannel</a></li>
            <li className="flex items-center text-white text-lg max-sm:md"><FaTwitter className="icon  mr-2" /><a href='https://www.youtube.com/'className="contact-link">Twitter</a></li>
            <li className="flex items-center text-white text-lg max-sm:md"><FaLinkedin className="icon mr-2" /><a href='https://www.linkedin.com/'className="contact-link">LinkedIn</a></li>
            <li className="flex items-center text-white text-lg max-sm:md"><FaTwitter className="icon  mr-2" /><a href='https://medium.com/'className="contact-link">Medium</a></li>
            <li className="flex items-center text-white text-lg max-sm:md"><FaYoutube className="icon  mr-2" /><a href='https://www.youtube.com/'className="contact-link">YouTube</a></li>
          </ul>
        </div>

        <div className=" flex flex-col justify-around max-lg:absolute max-lg:bottom-12  max-sm:right-4 max-sm:-top-8   ">
          <div className="text-white text-2xl -mt-6 max-lg:mt-0 max-sm:xl max-sm:mt-10  ">Navigation</div>
          <ul className='space-y-3 my-6 max-sm:-mt-52 max-sm:space-y-1'>
          <li className="text-white text-lg max-sm:md"><a href=''className="contact-link">Use Cases</a></li>
            <li className="text-white text-lg max-sm:md"><a href=''className="contact-link">Technology</a></li>
            <li className="text-white text-lg max-sm:md"><a href=''className="contact-link">Track Record</a></li>
            <li className="text-white text-lg max-sm:md"><a href=''className="contact-link">Partners</a></li>
            <li className="text-white text-lg max-sm:md"><a href=''className="contact-link">Team</a></li>
            <li className="text-white text-lg max-sm:md"><a href=''className="contact-link">Jobs</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-around max-lg:absolute max-lg:right-14 max-lg:bottom-36  max-sm:-bottom-16 max-sm:mr-32 ">
          <div className="text-white text-2xl relative -top-28 max-sm:xl">Contact</div>
          <ul className='space-y-3 relative -top-20 max-sm:-top-24'>
            <li className="text-white text-lg max-sm:md"><a  onClick={() => navigate("/contatus")} className="contact-link">Contact Us</a></li>
            <li className="text-white text-lg max-sm:md"><a href=''className="contact-link">contact@gt-protocol.io</a></li>
          </ul>
        </div>
      </div>
  
  );
}

export default Footer;
