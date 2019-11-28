import React from 'react';

export default function Counter(props) {
  const { number, add, minus, thunkAdd } = props;
  return (
    <div>
      <p>{number}</p>
      <button type="button" onClick={add}>
        Add
      </button>
      <button type="button" onClick={minus}>
        Minus
      </button>
      <button type="button" onClick={thunkAdd}>
        thunk-Add
      </button>
    </div>
  );
}
