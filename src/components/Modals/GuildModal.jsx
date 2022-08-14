import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'


function GuildModal(props) {

  const handleGuildModalClose = () => {
    props.setGuildModal(false);
  }

  if(!props.visible) return null;

  return (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
    <div className="relative bg-greenLens p-2 rounded w-72">
      <AiFillCloseCircle 
      color='#00501e'
      className='item-center right-0 top-0 p-0 m-2 cursor-pointer absolute'
      onClick={handleGuildModalClose}
      />
      <h1 className="font-semibold text-center text-xl text-darkGreenLens mt-4 font-space">
        Coming Soon
      </h1>
      <video src="/assets/video/Logo-roots_1.mp4" type="video/mp4" autoPlay loop muted className='mb-5'/>
      <div className="text-center">
        <a href="https://claim.lens.xyz/" target="_blank" rel="nonreferer">
        <button className="px-5 py-2 bg-darkGreenLens font-space text-greenLens mb-3 rounded hover:opacity-80">
          Own Your Digital Roots
        </button>
        </a>
      </div>
    </div>
  </div>
  )
}

export default GuildModal