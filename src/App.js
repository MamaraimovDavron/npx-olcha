/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Middle from "./Components/Middle";

class App extends Component {
  state = {
    parent: "",
  };

  handleCallbackSun = (sun) => {
    this.setState({ parent: sun });
  };

  handleCallbackMoon = (moon) => {
    this.setState({ parent: moon });
  };

  render() {
    const { parent } = this.state;
    return (
      <div className="main" style={{ backgroundColor: `${parent}` }}>
        <Header sun={this.handleCallbackSun} moon={this.handleCallbackMoon} />

        {/* <h1>{parent}</h1> */}
        <Middle />
      </div>
    );
  }
}

export default App;
