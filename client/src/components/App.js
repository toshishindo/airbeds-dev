import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import {fetchUser } from '../modules/auth';
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import Header from "./Header";
import requireAuth from './require_auth';
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/dashboard" component={requireAuth(Dashboard)} />
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}



export default connect(null, { fetchUser })(App);
