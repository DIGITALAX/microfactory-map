import React, { useState, useEffect } from 'react';
import { client, searchPublications } from '../../apis/api';
 
const FeedSearch = () => {
 
    const [publications, setPublications] = useState()
    const [search, setSearch] = useState('')
    const [inputValue, setInputValue] = useState('');
 
    useEffect(() => {
        async function fetchPubs() {
            try {
 
                const publicationsResponse = await client.query(searchPublications, {
                    request: {
                        query: search,
                        type: "PUBLICATION",
                        limit: 10
                    }
                }).toPromise()
                setPublications(publicationsResponse.data.search.items)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPubs()
    }, [search])
 
    return (
        <div>
            <input className='bg-lensGrey pl-4 mt-4 mr-2 ml-2 rounded-lg mb-3 item-center h-8 relative sm:left-[110px] border-2 border-solid border-darkGreenLens' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className='text-white font-space bg-darkGreenLens rounded-lg h-8 pr-2 pl-2 relative sm:left-[110px] hover:opacity-80' onClick={() => setSearch(inputValue)}>Search</button>
        </div>
    )
 
}
export default FeedSearch