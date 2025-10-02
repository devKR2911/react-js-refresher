import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";

function NewPost() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const onNewPostAdded = (event) => {
    event.preventDefault();
    if (enteredBody && enteredAuthor) {
      handleNewPostCreation();
    }
  };

  const handleNewPostCreation = (body, author) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify({ body, author }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // setPostList((existingPosts) => [{ body, author }, ...existingPosts]);
  };
  return (
    <Modal>
      <form className={classes.form} onSubmit={onNewPostAdded}>
        <p>
          <label htmlFor="boby">Text</label>
          <textarea
            id="body"
            value={enteredBody}
            required
            rows={3}
            onChange={(e) => setEnteredBody(e.target.value)}
          ></textarea>
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            required
            value={enteredAuthor}
            onChange={(e) => setEnteredAuthor(e.target.value)}
          />
        </p>
        <p className={classes.actions}>
          <Link type="button" to="..">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
