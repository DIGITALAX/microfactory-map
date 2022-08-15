import React, {useContext} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import {contextApi} from './../../pages/_app';
import Draggable from 'react-draggable';

function MarkerInfo(props) {

  const data = useContext(contextApi);

  const closeMarkerInfo = () => {
    props.setClickedMarker(null);
  }

  return props.clickedMarker ? (
    <div>
      {
        data.open ?
        <Draggable enableUserSelectHack={false}>
          <div className='max-w-36 p-6 m-4 w-1/3 z-10 text-white text-sm font-space absolute ml-80 bottom-0 h-60 bg-lightGrey cursor-move'>
          <h1 className='cursor-text mb-4'>{props.clickedMarker.story}</h1>
          <span className='mt-6 text-purple-400'>Prompt: </span>
          <p className='cursor-text mt-1'>{props.clickedMarker.prompt}</p>
          <span class="relative h-3 w-3">
            <span class="animate-ping absolute h-3 w-3 rounded-full opacity-75 bg-amber-500 mt-6"></span>
            <span class="absolute inline-flex rounded-full h-3 w-3 bg-amber-500 mt-6"></span>
            <p className='absolute top-5 ml-6 text-amber-500 font-sans'>{props.clickedMarker.nodeStatus}</p>
          </span>
          <AiFillCloseCircle 
          color='white'
          className='absolute top-0 right-0 p-0 m-2 cursor-pointer'
          onClick={closeMarkerInfo}
          />
          </div>
        </Draggable>
        :
        <Draggable enableUserSelectHack={false}>
          <div className='max-w-36 p-6 m-4 w-1/3 z-10 text-white text-sm font-space absolute ml-28 bottom-0 h-60 bg-lightGrey cursor-move'>
          <h1 className='cursor-text mb-4'>{props.clickedMarker.story}</h1>
          <span className='mt-6 text-purple-400'>Prompt: </span>
          <p className='cursor-text mt-1'>{props.clickedMarker.prompt}</p>
          <span class="relative h-3 w-3">
            <span class="animate-ping absolute h-3 w-3 rounded-full opacity-75 bg-amber-500 mt-6"></span>
            <span class="absolute inline-flex rounded-full h-3 w-3 bg-amber-500 mt-6"></span>
            <p className='absolute top-5 ml-6 text-amber-500 font-sans'>{props.clickedMarker.nodeStatus}</p>
          </span>
          <AiFillCloseCircle 
          color='white'
          className='absolute top-0 right-0 p-0 m-2 cursor-pointer'
          onClick={closeMarkerInfo}
          />
          </div>
        </Draggable>
      }
    </div>
  ) : null
}

export default MarkerInfo