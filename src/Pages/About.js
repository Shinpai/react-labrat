import React from 'react'
import NavHeader from '../components/NavHeader'
import Toggle from '../components/Toggle'
import Mailbox from '../components/Mailbox'
import './Pages.css'

function About() {
  return (
    <div className="About">      
      <NavHeader/>
      <div>
        <h4>Toggle vain</h4>
        <Toggle/>        
      </div>
      <div>
        <h4>Postiloosteri</h4>
        <Mailbox/>
      </div>
    </div>
  )
}

export default About;