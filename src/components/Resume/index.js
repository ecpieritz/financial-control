import React from 'react'
import './style.scss'
import { ResumeItem } from '../ResumeItem'

const Resume = () => {
  return (
    <section className='Resume'>
      <ResumeItem />
      <ResumeItem />
      <ResumeItem />
    </section>
  )
}

export default Resume
