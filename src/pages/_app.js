/*
This code is political. War against the state.
*/

import { useState, useEffect, createContext } from "react";
import "./../../styles/globals.css";
import SideBar from "./../components/SideBar";
import Loader from "../components/Loader";
import FeedBox from "../components/Lens/FeedBox";
import Footer from "../components/Layout/Footer";

// rainbow wallet
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export const contextApi = createContext();

const { chains, provider } = configureChains(
  [chain.polygon],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Microfactory Map",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFeedOpen, setIsFeedOpen] = useState(false);
  const [minimise, setMinimise] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMinimise = () => {
    minimise ? setMinimise(false) : setMinimise(true);
  };

  const handleFeedModal = () => {
    isFeedOpen === true ? setIsFeedOpen(false) : setIsFeedOpen(true);
    setMinimise(false);
  };

  const findPos = (obj) => {
    var curtop = 0;
    if (obj.offsetParent) {
      do {
        curtop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [curtop];
    }
  };

  const goDownToMintSection = () => {
    window.scrollBy({
      top: findPos(document.getElementById("mint-section")),
      behavior: "smooth",
    });
  };

  const goDownToRenewables = () => {
    window.scrollBy({
      top: findPos(document.getElementById("renewables")),
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} coolMode>
          <contextApi.Provider
            value={{
              isFeedOpen: isFeedOpen,
              handleFeedModal: handleFeedModal,
              handleMinimise: handleMinimise,
              minimise: minimise,
              goDownToMintSection: goDownToMintSection,
              goDownToRenewables: goDownToRenewables,
              open: open,
              setOpen: setOpen,
            }}
          >
            <SideBar />
            <FeedBox />
            <Component {...pageProps} />
          </contextApi.Provider>
          <Footer />
        </RainbowKitProvider>
      </WagmiConfig>
      {/* // )} */}
    </>
  );
}

export default MyApp;
