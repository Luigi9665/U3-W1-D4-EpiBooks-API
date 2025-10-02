import { Component } from "react";
import { Badge, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  getFetch = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMDhmOTZmMzAyMjAwMTUxMDgwYjkiLCJpYXQiOjE3NTk0MDUxMDcsImV4cCI6MTc2MDYxNDcwN30.OyoZlzxZ-uKyGVDgy0PoCEWdIKhNuNuW4zqA3T-JLyA",
        },
      });

      if (response.ok) {
        const comments = await response.json();
        this.setState({ comments });
      } else {
        throw new Error("Non abbiamo trovato alcun commento");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getFetch();
  }

  render() {
    return (
      <div className="rounded shadow-sm mt-3">
        <h2 className="display-6 mb-4 text-white fw-semibold m-0">{this.state.comments.length > 0 ? "Comments:" : "Non ci sono commenti da visualizzare."}</h2>
        <CommentList comments={this.state.comments} />
        <AddComment id={this.props.id} />
      </div>
    );
  }
}

export default CommentArea;
