import React, {useContext, useEffect, useState} from 'react';
import {CgProfile} from 'react-icons/cg';
import moment from 'moment';
import {HiCollection} from 'react-icons/hi'
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollLoader from './../ScrollLoader';
import JSONPretty from 'react-json-pretty';
import { feedApi } from './../FeedBox';


function Mirrors(props) {

    const feedContext = useContext(feedApi);

        const checkImage = (media) => {

            if (media.original.url.includes("http")) {
                    return <img src={media.original.url} alt={"media"} className='m-2 align-center flex justify-center w-70' />
                } else {
                    const cut = media.original.url.split("/");
                    const link = "https://lens.infura-ipfs.io/ipfs/" + cut[cut.length-1]
                    return <img src={link} alt={"media"} className='m-2 align-center justify-center w-70 flex'/>
                }
        };


        const getAvatar = (profile) => {

            if (!profile.picture) {
                return <CgProfile color='#00501e' className='w-8 h-8 rounded-full drop-shadow-md'/>
            } else if (profile.picture.original) {
                if (profile.picture.original.url.includes("http")) {
                    return <img src={profile.picture.original.url} alt={profile.name} className='w-8 h-8 rounded-full drop-shadow-md'/>
                } else {
                    const cut = profile.picture.original.url.split("/");
                    const link = "https://lens.infura-ipfs.io/ipfs/" + cut[cut.length-1]
                    return <img src={link} alt={profile.name} className='w-8 h-8 rounded-full drop-shadow-md'/>
                }
            } else {
                    return <img src={profile.picture.uri} alt={profile.name} className='w-8 h-8 rounded-full drop-shadow-md'/>
            }
        };

        
        if(!feedContext.mirror) return null;
        
    return (
        <InfiniteScroll
        dataLength={feedContext.mirrorsFeed.length}
        next={feedContext.fetchMoreMirrors}
        hasMore={true}
        loader={<ScrollLoader />}
        height='20rem'
        scrollableTarget={props.id}
        >
            {
                feedContext.mirrorsFeed.map((mirror, index)=>
                (
                        <div key={index}>
                            <div className='w-12 float-left'>
                            <a href={`https://lenster.xyz/u/${mirror.profile.handle}`}  target="_blank" rel="noreferrer">
                            {getAvatar(mirror.profile)}
                            </a>
                            </div>
                            <div>
                            <a href={`https://lenster.xyz/u/${mirror.profile.handle}`}  target="_blank" rel="noreferrer">
                            <b className='text-darkGreenLens relative top-1 font-sans text-xs sm:text-base float-left'>@{mirror.profile.handle}</b>
                            </a>
                            <div className='text-space text-xs inline-block align-middle font-sans mt-1.5 ml-2'>{moment(`${mirror.createdAt}`).fromNow()}</div>
                            </div>
                            <div className='mt-6 font-sans mb-8 rounded pt-4 pl-8 pr-8 pb-4 border-solid text-xs sm:text-base border bg-lensGrey border-lensGrey drop-shadow-md'>
                            <JSONPretty data={mirror.metadata.content} className='break-words' />
                            <div className='block relative -left-[10px]'>
                            {mirror.metadata.media.map((media, index) => (
                                    media.original.mimeType.includes("image")
                                    ? checkImage(media)
                                    : media.original.url.includes("arweave") ? (
                                        <video controls>
                                            <source src={media.original.url} alt={"media"} key={index} type={media.original.mimeType} />
                                        </video> ) :
                                        null
                                ))}
                                </div>
                                    <ul className='mt-2 inline-block cursor-pointer font-sans text-sm sm:text-base'>
                                    <li className='float-left ml-0 sm:m-1'>
                                    <HiCollection className='float-left relative top-[0.15rem] m-2 ml-0 align-middle' />
                                    <span className='relative top-2 text-xs sm:top-1'>
                                    {mirror.stats.totalAmountOfCollects}
                                    </span>
                                    </li>
                                    </ul>
                            </div>
                        </div>
                ))
            }
        </InfiniteScroll>
  )
}

export default Mirrors