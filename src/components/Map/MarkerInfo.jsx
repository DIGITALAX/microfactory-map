import React, {useContext, useState, useMemo} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import {FiCopy} from 'react-icons/fi';
import {contextApi} from './../../pages/_app';
import Draggable from 'react-draggable';
import CopyToClipboard from 'react-copy-to-clipboard';

function MarkerInfo(props) {

  const data = useContext(contextApi);

  const [copy, setCopy] = useState(false);


  const closeMarkerInfo = () => {
    props.setClickedMarker(null);
  };

  const handleCopy = () => {
      setCopy(true);
  }

  useMemo(()=>{
    setTimeout(()=>{
      if (copy) 
        setCopy(false);
    }, 600)
  }, [copy]);


  return props.clickedMarker ? (
    <div>
      {
        data.open ?
        <Draggable cancel='.close, .copy' enableUserSelectHack={false}>
          <div className='max-w-36 w-10/12 p-6 m-4 sm:w-1/3 z-10 text-white block text-sm font-space absolute h-fit ml-10 sm:ml-80 bottom-0 min-h-max overflow-auto bg-lightGrey cursor-move'>
          <h1 className='cursor-text mb-4'>{props.clickedMarker.story}</h1>
          <span className='mt-6 text-purple-400'>Prompt </span>
          <CopyToClipboard
          text={props.clickedMarker.prompt}
          onCopy={handleCopy}
          className='copy'
          >
          <FiCopy 
            color={copy ? '#03fc73' : 'white'}
            style={{display: "inline-block"}}
            className='ml-1.5 relative pt-[-0.22rem] cursor-pointer'
            />
          </CopyToClipboard>
          <br />
          <code className='cursor-text mt-1 bg-gray-800'>{props.clickedMarker.prompt}</code>
          <div class="relative h-3 w-3 mb-8">
            <div class="animate-ping absolute h-3 w-3 rounded-full opacity-75 bg-amber-500 mt-6"></div>
            <div class="absolute inline-flex rounded-full h-3 w-3 bg-amber-500 mt-6"></div>
            <a href="https://www.nicenode.xyz/" target="_blank" rel="noreferrer">
              <div className='absolute top-5 ml-6 text-sm whitespace-nowrap text-amber-500 font-sans underline underline-offset-2'>{props.clickedMarker.nodeStatus}</div>
            </a>
          </div>
          <div className='close'>
          <AiFillCloseCircle 
          color='white'
          className='absolute top-0 right-0 p-0 m-2 cursor-pointer'
          onClick={closeMarkerInfo}
          />
          </div>
          </div>
        </Draggable>
        :
        <Draggable cancel=".close, .copy" enableUserSelectHack={false}>
          <div className='max-w-36 w-10/12 p-6 m-4 sm:w-1/3 z-10 text-white text-sm font-space overflow-auto min-h-max absolute ml-10 sm:ml-28 bottom-0 bg-lightGrey cursor-move'>
          <h1 className='cursor-text mb-4'>{props.clickedMarker.story}</h1>
          <span className='mt-6 text-purple-400 float-left'>Prompt </span>
          <CopyToClipboard
          text={props.clickedMarker.prompt}
          onCopy={handleCopy}
          >
          <div className='copy'>
          <FiCopy 
            color={copy ? '#03fc73' : 'white'}
            className='ml-1.5 relative top-7 pt-[-0.22rem] flex float-left cursor-pointer'
            />
          </div>
          </CopyToClipboard>
          <br /><br /><br />
          <code className='cursor-text bg-gray-800'>{props.clickedMarker.prompt}</code>
          <div class="relative h-3 w-3 mb-8">
            <div class="animate-ping absolute h-3 w-3 rounded-full opacity-75 bg-amber-500 mt-6"></div>
            <div class="absolute inline-flex rounded-full h-3 w-3 bg-amber-500 mt-6"></div>
              <a href="https://www.nicenode.xyz/" target="_blank" rel="noreferrer">
                <p className='absolute top-5 ml-6 whitespace-nowrap text-amber-500 font-sans underline underline-offset-2'>{props.clickedMarker.nodeStatus}</p>
              </a>
          </div>
          <div className='close'>
          <AiFillCloseCircle 
          color='white'
          className='absolute top-0 right-0 p-0 m-2 cursor-pointer'
          onClick={closeMarkerInfo}
          />
          </div>
          </div>
        </Draggable>
      }
    </div>
  ) : null
}

export default MarkerInfo