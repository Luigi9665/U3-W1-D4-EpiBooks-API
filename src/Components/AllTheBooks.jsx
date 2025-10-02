import Card from "react-bootstrap/Card";

// import { useState } from "react";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import ToggleButton from "react-bootstrap/ToggleButton";

import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  state = {
    selectedGeners: fantasy,
  };

  render() {
    return (
      <>
        <Container className="d-flex justify-content-center gap-3">
          <Button
            variant="outline-light"
            className="text-black bg-gradient border-none fs-3 px-3 py-2"
            onClick={() => this.setState({ selectedGeners: fantasy })}
          >
            Fantasy
          </Button>
          <Button
            variant="outline-light"
            className="text-black bg-gradient border-none fs-3 px-3 py-2"
            onClick={() => this.setState({ selectedGeners: history })}
          >
            History
          </Button>
          <Button
            variant="outline-light"
            className="text-black bg-gradient border-none fs-3 px-3 py-2"
            onClick={() => this.setState({ selectedGeners: horror })}
          >
            Horror
          </Button>
          <Button
            variant="outline-light"
            className="text-black bg-gradient border-none fs-3 px-3 py-2"
            onClick={() => this.setState({ selectedGeners: romance })}
          >
            Romance
          </Button>
          <Button
            variant="outline-light"
            className="text-black bg-gradient border-none fs-3 px-3 py-2"
            onClick={() => this.setState({ selectedGeners: scifi })}
          >
            Scifi
          </Button>
        </Container>

        {/* NON POSSO UTILIZZARLO IN UNA CLASSE */}
        {/* <Container>
          <ButtonGroup className="mb-2">
            <ToggleButton
              id="toggle-check"
              type="checkbox"
              variant="secondary"
              checked={checked}
              value="1"
              onChange={(e) => setChecked(e.currentTarget.checked)}
              onClick={() => this.setState({ selectedGeners: "history" })}
            >
              History
            </ToggleButton>
          </ButtonGroup>
          <ButtonGroup className="mb-2">
            <ToggleButton
              id="toggle-check"
              type="checkbox"
              variant="secondary"
              checked={checked}
              value="1"
              onChange={(e) => setChecked(e.currentTarget.checked)}
              onClick={() => this.setState({ selectedGeners: "horror" })}
            >
              Horror
            </ToggleButton>
          </ButtonGroup>
        </Container> */}

        <Container fluid className="my-5">
          <Row className="g-4">
            {this.state.selectedGeners.map((book) => (
              <Col sm={6} md={4} lg={3} xl={2} key={book.asin}>
                <Card className="h-100">
                  <Card.Img style={{ height: "200px", objectFit: "cover" }} variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Text className="book-title">{book.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
