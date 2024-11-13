import React from 'react'
import Stepper from '../common/Stepper'
import BtnVolver from '../common/BtnVolver'

export const Summary = () => {
  return (
    <div className='summary'>
        <Stepper></Stepper>
        <BtnVolver path="/planes"></BtnVolver>
    </div>
  )
}
