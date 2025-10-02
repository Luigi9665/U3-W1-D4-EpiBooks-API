import { Badge, ListGroup, ListGroupItem } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ comments }) => {
  return (
    <ListGroup>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
