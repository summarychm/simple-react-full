import React from 'react';


export default function Counter(props) {
  const { number, add, minus } = props;
  return (
    <div>
      <p>{number}</p>
      <button type="button" onClick={add}>Add</button>
      <button type="button" onClick={minus}>Minus</button>
    </div>
  );
}
