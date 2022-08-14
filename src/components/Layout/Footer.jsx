import React from 'react'

function Footer() {
  return (
    <div className='bg-black flex flex-col items-center'>
        <section className='text-center font-opress text-white md:text-3xl lg:text-4xl my-10'>
        no one from the team will contact <br />
        you asking for private keys etc. <br />
        don’t believe the scammers. <br />
        it’s a dark forest out there. <br />
        stay vigilant & curious.
        </section>

        <section className='flex flex-row justify-between w-full p-3 md:p-5'>
        <a className='animButton cursor-pointer' href="https://twitter.com/digitalax_" target="_blank" rel="noreferrer">
            <img
            className='w-6 h-6 md:w-12 md:h-12' src='/assets/icons/twitter.png'
            />
        </a>
        <img className='w-6 h-6 md:w-12 md:h-12' src='/assets/icons/cc0.png' />
        </section>
    </div>
  )
}

export default Footer