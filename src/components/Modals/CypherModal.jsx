import React, {useContext} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import {contextApi} from './../../pages/_app'


function CypherModal(props, ref) {

  const data = useContext(contextApi);

  const handleCypherModalClose = () => {
    props.setCypherModal(false);
  }

  if(!props.visible) return null;

  const closeAndMint = () => {
    props.goDownToMintSection(data.mintRef.current);
    props.setCypherModal(false);
  }


  return (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
    <div className="relative bg-lensDarkGrey p-2 rounded w-96">
      <AiFillCloseCircle 
      color='rgb(168 162 158)'
      className='item-center right-0 top-0 p-0 m-2 cursor-pointer absolute'
      onClick={handleCypherModalClose}
      />
      <h1 className="text-center text-4xl p-6 text-white mt-4 font-npress">
        Collect Instructables to Decypher
      </h1>
      <div className="text-center">
        <button className="px-5 py-2 bg-stone-400 text-xl font-npress text-lensDarkGrey mb-3 rounded hover:opacity-80"
        onClick={closeAndMint}
        >
          Collect
        </button>
      </div>
    </div>
  </div>
  )
}

export default CypherModal