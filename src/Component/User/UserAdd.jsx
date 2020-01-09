import React, { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

export default function UserAdd(props) {
  const [isBlocking, setIsBLocking] = useState(false);
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      const userName = inputRef.current.value;
      setIsBLocking(false);
      if (!userName) return console.log('用户名不能为空!');
      const userStr = localStorage.getItem('users');
      const users = userStr ? JSON.parse(userStr) : [];
      users.push({ id: Date.now(), username: userName });
      localStorage.setItem('users', JSON.stringify(users));
      props.history.push('/user/list');
      return false;
    }, 0);
  }
  function handleChange(event) {
    setIsBLocking(event.target.value.length > 0);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Prompt
        when={isBlocking}
        message={(location) => {
          // debugger;
          return `你要离开${location.pathname}么?`;
        }}
      />
      <label>
        用户名:
        <input
          onChange={handleChange}
          name="username"
          type="text"
          className="form-control"
          ref={inputRef}
        />
      </label>
      <button type="submit" className="btn btn-primary">
        提交
      </button>
    </form>
  );
}
