import Post from "../Post/Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const postList = useLoaderData();

  return (
    <>
      {postList.length > 0 && (
        <ul className={classes.postList}>
          {postList.map((post, index) => (
            <li key={`post-${index}`}>
              <Post author={post.author} content={post.body} />
            </li>
          ))}
        </ul>
      )}
      {postList.length === 0 && <h1>Oops!! no post created</h1>}
    </>
  );
}

export default PostList;
