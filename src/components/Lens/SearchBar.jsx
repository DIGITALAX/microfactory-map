import React, {useContext} from 'react';
import FeedSearch from './FeedSearch';
import { feedApi } from './FeedBox';
import {IoMdArrowRoundBack} from 'react-icons/io';
import {FiRefreshCcw} from 'react-icons/fi';

function SearchBar() {

    const switcher = useContext(feedApi);

    switch (switcher.feed) {
          case "Mirror":
            return (
            <div className='bg-darkGreenLens p-2 rounded-lg mb-4 sm:mb-14  h-8 w-8 hover:opacity-80 cursor-pointer relative sm:top-[3rem] left-[10px] top-[0.5rem]'>
            <IoMdArrowRoundBack 
            color='white'
            onClick={()=> switcher.setFeed("")}
            />
            </div>
            )
      
          case "Collect":
            return (
            <div className='bg-darkGreenLens p-2 rounded-lg mb-4 sm:mb-14  h-8 w-8 hover:opacity-80 cursor-pointer relative sm:top-[3rem] left-[10px] top-[0.5rem]'>
            <IoMdArrowRoundBack 
            color='white'
            onClick={()=> switcher.setFeed("")}
            />
            </div>
            )  
      
          case "Comment":
            return (
            <div className='bg-darkGreenLens p-2 rounded-lg mb-4 sm:mb-14  h-8 w-8 hover:opacity-80 cursor-pointer relative sm:top-[3rem] left-[10px] top-[0.5rem]'>
            <IoMdArrowRoundBack 
            color='white'
            onClick={()=> switcher.setFeed("")}
            />
            </div>
            )    

          default:
            return (
            <div>
            <div className='bg-darkGreenLens p-2 rounded-lg h-8 w-8 hover:opacity-80 cursor-pointer relative sm:left-[80px] sm:top-[3rem] left-[10px] top-[0.5rem]'>
            <FiRefreshCcw
            color='white'
            onClick={switcher.fetchLatestPublications}
            />
            </div>
            <FeedSearch />
            </div>
            );
        }
}

export default SearchBar