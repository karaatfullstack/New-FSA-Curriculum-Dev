import React from "react";
import { useGetPostsQuery } from "../api/postsApi";
import styles from "./Posts.module.css";

// React component for displaying posts
function Posts() {
  const { data = {}, error, isLoading } = useGetPostsQuery();

  // Display a loading message if data is loading
  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  // Display an error message if there is an error
  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  // Display the posts if data is available
  return (
    <div className={styles.posts}>
      {data.data.posts.map((post) => (
        <div key={post._id} className={styles.post}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
