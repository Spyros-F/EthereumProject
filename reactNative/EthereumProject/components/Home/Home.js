import React, {useState} from 'react';
import {connect} from 'react-redux';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Home = () => {

  const [address, setAddress] = useState('');

  const [transactionDataList] = useState([]);

  const navigation = useNavigation();

  const handleAddress = (text) => {
    setAddress(text);
  };

  const search = (address) => {
    navigation.navigate('Transactions', {
      address: address, 
      transactionDataList : transactionDataList,
      transactionDataListLength: -1},
      );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="EthereumAddress"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={handleAddress}
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => search(address)}>
        <Text style={styles.searchButtonText}> Search </Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state) => {
  const { transactions } = state
  return { transactions }
};
 
export default connect(mapStateToProps)(Home);