const names = ["Nitheesh", "Devi"];

function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <p>Hey { chosenName }!!</p>
      <p>You are awesome</p>
    </div>
  );
}

export default Post;
