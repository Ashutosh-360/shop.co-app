import React, { useState } from 'react';


const Counter = ({plus,substract}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count > 0)
    setCount(count - 1);
  };

  return (
    <div className='flex gap-6'>
      <button onClick={decrement}><img src={substract}/></button>
      <h1>{count}</h1>
      <button onClick={increment}><img src={plus}/></button>
    </div>
  );
};

export default Counter;
