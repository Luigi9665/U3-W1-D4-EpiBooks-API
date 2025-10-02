import { Component } from "react";
import { Badge, Button, ListGroupItem } from "react-bootstrap";

import { Trash3 } from "react-bootstrap-icons";

class SingleComment extends Component {
  deleteComment = async (id) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMDhmOTZmMzAyMjAwMTUxMDgwYjkiLCJpYXQiOjE3NTk0MDUxMDcsImV4cCI6MTc2MDYxNDcwN30.OyoZlzxZ-uKyGVDgy0PoCEWdIKhNuNuW4zqA3T-JLyA",
        },
      });

      if (response.ok) {
        console.log("Commento eliminato");
      } else {
        throw new Error("Non siamo riusciti ad eliminare la risorsa indicata");
      }
    } catch (err) {
      this.setState({ hasError: true, errorMessage: err.message });
    }
  };

  render() {
    const { comment } = this.props;
    return (
      <ListGroupItem className="mb-3 shadow-sm rounded p-3 border-0 bg-info-subtle">
        <div className="d-flex align-items-center justify-content-between">
          <p className="fs-5 fw-semibold mb-1">{comment.comment}</p>
          <Button variant="danger" size="sm" onClick={() => this.deleteComment(comment._id)}>
            <Trash3 />
          </Button>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Badge bg="danger">{comment.rate} ⭐</Badge>
          <small className="text-muted">by {comment.author}</small>
        </div>
      </ListGroupItem>
    );
  }
}

export default SingleComment;
