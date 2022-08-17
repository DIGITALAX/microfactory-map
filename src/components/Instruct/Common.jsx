import React, {useContext, useState, forwardRef} from 'react';
import { contextApi } from '../../pages/_app';

function Common(ref) {

  const data = useContext(contextApi);

  const [styleState, setStyleState] = useState(false);

  const setStyleClicked = () => {
    styleState ? setStyleState(false): setStyleState(true);
  }


  return (
    <div className='bg-black min-h-screen flex flex-col items-center'>
      
      <section className="my-40 md:mt-80 md:mb-48 flex flex-col md:flex-row pl-8 md:pl-24 lg:pl-36 xl:pl-42 pr-8 md:pr-0">
        <div className="w-full relative top-10 md:w-6/12">
          <img src="/assets/images/microgrid.png" />
        </div>
        <div className="px-2 md:px-10 w-full md:w-8/12">
          <h1 className="text-4xl sm:text-xl font-coop relative top-14 sm:left-10 text-white mt-10 md:mt-0 md:text-5xl lg:text-60px text-left">
          RENEWABLE <br />
          WEB3 <br />
          CO-OPS <br />
          </h1>
          <div className="mt-10 font-npress relative top-8 sm:left-12 text-white text-xl sm:text-lg md:text-xl lg:text-3xl text-left md:text-left">
          Combining ageless techniques with near future tech, <br/>
          made cost effective today with web3.
          </div>
        </div>
      </section>
      
      
      <section className='text-center mt-10 sm:mt-16 text-white w-full pt-20 pb-20 sm:pb-40 sm:py-40 text-3xl md:text-4xl lg:text-5xl'>
        in the self sovereign verse <br />
        you are free to build <br />
        your own name & game... <br />
      </section>

      <img className='mt-0 md:mt-40 px-2 md:px-8' src='/assets/images/renewables.png' />
      <img className='w-3/6 md:w-3/12 mb-48 mt-16 sm:my-48 px-8 object-contain' src='/assets/images/renew.png' />

      <section ref={data.renewRef} className="flex flex-row w-full justify-center mt-20 md:mt-80 flex-wrap">
        <img
          className="w-1/3 md:w-60 px-2 py-2 mx-2 sm:py-0 sm:px-1 object-contain"
          src="/assets/images/renew1.png"
        />
        <img
          className="w-1/3 md:w-48 mx-4 px-2 py-2 sm:py-0 sm:px-1 object-contain"
          src="/assets/images/renew2.png"
        />
        <img
          className="w-1/3 md:w-48 mx-4 px-2 py-2 sm:py-0 sm:px-1 object-contain"
          src="/assets/images/renew3.png"
        />
        <img
          className="w-1/3 md:w-48 mx-4 px-2 py-2 sm:py-0 sm:px-1 object-contain"
          src="/assets/images/renew4.png"
        />
      </section>

      <section className="text-white flex flex-row w-3/5 justify-center my-10 md:my-20 text-center text-lg md:text-2xl lg:text-3xl">
        With a taste for open culture, a calling to adventure, and precocious
        social mobility… feed them well so these rare virtual companions can
        continue to grow with time.
        <br />
        <br />
        Take good care of your Renewables.
        <br />
        <br />
        Who knows what magical places they will unlock for you.
      </section>

      <section
        className="mt-0 text-white md:mt-36 pt-20 w-full flex flex-col items-center"
      >
        <div className="w-4/6 text-4xl sm:text-sm lg:w-700px md:text-6xl lg:text-60px text-center mt-20">
          DO YOU REALLY NEED TO READ THE INSTRUCTION MANUAL?
        </div>
        <div className="w-1/2 lg:w-700px text-xl md:text-3xl lg:text-4xl text-center mt-10 sm:mt-16">
          A simple collection of words and images shouldn’t be able to do so
          much
        </div>
        <div className="w-1/2 lg:w-700px text-lg md:text-xl lg:text-3xl text-center mt-16 font-extralight">
        With instructables in hand you can grow feed for your companions, share open culture with on-chain incentives, and for every pack minted unlock a pixel-perfect puzzle piece on the next microfactory #freetobuild map.
        </div>
        <div className="flex flex-col font-shadow md:flex-row items-center justify-between my-24 flex-wrap px-5 md:px-2 ">
          <div className="hashtag m-2 sm:m-4 text-2xl md:text-4xl">#howtonode</div>
          <div className="hashtag m-2 sm:m-4 text-2xl md:text-4xl">#freetobuild</div>
          <div className="hashtag m-2 sm:m-4 text-2xl md:text-4xl">#cc0streetwear</div>
          <div className="hashtag m-2 sm:m-4 text-2xl md:text-4xl">#microfactory</div>
          <div className="hashtag m-2 sm:m-4 text-2xl md:text-4xl">#seizethememes</div>
        </div>
      </section>

      <section
        className="mt-0 text-white md:mt-16 pb-48 pt-20 w-full flex flex-col items-center"
      >
      <div ref={data.mintRef} className="sm:w-1/2 w-4/6 lg:w-1/2 text-xl sm:text-lg md:text-3xl lg:text-5xl text-center mt-16 font-npress">
      Each instructable collected, shared and recycled puts another pixel brick on the build map for a hyperlocal web3 microfactory, virtually, and possibly IRL, near you.
        </div>
        <div className="mt-8 text-center">
          <button
            className="text-lg p-2 px-6 font-npress text-black sm:p-3 md:text-sm lg:text-3xl bg-button rounded-full"
            onClick={setStyleClicked}
          >
            Mint Live Soon
          </button>
          <p className={`w-fit relative flex ml-5 leading-8 font-spacebold  ${!styleState && 'hidden'}`} >
          <a href="https://port15.digifizzy.xyz/magazines/15/" target="_blank" rel="noreferrer"  className='font-opress -left-[7.2rem] digifizzy:-left-[7.5rem] w-72 m-4 absolute text-2xl text-white'>Read DIGIFIZZY while you wait.</a>
          </p>
        </div>
      </section>

      <section className="my-20 md:my-80 w-9/12 relative sm:w-auto flex flex-col md:flex-row pl-8 md:pl-24 lg:pl-36 xl:pl-42 pr-8 md:pr-0">
        <div className="w-full relative sm:left-0 -left-2 -top-10 md:w-4/12">
          <img src="/assets/images/feedkeys.png" />
        </div>
        <div className="px-2 md:px-20 w-full md:w-8/12">
          <h1 className="text-xl text-white mt-6 sm:mt-10 md:mt-0 md:text-3xl lg:text-60px text-center ">
            HOW WELL YOU CARE <br />
            FOR YOUR COMPANIONS <br />
            SHOWS IN THE LIL’ DETAILS <br />
            TOO RARE TO MISS
          </h1>
          <div className="sm:mt-10 mt-6 sm:mb-0 mb-60 font-thin text-white text-lg md:text-xl lg:text-3xl text-center md:text-center">
            Like most people, renewables like good company, frequent time to
            play or explore, and care a lot about what you feed them.
          </div>
        </div>
      </section>

      <section className="mt-0 mb-20 md:mt-20 md:mb-80 flex flex-col md:flex-row px-10 md:px-12 lg:px-24 xl:px-42">
        <div className="px-10 border mx-0 md:mx-4 py-10 w-full md:w-1/2 h-fit text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
            The perks of frequent & playful interaction with your companions,
            from consistent feeding schedules to casual talks & the occasional
            random walk, are plentiful.
          </h1>
          <div className="text-lg font-thin md:text-xl lg:text-2xl mt-5 text-center">
            Sustain high levels of vitality & healthy growth of essential stats
            to unlock speciality memberships for virtual & IRL microfactory
            co-ops. These are magical places dedicated to creative coordination
            & seizing the memes of hyperlocal production.
          </div>
          <div className="w-full text-center flex justify-center">
            <img src="/assets/images/room.png" />
          </div>
        </div>

        <div className="mx-0 sm:mb-0 mb-40 font-londrina md:mx-4 mt-20 md:mt-0 px-10 border py-10  w-full text-white md:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
            As you might have already guessed, neglecting your virtual companion
            can have dire consequeces… similar to the occacional relationship
            IRL.
          </h1>
          <div className="text-lg md:text-xl lg:text-2xl mt-5 text-center font-thin">
            The speed with which the situation for a nearly forgotten flame goes
            from alarming, to critical, to virtually hopeless can be stunning.
            Yet, all hope is not lost.
            <br />
            <br />
            Good game balance calls sometimes for the carrot, and others for the
            stick. When renewables are left to cycle helplessly from starvation
            and negligence to deep hibernation and back again, neverendingly, it
            becomes time for a bit of both.
            <br />
            <br />
            For collectors and instructables proliferators inclined to
            sweep in to the rescue of companions whose vitality & stats hover
            ever closer to 0, active bids are displayed in a dedicated rescue
            dashboard currentlly being built.
            <br />
            <br />
            And for those who have forgotten to bring home enough feed to
            share a few too many times, stay near the top of the negligence
            charts long enough and you might win entry to the the record halls
            of shame.
            <br />
            <br />
            Funny thing about composability, reputation, and long memory…
          </div>
        </div>
      </section>


  </div>
  )
}

export default forwardRef(Common)