import {combineReducers} from 'redux';
 
const INITIAL_STATE = {
  current: [],
  all_transactions: [
    'Transactions',
  ],
};
 
const transactionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SELECT_TRANSACTION':
        
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