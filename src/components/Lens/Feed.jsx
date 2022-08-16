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

    const [publicationsFeed, setPublicationsFeed] = useState([]);
    const [pageInfo, setPageInfo] = useState();


    async function fetchPublications() {
        try {
            // pass id as object since reuqest in api id also passed as object
            const response = await client.query(randomPublications, {
                request: {
                    sortCriteria: 'LATEST', 
                    publicationTypes: ['POST','MIRROR'], 
                    limit: 30,
                    noRandomize: true,
                }
            }).toPromise();
            console.log(response.data.explorePublications.items);
            const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
            setPublicationsFeed(response.data.explorePublications.items);
            setPageInfo(response.data.explorePublications.pageInfo);
            return response.data.explorePublications.items;

        } catch (err) {
            console.log(err)
        }

    };

    useEffect( () => {

        fetchPublications();
        
    },[]);


    const fetchMorePublications = async () => {
        try {
            // pass id as object since reuqest in api id also passed as object
            const response = await client.query(randomPublications, {
                request: {
                    sortCriteria: 'LATEST', 
                    publicationTypes: ['POST','MIRROR'], 
                    limit: 30,
                    noRandomize: true,
                    cursor: pageInfo.next,
                }
            }).toPromise();
            console.log(response.data.explorePublications.items);

            // iterrate on elements a and b and put b before a until all sorted (b before a because latest element goes first, the latest post)
            const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
            setPublicationsFeed([...publicationsFeed, ...sortedArr]);
            setPageInfo(response.data.explorePublications.pageInfo);
            return response.data.explorePublications.items;

        } catch (err) {
            console.log(err)
        }
    };



    const checkImage = (media) => {

        if (media.original.url.includes("http")) {
                return <img src={media.original.url} alt={"media"} />
            } else {
                const cut = media.original.url.split("/");
                const link = "https://lens.infura-ipfs.io/ipfs/" + cut[cut.length-1]
                console.log(link);
                return <img src={link} alt={"media"}/>
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
                console.log(link);
                return <img src={link} alt={profile.name} className='w-8 h-8 rounded-full drop-shadow-md'/>
            }
        } else {
                return <img src={profile.picture.uri} alt={profile.name} className='w-8 h-8 rounded-full drop-shadow-md'/>
        }
    };


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
                        {getAvatar(publication.profile)}
                        </a>
                        </div>
                        <div>
                        <a href={`https://lenster.xyz/u/${publication.profile.handle}`}  target="_blank" rel="noreferrer">
                        <b className='text-darkGreenLens relative top-1 font-sans float-left'>@{publication.profile.handle}</b>
                        </a>
                        <div className='text-space text-xs inline-block align-middle font-sans mt-1.5 ml-2'>{moment(`${publication.createdAt}`).fromNow()}</div>
                        </div>
                        <div className='mt-6 font-sans mb-8 rounded pt-4 pl-8 pr-8 pb-4 border-solid border bg-lensGrey border-lensGrey drop-shadow-md'>
                           {publication.metadata.content}
                           {publication.metadata.media.map((media, index) => (
                                media.original.mimeType.includes("image")
                                ? checkImage(media)
                                : (
                                    <video controls>
                                        <source src={media.original.url} alt={"media"} key={index} type={media.original.mimeType} />
                                    </video>
                                )
                            ))}
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