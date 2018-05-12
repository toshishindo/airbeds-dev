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
            <a href={"/auth/google"} style={{color: 'white'}}>Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="3" style={{ margin: "0 10px" }}>
            <Link to={"/dashboard"} style={{ textDecoration: "none", color: 'white' }}>
              Dashboard
            </Link>
          </li>,
          <li key="2">
            <a href={"/auth/logout"} style={{ textDecoration: "none", color: 'white' }}>
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="nav">
        <div className="title">
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Airbeds
          </Link>
        </div>
        <ul
          className="navmenu"
          style={{
            marginLeft: "100px",
            textDecoration: "none",
          }}
        >
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
