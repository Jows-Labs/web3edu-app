import { ethers } from "ethers";
import { contractABI } from "./SmartContractABI";

function getWallet(privKey: string, rpc: string): ethers.Wallet {
  return new ethers.Wallet(
    privKey, 
    ethers.getDefaultProvider("sepolia", { alchemy: rpc })
  );
}

export function runContract(address: string, privKey: string, rpc: string): ethers.Contract {
  return new ethers.Contract(address, contractABI, getWallet(privKey, rpc));
}