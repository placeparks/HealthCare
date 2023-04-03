import { ethers } from "ethers";

const ALCHEMY_API_KEY = process.env.REACT_APP_ALCHEMY_API_KEY;
const ALCHEMY_API_ENDPOINT = process.env.REACT_APP_ALCHEMY_API_ENDPOINT;

const getProvider = async () => {
  let provider;

  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.log("User denied account access.");
      provider = new ethers.providers.JsonRpcProvider(ALCHEMY_API_ENDPOINT);
    }
  } else if (window.web3) {
    provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
    console.log("Injected web3 detected.");
  } else {
    provider = new ethers.providers.JsonRpcProvider(ALCHEMY_API_ENDPOINT);
    console.log("No web3 instance injected, using Alchemy.");
  }

  return provider;
};

export default getProvider;
