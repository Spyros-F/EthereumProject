import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import transactionsReducer from './TransactionsReducer';
import Navigation from './Navigation'

const store = createStore(transactionsReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation></Navigation>
      </Provider>
    );
  }
}

export default App;