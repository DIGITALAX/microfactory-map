import React, {useState, useContext} from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import LensModal from './Modals/LensModal';
import { contextApi } from '../pages/_app';

function SideBar() {

  const data = useContext(contextApi);

  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  

  const Menu = [
    {title: "Storefront", src: "connect", link:"https://port15.digifizzy.xyz/magazines/15/"},
    {title: "WayFare", src: "sign in", link:"https://www.digifizzy.xyz/magazines/14/"},
    {title: "Guilds", src: "explore", gap: true, link:"https://www.patrons.digitalax.xyz/"},
    {title: "Explore Realms", src: "filter", link:"https://www.digitalax.xyz/"},
    {title: "DASH", src: "filter", link:"https://www.digitalax.xyz/"},
  ]

  const handleModalOpen = () => {
    setModal(true);
  }


  return (
    <div className='float-left' >
    <div className='flex absolute z-10 ease-in-out'>
        <div className={`${open ? 'w-72' : 'w-24'} h-screen p-5 pt-8 bg-darkGrey relative`}>
          <img src="/assets/icons/control.png" 
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-darkGrey ${!open && 'rotate-180'}`}
          onClick={()=>setOpen(!open)} />
          <div className="flex gap-x-4 items-center ml-2">
            <img src="/assets/icons/logo.png" className={`cursor-pointer duration-500`}/>
            <h1 className={`text-white origin-left font-npress font-medium text-3xl ${!open && 'scale-0'}`}>Microfactory Map</h1>
          </div>
          <ul className="mt-12 pt-6 origin-left">
            <li className={`flex item-center mb-4 gap-x-4 cursor-pointer list-none ml-2 ${!open && 'justify-center ml-0'}`}>
              <ConnectButton.Custom>
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
                            open ? 
                            <button onClick={openConnectModal} className='justify-center font-sans text-xl bg-gradient-radial h-12 w-40 py-2 px-2 rounded-lg hover:opacity-80'>
                              <img className='object-fill w-6 h-6 list-none float-left p-0 mt-1 ml-3' src='/assets/icons/rainbow-small.png'/>
                                <span className="w-fit relative flex ml-12 text-12 leading-8 font-bold text-white">rainbow</span>
                            </button> :
                            <button onClick={openConnectModal} type="button" className='w-10 h-10 hover:opacity-80'>
                              <img src="/assets/icons/rainbow-app-icon-small.png" />
                            </button>
                          );
                        }
          
                        if (chain.unsupported) {
                          return (
                            <button onClick={openChainModal} type="button">
                              Wrong network
                            </button>
                          );
                        }
          
                        return (
                          <div style={{ display: 'flex', gap: 12 }}>
                            <button
                              onClick={openChainModal}
                              style={{ display: 'flex', alignItems: 'center' }}
                              type="button"
                            >
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    width: 12,
                                    height: 12,
                                    borderRadius: 999,
                                    overflow: 'hidden',
                                    marginRight: 4,
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <img
                                      alt={chain.name ?? 'Chain icon'}
                                      src={chain.iconUrl}
                                      style={{ width: 12, height: 12 }}
                                    />
                                  )}
                                </div>
                              )}
                              {chain.name}
                            </button>
          
                            <button onClick={openAccountModal} type="button">
                              {account.displayName}
                              {account.displayBalance
                                ? ` (${account.displayBalance})`
                                : ''}
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </li>
            <li className={`flex item-center gap-x-4 cursor-pointer list-none mt-4 ml-2 ${!open && 'justify-center ml-0'}`}>
              {
                open ?
                <button onClick={handleModalOpen} className='justify-center font-space-bold text-l bg-greenLens h-12 w-40 text-darkGreenLens py-2 px-2 rounded-lg hover:bg-greenLens2'>
                  <img className='object-fill w-10 h-10 list-none float-left p-0 -mt-1' src='/assets/lens/lensicon.png'/>
                     <span className='w-fit relative flex ml-5 leading-8'>Lens Sign in</span>
                </button>
                :
                <button onClick={handleModalOpen} className='bg-greenLens flex item-center gap-x-4 cursor-pointer rounded-lg hover:bg-greenLens2 '>
                  <img className='object-fill w-10 h-10 list-none p-0' src='/assets/lens/lensicon.png'/>
                </button>
              }
              <LensModal visible={modal} setModal={setModal} />
            </li>
            <li className={`flex item-center gap-x-4 cursor-pointer list-none mt-4 ml-2 ${!open && 'justify-center ml-0'}`}>
              {
                open ?
                <button onClick={data.handleFeedModal} className='justify-center font-space-bold text-l bg-lensLilac h-12 w-40 text-darkGreenLens py-2 px-2 rounded-lg hover:opacity-80'>
                  <img className='object-fill w-10 h-10 list-none float-left p-0 -mt-1' src='/assets/lens/grow.png'/>
                     <span className={`w-fit relative flex ml-5 leading-8 ${modal && 'hidden'}`}>Scroll Feed</span>
                </button>
                :
                <button onClick={data.handleFeedModal} className='bg-lensLilac flex item-center gap-x-4 cursor-pointer rounded-lg hover:opacity-80'>
                  <img className='object-fill w-10 h-10 list-none p-0' src='/assets/lens/grow.png'/>
                </button>
              }
            </li>
          </ul>
          <ul className="pt-10">
            {Menu.map((menu, index) => (
              <a key={index} href={`${menu.link}`} target="_blank" rel="noreferrer">
              <li className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 rounded-md ${menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-lightGrey'} hover:bg-lightGrey`}>
                <img src={`/assets/icons/${menu.src}.png`}/>
                <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
              </li>
              </a>
            ))}
          </ul>
        </div>
    </div>
    </div>
  )
}

export default SideBar