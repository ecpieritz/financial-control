import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Resume from './components/Resume';
import Form from './components/Form';

function App() {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    const amountExpense = transactionsList
      .filter((item)=> item.expense)
      .map((transaction) => Number(transaction.amount));
   
    const amountIncome = transactionsList
      .filter((item)=> item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc,cur)=> acc + cur, 0).toFixed(2);
    const income = amountExpense.reduce((acc,cur)=> acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`)
    setExpense(`R$ ${expense}`)
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`)

  }, [transactionsList]);

  return (
    <>
      <Header />
      <Title />

      <main className='App'>
        <Resume income={income} expense={expense} total={total} />
        <Form />
      </main>
    </>
  );
}

export default App;
