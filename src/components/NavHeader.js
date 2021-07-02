import React from 'react';
import { NavLink } from 'react-router-dom'

const pages = {
  '/': 'Title',
  '/form': 'Form',
  '/calc': 'Calc',
  '/task': 'Task',
  '/about': 'About'
}

class NavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.pages = pages;
  }

  render() {
    return(
      <header>
        <div>
          {
            Object.keys(this.pages).map((key, value) => {
              return <NavLink 
                key={key} 
                to={key}
                className='nav-link'>
                  {this.pages[key]}
                </NavLink>
            })
          }
        </div>
      </header>
    );
  }
}

export default NavHeader;