import React from 'react';

const Counter = ({
  number,
  onIncrement,
  onDecrement
}) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrement}> Increment </button>
      <button onClick={onDecrement}> Decrement </button>
    </div>
  );
};

Counter.defaultProps = {
  number: 0
}

export default Counter;
