import { ethers } from "ethers";
import Web3Modal from 'web3modal';


import { BooTokenAddress, BooTokenABI,  LifeTokenABI, LifeTokenAddress,
  SingleSwapTokenAddress, SingleSwapTokenABI, 
  SwapMultiHopAddress, 
  SwapMultiHopABI, 
  IWETHAddress, 
  IWETHABI

} from "../Context/constants";

 //CHECK IF OUR WALLET IS CONNECTED
  export const checkIfWalletConnected = async()=> {
  try {
    if(!window.ethereum) return console.log("Install MetaMask");
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    })
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error)
  }
}

  //CONNECT WALLET FUNCTION
  export const connectWallet = async()=> {
    try {
      if(!window.ethereum) return console.log("Install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      const firstAccount = accounts[0];
      return firstAccount;
    } catch (error) {
      console.log(error)
    }
  }

    //FETCHING BOO CONTRACT********************************
    export const fetchBooContract = (signerOrProvider)  => 
    new ethers.Contract(BooTokenAddress, BooTokenABI, signerOrProvider)

    export const connectingWithBooToken = async()=> {
      try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchBooContract(signer);
        return contract;
      } catch (error) {
        console.log(error);
      }
    }

    //FETCHING LIFE CONTRACT********************************
    export const fetchLifeContract = (signerOrProvider)  => 
      new ethers.Contract(LifeTokenAddress, LifeTokenABI, signerOrProvider);

    export const connectingWithLifeToken = async()=> {
      try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchLifeContract(signer);
        return contract;
      } catch (error) {
        console.log(error);
      }
    }

    //FETCHING SINGLE SWAP CONTRACT********************************
    export const fetchSingleSwapContract = (signerOrProvider)  => 
    new ethers.Contract(SingleSwapTokenAddress, SingleSwapTokenABI, signerOrProvider);

    export const connectingWithSingleSwapToken = async()=> {
      try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchSingleSwapContract(signer);
        return contract;
      } catch (error) {
        console.log(error);
      }
    }

    //FETCHING MULTIHOP CONTRACT********************************
    export const fetchMultiHopContract = (signerOrProvider)  => 
    new ethers.Contract(SwapMultiHopAddress, SwapMultiHopABI, signerOrProvider);


    export const connectingWithMultiHopToken = async()=> {
      try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchMultiHopContract(signer);
        return contract;
      } catch (error) {
        console.log(error);
      }
    }

    //FETCHING IWETH CONTRACT********************************
    export const fetchIWTHContract = (signerOrProvider)  => 
    new ethers.Contract(IWETHAddress, IWETHABI, signerOrProvider);

    export const connectingWithIWTHToken = async()=> {
      try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchIWTHContract(signer);
        return contract;
      } catch (error) {
        console.log(error);
      }
    }

    //FETCHING MULTIHOP CONTRACT********************************
    const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    export const fetchDAIContract = (signerOrProvider)  => 
    new ethers.Contract(DAIAddress, IWETHABI, signerOrProvider);


    export const connectingWithDAIToken = async()=> {
      try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchDAIContract(signer);
        return contract;
      } catch (error) {
        console.log(error);
      }
    }
