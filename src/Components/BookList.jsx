import { Component } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
    const { books } = this.props;

    return (
      <Container fluid className="my-5">
        <Container className="d-flex justify-content-center mb-4">
          <Form className="d-flex w-50" onSubmit={(e) => e.preventDefault}>
            <Form.Control
              type="search"
              placeholder="Cerca il titolo di un libro"
              className="me-2"
              aria-label="Search"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
            />
            <Button className="text-white bg-gradient border-3 fs-4">Search</Button>
          </Form>
        </Container>
        <Row className="g-4">
          {books
            .filter(
              (book) => book.title.toLowerCase().includes(this.state.search.toLowerCase()) || book.asin.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((book) => (
              <SingleBook key={book.asin} book={book} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
