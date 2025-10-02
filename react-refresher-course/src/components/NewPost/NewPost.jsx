import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost() {
  const [text, setText] = useState("");
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="boby">Text</label>
        <textarea
          id="body"
          value={text}
          required
          rows={3}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <p>{text}</p>
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
