import React from 'react'
import Stepper from '../common/Stepper'
import BtnVolver from '../common/BtnVolver'
import SummaryInfo from './SummaryInfo'
import './Summary.scss'

export const Summary = () => {
  return (
    <div className='summary'>
        <Stepper></Stepper>
        <BtnVolver path="/planes"></BtnVolver>
        <SummaryInfo></SummaryInfo>
    </div>
  )
}
