import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create an API using Redux Toolkit Query
export const postsApi = createApi({
  reducerPath: "postsApi", // Define the reducer path for the API
  baseQuery: fetchBaseQuery({
    baseUrl: "https://strangers-things.herokuapp.com/api/2004-UNF-HY-WEB-PT", // Set the base URL for API requests
    prepareHeaders(headers) {
      headers.set("Content-type", "application/json"); // Set the Content-type header to application/json
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define the endpoints for the API
    getPosts: builder.query({
      query: () => "/posts", // Specify the query function for getting posts
    }),
  }),
});

// Destructure the necessary hooks from the API
export const { useGetPostsQuery } = postsApi;
