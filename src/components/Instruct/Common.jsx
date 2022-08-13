import React from 'react';
import MintSection from './MintSection';
import LocalProduction from './LocalProduction';

function Common() {
  return (
    <div className='h-screen w-screen relative bg-black overflow-hidden'>
    <section className='relative overflow-hidden mt-14' id="init_section">
      <div className='absolute w-1/3 h-2/4 z-0 top-36 left-40' id="image_window">
      <img src='./assets/images/mf.png' className='absolute z-1 w-full h-full object-cover'/>
      </div>

      <div className='relative h-mf z-2 font-coop font-semibold align-center margin-auto'>
        <h1 className='flex text-white mt-32 text-8xl absolute left-1/2 top-40'>
          Renewable<br></br> Web3 <br></br>Co-Ops
        </h1>
       
      </div>
        </section>
    <section className=''>
      <LocalProduction />
    </section>
    <section className=''>
      <MintSection/>
    </section>
  
  </div>
  )
}

export default Common