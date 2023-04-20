export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const increment = (amount) => {
    return {
      type: "INCREMENT",
      payload: amount
    };
  };
  
  export const decrement = (amount) => {
    return {
      type: "DECREMENT",
      payload: amount
    };
  };
  
  export const reset = () => {
    return {
      type: "RESET"
    };
  };
  