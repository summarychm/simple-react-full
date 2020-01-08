import React, { useState } from 'react';

export default function UserDetail(props) {
  const { location, match } = props;
  const [user] = useState(() => {
    let userState = location.state;
    const uId = match.params.id;
    if (!userState && uId) {
      const users = JSON.parse(localStorage.getItem('users'));
      userState = users.find((u) => u.id === parseInt(uId, 10));
    }
    return userState || {};
  });
  return <>{`编号:${user.id}:  用户名:${user.username}`}</>;
}
