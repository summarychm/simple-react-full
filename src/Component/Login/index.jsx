import React, { useState } from 'react';

export default function Login(props) {
  const { history, location } = props;
  function handleLogin() {
    localStorage.setItem('login', true);
    history.push({
      pathname: location.state ? location.state.from : '/',
    });
  }
  return (
    <button type="button" className="btn btn-primary" onClick={handleLogin}>
      登录
    </button>
  );
}
