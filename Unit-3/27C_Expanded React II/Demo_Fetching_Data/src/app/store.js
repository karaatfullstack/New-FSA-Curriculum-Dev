import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../api/postsApi";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer, // Set the reducer for the posts API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware), // Add the middleware for the posts API
});
