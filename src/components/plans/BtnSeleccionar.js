import React from 'react'
import { useNavigate } from "react-router-dom";

import './BtnSeleccionar.scss'

export default function BtnSeleccionar() {
  const navigate = useNavigate();

  const handleClick = (()=>{
    navigate('/resumen')
  })
  return (
        <button className='seleccionar__btn' onClick={handleClick}>
           Seleccionar Plan
        </button>
  )
}
 