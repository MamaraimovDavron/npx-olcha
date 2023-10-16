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
    localStorage.setItem("sunValue",this.state.parent);
    console.log(localStorage.getItem("sunValue"),this.state.parent);
  };

  handleCallbackMoon = (moon) => {
    this.setState({ parent: moon });
    localStorage.setItem("moonValue",this.state.parent)
    console.log(localStorage.getItem("moonValue"),this.state.parent);

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
