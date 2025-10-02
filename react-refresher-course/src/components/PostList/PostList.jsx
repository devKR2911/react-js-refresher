import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";
import Post from "../Post/Post";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostList({ isModalVisible, setisModalVisible }) {
  const [postList, setPostList] = useState([]);

  const handleNewPostCreation = (body, author) => {
    setPostList((existingPosts) => [{ body, author }, ...existingPosts]);
    setisModalVisible(false);
  };

  let modalContent = isModalVisible && (
    <Modal closeModal={() => setisModalVisible(false)}>
      <NewPost
        onCancel={() => setisModalVisible(false)}
        onNewPostCreated={handleNewPostCreation}
      />
    </Modal>
  );
  return (
    <>
      {modalContent}
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
