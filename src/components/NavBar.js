import React, { Component } from 'react'
import tokopedia from '../assets/tokopedia.png'

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-wrapper black">
        <img style={{width: '160px', height: '40px', marginTop: '13px', marginLeft: '20px'}} src={tokopedia} alt="tokopedia"/>
        <div className="right"> 
          <span className="text-green">TOKO</span><span className="text-white">flix</span>
        </div>
      </nav>
      
    )
  }
}

export default NavBar;

