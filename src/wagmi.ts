import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  sepolia,
  polygonAmoy,
  optimismSepolia
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Web3EduBrasil-App',
  projectId: '3f648a3cf9afc90770e49d5211dca1bd',
  chains: [
    sepolia,
    polygonAmoy,
    optimismSepolia    
  ],
  ssr: false,
});