import Post from "../Post/Post";
import classes from "./PostList.module.css";
import { useState, useEffect } from "react";

function PostList() {
  const [postList, setPostList] = useState([]);
  const [isPostListLoading, setIsPostListLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsPostListLoading(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPostList(data.posts);
      setIsPostListLoading(false);
    }
    fetchPosts();
  }, []);

  const loaderComponent = isPostListLoading && <h1>Loading!!!</h1>;

  return (
    <>
      {loaderComponent}
      {postList.length > 0 && (
        <ul className={classes.postList}>
          {postList.map((post, index) => (
            <li key={`post-${index}`}>
              <Post author={post.author} content={post.body} />
            </li>
          ))}
        </ul>
      )}
      {!isPostListLoading && postList.length === 0 && (
        <h1>Oops!! no post created</h1>
      )}
    </>
  );
}

export default PostList;
