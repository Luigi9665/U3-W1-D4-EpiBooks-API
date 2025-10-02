import { Alert } from "react-bootstrap";

const Welcome = function (props) {
  return (
    <Alert variant="light" className="text-center my-3" dismissible>
      <h2 className="display-4">Welcome</h2>
      <p className="fs-4">{props.sottoTitolo}</p>
      <p className="fs-4">
        <span className="sizeFinger me-3">{props.emote}</span>
        {props.istruzioni}
        <span className="sizeFinger ms-3">{props.emote}</span>
      </p>
    </Alert>
  );
};

export default Welcome;
