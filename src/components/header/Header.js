import React from 'react'
import logo_R from '../../assets/logo_R.svg'
import phone from '../../assets/phone.svg'
import './Header.scss'

export const Header = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo_R} alt='logo'/>
      <div className='header__content'>
        <p className='content__text'>¡Comprar por este medio!</p>
        <div className='content__phone'>
          <img src={phone} alt='icon-phone'/>
          <p>(01) 411 6001</p>
        </div>
      </div>
    </header>
  )
}
