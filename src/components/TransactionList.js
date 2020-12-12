import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../Context/GlobalState';


export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions)


    return(
        <>
      <h3> History</h3>
      <ul  className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
          </ul>          
      </>
    )
}