import React from 'react'
import Ainftimg from '../assets/ainft.jpg';

const  Ainft= () => {
  return (
<div className='ai-shopping'>
    <h1>AI Shopping<br />
    <h2>Assistence</h2></h1>
    <button className="button3">OurPitchdeck</button>
    <img src={Ainftimg} alt="yo" />
    <p >Receive AI assistance in searching for the trendiest NFT collections<br/><br/>
    Utilize AI for NFT market analysis to obtain recent trending stats<br/><br/>
    Employ conversational AI to facilitate NFT trading, buying, and selling<br/><br/>
    Create and sell your own NFTs</p>
</div>
  );
}
export default Ainft;