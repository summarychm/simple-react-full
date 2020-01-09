import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from '@/react-router-dom';
import { Provider } from '@/react-redux';
// import { ConnectedRouter } from '@/connected-react-router';
// import history from './history';

import store from './store';

import Home from './Component/Home';
import User from './Component/User';
import Profile from './Component/Profile';
import Login from './Component/Login';
import Protected from './Component/Protected';

export default function App(props) {
  return (
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
      <Router>
        <>
          <div className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-heading">
                <div className="navbar-brand">
                  <Link to="/">Logo</Link>
                </div>
              </div>
              <ul className="nav navbar-nav">
                <li>
                  <NavLink exact activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/user">
                    User
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/profile">
                    Profile
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/user" component={User} />
                  <Route path="/login" component={Login} />
                  {/* <Route path="/profile" component={Profile} /> */}
                  <Protected path="/profile" component={Profile} />
                </Switch>
              </div>
            </div>
          </div>
        </>
      </Router>
      {/* </ConnectedRouter> */}
    </Provider>
  );
}
