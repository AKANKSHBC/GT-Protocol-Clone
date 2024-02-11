import React from "react";
import Tabletbg from  '../assets/tablet.png'
import Tabletholder from '../assets/tabletholder.png'



const Tablet = () => {
  return (

    <>  <div className="img-container3">
    </div>
    <div className="tablet">
      <img src={Tabletbg} alt="phone" width={1100} />
    </div><div className="tabletholder">
        <img src={Tabletholder} alt="phone" width={1300} /></div>
        </>   
  );
}

export default Tablet;