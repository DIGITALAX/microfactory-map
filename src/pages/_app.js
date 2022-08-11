import './../../styles/globals.css';
import SideBar from './../components/SideBar';

// rainbow wallet
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  Theme
} from '@rainbow-me/rainbowkit';
import merge from 'lodash.merge';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: 'radial-gradient(50% 50% at 50% 50%, #1C3F8B 0%, #09265F 100%);',
  },
} , Theme);

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
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={myTheme}>
          <SideBar />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;