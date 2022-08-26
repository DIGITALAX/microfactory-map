import React, {useContext, useEffect, useState} from 'react';
import {CgProfile} from 'react-icons/cg';
import InfiniteScroll from 'react-infinite-scroll-component';
import { feedApi } from './../FeedBox';
import {CollectsLoader} from './../ScrollLoader';


function Collects() {

    const feedContext = useContext(feedApi);

        useEffect(() => {

            feedContext.fetchCollects();
    
        }, []);


        const getAvatar = (picture) => {

            if (!picture) {
                return <CgProfile color='#00501e' className='w-8 h-8 rounded-full drop-shadow-md m-4'/>
            } else if (picture.original) {
                if (picture.original.url.includes("http")) {
                    return <img src={picture.original.url} alt={name} className='w-8 h-8 rounded-full drop-shadow-md m-4'/>
                } else {
                    const cut = picture.original.url.split("/");
                    const link = "https://lens.infura-ipfs.io/ipfs/" + cut[cut.length-1]
                    return <img src={link} alt={name} className='w-8 h-8 rounded-full drop-shadow-md m-4'/>
                }
            } else {
                    return <img src={picture.uri} alt={name} className='w-8 h-8 rounded-full drop-shadow-md m-4'/>
            }
        };

        
    return (
      <div>
        { feedContext.collectsFeed.length !== 0 ?
        <InfiniteScroll
        dataLength={feedContext.collectsFeed.length}
        next={feedContext.fetchMoreCollects}
        hasMore={true}
        loader={<CollectsLoader />}
        height='20rem'
        >
            {  
                feedContext.collectsFeed.map((collect)=> {
                return (
                        <li key={collect.defaultProfile?.id} className="list-none w-full h-20 mt-4 p-2 border rounded-md bg-lensGrey border-lensGrey drop-shadow-md">
                            <div className='float-left z-10'>
                            <a href={`https://lenster.xyz/u/${collect.defaultProfile?.handle}`}  target="_blank" rel="noreferrer">
                            {getAvatar(collect.defaultProfile?.picture)}
                            </a>
                            </div>
                            <div>
                            <a href={`https://lenster.xyz/u/${collect.defaultProfile?.handle}`}  target="_blank" rel="noreferrer">
                            <b className='text-darkGreenLens absolute top-[26%] p-2 font-sans text-xs sm:text-base float-left'>@{collect.defaultProfile?.handle}</b>
                            </a>
                            </div>
                        </li>
                )})
            }
        </InfiniteScroll>
        :
        <div></div> 
    }
    </div>
  )
}

export default Collects