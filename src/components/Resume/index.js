import React from 'react'
import './style.scss'
import { ResumeItem } from '../ResumeItem'
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from 'react-icons/fa'


const Resume = () => {
  return (
    <section className='Resume'>
      <ResumeItem title="Entrance" Icon={FaRegArrowAltCircleUp} value="1000" />
      <ResumeItem title="Exits" Icon={FaRegArrowAltCircleDown} value="1000" />
      <ResumeItem title="Total" Icon={FaDollarSign} value="1000" />
    </section>
  )
}

export default Resume
