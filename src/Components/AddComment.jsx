import { Component } from "react";
import { Alert, Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    commentToSend: {
      comment: "",
      rate: "",
      elementId: this.props.id,
    },
    hasComment: false,
  };

  handleChange = (propertyName, propertyValue) => {
    this.setState({ commentToSend: { ...this.state.commentToSend, [propertyName]: propertyValue } });
  };

  handleFormReset = () => {
    this.setState({
      commentToSend: {
        comment: "",
        rate: "",
        elementId: this.props.id,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.commentToSend),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMDhmOTZmMzAyMjAwMTUxMDgwYjkiLCJpYXQiOjE3NTk0MDUxMDcsImV4cCI6MTc2MDYxNDcwN30.OyoZlzxZ-uKyGVDgy0PoCEWdIKhNuNuW4zqA3T-JLyA",
        "Content-Type": "application/json", //
      },
    })
      .then((resp) => {
        if (resp.ok) {
          this.handleFormReset();
          return resp.json();
        } else {
          throw new Error("Invio fallito");
        }
      })
      .then((savedComment) => {
        console.log("saved comment", savedComment);
        this.setState({ hasComment: true });
        setTimeout(() => this.setState({ hasComment: false }), 3000);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("SUBMITTED");
  };

  render() {
    return (
      <div>
        {this.state.hasComment && <Alert variant="success">Commento inviato!</Alert>}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="comment">
            <Form.Label className="text-white">Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il tuo Commento"
              value={this.state.commentToSend.comment}
              onChange={(e) => this.handleChange("comment", e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="rate">
            <Form.Label className="text-white">Rate</Form.Label>
            <Form.Select aria-label="Rate" value={this.state.commentToSend.rate} onChange={(e) => this.handleChange("rate", e.target.value)} required>
              <option value="1">Uno</option>
              <option value="2">Due</option>
              <option value="3">Tre</option>
              <option value="4">Quattro</option>
              <option value="5">Cinque</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" variant="success">
            Add Comment
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
