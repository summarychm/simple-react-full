import React, { useRef } from 'react';

export default function UserAdd(props) {
  const inputRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const userName = inputRef.current.value;
    console.log('============ userName begin ====================');
    console.log(userName);
    console.log('============ userName end ======================');
    if (!userName) return console.log('用户名不能为空!');
    const userStr = localStorage.getItem('users');
    const users = userStr ? JSON.parse(userStr) : [];
    users.push({ id: Date.now(), username: userName });
    localStorage.setItem('users', users);
    props.history.push('/user/list');
    return false;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        用户名:
        <input name="username" type="text" className="form-control" ref={inputRef} />
      </label>
      <button type="submit" className="btn btn-primary">
        提交
      </button>
    </form>
  );
}
