import React, { useState } from 'react'
import './style.scss'

import Grid from '../Grid';

const Form = ({ handleAdd, setTransactionsList, transactionsList }) => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Enter the description and value!")
      return
    } else if (amount < 1) {
      alert("The value must be positive!")
      return
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  }

  return (
    <>
      <section className='Form' >
        <div className='Form__inputContent'>
          <label>Description</label>
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>

        <div className='Form__inputContent'>
          <label>Value</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>

        <div className='Form__radioGroup'>
          <input type="radio" id="rIncome" defaultChecked name='group1' onChange={() => setExpense(!isExpense)} />
          <labe htmlFor="rIncome">Income</labe>
          <input type="radio" id="rExpense" name='group1' onChange={() => setExpense(!isExpense)} />
          <labe htmlFor="rExpense">Expense</labe>
        </div>

        <button className='Form__button' onClick={handleSave}>Add</button>
      </section>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  )
}

export default Form
