import React from 'react'
import NavHeader from '../components/NavHeader'
import FlavorForm from '../components/FlavorForm'
import NameForm from '../components/NameForm'
import './Pages.css'

function Form() {
  return (
    <div className="Title">
      <NavHeader/>
      <FlavorForm/>
      <NameForm/>
    </div>
  )
}

export default Form;