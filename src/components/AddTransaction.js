import React, {useState,useContext} from 'react'
import { GlobalContext }  from  '../Context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const {AddTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();


        const newTransaction ={
            id: Math.floor(Math.random() * 100000000),
            text,
            amount : +amount,

            
        }
        AddTransaction(newTransaction);
        setText("")
        setAmount("")
            

        
            
    }
    return(
      <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
          <div className="form-contol">
              <label htmlFor="text"> Text</label>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."></input>
          </div>
          <div className="form-contol">
              <label htmlFor="amount">
                  Amount <br/>
                  
              </label>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."></input>
          </div>
          <button className="btn" >Add Transaction</button>
          </form>

      </>
    )
}
