import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import Title from './Pages/Title'
import About from './Pages/About'
import Form from './Pages/Form'
import Calc from './Pages/Calc'


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Title} />
        <Route path="/form" component={Form} />
        <Route path="/calc" component={Calc} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
