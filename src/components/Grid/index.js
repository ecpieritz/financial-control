import React from 'react'
import './style.scss'

import GridItem from '../GridItem'

const Grid = ({ itens, setItens }) => {
  return (
    <section className='Grid'>
      <table className='Grid__table'>
        <thead>
          <tr>
            <th className='table-40'>Description</th>
            <th className='table-40'>Value</th>
            <th className='table-10'>Type</th>
            <th className='table-10'></th>
          </tr>
        </thead>
        <tbody>
          {itens?.map((item,index)=>(
            <GridItem key={index} item={item} />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Grid
