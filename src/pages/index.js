import Head from 'next/head';
import Map from '../components/Map';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Microfactory Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Map />
    </div>
  )
}
