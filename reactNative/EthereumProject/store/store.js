import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import transactionsReducer from '../reducers/transactionReducer';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(transactionsReducer, composedEnhancer);

export default store;