import React, { Component } from 'react'
import tokopedia from '../assets/tokopedia.png'

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-wrapper black">
        <img style={{width: '160px', height: '40px', marginTop: '13px', marginLeft: '20px', cursor: 'pointer'}} src={tokopedia} alt="tokopedia"/>
        <ul id="nav-mobile" className="right hide-on-med-and-down"> 
          <li className="text-white">TOKOFLIX</li>
        </ul>
      </nav>
      
    )
  }
}

export default NavBar;

