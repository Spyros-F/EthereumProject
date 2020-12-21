import {REACT_APP_API_URL} from '@env';

export const getTransactionsFromApi = async (props) => {
    //'http://192.168.1.4:8080/addresses/0xF7b547f3E46EFfB3480EEE2c486AE760734B135c/transactions'
    //you need to change the ip to be the on that shows your localhost
    // in cmd you type ipconfig and you get IPv4 Address.
    const url = `${REACT_APP_API_URL}/addresses/${props}/transactions`;
    let retValue = [];
    const response = await fetch(
        url,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json;charset=utf-8',
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    ).then((response) => response.json())
    .then((responseJson) => {
        retValue = responseJson;
    })
    return retValue;
}

export default getTransactionsFromApi;
