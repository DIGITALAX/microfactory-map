import React, {useState} from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';


function SideBar() {

  const [open, setOpen] = useState(false);

  const Menu = [
    {title: "Instructables #1", src: "connect", link:"https://port15.digifizzy.xyz/magazines/15/"},
    {title: "Instructables #2", src: "sign in", link:"https://www.digifizzy.xyz/magazines/14/"},
    {title: "Explore realms", src: "explore", gap: true, link:"https://www.patrons.digitalax.xyz/"},
    {title: "Go home", src: "filter", link:"https://www.digitalax.xyz/"},
    {title: "Wayfare", src: "filter", link:"https://www.digitalax.xyz/"},
    {title: "DASH", src: "filter", link:"https://www.digitalax.xyz/"},
  ]


  return (
    <div className='flex absolute z-10'>
        <div className={`${open ? 'w-72' : 'w-24'} duration-300 h-screen p-5 pt-8 bg-darkGrey relative`}>
          <img src="/assets/icons/control.png" 
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-darkGrey ${!open && 'rotate-180'}`}
          onClick={()=>setOpen(!open)} />
          <div className="flex gap-x-4 items-center ml-2">
            <img src="/assets/icons/logo.png" className={`cursor-pointer duration-500`}/>
            <h1 className={`text-white origin-left font-medium text-l duration-300 ${!open && 'scale-0'}`}>Microfactory Map</h1>
          </div>
          <ul className="mt-12 pt-6">
            <li className={`flex item-center gap-x-4 cursor-pointer list-none mb-2 ${!open && 'justify-center'}`}>
              {
                open ? 
                  <ConnectButton.Custom>
                    {({
                      account,
                      chain,
                      openAccountModal,
                      openChainModal,
                      openConnectModal,
                      mounted,
                    }) => {
                      return (
                        <div
                          {...(!mounted && {
                            'aria-hidden': true,
                            'style': {
                              opacity: 0,
                              pointerEvents: 'none',
                              userSelect: 'none',
                            },
                          })}
                        >
                          {(() => {
                            if (!mounted || !account || !chain) {
                              return (
                                <button onClick={openConnectModal} type="button" className='font-sans text-xs bg-greenLens hover:bg-greenLens2 text-darkGreenLens py-2 px-2 rounded-lg'>
                                  <span className=''>
                                  {/* <img src="/assets/icons/rainbow-app-icon-small.png" className='float-left flex item-center gap-x-4 cursor-pointer p-2'/> */}
                                  <p>Connect Wallet</p>
                                  </span>
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
                :
                <ConnectButton.Custom>
                    {({
                      account,
                      chain,
                      openAccountModal,
                      openChainModal,
                      openConnectModal,
                      mounted,
                    }) => {
                      return (
                        <div
                          {...(!mounted && {
                            'aria-hidden': true,
                            'style': {
                              opacity: 0,
                              pointerEvents: 'none',
                              userSelect: 'none',
                            },
                          })}
                        >
                          {(() => {
                            if (!mounted || !account || !chain) {
                              return (
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
              }
            </li>
            <li className={`flex item-center gap-x-4 cursor-pointer list-none ${!open && 'justify-center'}`}>
              {
                open ?
                <button className='font-sans text-xs bg-greenLens hover:bg-greenLens2 text-darkGreenLens py-2 px-2 rounded-lg'>
                  <img className='object-fill w-6 h-6 list-none float-left' src='/assets/icons/lensicon.png'/>
                     <span className='mt-1 ml-2 mr-0 relative flex'>Lens Sign in</span>
                </button>
                :
                <button className='bg-greenLens hover:bg-greenLens2 flex item-center gap-x-4 cursor-pointer rounded-lg'>
                  <img className='object-fill w-10 h-10 list-none p-0' src='/assets/icons/lensicon.png'/>
                </button>
              }
            </li>
          </ul>
          <ul className="pt-6">
            {Menu.map((menu, index) => (
              <a href={`${menu.link}`} target="_blank" rel="noreferrer">
              <li key={index} className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-lightGrey rounded-md ${menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-lightGrey'}`}>
                <img src={`/assets/icons/${menu.src}.png`}/>
                <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
              </li>
              </a>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default SideBar