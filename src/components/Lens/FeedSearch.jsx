
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
                        limit: 30
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
        <div className="Search">
            <h2>Search Pubs</h2>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => setSearch(inputValue)}>Search</button>
            
        </div>
    )
 
}
export default FeedSearch