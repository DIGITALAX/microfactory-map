import React from 'react'

function Footer() {
  return (
    <div className='bg-black min-h-screen flex flex-col items-center'>
        <img className='mt-40 px-0 md:px-8' src='/images/homepage/renounables.png' />
        <section className='text-center font-opress text-white md:text-3xl lg:text-4xl my-40'>
        no discord or telegram. no one from the team <br />
        will contact you asking for private keys <br />
        etc. don’t believe the scammers. <br />
        it’s a dark forest out there. <br />
        stay vigilant & curious.
        </section>

        <section className='flex flex-row justify-between w-full p-3 md:p-5'>
        <a className='animButton cursor-pointer' href="https://twitter.com/renounables" target="_blank" rel="noreferrer">
            <img
            className='w-6 h-6 md:w-12 md:h-12' src='/images/homepage/footer/twitter.png'
            />
        </a>
        <img className='w-12 md:w-24 object-contain' src='/images/homepage/footer/red-nounce.png' />
        <img className='w-6 h-6 md:w-12 md:h-12' src='/images/homepage/footer/zero.png' />
        </section>
    </div>
  )
}

export default Footer