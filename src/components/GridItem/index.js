import React from 'react'
import './style.scss'
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaTrash} from 'react-icons/fa'

const GridItem = ({item, onDelete}) => {
  return (
    <div className='Grid__item'>
      <tr>
        <td>{item.desc}</td>
        <td>{item.amount}</td>
        <td className='align-center'>
          {item.expense ? (
            <FaArrowAltCircleDown className='fill-red' />
          ) : (
            <FaArrowAltCircleUp className='fill-green' />
          )}
        </td>
        <td className='align-start'>
            <FaTrash onClick={()=> onDelete(item.id)} />
        </td>
      </tr>
    </div>
  )
}

export default GridItem
