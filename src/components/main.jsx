import React from "react";
import VideoBg from '../assets/videobg.mp4';
import Marques from "./Marques";
import Navbars from "./Navbars";
import Ainft from "./Ainft";
import Tablet from "./Tablet";
import Sdk from "./Sdk";
import ImgBg from '../assets/mobil2.jpg';
import Marquee2 from   "./Marquee2";
import Tabletholder from  '../assets/tabletholder.png'
import { FaArrowDown } from 'react-icons/fa';
const Main = () => {
  return (

    <div className="main">
      <video src={VideoBg} autoPlay loop muted style={{ width: '100%', height: 'auto' }}></video>
      <div className="content">
        <h1>Blockchain <br />
          <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a59_hero-title-arrow.svg" alt="AI Icon" height={50} />AI Execution<br /> Protocol </h1>

        <p>Available On: <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21d33fb6cf4529d94c421_logo-hero-01.svg" alt="AI Icon" height={30} />

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
    <div className="img-contaier">
      <img src="https://assets-global.website-files.com/655b3abf2299b0e80b845377/6560a51cb94ac6a163a44c48_GT_Hero_Mobile-poster-00001.jpg"alt="AI Icon"/>
    </div>
    <div className="mobile-contaier">
      <img src={ImgBg} alt="gone"/>
    </div>
     <Ainft/>
     <div className="image-button">
    <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a43_slider-arrow-top.svg" alt="yo" />
    <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a42_slider-arrow-bottom.svg"alt="yo"/>
    </div> 
  
      <div className="marquee-2-contaier">
        <div className="box-marquee-2">
      <div className="kyc2">
          <p >KYC&AUDITED BY:</p>  
        </div>
        <Marquee2/></div>
      </div>
     
    <div className="img-container3">
    </div>
  
  <Tablet/>
  <div className="tabletholder">
    <img src={Tabletholder} alt="phone" width={1300}/>
  </div>
  <div className="web3">
          <h1>GT APP is the Next-<br/>gen Web 3.0 Crypto<br/> Investment Platform</h1>  
          <p>GT Protocol offers an intuitive non-custodial crypto investment<br/> experience guided by blockchain AI execution interface<br/><br/>
Profitable strategies featuring controllable risk levels, along with<br/> a transparent and traceable history of every deal<br/><br/>
Unique AI trading and investment tools powered by an AI execution<br/> technology<br/><br/>
Access to crypto investments across DeFi, CeFi, and NFT markets</p>
<button>Join Now</button>
        </div>
     <div className="sdk-container">
     </div>
         <Sdk/>
         <div className="sdk-content">
          <h1>GT Protocol<br/>API SDK</h1> 
          <p>Allows integration of GT-Protocol’s Blockchain AI execution technology<br/>
           and Web3 investment marketplace solutions into third-party Web2 and <br/>
           Web3 platforms, enhancing their functionality with AI crypto investment <br/>
           capabilities.</p>
        </div>
    </div>
   
  );
}
export default Main