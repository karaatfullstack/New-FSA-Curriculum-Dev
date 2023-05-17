import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
import "./index.css";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <div className="counter-container">
      {/* Counter App heading */}
      <h1>Counter App</h1>
      
      {/* Display the counter value */}
      <h2 className="counter-value">{count}</h2>
      
      <div className="counter-buttons">
        {/* Increment button */}
        <button className="counter-button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        
        {/* Reset button */}
        <button className="counter-button" onClick={() => dispatch(reset())}>
          Reset
        </button>
        
        {/* Decrement button */}
        <button className="counter-button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
