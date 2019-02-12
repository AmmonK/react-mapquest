import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MapQuestComponent from "./mapquest/mapquestComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapQuestComponent
          height={500}
          width={1000}
          center={[33.557774, -111.88919]}
          baseLayer={"map"}
          zoom={12}
          apiKey={"YOUR_MAPQUEST_API_KEY"}
        />
      </div>
    );
  }
}

export default App;
