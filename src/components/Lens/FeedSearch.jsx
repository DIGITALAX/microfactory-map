// import React, { useState, useContext } from 'react';
// import { client, searchPublications } from '../../apis/api';
// import {contextApi} from '../../pages/_app';

 
// const FeedSearch = (props) => {
    
//     const [search, setSearch] = useState('')
//     const [inputValue, setInputValue] = useState('');
//     const context = useContext(contextApi);

//     const handleSearch = async () => {
//         setSearch(inputValue);
//         console.log(inputValue)

//          try {
//                 const response = await client.query(searchPublications, {
//                     request: {
//                         query: search,
//                         type: "PUBLICATION",
//                         limit: 10
//                     }
//                 }).toPromise()
//                 console.log(response.data.search.items)
//                 const arr = response.data.search.items;

//                 if (!arr) {
//                     return "No items matched your search"
//                 } else {
//                     context.setPublicationsFeed(response.data.search.items)
//                 }
//             } catch (error) {
//                 console.log(error)
//             }
//     };
 
//     return (
//         <div>
//             <input className='bg-lensGrey pl-4 mt-4 mr-2 ml-2 rounded-lg mb-3 item-center h-8 relative sm:left-[110px] border-2 border-solid border-darkGreenLens' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//             <button className='text-white font-space bg-darkGreenLens rounded-lg h-8 pr-2 pl-2 relative sm:left-[110px] hover:opacity-80' onClick={handleSearch}>Search</button>
//         </div>
//     )
 
// }
// export default FeedSearch