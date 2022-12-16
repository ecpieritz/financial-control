import React from 'react'
import './style.scss'

export const ResumeItem = ({title, Icon, value}) => {
  return (
    <div className='ResumeItem'>
      <div className='ResumeItem__header'>
        <p className='ResumeItem__header__title'>{title}</p>
        <Icon />
      </div>

      <div className='ResumeItem__total'>{value}</div>
    </div>
  )
}
