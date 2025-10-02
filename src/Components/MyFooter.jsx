import { Col, Container, Row } from "react-bootstrap";

const MyFooter = function (props) {
  return (
    <footer className="bg-dark bg-gradient py-3">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="text-white">{props.brandName}</h5>
            <p className="text-white">{props.description}</p>
          </Col>
          <Col md={4}>
            <h5 className="text-white">link utili:</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Servizi
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contatti
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="text-white">Contatti</h5>
            <p className="text-white">Email {props.email}</p>
            <p className="text-white">Tel {props.telephone}</p>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col className="text-center">
            <small className="text-white">
              © {new Date().getFullYear()} {props.brandName}. Tutti i diritti riservati.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
