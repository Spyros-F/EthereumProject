import {SELECT_TRANSACTION} from '../actions/types'
import {combineReducers} from 'redux';

const initialState = {
    current: [],
    all_transactions: [
      'Transactions',
    ],
};

const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_TRANSACTION:
        
        const { current,  all_transactions,} = state;
      
        const addedTransactions = all_transactions.splice(action.payload, 1);
   
        current.push(addedTransactions);
   
        const newState = { current, all_transactions };
         
        return newState;
   
      default:
        return state
    }
};

export default combineReducers({
    transactions: transactionsReducer
});