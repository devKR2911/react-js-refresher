import { useState } from "react";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";
import Post from "../Post/Post";
import classes from "./PostList.module.css";

function PostList({ isModalVisible, setisModalVisible }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  let modalContent = isModalVisible && (
    <Modal closeModal={() => setisModalVisible(false)}>
      <NewPost
        body={enteredBody}
        onBodyChange={setEnteredBody}
        author={enteredAuthor}
        onAuthorChange={setEnteredAuthor}
      />
    </Modal>
  );
  return (
    <>
      {modalContent}

      <p>enteredBody = {enteredBody}</p>
      <p>enteredAuthor = {enteredAuthor}</p>
      <ul className={classes.postList}>
        <li>
          <Post author={enteredAuthor} content={enteredBody} />
        </li>
        <li>
          <Post author="Nitheesh" content="Have a nice day" />
        </li>
      </ul>
    </>
  );
}

export default PostList;
