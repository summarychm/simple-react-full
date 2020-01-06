import React from 'react';
export default function(props) {
  function handleClick() {
    localStorage.removeItem('login');
    props.history.push('/');
  }
  return (
    <div>
      <p>Profile</p>
      <button type="button" className="btn btn-danger" onClick={handleClick}>
        登出
      </button>
    </div>
  );
}
