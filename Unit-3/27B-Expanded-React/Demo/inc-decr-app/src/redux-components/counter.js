import React, { useState } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actions";
import '../index.css';

const Counter = (props) => {
  const [incrementAmount, setIncrementAmount] = useState(1);
  const [decrementAmount, setDecrementAmount] = useState(1);

  const handleIncrement = () => {
    props.increment(incrementAmount);
  }

  const handleDecrement = () => {
    props.decrement(decrementAmount);
  }

  const handleReset = () => {
    props.reset();
  }

  const handleIncrementAmountChange = (event) => {
    setIncrementAmount(parseInt(event.target.value));
  }

  const handleDecrementAmountChange = (event) => {
    setDecrementAmount(parseInt(event.target.value));
  }

  return (
    <div className="head">
        <h1>Welcome to the counter app! This is a simple web application built with React and Redux that allows you to increment and decrement a counter.</h1>
        <h3>The app has several features that make it more useful and user-friendly. Here's a rundown of what you can do with it:

</h3>
<ol>
    <li>
    Increment and decrement by custom amounts
    </li>
    <li>
    Reset the counter
    </li>
</ol>
    <div className="counter-box">
      <h1>Count: {props.count}</h1>
      <div className="increment-group">
        <label htmlFor="increment-amount">Increment amount:</label>
        <input id="increment-amount" type="number" min="1" value={incrementAmount} onChange={handleIncrementAmountChange} />
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="decrement-group">
        <label htmlFor="decrement-amount">Decrement amount:</label>
        <input id="decrement-amount" type="number" min="1" value={decrementAmount} onChange={handleDecrementAmountChange} />
        <button onClick={handleDecrement} disabled={props.count === 0}>-</button>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (amount) => dispatch(increment(amount)),
    decrement: (amount) => dispatch(decrement(amount)),
    reset: () => dispatch(reset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
