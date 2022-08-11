import { useState, useEffect } from 'react';
import './../../styles/globals.css';
import SideBar from './../components/SideBar';
import Loader from '../components/Loader';

// rainbow wallet
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.polygon],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Microfactory Map',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 6500);
  }, []);


  return (
    <>
    {isLoading ? (
        <Loader />
      ) : (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} coolMode>
          <SideBar />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    )}
    </>
  );
}

export default MyApp;