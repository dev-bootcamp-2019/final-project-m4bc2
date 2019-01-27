import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  //we are in the browser AND metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  //we are on the server OR metamask is not running
  const provider = new Web3.providers.HttpProvider(
    "http://127.0.0.1:8545"//'https://rinkeby.infura.io/oox5IAxGUmnm86qwOYeH'
  );
  web3 = new Web3(provider);
}

export default web3;
