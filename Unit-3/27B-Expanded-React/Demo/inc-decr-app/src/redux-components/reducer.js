import { increment, decrement, reset} from "./actions";

const initialState = {
    count: 0
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + action.payload
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - action.payload
        };
      case "RESET":
        return {
          ...state,
          count: 0
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  