import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counter reducer to the store
  },
});

export default store;
