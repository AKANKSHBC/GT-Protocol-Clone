import React from "react";
import Sdkbg from  '../assets/Sdkbg.svg'


const Sdk = () => {
  return (
    <><div className="sdk-container">
    </div>
    <div className="sdk">
        <img src={Sdkbg} alt="phone" width={600} />
      </div>
      <div className="sdk-content">
          <h1>GT Protocol<br/>API SDK</h1> 
          <p>Allows integration of GT-Protocol’s Blockchain AI execution technology<br/>
           and Web3 investment marketplace solutions into third-party Web2 and <br/>
           Web3 platforms, enhancing their functionality with AI crypto investment <br/>
           capabilities.</p>
        </div></>   
     
  );
}

export default Sdk;