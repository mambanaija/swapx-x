import React, {useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';


//Internal import
import {
  checkIfWalletConnected,
  connectWallet,
  connectingWithBooToken, 
  connectingWithLifeToken,
  connectingWithSingleSwapToken,
  connectingWithIWTHToken,
  connectingWithDAIToken,
  connectingWithMultiHopToken
} from '../utils/appFeatures';

import { IWETHABI } from './constants';
import ERC20 from './ERC20.json';


export const SwapTokenContext = React.createContext();

  export const SwapTokenContextProvider = ({ children }) => {
    const swap = "Welcome to swap my token";

    //useState
    const [account, setAccount] = useState(" ");
    const [ether, setEther] = useState(" ");
    const [networkConnected, setNetworkConnected] = useState(" ");
    const [weth9, setWeth9] = useState("");
    const [dai, setDai] = useState(" ");

    const [tokenData, setTokenData] = useState([]);

    const addToken = [
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      "0x01cf58e264d7578D4C67022c58A24CbC4C4a304E",
      "0xd038A2EE73b64F30d65802Ad188F27921656f28F",
      
      
    ];

      //Fetch data of any connected account
      const fetchingData = async()=> {
        try {
          //Getting the user account
          const userAccount = await checkIfWalletConnected();
          setAccount(userAccount);

          //Create a provider account
          const web3modal = new Web3Modal();
          const connection = await web3modal.connect();
          const provider = new ethers.providers.Web3Provider(connection);
          
          //Checking the balance of the connected user
          const balance = await provider.getBalance(userAccount);
          console.log(balance);
        } catch (error) {
          console.log(error);
        }
      }




    return
    <SwapTokenContext.Provider value={{swap}}>
      { children }
    </SwapTokenContext.Provider>;
  }
