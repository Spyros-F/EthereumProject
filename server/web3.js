const Web3 = require('web3');
const abi = require('./abi.js');
const dotenv = require('dotenv');

dotenv.config();

const web3 = new Web3(
    new Web3.providers.HttpProvider(
        process.env.WEB3_PROVIDER
    )
  );

const contractAddress = '0xf019a9c291fab47003588fe74d33660cd467fc22';

const contract = new web3.eth.Contract(abi, contractAddress);

const isValidEthAddress = (addressParam) => {
    return  web3.utils.toChecksumAddress(addressParam);
}

const createResponseData = (from, to, value) => ({from , to, value});

async function getTransfersInfo (addressParam) {

    const events = await contract.getPastEvents(
      'Transfer',
      {
        fromBlock: 0,
        toBlock: 'latest',
      }
    )

    const transfers = events.map((e) => e.returnValues);

    const responseArr = transfers.filter(transfer => transfer.to === addressParam || transfer.from === addressParam).flatMap((e) => createResponseData(e.from,e.to,e.value));
    
    return responseArr;
}

exports.isValidEthAddress = isValidEthAddress;
exports.getTransfersInfo = getTransfersInfo;