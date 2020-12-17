const Web3 = require('web3');
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://kovan.infura.io/v3/3269c013c5b2449aaea1bb593f873d77'
  )
);

const contractAddress = '0xf019a9c291fab47003588fe74d33660cd467fc22';

const abi = require('./abi.js');

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

const fromArray = [];

const toArray = [];

const valueArray = [];

contract.getPastEvents(
  'Transfer',
  {
    fromBlock: 0,
    toBlock: 'latest',
  },
  (err, events) => {
    const transfers = events.map((e) => e.returnValues);
    transfers.forEach((transfer) => {
      fromArray.push(transfer.from);
      toArray.push(transfer.to);
      valueArray.push(transfer.value);
    });
  }
);
