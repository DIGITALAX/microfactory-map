import React, {useState, useContext} from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import LensModal from './Modals/LensModal';
import { contextApi } from '../pages/_app';
import {MdError} from 'react-icons/md';
import MenuItems from './MenuItems';

function SideBar() {

  const data = useContext(contextApi);

  const [lensModal, setLensModal] = useState(false);

  const Menu = [
    {title: "Storefront", src: "storefront", link:"https://port15.digifizzy.xyz/magazines/15/"},
    {title: "WayFare", src: "wayfare", link:{}},
    {title: "Guilds", src: "guild", gap: true, link:"https://www.patrons.digitalax.xyz/"},
    {title: "Instructables", src: "filter", link:"https://port15.digifizzy.xyz/magazines/15/"},
    {title: "Renewables", src: "filter", link:"https://renewables.wtf"},
    {title: "Explore Realms", src: "filter", link:"https://www.digitalax.xyz/"}  ]

  const handleLensModalOpen = () => {
    setLensModal(true);
  };

  return (
    <div className='float-left' >
    <div className='flex absolute z-10 ease-in-out'>
        <div className={`${data.open ? 'sm:w-72 w-80' : 'w-24'} h-screen p-5 pt-8 bg-darkGrey relative`}>
          <img src="/assets/icons/control.png" 
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-darkGrey ${!data.open && 'rotate-180'}`}
          onClick={()=>data.setOpen(!data.open)} />
          <div className="flex gap-x-4 items-center ml-2">
            <img src="/assets/icons/logo.png" className={`cursor-pointer duration-500`}/>
            <h1 className={`text-white origin-left font-f25 font-medium text-xl ${!data.open && 'scale-0'}`}>Mini Map</h1>
          </div>
          <ul className="sm:mt-12 mt-7 pt-0 sm:pt-6 origin-left">
            <li className={`flex item-center mb-4 gap-x-4 cursor-pointer list-none ml-2 ${!data.open && 'justify-center ml-0'}`}>
              <ConnectButton.Custom >
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  mounted,
                  connectModalOpen
                }) => {
                  return (
                    <div
                      {...(!mounted && {
                        'aria-hidden': true,
                        'style': {
                          opacity: 0,
                          pointerEvents: 'none',
                          userSelect: 'none',
                          accent: '#ffffff'
                        },
                      })}
                      {...(connectModalOpen && {
                        'aria-hidden': true,
                        'style': {
                          accentColor: '#ffffff',
                          modalText: '#ffffff'
                        },
                      })}
                    >
                      {(() => {
                        if (!mounted || !account || !chain || connectModalOpen) {
                          return (
                            data.open ? 
                            <button onClick={openConnectModal} className='justify-center font-sans text-xl bg-rainbow h-12 w-40 py-2 px-2 rounded-lg hover:opacity-80' >
                              <img className='object-fill w-6 h-6 list-none float-left p-0 mt-1 ml-3' src='/assets/icons/rainbow-small.png'/>
                                <span className="w-fit relative flex ml-12 text-12 leading-8 font-bold text-white">rainbow</span>
                            </button> :
                            <button onClick={openConnectModal} type="button" className='bg-rainbow flex item-center gap-x-4 cursor-pointer rounded-lg hover:opacity-80'>
                              <img src="/assets/icons/rainbow-small.png" className='w-10 h-10 p-2' />
                            </button>
                          );
                        } 
          
                        if (chain.unsupported) {
                          return (
                            data.open ?
                            <button onClick={openChainModal} type="button" className='justify-center font-sans text-sm bg-rainbow h-12 w-40 py-2 px-2 rounded-lg hover:opacity-80'>
                              <MdError className='object-fill w-4 top-1 relative h-4 list-none float-left p-0 mt-1 ml-2' color='white'/>
                                <span className="w-fit relative flex ml-8 leading-8 font-bold text-white">Switch Network</span>
                                <span class="relative h-3 w-3">
                                <span class="animate-ping absolute -right-40 -top-11 h-3 w-3 rounded-full opacity-75 bg-red-600"></span>
                                <span class="absolute -right-40 -top-11 inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                            </button> 
                            :
                            <button onClick={openChainModal} type="button" className='bg-rainbow w-10 h-10 flex item-center cursor-pointer rounded-lg hover:opacity-80'>
                            <MdError 
                            className='w-10 h-10 relative left-1'
                            color='white'
                            />
                            <span class="relative h-3 w-3">
                                <span class="animate-ping absolute -right-18 -top-1 h-3 w-3 rounded-full opacity-75 bg-red-600"></span>
                                <span class="absolute -right-18 -top-1 inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            </button>
                          );
                        }
          
                        return (
                          <div style={{ display: 'flex', gap: 12 }}>
                            {/* <button
                              onClick={openChainModal}
                              style={{ display: 'flex', alignItems: 'center' }}
                              type="button"
                            >
                            </button> */}
                            { data.open ?
                            <button onClick={openAccountModal} type="button" className='justify-center font-sans text-sm bg-rainbow h-12 w-40 py-2 px-2 rounded-lg hover:opacity-80'>
                            <img src='/assets/icons/pfp2.png' className='object-fill w-10 h-10 list-none float-left p-0 -mt-1'/>
                              <span className='w-fit relative flex left-2 text-white font-sans font-semibold leading-8'>{account.displayName}</span>
                            </button> 
                            :
                            <button onClick={openAccountModal} type="button" className='bg-rainbow w-10 h-10 flex item-center cursor-pointer rounded-lg hover:opacity-80'>
                            <img src='/assets/icons/pfp2.png' className='p-2'/>
                            </button> 
                            }
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </li>
            <li className={`flex item-center gap-x-4 cursor-pointer list-none mt-4 ml-2 ${!data.open && 'justify-center ml-0'}`}>
              {
                data.open ?
                <button onClick={handleLensModalOpen} className='justify-center font-spacebold text-l bg-greenLens h-12 w-40 text-darkGreenLens py-2 px-2 rounded-lg hover:bg-greenLens2'>
                  <img className='object-fill w-10 h-10 list-none float-left p-0 -mt-1' src='/assets/lens/lensicon.png'/>
                     <span className='w-fit relative flex ml-5 leading-8 font-spacebold'>Lens Sign in</span>
                </button>
                :
                <button onClick={handleLensModalOpen} className='bg-greenLens flex item-center gap-x-4 cursor-pointer rounded-lg hover:bg-greenLens2'>
                  <img className='object-fill w-10 h-10 list-none p-0' src='/assets/lens/lensicon.png'/>
                </button>
              }
              <LensModal visible={lensModal} setLensModal={setLensModal} />
            </li>
            <li className={`flex item-center gap-x-4 cursor-pointer list-none mt-4 ml-2 ${!data.open && 'justify-center ml-0'}`}>
              {
                data.open ?
                <button onClick={data.handleFeedModal} className='justify-center font-spacebold text-l bg-lensLilac h-12 w-40 text-darkGreenLens py-2 px-2 rounded-lg hover:opacity-80'>
                  <img className='object-fill w-10 h-10 list-none float-left p-0 -mt-1' src='/assets/lens/grow.png'/>
                     <span className={`w-fit relative flex ml-5 leading-8 font-spacebold  ${lensModal && 'hidden'}`}>Scroll Feed</span>
                </button>
                :
                <button onClick={data.handleFeedModal} className='bg-lensLilac flex item-center gap-x-4 cursor-pointer rounded-lg hover:opacity-80'>
                  <img className='object-fill w-10 h-10 list-none p-0' src='/assets/lens/grow.png'/>
                </button>
              }
            </li>
          </ul>
            <MenuItems goDownToRenewables={data.goDownToRenewables} goDownToMintSection={data.goDownToMintSection} open={data.open} />
        </div>
    </div>
    </div>
  )
}

export default SideBar