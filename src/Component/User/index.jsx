import React from 'react';
import { Link, Route, Redirect } from '@/react-router-dom';
import UserAdd from './UserAdd';
import UserDetail from './UserDetail';
import UserList from './UserList';

export default function(props) {
  return (
    <div className="row">
      <div className="col-md-2">
        <ul className="nav nav-stack">
          <li>
            <Link to="/user/list">用户列表</Link>
          </li>
          <li>
            <Link to="/user/add">添加用户</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-10">
        <Route path="/user/add" component={UserAdd} />
        <Route path="/user/list" component={UserList} />
        <Route path="/user/detail/:id" component={UserDetail} />
        <Redirect to="/user/list" from="/user" />
      </div>
    </div>
  );
}
