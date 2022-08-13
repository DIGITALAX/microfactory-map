import React, {useState, useEffect} from 'react';
import { client, randomPublications } from '../../apis/api';
import {CgProfile} from 'react-icons/cg';
import moment from 'moment';
import {FaRetweet, FaComments} from 'react-icons/fa';
import {HiCollection} from 'react-icons/hi'

function Feed() {

    const [publicationsFeed, setPublicationsFeed] = useState();

    useEffect(()=> {
            async function fetchPublications() {
                try {
                    // pass id as object since reuqest in api id also passed as object
                    const response = await client.query(randomPublications).toPromise();
                    console.log(response.data.explorePublications.items);
                    setPublicationsFeed(response.data.explorePublications.items);

                } catch (err) {
                    console.log(err)
                }
            } 
            fetchPublications();
    },[]);

    if (!publicationsFeed) return null;

  return (
    <div>
        {
            publicationsFeed.map((publication, index)=>{
                return (
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
                        <b className='text-darkGreenLens relative top-1 float-left'>@{publication.profile.handle}</b>
                        </a>
                        <div className='text-space text-xs inline-block align-middle mt-1.5 ml-2'>{moment(`${publication.createdAt}`).fromNow()}</div>
                        </div>
                        <div className='mt-6 mb-8 rounded pt-4 pl-8 pr-8 pb-4 border-solid border bg-lensGrey border-lensGrey drop-shadow-md'>
                            <div className='pb-4 cursor-text'>
                            {publication.metadata.content}
                            </div>
                                <a href={`https://lenster.xyz/posts/${publication.id}`} target="_blank" rel="noreferrer">
                                <ul className='mt-2 inline-block cursor-pointer'>
                                <li className='float-left m-2 ml-0'>
                                <HiCollection className='float-left m-2 ml-0 align-middle' />
                                <span className='relative top-1'>
                                {publication.stats.totalAmountOfCollects}
                                </span>
                                </li>
                                <li className='float-left m-2'>
                                <FaComments className='float-left m-2 align-middle' />
                                <span className='relative top-1'>
                                {publication.stats.totalAmountOfComments}
                                </span>
                                </li>
                                <li className='float-left m-2'>
                                <FaRetweet className='float-left m-2 align-middle' />
                                <span className='relative top-1'>
                                {publication.stats.totalAmountOfMirrors}
                                </span>
                                </li>
                                </ul>
                                </a>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Feed