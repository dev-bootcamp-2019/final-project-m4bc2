import web3 from './web3';
import KarmaBase from '../build/contracts/Karma.json';
import ContractAddress from './components/ContractAddress';

const instance = new web3.eth.Contract(
  KarmaBase.abi,
  ContractAddress
);

export default instance;
