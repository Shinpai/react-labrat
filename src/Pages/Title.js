import React from 'react'
import NavHeader from '../components/NavHeader'
import LoginControl from '../components/LoginControl'
import Clock from '../components/Clock'
import './Pages.css'

function Title() {
  return (
    <div className="Title">
      <NavHeader/>
      <h4>Kello</h4>
      <Clock/>
      <h4>Kirjautumistoggle</h4>
      <LoginControl/>      
    </div>
  )
}

export default Title;