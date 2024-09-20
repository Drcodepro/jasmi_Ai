import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bsc } from 'viem/chains'

const chains = [bsc];
const projectId = '84ab14b3eabf217c49f7025b99be6eb0';

const metadata = {
  name: 'Jasmy Presale',
  description: '',
  url: '',
  icons: ['']
}

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  metadata,
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient

});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <WagmiConfig config={wagmiConfig}>
    <Toaster />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WagmiConfig>
  <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
</>
)
