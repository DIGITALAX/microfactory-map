import React, {useContext, useEffect, useState} from 'react';
import {CgProfile} from 'react-icons/cg';
import InfiniteScroll from 'react-infinite-scroll-component';
import { feedApi } from './../FeedBox';
import moment from 'moment';
import JSONPretty from 'react-json-pretty';
import {FaRetweet, FaComments} from 'react-icons/fa';
import {HiCollection} from 'react-icons/hi';
import {CommentsLoader} from './../ScrollLoader';


function Comments() {

    const feedContext = useContext(feedApi);

        useEffect(() => {

            feedContext.fetchComments();
    
        }, []);

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

        
    return (
        <div>
        {feedContext.commentsFeed.length !== 0 ? 
        <InfiniteScroll
        dataLength={feedContext.commentsFeed.length}
        next={feedContext.fetchMoreComments}
        hasMore={true}
        loader={<CommentsLoader />}
        height='20rem'
        >
            { 
             feedContext.commentsFeed.map((comment)=>
                 (
                  <div key={comment.id}>
                      <div className='w-12 float-left'>
                      <a href={`https://lenster.xyz/u/${comment.profile.handle}`}  target="_blank" rel="noreferrer">
                      {getAvatar(comment.profile)}
                      </a>
                      </div>
                      <div>
                      <a href={`https://lenster.xyz/u/${comment.profile.handle}`}  target="_blank" rel="noreferrer">
                      <b className='text-darkGreenLens relative top-1 font-sans text-xs sm:text-base float-left'>@{comment.profile.handle}</b>
                      </a>
                      <div className='text-space text-xs inline-block align-middle font-sans mt-1.5 ml-2'>{moment(`${comment.createdAt}`).fromNow()}</div>
                      </div>
                      <div className='mt-6 font-sans mb-8 rounded pt-4 pl-8 pr-8 pb-4 border-solid text-xs sm:text-base border bg-lensGrey border-lensGrey drop-shadow-md'>
                         <JSONPretty data={comment.metadata.content} className='break-words' />
                         <div className='block relative -left-[10px]'>
                         {comment.metadata.media.map((media, index) => (
                              media.original.mimeType.includes("image")
                              ? checkImage(media)
                              : media.original.url.includes("arweave") ? (
                                  <video controls>
                                      <source src={media.original.url} alt={"media"} key={index} type={media.original.mimeType} />
                                  </video> ) :
                                  null
                          ))}
                          </div>
                              <ul className='mt-2 inline-block font-sans text-sm sm:text-base'>
                              <li className='float-left ml-0 sm:m-1'
                              >
                              <HiCollection className='float-left relative top-[0.15rem] m-2 ml-0 align-middle' />
                              <span className='relative top-2 text-xs sm:top-1'>
                              {comment.stats.totalAmountOfCollects}
                              </span>
                              </li>
                              <li className='float-left sm:m-1'
                              >
                              <FaComments className='float-left relative top-1 text-xs m-2 align-middle' />
                              <span className='relative top-2 text-xs sm:top-1'>
                              {comment.stats.totalAmountOfComments}
                              </span>
                              </li>
                              <li className='float-left sm:m-1'
                              >
                              <FaRetweet className='float-left relative top-1 text-xs m-2 align-middle' />
                              <span className='relative top-2 text-xs sm:top-1'>
                              {comment.stats.totalAmountOfMirrors}
                              </span>
                              </li>
                              </ul>
                      </div>
                  </div>
              ))
            }
        </InfiniteScroll>
        :
        <div></div> 
    }
    </div>
  )
}

export default Comments