import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="boby">Text</label>
        <textarea
          id="body"
          value={props.body}
          required
          rows={3}
          onChange={(e) => props.onBodyChange(e.target.value)}
        ></textarea>
        <p>{props.body}</p>
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          required
          value={props.author}
          onChange={(e) => props.onAuthorChange(e.target.value)}
        />
      </p>
    </form>
  );
}

export default NewPost;
