import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Table, Row, Rows} from 'react-native-table-component'
import {API_URL} from '@env'
import {styles} from './style'

class Transactions extends Component {

  constructor(props) {
      super(props);
      const transactionDataList = this.props.route.params.transactionDataList;
      const address = this.props.route.params.address;
      const transactionDataListLength = this.props.route.params.transactionDataListLength;
      this.state = { 
         address: address,
         transactionDataList: transactionDataList,
         transactionDataListLength: transactionDataListLength
      }
   }
  
  
  componentDidMount() {
    // 'http://192.168.1.4:8080/addresses/0xF7b547f3E46EFfB3480EEE2c486AE760734B135c/transactions'
    //you need to change the ip to be the on that shows your localhost
    // in cmd you type ipconfig and you get IPv4 Address.
    const url = `${API_URL}/addresses/${this.props.route.params.address}/transactions`
  
    fetch(url
      ,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json;charset=utf-8',
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    )
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ transactionDataList: responseJson });
      this.setState( {transactionDataListLength : responseJson.length})
    })
    .catch((error) => {
      console.log(error);
      this.setState({transactionDataListLength : 0})
    });
  }
  

  render() {
    const tableData = [];

    const tableHead = ['From', 'To', 'Value'];

    const temp = this.state.transactionDataList.flatMap((e) => [e.from,e.to,e.value]);

    while(temp.length) {
      tableData.push(temp.splice(0,3));
    }
    
    if (this.state.transactionDataListLength > 0) {
      return (
        <View>
          <Table>
            <Row data={tableHead} style={styles.head}  />
            <Rows data={tableData} style={styles.row}  />
          </Table>
        </View>
      );
     } else if (this.state.transactionDataListLength === 0) {
       return (
         <View>
          <Text>The Ethereum address that you searched has no transaction!</Text>
        </View>
      )
    } else {
      return null;
    }   
  }
}


 
const mapStateToProps = (state) => {
  const {transactions} = state;
  return {transactions};
};

export default connect(mapStateToProps)(Transactions);
