import React from 'react'
import banner from "../../assets/banner.png";
import './BannerSection.scss'

export const BannerSection = () => {
  return (
    <div className='banner'>
        <img className='banner__img' src={banner} alt='banner'/>
    </div>
  )
}
