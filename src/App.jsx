import React from 'react';

import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Provider } from './Core/react-redux';

import store from './store';
// import PageRouters from './routers';

import Counter from './Component/Counter';
import Home from './Component/Home';
import User from './Component/User';
import Profile from './Component/Profile';

export default function App(props) {
  // return <div>11</div>;
  return (
    <Provider store={store}>
      <Router>
        <>
          <div className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-heading">
                <div className="navbar-brand">Logo</div>
              </div>
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/user">User</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/counter">Counter</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Route path="/" exact component={Home} />
                <Route path="/user" component={User} />
                <Route path="/profile" component={Profile} />
                <Route path="/counter" component={Counter} />
              </div>
            </div>
          </div>
        </>
      </Router>
    </Provider>
  );
}
