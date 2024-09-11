import { SEPOLIA_CHAIN_ID } from "@toruslabs/ethereum-controllers";
import { CHAIN_NAMESPACES } from "@web3auth/base";

//talvez trocar para mainnet
const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: SEPOLIA_CHAIN_ID,
  rpcTarget: "https://rpc.ankr.com/eth_sepolia",
  displayName: "Ethereum Sepolia",
  blockExplorerUrl: "https://sepolia.etherscan.io/",
  ticker: "ETH",
  tickerName: "Ethereum",
};

export const web3authConfig = {
  clientId:
    "BKT4xfkIAQ8aIFm-f2mh_HgXQt0NpVJJRL1ivU2JUK7lNXY6uHVahZRbKsOWz6Eo1e8h3LxT7LNenJj2ArpVXTA",
  web3AuthNetwork: "sapphire_devnet",
  chainConfig,
};
