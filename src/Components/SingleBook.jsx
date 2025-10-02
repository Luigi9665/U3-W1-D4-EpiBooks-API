import { Component } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

// destrutturazione della props con book con la function
class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    // rimuovo la destrutturazione con la classe
    const { book } = this.props;

    return (
      <Col sm={6} md={4} lg={3} xl={2}>
        <Card className={`bg-opacity-50  ${this.state.selected ? "selected" : "toPointer"} `}>
          <Card.Img
            style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
            variant="top"
            src={book.img}
            onClick={() => this.setState({ selected: !this.state.selected })}
          />
          <Card.Body>
            <Card.Text className="book-title">{book.title}</Card.Text>
            {this.state.selected && <CommentArea id={book.asin} />}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
