import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import '../styles/core.scss'

class CoreLayout extends React.Component{
  render(){
    return(
          <div className='page-container'>
            <div className='view-container'>
              <h1>Core!!!</h1>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/counter'>Counter</Link></li>
                </ul>

              {this.props.children}
            </div>
          </div>
    )
  }
}

export default CoreLayout;
