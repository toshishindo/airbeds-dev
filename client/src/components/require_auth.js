import React, { Component } from "react";
import { connect } from "react-redux";
import Landing from './Landing';

export default function(ComposedComponent) {
  class Authentication extends Component {

    render() {
      return this.props.auth ? (
        <ComposedComponent {...this.props} />
      ) : (
        <Landing />
      );
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(mapStateToProps)(Authentication);
}
