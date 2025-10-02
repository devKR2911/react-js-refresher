import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.postList}>
        <li>
          <Post author="Nitheesh" content="Have a nice day" />
        </li>
        <li>
          <Post author="Nitheesh" content="Have a nice day" />
        </li>
      </ul>
    </>
  );
}

export default PostList;
