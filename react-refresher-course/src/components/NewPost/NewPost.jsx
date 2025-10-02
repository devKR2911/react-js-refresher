import classes from "./NewPost.module.css";

function NewPost({body, onBodyChange, author, onAuthorChange, onCancel}) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="boby">Text</label>
        <textarea
          id="body"
          value={body}
          required
          rows={3}
          onChange={(e) => onBodyChange(e.target.value)}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          requiredenteredBody 
          value={author}
          onChange={(e) => onAuthorChange(e.target.value)}
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
