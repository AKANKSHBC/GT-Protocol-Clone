import React from 'react'
import Aishop from '../assets/aishopping.png';
import ImgBg from '../assets/mobil2.jpg';

const  Aishopping= () => {
  return (
    <> <div className="img-contaier">
    <img src="https://assets-global.website-files.com/655b3abf2299b0e80b845377/6560a51cb94ac6a163a44c48_GT_Hero_Mobile-poster-00001.jpg"alt="AI Icon"/>
  </div>
    
    <div className="mobile-contaier">
    <img src={ImgBg} alt="gone"/>
  </div>
    <div className='ai-shopping'>
      <h1>AI Shopping<br />
        <h2>Assistence</h2></h1>
      <button className="button3">Play Video</button>
      <img src={Aishop} alt="yo" />
      <p>Get AI assistance to purchase goods online as easily as talking to a friend<br /><br />
        Get $GTAI Token cashback after your purchases<br /><br />
        Explore cashback reinvestment offers to enhance the growth of your crypto portfolio<br /><br />
        Receive additional AI onboarding and mentoring throughout your crypto journey</p>
    </div><div className="image-button">
        <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a43_slider-arrow-top.svg" alt="yo" />
        <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a42_slider-arrow-bottom.svg" alt="yo" />
      </div></>
  );
}
export default Aishopping;