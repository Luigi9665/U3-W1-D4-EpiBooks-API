import "./App.css";
// import AllTheBooks from "./Components/AllTheBooks";
import MyFooter from "./Components/MyFooter";
import MyNav from "./Components/MyNav";
import Welcome from "./Components/Welcome";

import fantasy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";
import { Component } from "react";
import BookList from "./Components/BookList";
import { Button, Container } from "react-bootstrap";

class App extends Component {
  state = {
    selectedGeners: fantasy,
    selectedClass: "fantasy",
  };

  render() {
    return (
      <>
        <MyNav brandName="React-MyBooks" />
        <Welcome sottoTitolo="Qui non troverai nessuna storia BANALE!" emote="👇" istruzioni="Seleziona il genere che vuoi visualizzare:" />

        <Container className="d-flex justify-content-center gap-3 mt-3">
          <Button
            variant={this.state.selectedClass === "fantasy" ? "success" : "outline-dark"}
            className="text-white bg-gradient border-3 fs-3 px-3 py-2"
            onClick={() => this.setState({ selectedGeners: fantasy, selectedClass: "fantasy" })}
          >
            Fantasy
          </Button>
          <Button
            variant={this.state.selectedClass === "history" ? "success" : "outline-dark"}
            className="text-white bg-gradient border-3 fs-3 px-3 py-2"
            onClick={() => this.setState({ selectedGeners: history, selectedClass: "history" })}
          >
            History
          </Button>
          <Button
            variant={this.state.selectedClass === "horror" ? "success" : "outline-dark"}
            className="text-white bg-gradient border-3 fs-3 px-3 py-2"
            onClick={() => this.setState({ selectedGeners: horror, selectedClass: "horror" })}
          >
            Horror
          </Button>
          <Button
            variant={this.state.selectedClass === "romance" ? "success" : "outline-dark"}
            className="text-white bg-gradient border-3 fs-3 px-3 py-2"
            onClick={() => this.setState({ selectedGeners: romance, selectedClass: "romance" })}
          >
            Romance
          </Button>
          <Button
            variant={this.state.selectedClass === "scifi" ? "success" : "outline-dark"}
            className="text-white bg-gradient border-3 fs-3 px-3 py-2"
            onClick={() => this.setState({ selectedGeners: scifi, selectedClass: "scifi" })}
          >
            Scifi
          </Button>
        </Container>

        <BookList books={this.state.selectedGeners} />

        <MyFooter
          brandName="React-MyBooks"
          description="Piccolo editoriale, nessuna storia superficiale"
          email="inventata@gmail.com"
          telephone="+333 54 91 648"
        />
      </>
    );
  }
}

export default App;
