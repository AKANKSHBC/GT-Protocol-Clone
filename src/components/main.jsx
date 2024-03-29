import React from "react";
import VideoBg from '../assets/videobg.mp4';
import Marques from "./Marques";
import Navbars from "./Navbars";
import Ainft from "./Ainft";
import Tablet from "./Tablet";
import Footer from "./Footer";
import Sdk from "./Sdk";
import Marquee2 from   "./Marquee2";
import Web3 from "./Web3";
import { FaArrowDown } from 'react-icons/fa';
// import Aishopping from "./Aishopping";

const Main = () => {
  return (

    <div className="main">
      <video src={VideoBg} autoPlay loop muted style={{ width: '100%', height: 'auto' }}></video>
      <div className="content">
        <h1>Blockchain <br />
          <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a59_hero-title-arrow.svg" alt="AI Icon" height={50} />AI Execution<br /> Protocol </h1>

        <p>AVAILABLE ON: <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21d33fb6cf4529d94c421_logo-hero-01.svg" alt="AI Icon" height={30} />

          <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21db57c61c8b7e100f23c_logo-hero-02.svg" alt="AI Icon" height={30} />
          <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21e1196276710947bbb38_logo-hero-03.svg" alt="AI Icon" height={30} />
          <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21ef9546edb766cb0f0e4_logo-hero-07.svg" alt="AI Icon" height={30} />
          <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21e314c6d54525a254aa1_logo-hero-04.svg" alt="AI Icon" height={30} />
          <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21e705ee92679b942e3c3_logo-hero-05.svg" alt="AI Icon" height={30} />
          <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21e975ddf7f56617d1e91_logo-hero-06.svg" alt="AI Icon" height={50} />
        </p>
      </div>
      <div className="contentP">
        <p> A Web3 AI execution technology that <br />provides you with access to CeFi, DeFi, and <br />NFT crypto markets through an all-in-one<br /> conversational AI interface.</p>
      </div>
      <div className="nav-baar">
        < Navbars /></div>
      <div className="buttonContainer">
        <button className="button">OurPitchdeck</button>
        <button className="button1"><FaArrowDown/>Explore</button>
      </div>
    
      <div className="container">
      <div className="marquee-container">
        <div className="trust">
          <p >Trusted By:</p>
          
        </div>
       
        <div class="box-marque">
        <Marques/>
        </div></div>
      </div>
         <Ainft/>
         {/* <Aishopping/> */}
        <Marquee2/>
         <Tablet/>
         <Web3 />
         <Sdk/>
        <Footer />
        
  </div>
   
  );
}
export default Main