export default function changeFeed(state, action) {
  switch (action.type) {
    case "Mirror":
      return <Mirrors />;

    case "Collect":
      return <Collect />;

    case "Comment":
      return <Comment />;

    default:
      return state;
  }
}
