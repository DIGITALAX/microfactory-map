/*
This code is political. War against the state.
*/

import { useState, useEffect, createContext } from "react";
import "./../../styles/globals.css";
import SideBar from "./../components/SideBar";
import Loader from "../components/Loader";
import FeedBox from "../components/Lens/FeedBox";

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

  const handleMinimise = () => {
    minimise ? setMinimise(false) : setMinimise(true);
  };

  const handleFeedModal = () => {
    isFeedOpen === true ? setIsFeedOpen(false) : setIsFeedOpen(true);
    setMinimise(false);
  };

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} coolMode>
            <contextApi.Provider
              value={{
                isFeedOpen: isFeedOpen,
                handleFeedModal: handleFeedModal,
                handleMinimise: handleMinimise,
                minimise: minimise,
              }}
            >
              <SideBar />
              <FeedBox />
            </contextApi.Provider>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      )}
    </>
  );
}

export default MyApp;
