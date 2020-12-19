const Web3 = require('web3');
const dotenv = require('dotenv');

dotenv.config();

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    process.env.WEB3_PROVIDER
  )
);

const contractAddress = '0xf019a9c291fab47003588fe74d33660cd467fc22';

const abi = require('./server/abi.js');

const contract = new web3.eth.Contract(abi, contractAddress);

contract.methods.name().call((err, result) => {
  const name = result;
});

contract.methods.symbol().call((err, result) => {
  const symbol = result;
});

contract.methods.decimals().call((err, result) => {
  const decimals = result;
});