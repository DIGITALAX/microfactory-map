import React, { useState, useContext, useEffect } from 'react';
import { client, searchPublications } from '../../clients/lens/api';
import { feedApi } from './FeedBox';

 
const FeedSearch = () => {

    const feedContext = useContext(feedApi);
    const [search, setSearch] = useState(null)
    const [inputValue, setInputValue] = useState('');

    // const handleSearch = async () => {
    //     setLoadingState('');
    //     setSearch(inputValue);
    //     console.log(inputValue)

    //      try {
    //             const response = await client.query(searchPublications, {
    //                 request: {
    //                     query: search,
    //                     type: "PUBLICATION",
    //                 }
    //             }).toPromise()
    //             console.log(response.data.search.items)
    //             const arr = response.data.search.items;

    //             feedContext.setPublicationsFeed(arr);

    //             if (!arr.length) {
    //                 setLoadingState('Nothing found :(')
    //             } 
    //         } catch (error) {
    //             console.log(error)
    //         }

    // console.log('search posts', feedContext.publicationsFeed)

    // };

    useEffect(() => {

        if (search === null || search.length === 0) {
            feedContext.fetchPublications()
        }

        async function fetchSearch() {
                try {
     
                    const publicationsResponse = await client.query(searchPublications, {
                        request: {
                            query: search,
                            type: "PUBLICATION",
                            limit: 30
                        }
                    }).toPromise()
                    feedContext.setPublicationsFeed(publicationsResponse.data.search.items)
                    console.log(publicationsResponse.data.search.items)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchSearch()
            console.log(feedContext.publicationsFeed)
    }, [search])

 
    return (
        <div>
            <input className='bg-lensGrey pl-4 mt-4 mr-2 ml-2 rounded-lg mb-3 item-center h-8 relative sm:left-[110px] border-2 border-solid border-darkGreenLens' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className='text-white font-space bg-darkGreenLens rounded-lg h-8 pr-2 pl-2 relative sm:left-[110px] hover:opacity-80' onClick={() => setSearch(inputValue)}>Search</button>
        </div>
    )
 
}
export default FeedSearch