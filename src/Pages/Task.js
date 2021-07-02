import React from 'react'
import NavHeader from '../components/NavHeader'
import FilterableProductTable from '../components/FilterableProductTable'
import './Pages.css'

function Task() {
  return (
    <div className="About">      
      <NavHeader/>
      <h4>API mock harjoitus</h4>
      <FilterableProductTable/>
    </div>
  )
}

export default Task;