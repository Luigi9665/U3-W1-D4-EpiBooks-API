import { Badge, ListGroupItem } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  return (
    <ListGroupItem className="mb-3 shadow-sm rounded p-3 border-0 bg-info-subtle">
      <p className="fs-5 fw-semibold mb-1">{comment.comment}</p>
      <div className="d-flex justify-content-between align-items-center">
        <Badge bg="danger">{comment.rate} ⭐</Badge>
        <small className="text-muted">by {comment.author}</small>
      </div>
    </ListGroupItem>
  );
};

export default SingleComment;
