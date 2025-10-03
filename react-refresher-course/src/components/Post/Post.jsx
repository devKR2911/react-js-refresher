import { Link } from "react-router-dom";
import classes from "./Post.module.css";

function Post({ id, author, content }) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>Hey {author}!!</p>
        <p className={classes.text}>{content}</p>
      </Link>
    </li>
  );
}

export default Post;
