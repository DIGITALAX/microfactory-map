import { useState, useEffect } from "react";
import Head from "next/head";
import Map from "../components/Map";
import Common from "../components/Instruct/Common";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Microfactory Mini Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen bg-black">
        <Map />
      </div>
      <Common />
    </div>
  );
}
