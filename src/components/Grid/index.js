import React from 'react'
import './style.scss'

import GridItem from '../GridItem'

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) =>{
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem('transactions', JSON.stringify(newArray));
  };

  return (
    <section className='Grid'>
      <table className='Grid__table'>
        <thead>
          <tr>
            <th className='table-60'>Description</th>
            <th className='table-20'>Value</th>
            <th className='table-10'>Type</th>
            <th className='table-10'>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {itens?.map((item,index)=>(
            <GridItem key={index} item={item} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Grid
