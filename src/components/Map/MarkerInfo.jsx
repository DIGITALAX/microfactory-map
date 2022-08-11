import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'

function MarkerInfo(props) {

  const closeMarkerInfo = () => {
    props.setClickedMarker(null);
  }

  return props.clickedMarker ? (
    <div className='max-w-36 p-3 m-4 w-1/3 z-10 absolute ml-28 bottom-0 h-40 bg-lightGrey'>
      <h1>{props.clickedMarker.city}</h1>
      <p>{props.clickedMarker.address}</p>
      <AiFillCloseCircle 
      color='white'
      className='absolute top-0 right-0 p-0 m-2 cursor-pointer'
      onClick={closeMarkerInfo}
      />

    </div>
  ) : null
}

export default MarkerInfo