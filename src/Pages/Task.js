import React from 'react'
import NavHeader from '../components/NavHeader'
import FilterableProductTable from '../components/FilterableProductTable'
import './Pages.css'

const jsonData = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

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