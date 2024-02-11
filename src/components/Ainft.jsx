import React from 'react'
import Ainftimg from '../assets/ainft.jpg';
import ImgBg from '../assets/mobil2.jpg';

const  Ainft= () => {
  return (
    <><div className="img-contaier">
    <img src="https://assets-global.website-files.com/655b3abf2299b0e80b845377/6560a51cb94ac6a163a44c48_GT_Hero_Mobile-poster-00001.jpg"alt="AI Icon"/>
  </div>
    
     <div className="mobile-contaier">
    <img src={ImgBg} alt="gone"/>
  </div>
    <div className='ai-shopping'>
      <h1>AI Shopping<br />
        <h2>Assistence</h2></h1>
      <button className="button3">OurPitchdeck</button>
      <img src={Ainftimg} alt="yo" />
      <p>Receive AI assistance in searching for the trendiest NFT collections<br /><br />
        Utilize AI for NFT market analysis to obtain recent trending stats<br /><br />
        Employ conversational AI to facilitate NFT trading, buying, and selling<br /><br />
        Create and sell your own NFTs</p>
    </div><div className="image-button">
        <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a43_slider-arrow-top.svg" alt="yo" />
        <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a42_slider-arrow-bottom.svg" alt="yo" />
      </div></> 
  );
}
export default Ainft;