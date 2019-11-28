import React from 'react';
import { Route } from './Core/react-router-dom';

import Counter from './Component/Counter';
import Home from './Component/Home';
import User from './Component/User';
import Profile from './Component/Profile';

export default function(props) {
  return (
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/user" component={User} />
      <Route path="/profile" component={Profile} />
      <Route path="/counter" component={Counter} />
    </div>
  );
}
