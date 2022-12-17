import React from 'react'
import './style.scss'
import { ResumeItem } from '../ResumeItem'
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from 'react-icons/fa'


const Resume = ({income, expense, total}) => {
  return (
    <section className='Resume'>
      <ResumeItem title="Income" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem title="Expense" Icon={FaRegArrowAltCircleDown} value={expense} />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </section>
  )
}

export default Resume
