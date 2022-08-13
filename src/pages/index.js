import { useState } from 'react';
import Head from 'next/head';
import Map from '../components/Map';
import Common from '../components/Instruct/Common'

export default function Home() {


  return (
    <div>
      <Head>
        <title>Microfactory Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Map />
        <Common />
    </div>
  )
}
