import React, { useState } from 'react';
import { Link } from '@/react-router-dom';

export default function UserList(props) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <Link to={{ pathname: `/user/detail/${user.id}`, state: user }}>{user.username}</Link>
        </li>
      ))}
    </ul>
  );
}
