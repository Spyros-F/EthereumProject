import {SELECT_TRANSACTION} from './types'

export const addTransactions = transactionsIndex => (
    {
      type: SELECT_TRANSACTION,
      payload: transactionsIndex,
    }
);