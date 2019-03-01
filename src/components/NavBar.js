import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// import component
import tokopedia from '../assets/tokopedia.png'

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-wrapper black">
        <Link to='/'>
          <img style={{width: '160px', height: '40px', marginTop: '13px', marginLeft: '20px', cursor: 'pointer'}} src={tokopedia} alt="tokopedia"/>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down"> 
          <Link to='/'><li className="text-white">TOKOFLIX</li></Link>
        </ul>
      </nav>
      
    )
  }
}

export default NavBar;

