import React from 'react';
// import { Link } from '../../Core/react-router-dom';

export default function UserList(props) {
  const userStr = localStorage.getItem('users');
  const users = userStr ? JSON.parse(userStr) : [];
  return (
    <div>
      <h2>UserList</h2>
      <ul className="list-group">
        {users.map((user) => {
          return null;
        })}
      </ul>
    </div>
  );
}
/**
 {
            return (
            <li key={user.id} className="list-group-item">
              <Link to={{ pathname: `user/datail/${user.id}`, state: user }}>{user.username}</Link>
            </li>
          );
        }
 */
