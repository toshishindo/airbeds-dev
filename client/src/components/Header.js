import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href={'/auth/google'}>Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="2">
            <a href={'/auth/logout'}>Logout</a>
          </li>
        ]; 
    } 
  }

  render() {
    return (
      <nav className="nav">
        <div className="title">
          <Link to={this.props.auth ? '/dashboard' : '/'}>
            airbeds
          </Link>
        </div>
          <ul className="navmenu" tyle={{ marginLeft: "10px" }}>
            {this.renderContent()}
          </ul>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
