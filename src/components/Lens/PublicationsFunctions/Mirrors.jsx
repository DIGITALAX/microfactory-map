import React, {useContext, useEffect, useState} from 'react';
import {CgProfile} from 'react-icons/cg';
import InfiniteScroll from 'react-infinite-scroll-component';
import { feedApi } from './../FeedBox';
import {MirrorsLoader} from './../ScrollLoader';


function Mirrors() {

    const feedContext = useContext(feedApi);

        useEffect(() => {

            feedContext.fetchMirrors();
    
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
        { feedContext.mirrorsFeed.length !== 0 ? 
        <InfiniteScroll
        dataLength={feedContext.mirrorsFeed.length}
        next={feedContext.fetchMoreMirrors}
        hasMore={true}
        loader={<MirrorsLoader />}
        height='20rem'
        >
            {
                feedContext.mirrorsFeed.map((mirror)=>
                (
                        <li key={mirror.id} className="list-none w-full h-20 mt-4 p-2 border rounded-md bg-lensGrey border-lensGrey drop-shadow-md">
                            <div className='float-left z-10'>
                            <a href={`https://lenster.xyz/u/${mirror.handle}`}  target="_blank" rel="noreferrer">
                            {getAvatar(mirror.picture)}
                            </a>
                            </div>
                            <div>
                            <a href={`https://lenster.xyz/u/${mirror.handle}`}  target="_blank" rel="noreferrer">
                            <b className='text-darkGreenLens absolute top-[26%] p-2 font-sans text-xs sm:text-base float-left'>@{mirror.handle}</b>
                            </a>
                            </div>
                        </li>
                ))
            }
        </InfiniteScroll>
        :
        <div></div> 
    }
    </div>
  )
}

export default Mirrors