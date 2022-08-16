import React, {useState, useEffect, useRef} from 'react';
import { client, randomPublications } from '../../apis/api';
import {CgProfile} from 'react-icons/cg';
import moment from 'moment';
import {FaRetweet, FaComments} from 'react-icons/fa';
import {HiCollection} from 'react-icons/hi'
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollLoader from './ScrollLoader';
import JSONPretty from 'react-json-pretty';


function Feed(props) {

    const getURLs = (text) => {
        const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g
        return text.match(urlRegex) ?? []
      }



    const [publicationsFeed, setPublicationsFeed] = useState([]);

    async function fetchPublications() {
        try {
            // pass id as object since reuqest in api id also passed as object
            const response = await client.query(randomPublications).toPromise();
            console.log(response.data.explorePublications.items);
            return response.data.explorePublications.items;

        } catch (err) {
            console.log(err)
        }
    };


    useEffect( () => {

        fetchMorePublications();
        
    },[]);

    const fetchMorePublications = async () => {

        const data = await fetchPublications();

        setPublicationsFeed(pubs => ([...pubs, ...data]));
    }

  return (
    <InfiniteScroll
    dataLength={publicationsFeed.length}
    next={fetchMorePublications}
    hasMore={true}
    loader={<ScrollLoader />}
    height='20rem'
    scrollableTarget={props.id}
    >
        {
            publicationsFeed.map((publication, index)=>
            (
                    <div key={index}>
                        <div className='w-12 float-left'>
                        <a href={`https://lenster.xyz/u/${publication.profile.handle}`}  target="_blank" rel="noreferrer">
                        {!publication.profile.picture
                            ? <CgProfile 
                            color='#00501e'
                            className='w-8 h-8 rounded-full drop-shadow-md'/>
                            : publication.profile.picture.original
                            ? <img src={publication.profile.picture.original.url} alt={publication.profile.name} className='w-8 h-8 rounded-full drop-shadow-md'/>
                            : <img src={publication.profile.picture.uri} alt={publication.profile.name} className='w-8 h-8 rounded-full drop-shadow-md'/>
                        }
                        </a>
                        </div>
                        <div>
                        <a href={`https://lenster.xyz/u/${publication.profile.handle}`}  target="_blank" rel="noreferrer">
                        <b className='text-darkGreenLens relative top-1 font-sans float-left'>@{publication.profile.handle}</b>
                        </a>
                        <div className='text-space text-xs inline-block align-middle font-sans mt-1.5 ml-2'>{moment(`${publication.createdAt}`).fromNow()}</div>
                        </div>
                        <div className='mt-6 font-sans mb-8 rounded pt-4 pl-8 pr-8 pb-4 border-solid border bg-lensGrey border-lensGrey drop-shadow-md'>
                           <JSONPretty data={publication.metadata.content}/>
                                <a href={`https://lenster.xyz/posts/${publication.id}`} target="_blank" rel="noreferrer">
                                <ul className='mt-2 inline-block cursor-pointer font-sans'>
                                <li className='float-left m-1 ml-0'>
                                <HiCollection className='float-left m-2 ml-0 align-middle' />
                                <span className='relative text-xs top-1'>
                                {publication.stats.totalAmountOfCollects}
                                </span>
                                </li>
                                <li className='float-left m-1'>
                                <FaComments className='float-left text-xs m-2 align-middle' />
                                <span className='relative top-1'>
                                {publication.stats.totalAmountOfComments}
                                </span>
                                </li>
                                <li className='float-left m-1'>
                                <FaRetweet className='float-left text-xs m-2 align-middle' />
                                <span className='relative top-1'>
                                {publication.stats.totalAmountOfMirrors}
                                </span>
                                </li>
                                </ul>
                                </a>
                        </div>
                    </div>
            ))
        }
    </InfiniteScroll>
  )
}

export default Feed