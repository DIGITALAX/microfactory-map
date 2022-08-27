import React, {useState} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import {useAccount, useSignMessage} from 'wagmi';
import {client, generateChallenge, authenticateLogin} from './../../clients/lens/api';

function LensModal(props) {

  const [message, setMessage] = useState('');

  const {address} = useAccount();

  const {data, isSuccess, signMessageAsync} = useSignMessage({
    message: message,
    onSettled(data, error) {
      console.log('Settled', { data, error })
    },
  });

  const handleLensModalClose = () => {
    props.setLensModal(false);
  }

  const lensLogin = async () => {
    try {
      const challengeResponse = await client.query(generateChallenge, {
        request: {
          address: address
        }
      }).toPromise();

      setMessage(challengeResponse.data.challenge.text);

      const signature = await signMessageAsync();
      console.log(signature);
      
      const accessTokens = await client.mutation(authenticateLogin, {
        request: {
          address: address,
          signature: signature
        }}
      ).toPromise();

      console.log(accessTokens);

    } catch (err) {
      console.error(err.message);
    }
  }

  if(!props.visible) return null;

  return (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
    <div className="relative bg-greenLens p-2 rounded w-72">
      <AiFillCloseCircle 
      color='#00501e'
      className='item-center right-0 top-0 p-0 m-2 cursor-pointer absolute'
      onClick={handleLensModalClose}
      />
      <h1 className="font-semibold text-center text-xl text-darkGreenLens mt-4 font-space">
        Own Your Digital Roots
      </h1>
      <video src="/assets/video/Logo-roots_1.mp4" type="video/mp4" autoPlay loop muted className='mb-5'/>
      <div className="text-center">
        <button onClick={lensLogin} className="px-5 py-2 bg-darkGreenLens font-space text-greenLens mb-3 rounded hover:opacity-80">
          Sign In
        </button>
      </div>
    </div>
  </div>
  )
}

export default LensModal