import web3 from './web3';
import karmaMember from '../build/contracts/KarmaMemberships.json';

export default (address) => {
  return new web3.eth.Contract(
    karmaMember.abi,
    address
  );
}
