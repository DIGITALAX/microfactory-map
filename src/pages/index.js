import Head from 'next/head';

import Map from '../components/Map';
import Search from '../components/Search';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Microfactory Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Search />
        <Map />
    </div>
  )
}
