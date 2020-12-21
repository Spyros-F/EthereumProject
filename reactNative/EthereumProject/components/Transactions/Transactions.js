import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {Table, Row, Rows} from 'react-native-table-component';
import getTransactionsFromApi from '../../api/api';
import {styles} from './style';
import {SELECT_TRANSACTION} from '../../actions/types';

const Transactions = (props) => {

  const [address] = useState(props.route.params.address);

  const [transactionDataList, setTransactionDataList] = useState(props.route.params.transactionDataList);

  const [transactionDataListLength, setTransactionDataListLength] = useState(props.route.params.transactionDataListLength);

  const [tableData] = useState([]);

  const [tableHead] = useState(['From', 'To', 'Value']);

  const dispatch = useDispatch();

  const  fetchTransactions = async (address) => {
    try {
      const responseData = await getTransactionsFromApi(address);
      setTransactionDataList(responseData);
      setTransactionDataListLength(responseData.length);
      dispatch({ type: SELECT_TRANSACTION, payload: responseData.length })
    } catch (error) {
      setTransactionDataListLength(0);
      console.log(error);
    }
  };

  useEffect(() => {

    fetchTransactions(address);

    const temp = transactionDataList.flatMap((e) => [e.from,e.to,e.value]);

    while(temp.length) {
      tableData.push(temp.splice(0,3));
    }

  },[transactionDataListLength]);


  if (transactionDataListLength > 0) {
    return (
      <View>
        <Table>
          <Row data={tableHead} style={styles.head}  />
          <Rows data={tableData} style={styles.row}  />
        </Table>
      </View>
    );
  } else if (transactionDataListLength === 0) {
      return (
        <View>
          <Text>The Ethereum address that you searched has no transaction!</Text>
        </View>
      )
  } else {
    return null;
  }
} 

const mapStateToProps = (state) => {
  const {transactions} = state;
  return {transactions};
};

export default connect(mapStateToProps)(Transactions);
