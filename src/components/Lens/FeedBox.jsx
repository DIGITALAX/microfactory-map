import React, {useContext, useState, useRef} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { VscChromeMinimize } from 'react-icons/vsc';
import { HiArrowsExpand } from 'react-icons/hi'
import { contextApi } from '../../pages/_app';
import Draggable from "react-draggable";
import Feed from './Feed';
import FeedSearch from './FeedSearch';


function FeedBox() {

  const data = useContext(contextApi);

  if(!data.isFeedOpen) return null;
  
  return(
    <Draggable enableUserSelectHack={false}>
        <div className="fixed flex items-center justify-center z-10 cursor-move top-1/2 left-1/2">

        { !data.minimise ? 
        <div className="absolute bg-lensLilac p-2 rounded-lg w-72 sm:w-96">
          <AiFillCloseCircle 
          color='#00501e'
          className='item-center right-0 top-0 p-0 m-2 cursor-pointer absolute'
          onClick={data.handleFeedModal}
          />
          <VscChromeMinimize 
          color='#00501e'
          height={'2px'}
          className='item-center right-6 top-0 p-0 m-2 cursor-pointer absolute'
          onClick={data.handleMinimise}
          />
          <h1 className="font-semibold text-center text-xl text-darkGreenLens mt-4 font-spacebold">
            Scroll Feed
          </h1>
          <FeedSearch />
          <div className='bg-lensGrey p-6 mr-2 ml-2 rounded-lg mb-5 item-center h-96 overflow-auto select-text'>
          < Feed id='#scrollableDiv' />
          </div>
        </div> 
        :
        <div className="absolute bg-lensLilac p-2 rounded-lg w-56">
        <AiFillCloseCircle 
        color='#00501e'
        className='item-center right-5 top-[36%] p-0 cursor-pointer absolute'
        onClick={data.handleFeedModal}
        />
        <HiArrowsExpand 
        color='#00501e'
        className='item-center top-[36%] right-10 p-0 cursor-pointer absolute'
        onClick={data.handleMinimise}
        />
        <h1 className="font-semibold border-solid border rounded-lg	p-2 border-red-600 text-left text-xl text-darkGreenLens font-spacebold">
          OKAY BLOOMER
        </h1>
      </div> 
        }

        </div>
    </Draggable>
  )

}

export default FeedBox