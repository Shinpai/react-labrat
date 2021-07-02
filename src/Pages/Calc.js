import React from 'react'
import NavHeader from '../components/NavHeader'
import Calculator from '../components/Calculator'
import './Pages.css'

function Calc() {
  return (
    <div className="Calc">
      <NavHeader/>
      <h4>Laskuri, pysyvä tieto</h4>
      <Calculator/>
    </div>
  )
}

export default Calc;