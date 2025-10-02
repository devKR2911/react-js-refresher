import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({onCancel, onNewPostCreated}) {
  
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const onNewPostAdded = (event) => {
    event.preventDefault()
    if(enteredBody && enteredAuthor) {
      onNewPostCreated(enteredBody, enteredAuthor)
    }
  }
  return (
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
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
