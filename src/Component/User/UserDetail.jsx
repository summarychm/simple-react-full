import React, { useMemo, useState } from 'react';

export default function UserDetail(props) {
  const { location, match } = props;
  const { user } = useState(
    useMemo(() => {
      let userState = location.state;
      const uId = match.param.id;
      if (!userState && uId) {
        const users = localStorage.getItem('users') || [];
        userState = users.find((u) => u.id === uId);
      }
      return userState;
    }, [location.state, match.param]),
  );
  return <>{`${user.id}:${user.username}`}</>;
}
