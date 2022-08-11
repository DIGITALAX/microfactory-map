import React from 'react';

function Loader() {
  return (
    <div className='absolute top-0 left-0 w-screen h-screen bg-black z-10 justify-center'>
        <div className='absolute top-1/2 left-1/2 w-1 h-1 -translate-y-1/2 -translate-x-1/2 bg-loading-radial2 rounded-full z-30' />
        <div className='absolute top-1/2 left-1/2 w-0 h-0 shadow-loading-shadow border-2	border-solid border-loading-color rounded-full z-20 -translate-y-1/2 -translate-x-1/2 animate-[pulse2_3s_ease_infinite]' />
    </div>
  )
}

export default Loader