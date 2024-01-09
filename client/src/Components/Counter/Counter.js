import React, { useEffect, useState } from "react";

const Counter = ({ plus, substract, quantity, isSelectedSize }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [isSelectedSize]);

  const increment = () => {
    if (!!isSelectedSize) {
      quantity?.map((ele) => {
        if (isSelectedSize == ele.size) {
          console.log(ele.quantity);
          if (count < ele.quantity) setCount(count + 1);
          else {
            alert("exceeded");
          }
        }
      });
    } else {
      alert("Please select your size.");
    }
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="flex gap-6">
      <button onClick={decrement}>
        <img src={substract} />
      </button>
      <h1>{count}</h1>
      <button onClick={increment}>
        <img src={plus} />
      </button>
    </div>
  );
};

export default Counter;
