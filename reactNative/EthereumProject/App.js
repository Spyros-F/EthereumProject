import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './navigation/navigation'
import store from './store/store';

class App extends React.Component {
  render() {
    return (
      <Provider store= {store}>
        <Navigation></Navigation>
      </Provider>
    );
  }
}

export default App;