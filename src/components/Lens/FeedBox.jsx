import React, {useContext, useState, createContext, useReducer, useEffect} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { VscChromeMinimize } from 'react-icons/vsc';
import { HiArrowsExpand } from 'react-icons/hi'
import { contextApi } from '../../pages/_app';
import Draggable from "react-draggable";
import { client, randomPublications, mirrorsOfPost, commentsOfPost, collectsOfPost } from '../../clients/lens/api';
import Box from './Box';
import SearchBar from './SearchBar';

export const feedApi = createContext();


function FeedBox() {

  const context = useContext(contextApi);

  const [publicationsFeed, setPublicationsFeed] = useState([]);
  const [feed, setFeed] = useState();

  const [pageInfo, setPageInfo] = useState();

    async function fetchPublications() {
        try {
            const response = await client.query(randomPublications, {
                request: {
                    sortCriteria: 'TOP_MIRRORED', 
                    publicationTypes: ['POST'], 
                    limit: 30,
                    noRandomize: true,
                }
            }).toPromise();
            const arr = response.data.explorePublications.items;
            const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
            setPublicationsFeed(sortedArr);
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
            const response = await client.query(randomPublications, {
                request: {
                    sortCriteria: 'LATEST', 
                    publicationTypes: ['POST'], 
                    limit: 30,
                    noRandomize: true,
                    cursor: pageInfo.next,
                }
            }).toPromise();

            const arr = response.data.explorePublications.items;

            const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
            setPublicationsFeed([...publicationsFeed, ...sortedArr]);
            setPageInfo(response.data.explorePublications.pageInfo);
            return response.data.explorePublications.items;

        } catch (err) {
            console.log(err)
        }
    };

    
    const [mirrorsFeed, setMirrorsFeed] = useState([]);
    const [commentsFeed, setCommentsFeed] = useState([]);
    const [collectsFeed, setCollectsFeed] = useState([]);
    const [id, setId] = useState(null);

    async function fetchMirrors() {

            try {
                const mirrorsResponse = await client.query(mirrorsOfPost, {
                    request: {
                        whoMirroredPublicationId: id,
                        limit: 30,
                    }
                }).toPromise();
                const arr = mirrorsResponse.data.profiles.items;
                const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
                setMirrorsFeed(sortedArr);
                setPageInfo(mirrorsResponse.data.profiles.pageInfo);
                return mirrorsResponse.data.profiles.items;
        
            } catch (err) {
                console.log(err)
            }
        
          };

      const fetchMoreMirrors = async () => {
        try {
            const mirrorsResponse = await client.query(mirrorsOfPost, {
                request: {
                    whoMirroredPublicationId: id,
                    limit: 30,
                    cursor: pageInfo.next,
                }
            }).toPromise();
    
            const arr = mirrorsResponse.data.profiles.items;
    
            const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
            setMirrorsFeed([...mirrorsFeed, ...sortedArr]);
            setPageInfo(mirrorsResponse.data.profiles.pageInfo);
            return mirrorsResponse.data.profiles.items;
    
        } catch (err) {
            console.log(err)
        }
      };

      async function fetchCollects() {

        try {
            const collectsResponse = await client.query(collectsOfPost, {
                request: {
                    publicationId: id,
                    limit: 30,
                }
            }).toPromise();
            console.log(id);
            console.log(collectsResponse.data.whoCollectedPublication.items);
            const arr = collectsResponse.data.whoCollectedPublication.items;
            const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
            setCollectsFeed(sortedArr);
            setPageInfo(collectsResponse.data.whoCollectedPublication.pageInfo);
            return collectsResponse.data;
    
        } catch (err) {
            console.log(err)
        }
    
      };

  const fetchMoreCollects = async () => {
    try {
        const collectsResponse = await client.query(collectsOfPost, {
            request: {
                publicationId: id,
                limit: 30,
                cursor: pageInfo.next,
            }
        }).toPromise();

        const arr = collectsResponse.data.whoCollectedPublication.items;

        const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
        setCollectsFeed([...collectsFeed, ...sortedArr]);
        setPageInfo(collectsResponse.data.whoCollectedPublication.pageInfo);
        return collectsResponse.data.whoCollectedPublication.items;

    } catch (err) {
        console.log(err)
    }
  };
    
    async function fetchComments() {

        try {
            const commentsResponse = await client.query(commentsOfPost, {
                request: {
                    commentsOf: id,
                    limit: 30,
                }
            }).toPromise();
            console.log(commentsResponse.data.publications)
            const arr = commentsResponse.data.publications.items;
            const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
            setCommentsFeed(sortedArr);
            setPageInfo(commentsResponse.data.publications.pageInfo);
            return commentsResponse.data.publications.items;
    
        } catch (err) {
            console.log(err)
        }
    
    };

    const fetchMoreComments = async () => {
        try {
            const commentsResponse = await client.query(commentsOfPost, {
                request: {
                    commentsOf: id,
                    limit: 30,
                    cursor: pageInfo.next,
                }
            }).toPromise();
    
            const arr = commentsResponse.data.publications.items;
    
            const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
            setCommentsFeed([...commentsFeed, ...sortedArr]);
            setPageInfo(commentsResponse.data.publications.pageInfo);
            return commentsResponse.data.publications.items;
    
        } catch (err) {
            console.log(err)
        }
      };


    async function fetchLatestPublications() {
      try {
          const response = await client.query(randomPublications, {
              request: {
                  sortCriteria: 'LATEST', 
                  publicationTypes: ['POST'], 
                  limit: 30,
                  noRandomize: true,
              }
          }).toPromise();
          const arr = response.data.explorePublications.items;
          const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
          setPublicationsFeed(sortedArr);
          setPageInfo(response.data.explorePublications.pageInfo);
          return response.data.explorePublications.items;

      } catch (err) {
          console.log(err)
      }

  };

  if(!context.isFeedOpen) return null;
  
  return(
    <Draggable cancel=".close, .minimise, .feed" enableUserSelectHack={false}>
        <div className="fixed flex items-center justify-center z-10 cursor-move top-1/2 left-1/2">

        { !context.minimise ? 
        <div className="absolute bg-lensLilac p-2 rounded-lg w-72 sm:w-96">
          <div className='close'>
          <AiFillCloseCircle 
          color='#00501e'
          className='item-center right-0 top-0 p-0 m-2 cursor-pointer absolute'
          onClick={context.handleFeedModal}
          />
          </div>
          <div className='minimise'>
          <VscChromeMinimize 
          color='#00501e'
          height={'2px'}
          className='item-center right-6 top-0 p-0 m-2 cursor-pointer absolute'
          onClick={context.handleMinimise}
          />
          </div>
          <h1 className="font-semibold text-center text-xl text-darkGreenLens mt-4 font-spacebold">
            Scroll Feed
          </h1>
          <feedApi.Provider
          value={{
            publicationsFeed: publicationsFeed,
            setPublicationsFeed: setPublicationsFeed,
            fetchMorePublications: fetchMorePublications,
            fetchPublications: fetchPublications,
            fetchLatestPublications: fetchLatestPublications,
            fetchMirrors: fetchMirrors,
            fetchMoreMirrors: fetchMoreMirrors,
            feed: feed,
            mirrorsFeed: mirrorsFeed,
            setMirrorsFeed: setMirrorsFeed,
            setFeed: setFeed,
            id: id,
            setId: setId,
            fetchComments: fetchComments,
            commentsFeed: commentsFeed,
            fetchMoreComments: fetchMoreComments,
            fetchCollects: fetchCollects,
            fetchMoreCollects: fetchMoreCollects,
            collectsFeed: collectsFeed
          }}
          >
          <SearchBar />
          <div className="feed">
          <div className= 'bg-lensGrey cursor-auto p-6 mr-2 ml-2 rounded-lg mb-5 item-center h-96 overflow-auto select-text'>
          <Box />
          </div>
          </div>
          </feedApi.Provider>
        </div> 
        :
        <div className="absolute bg-lensLilac p-2 rounded-lg w-56">
        <div className='close'>
        <AiFillCloseCircle 
        color='#00501e'
        className='item-center right-5 top-[36%] p-0 cursor-pointer absolute'
        onClick={context.handleFeedModal}
        id="#close"
        />
        </div>
        <div className='minimise'>
        <HiArrowsExpand 
        color='#00501e'
        className='item-center top-[36%] right-10 p-0 cursor-pointer absolute'
        onClick={context.handleMinimise}
        />
        </div>
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