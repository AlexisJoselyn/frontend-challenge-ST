import React from 'react'
import iconButton from '../../assets/icon_button.png'
import './BtnVolver.scss'

export default function BtnVolver() {
  return (
    <div className='volver'>
        <a className='volver__btn' href='/'>
        <img src={iconButton} alt=''/>
        <span>Volver</span>
    </a>
    </div>
  )
}
