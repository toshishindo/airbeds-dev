import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <nav className="nav">
        <div className="title"><Link to='/'>airbeds</Link></div>
        <div><Link to='/dashboard' style={{marginLeft: '10px'}}>Dashboard</Link></div>
      </nav>    
    );
  }
}

export default Header;
